import { Link, useLocation, useNavigate } from "react-router-dom"
import Profile from "../pages/Profile"
import { useState } from "react"
import Sidebar from "./Sidebar"

import { faBookmark, faHome, faList, faCog, faUserPlus, faRightToBracket } from "@fortawesome/free-solid-svg-icons"

export default function Navbar({ user, setUser }){
    const navigate = useNavigate();
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
            icon: faBookmark
        }
    ]
    
    const bookLinks = [
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
        }
    ]
    
    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
          navigate('/')
          //setIsLoggedin((isLoggedin) => !isLoggedin)
        }
      });
    }

    function closeSidebar(){
        setShowSidebar(false)
    }
    
    return (
        <>
            <div className="navbar container">
                <Link to="/" className="logo">Deli<span>cacies</span>Crib</Link>
                {user ? (user.book_marks.length > 0?
                 <>
                   <div className="nav-links">
                      { userLinks.map(link => (
                          <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link>
                    )) }
                    
                     </div>
                     <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    
                    
                </div>
               
                    <Profile user={user} setUser={setUser}/> 
                     {/*<button className="btn" onClick={handleLogoutClick}>Logout</button>*/}
                     
                 </>:<><div className="nav-links">
                      { bookLinks.map(link => (
                          <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link>
                    )) }
                    
                     </div>
                     <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    
                    
                </div>
               
                    <Profile user={user} setUser={setUser}/> 
                     {/*<button className="btn" onClick={handleLogoutClick}>Logout</button>*/}</>):(
                 <>
                 <div className="nav-links">
                    { genLinks.map(link => (
                        <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link>
                    )) }
                    
                </div>
                <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                   
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    
                </div>
                </>
                )}
               
            </div>
           
            { showSidebar && <Sidebar close={closeSidebar} user={user} bookLinks={bookLinks} genLinks={genLinks} userLinks={userLinks}/> } 
        </>
    )
}
