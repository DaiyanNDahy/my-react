import Logo from './images/logo.png';
export default function Header() {
    return (
        <header class="header-area">
            <div class="topnav" id="myTopnav">
                <div class="container">

                    <a href="index.html" class="logo"><img src={Logo} class="nav-logo-img" alt=""/></a>
                    <a href="blogs.html">Bangladesh</a>
                    <a href="blogs.html">International</a>
                    <a href="blogs.html">Sports</a>
                    <a href="blogs.html">Opinion</a>
                    <a href="blogs.html">Business</a>
                    <a href="blogs.html">Youth</a>
                    <a href="blogs.html">Entertainment</a>
                    <a href="blogs.html">Lifestyle</a>
                    <a href="login.html">Login</a>
                    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                        <i class="fa fa-bars"></i>
                    </a>
                </div>
            </div>
        </header>
    );
}