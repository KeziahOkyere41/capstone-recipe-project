import { useNavigate } from  'react-router-dom';
import React, { useEffect, useState } from 'react';
import AddForm from '../components/AddForm';

export default function UserImproveSkills(){
    const navigate = useNavigate();
    const list = [
        "Learn new recepies",
        "Experiment with food",
        "Write your own recepies",
        "Know nutrition facts",
        "Get cooking tips",
        "Get ranked"
    ]
    
    function handleClick(){
      navigate("/postrecipe")
    }

    return (
        <div className="section improve-skills">
            <div className="col img">
                <img src="/img/gallery/img_10.jpg" alt="" />
            </div>
            <div className="col typography">
                <h1 className="title">Improve Your Culinary Skills</h1>
                { list.map((item, index) => (
                    <p className="skill-item" key={index}>{item}</p>
                )) }
                <button onClick={handleClick} className="btn">Add recipe</button>
            </div>
        </div>
    )
}
