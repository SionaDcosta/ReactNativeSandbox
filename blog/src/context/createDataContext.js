//just exports a plain fucnito so the file name starts with lowercase "c"

import { View, Text } from 'react-native'
import React, {useReducer} from 'react'

export default ( reducer, actions, initialState ) => {
    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        return <Context.Provider value={{ state }}> 
                {children}
            </Context.Provider>
    }
    
  return {Context, Provider};
}

