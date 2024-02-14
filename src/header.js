import Logo from './images/logo.png';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
export default function Header() {
    const { setUserInfo, userInfo } = useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
            });
        });
    }, []);
    function logout() {
        fetch('http://localhost:4000/logout', {
            credentials: 'include',
            method: 'POST',
        });
        setUserInfo(null);
    }
    const username = userInfo?.username;
    return (
        <header className="header-area">
            <div className="topnav" id="myTopnav">
                <div className="container">

                    <Link to="/" className="logo"><img src={Logo} className="nav-logo-img" alt="" /></Link>
                    {/* <a href="blogs.html">Bangladesh</a>
                    <a href="blogs.html">International</a>
                    <a href="blogs.html">Sports</a>
                    <a href="blogs.html">Opinion</a>
                    <a href="blogs.html">Business</a>
                    <a href="blogs.html">Youth</a>
                    <a href="blogs.html">Entertainment</a> */}
                    <nav>
                        {username && (
                            <>
                                <Link to="/create">Create new post</Link>
                                <a onClick={logout}>Logout ({username})</a>
                            </>
                        )}
                        {!username && (
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>
                            </>
                        )}
                    </nav>
                    <a href="javascript:void(0);" className="icon" onClick="myFunction()">
                        <i className="fa fa-bars"></i>
                    </a>
                </div>
            </div>
        </header>
    );
}