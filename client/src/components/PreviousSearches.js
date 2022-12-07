import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export default function PreviousSearches({ filterSearch }){
    const [searchQuery, setSearchQuery] = useState("");
    const searches = ['pizza', 'burger', 'cookies', 'juice', 'biriyani', 'salad', 'ice cream', 'lasagna', 'pudding', 'soup']
    

    function handleInput(event){
      const searchWord = event.target.value;
      setSearchQuery(searchWord)
    }

    function handleKeyPress(event){
      if (event.key === "Enter"){
        filterSearch(searchQuery)
      
      }
    }
    function handleClick(){
      filterSearch(searchQuery);
    }

    return (
        <div className="previous-searches section">
            <h2>Previous Searches</h2>
            <div className="previous-searches-container">
                { searches?.map((search, index) => (<div key={index} style={{animationDelay: index * .1 + "s"}} className="search-item">
                    {search}
                </div>)) }
            </div>
            <div className="search-box">
                <input type="text" placeholder="Search ..." value={searchQuery} onChange={handleInput} onKeyPress={handleKeyPress} />
                <button  onClick={handleClick} className="btn">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    )
}
