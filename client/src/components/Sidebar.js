import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useLocation } from "react-router-dom"


export default function Sidebar({genLinks, user, userLinks, close}){
    const location = useLocation()
    return (
      <>
      {user? (
        <div className="sidebar" onClick={close}>
            { userLinks.map(link => (
                <Link to={link.path} className={location.pathname === link.path ? "sidebar-link active" : "sidebar-link"} key={link.name}>
                    <FontAwesomeIcon icon={link.icon} />
                    {link.name}
                    
                </Link>
            )) }
            
            
        </div>):(
          <div className="sidebar" onClick={close}>
            { genLinks.map(link => (
                <Link to={link.path} className={location.pathname === link.path ? "sidebar-link active" : "sidebar-link"} key={link.name}>
                    <FontAwesomeIcon icon={link.icon} />
                    {link.name}
                </Link>
            )) }
          </div>
        )}
      </>
    )
}
