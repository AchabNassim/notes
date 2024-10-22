import { useState, useEffect, createContext } from 'react'
import './App.css'
import AppContainer from './components/AppContainer.jsx'
import AuthenticationContainer from './components/AuthenticationComponents/AuthenticationContainer.jsx'

const Context = createContext(null);

function App() {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    if (!isLogged) {
      const authenticate = async () => {
        try {
            const response = await fetch("http://localhost:3000/login", {
                credentials: "include",
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
            });
            if (response.status === 200) {
              setIsLogged(true);
            }
        } catch (e) {
            console.error(e);
        }
      }
      authenticate();
    }
    
}, [isLogged]);

  return (
    <>
      <Context.Provider value={{isLogged, setIsLogged}}>
        <div>
          {isLogged ? <AppContainer /> : <AuthenticationContainer />}
        </div>
      </Context.Provider>
    </>
  )
}
export {Context}
export default App
