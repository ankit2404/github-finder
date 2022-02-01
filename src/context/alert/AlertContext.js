import {createContext , useReducer} from 'react'
import alertReducer from './AlertReducer'

const AlertContext = createContext()

export const AlertProvider = ({children}) => {
   const initialState = null

   const [state , dispatch] = useReducer(alertReducer , initialState)
 
   const setAlert = (mssg , type) => {
       dispatch({
           type : 'SET_ALERT',
           payload : {mssg , type}
       })

       setTimeout(() => dispatch({
         type : 'REMOVE_ALERT'
       }),3000)
   }
   return (
       <AlertContext.Provider value ={{
           alert : state,
           setAlert,
       }}>
           {children}
       </AlertContext.Provider>
   )
}

export default AlertContext
