import React, { useState } from 'react'
import '../style/home.css'

function Home() {
    const githubUri = "https://api.github.com/users/";

    const [userName, setuserName] = useState('');
    const [userDetails, setUserDetails] = useState('');

    const getGithubUser = async () => {
        const response = await fetch(githubUri + userName);
        const user = await response.json();
        console.log(user);
        setUserDetails(user)
        /*  const repos = await fetch(user.repos_url);
         const repo = await repos.json();
         console.log(repo); */
    }

    return (
        <div className="container">
            <div className="heading">
            <h2>Enter GitHub User Name </h2>
            </div>
            <div className="my-3 search-user">
                <img src='./github-logo.png' alt="loading..." /><input type="text" className="form-control mx-2" id="getGithubUser" placeholder="Enter github user name" onChange={(e) => { setuserName(e.target.value) }} />
                <button type="button" className="btn btn-primary" onClick={getGithubUser}>Enter</button>
            </div>

            {userDetails ? <div className="profile">
                <div className="profile-image">
                    <img src={userDetails.avatar_url} alt="loading..." />
                </div>
                <div className="profile-user-details">
                    <div className="user-name"><h1>Name: <span>{userDetails.name}</span></h1></div>
                    <div className="user-bio"><h1>Bio: <span>{userDetails.bio}</span></h1></div>
                    <div className="user-location"><h1>Location: <span>{userDetails.location}</span></h1> </div>
                    <div className="user-url"><h1>GitHub url: <span> <a href={userDetails.html_url}>{userDetails.html_url}</a></span></h1> </div>
                    <div className="user-content mt-2">
                        <button type='button'>Repository({userDetails.public_repos})</button>
                        <button type='button'>Followers({userDetails.followers})</button>
                        <button type='button'>Following({userDetails.following})</button>
                    </div>
                </div>
            </div> : ''}
        </div>
    )
}

export default Home
