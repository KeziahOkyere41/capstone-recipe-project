import { Link, useLocation } from "react-router-dom"

import { useState } from "react"
import Sidebar from "./Sidebar"

import { faHome, faList, faCog, faUserPlus, faRightToBracket } from "@fortawesome/free-solid-svg-icons"

export default function Navbar({ user, setUser, isLoggedin, setIsLoggedin}){
    console.log(user)
    console.log(isLoggedin)
    const [showSidebar, setShowSidebar] = useState(false)
    const location = useLocation()
    const genLinks = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList
        },
        {
            name: "Settings",
            path: "/settings",
            icon: faCog
        },
        {
            name: "Signup",
            path: "/signup",
            icon: faUserPlus
        },
        {
            name: "Login",
            path: "/login",
            icon: faRightToBracket
        }
    ]
    
    const userLinks = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList
        },
        {
            name: "Settings",
            path: "/settings",
            icon: faCog
        },
        {
            name: "Bookmarks",
            path: "/bookmarks",
            icon: faUserPlus
        }
    ]
    
    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
          setIsLoggedin((isLoggedin) => !isLoggedin)
        }
      });
    }

    function closeSidebar(){
        setShowSidebar(false)
    }
    
    return (
        <>
            <div className="navbar container">
                <Link to="/" className="logo">S<span>olo</span>cipes</Link>
                {isLoggedin && user ? (
                 <>
                   <div className="nav-links">
                      { userLinks.map(link => (
                          <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link>
                    )) }
                     </div>
                     <button onClick={handleLogoutClick}>Logout</button>
                 </>):(
                 <div className="nav-links">
                    { genLinks.map(link => (
                        <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link>
                    )) }
                    
                </div>
                )}
                <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            { showSidebar && <Sidebar close={closeSidebar} user={user} genLinks={genLinks} userLinks={userLinks}/> }
        </>
    )
}
