import React, { createContext, useState, useContext } from 'react'

const CountContext = createContext()

export const CountProvider = ({ children }) => {
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
