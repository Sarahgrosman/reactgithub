
import React, { useEffect, useState } from 'react';

const fetchRepoitories = async () => {
    const BASE_URL = `https://api.github.com/search/users?per_page=20&q=Meir`;
    console.log(fetchRepoitories)
    const reponse = await fetch(BASE_URL,{
        method: "GET",
        headers: {
            'Authorization': `Basic U2FyYWhncm9zbWFuOmdocF9PR0xWYUFnWXNkelMwb0ZqMWNURFJHRmVhVHBxdXEwM1hPRUY=`,
            'Accept':'application/vnd.github.v3.html'
        }
        
    })
    console.log(reponse)
    const repositories = await reponse.json();
    console.log(repositories);
    return repositories;

}
const Users = ({user}) => {
    const [userList,setUserList] = useState({})

    useEffect(async () => {
       const repositories = await fetchRepoitories();
       setUserList(repositories) 
    },[]
    )
return(
    <div>{useEffect}</div>
)
}

        
    export default Users