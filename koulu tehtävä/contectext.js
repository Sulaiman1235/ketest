import React, { useState, usecontext} from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const [isSidebarOpen,setIsSidebarOpen] = useState(true);
    const [isSubmenuOpen,setIsSubmenuOpen] = useState(true);


const openSidebar = () => {
    setIsSidebarOpen(true)
}
const closeSubmenu = () => {
    setIsSidebarOpen(flase)
}
const openModal = () => {
    setIsSubmenuOpen(true)
}
const closeSubmenu = () => {
    setIsSubmenuOpen(flase)
}

return( <AppContext.Provider value={{
isSubmenuOpen,
isSidebarOpen,
openSubmenu,
openSidebar,
closeSubmenu,
closeSidebar,
}}
>
{children}
</AppContext.Provider>
)
}

export const useGlobalContext = () => {
    return usecontext(AppContext)
}

