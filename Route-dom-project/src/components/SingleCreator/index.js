import React from "react";
import {useParams} from 'react-router-dom'

function SingleCreator() {
    const {name} = useParams()
    return (
        <>
            <h1>Enter name is : {name}</h1>
        </>
    )
}

export default SingleCreator