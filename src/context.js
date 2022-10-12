import React, { useState, useContext } from 'react'
// import sublinks from './data'

const AppContext = React.createContext()

export const AppProvider = ({children}) => {
    
    return <AppContext.Provider>{children}</AppContext.Provider>
}

export const useGlobal = () =>{
    return useContext(AppContext)
}