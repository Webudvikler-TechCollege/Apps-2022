import { createContext, useState, useEffect, useContext } from "react";

// Typescript interface
interface iContext {
    loginData: {
        user_id: number;
        username: string;
        access_token: string;
        token_type: string;
        expires_in: number;
    },
    setLoginData: React.Dispatch<string>;
}

// Komponent med context hook
const AuthContext = createContext<iContext>({} as any);

// Komponent til at håndtere logindata
const AuthProvider:React.FC = ({children}) => {
	const [loginData, setLoginData] = useState<any>('')	

	useEffect(() => {
		const sess_token:any = sessionStorage.getItem('token');
		if(sess_token) {
			setLoginData(JSON.parse(sess_token))
		}
	}, [children])

	return (
		<AuthContext.Provider value={{loginData, setLoginData}}>
			{children}
		</AuthContext.Provider>
	)
}

// Opretter hook component til login
const useAuth = () => useContext(AuthContext);

// Export af komponenter
export { AuthContext, AuthProvider, useAuth }