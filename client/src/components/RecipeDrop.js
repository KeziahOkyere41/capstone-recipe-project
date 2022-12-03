import { faEllipsisVertical, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useLocation, useNavigate } from "react-router-dom"
import photo from '../img/user.png'
import "./dropdown.css";
import React, {useState, useEffect, useRef} from 'react';

function RecipeDrop({ handleDeleteClick }) {
  const [open, setOpen] = useState(false);
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
  
    


  return (
    <div className="profile">
      <div className="menu-container" ref={menuRef}>
        
          <FontAwesomeIcon icon={faEllipsisVertical} className='menu-trigger' onClick={()=> setOpen(!open)} />

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          {/*<h3>{user.name}<br/><span>{user.location}</span></h3>?*/}
          <ul>
            {/*{profileLinks.map((link) =>{
              <ProfileItems key={link.name} link={link}/>
            })}*/}
            <li className = 'dropdownItem'>
               <Link to="/editrecipe">
                 <FontAwesomeIcon icon={faPenToSquare} />
                 Edit Recipe
               </Link>
            </li>
            <li className = 'dropdownItem'>
               <Link to="/recipes" onClick={handleDeleteClick}>
                 <FontAwesomeIcon icon={faTrash} />
                 Delete
               </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RecipeDrop;
