import Logo from './images/logo.png';
import {Link} from 'react-router-dom';
export default function Header() {
    return (
        <header class="header-area">
            <div class="topnav" id="myTopnav">
                <div class="container">

                    <Link to="/" class="logo"><img src={Logo} class="nav-logo-img" alt=""/></Link>
                    <a href="blogs.html">Bangladesh</a>
                    <a href="blogs.html">International</a>
                    <a href="blogs.html">Sports</a>
                    <a href="blogs.html">Opinion</a>
                    <a href="blogs.html">Business</a>
                    <a href="blogs.html">Youth</a>
                    <a href="blogs.html">Entertainment</a>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                        <i class="fa fa-bars"></i>
                    </a>
                </div>
            </div>
        </header>
    );
}