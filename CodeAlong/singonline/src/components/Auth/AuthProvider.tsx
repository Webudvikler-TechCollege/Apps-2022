import { useContext, useEffect, useState, createContext } from "react"

/**
 * Deklarerer interface til context object
 * Definerer login objekt data og setter
 */
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

// Deklarerer AuthContext objekt
const AuthContext = createContext<iContext>({} as any)

// Deklarerer function component med props.children (Indkapslede tags)
const AuthProvider:React.FC = ({children}) => {

	// Kalder state hook til logindata
	const [ loginData, setLoginData ] = useState<any>()

	// Kalder useEffect hook til get og set af sessionstorage 
	useEffect(() => {
		const session_token: string | null = sessionStorage.getItem('token');
		if(session_token) {
			setLoginData(JSON.parse(session_token))
		}
	}, 
		// Dependency array med children - renderer hvis de ændres
		[children]
	)

	return (
		// Returnerer Provider med loginData og setter
		<AuthContext.Provider value={{loginData, setLoginData}}>
			{children}
		</AuthContext.Provider>
	)
}

// Deklarerer custom hook med AuthContext
const useAuth = () => useContext(AuthContext)

// Ekspoterer funktioner
export { AuthProvider, AuthContext, useAuth }