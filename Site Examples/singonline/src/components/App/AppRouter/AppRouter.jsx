import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Home } from '../../Pages/Home/Home'
import { About } from '../../Pages/About/About'
import { Contact } from '../../Pages/Contact/Contact'
import { Login } from '../../Pages/Login/Login'
import { ProductDetails, ProductList, Products } from '../../Pages/Products/Products'

const Redirect = ({to}) => {
	const navigate = useNavigate()
	useEffect(() => {
		navigate(to)
	});
	return null
}

export const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/products" element={<Products />}>
				<Route index element={<Redirect to="/products/1" />} />
				<Route path=":category_id">
					<Route index element={<ProductList />} />
					<Route path=":product_id" element={<ProductDetails />} />
				</Route>
			</Route>
			<Route path="/login" element={<Login />} />
		</Routes>
	)
}

