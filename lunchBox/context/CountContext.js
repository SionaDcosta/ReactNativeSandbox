import React, { createContext, useState, useContext } from 'react'

const CountContext = createContext() //created a context object CountContext

export const CountProvider = ({ children }) => {
    // using useState in combination with Context provides a centralized way to manage and access shared state.
    const [vegCount, setVegCount] = useState(0)
    const [nonVegCount, setNonVegCount] = useState(0)

    return (
        <CountContext.Provider
            value={{ vegCount, setVegCount, nonVegCount, setNonVegCount }}
        >
            {children}
        </CountContext.Provider>
    )
}

export const useCount = () => useContext(CountContext)

//Instead of calling useContext with the context object every time while consuming, you can just call the custom hook
//const { count, setCount } = useContext(CountContext); instead do this => const { count, setCount } = useCount()
