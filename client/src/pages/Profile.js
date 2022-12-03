import { faUser, faPenToSquare, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useLocation, useNavigate } from "react-router-dom"
import photo from '../img/user.png'
import "./profile.css";
import React, {useState, useEffect, useRef} from 'react';

function Profile({ user, setUser }) {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  let menuRef = useRef();
  
  

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });
  
  function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
          localStorage.clear();
          sessionStorage.clear();
          navigate('/')
          //setIsLoggedin((isLoggedin) => !isLoggedin)
        }
      });
    }
    console.log(user)

  return (
    <div className="profile">
      <div className="menu-container" ref={menuRef}>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
          {console.log(user)}
          {user.image ? <img src={user.image}></img> : <img src={photo}></img> }
         
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <h3>{user.name}<br/><span>{user.location}</span></h3>
          <ul>
            {/*{profileLinks.map((link) =>{
              <ProfileItems key={link.name} link={link}/>
            })}*/}
            <li className = 'dropdownItem'>
               <Link to="/profile">
                 <FontAwesomeIcon icon={faUser} />
                 My Profile
               </Link>
            </li>
            <li className = 'dropdownItem'>
               <Link to="/editprofile">
                 <FontAwesomeIcon icon={faPenToSquare} />
                 Edit Profile
               </Link>
            </li>
            <li className = 'dropdownItem'>
               <Link to="/" onClick={handleLogoutClick}>
                 <FontAwesomeIcon icon={faArrowRightFromBracket} />
                 Logout
               </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
