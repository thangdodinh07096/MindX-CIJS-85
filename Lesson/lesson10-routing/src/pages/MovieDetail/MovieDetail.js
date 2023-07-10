import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function MoviesDetail() {
    const params = useParams();
    const navigate = useNavigate();
    
    return (
        <div>
            <h1>MoviesDetail</h1>
            <h4>{params.id}</h4>
        </div>
    );
}

export default MoviesDetail;