import React from 'react';
import {useLoaderData} from 'react-router-dom'
import './index.css'

function Github(){
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/SameerMalik2001')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])

    return (
        < div className='githubdiv'>
            <h1 className='githubh1'>Your Follower is : {data.followers}</h1>
            <h1 className='githubh1'>Your Following is : {data.following}</h1>
        </ div >
    );
}

export default Github;

export const GithubInfo = async () =>{
    const response = await fetch('https://api.github.com/users/SameerMalik2001')
    return response.json()
}