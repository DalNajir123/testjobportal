import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const {id} = useParams()
    return(
        <div>
            <h1 className="bg-gray-700 text-white text-3xl p-4"> User: {id}</h1>
        </div>
    )
}

export default User;