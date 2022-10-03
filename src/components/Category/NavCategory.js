import React from "react";
import { NavLink } from 'react-router-dom';

const Category = () => {
    return (
        <div>
            <ul className="nav justify-content-center">
                <li className="nav-item"><NavLink className="nav-link" to="/categoria/Shoes">Zapatos</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/categoria/Clothes">Ropa</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/categoria/Electronics">Electronica</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/categoria/others">Otros</NavLink></li>
            </ul>
        </div>
    );};

export default Category;