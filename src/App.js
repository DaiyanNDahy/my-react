import logo from './logo.svg';
import './grid.css';
import './style.css';
import Post from "./Post";
function App() {
  return (
    // <main>
    //   <header>
    //     <a href="" className="logo">Myblog</a>
    //     <nav>
    //       <a href="">Login</a>
    //       <a href="">Register</a>
    //     </nav>
    //   </header>
    //   <Post />
      
    // </main>
    
    <div>
      <header class="header-area">
        <div class="topnav" id="myTopnav">
            <div class="container">
                
                {/* <a href="index.html" class="logo"><img src="assets/images/logo.png" class="nav-logo-img" alt=""><</a> */}
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

    <footer class="footer-area">
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6 col-lg-3">
                {/* <img src="assets/images/logo.png" class="img-responsive" alt=""> </img> */}
                <p class="site-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quia ad sint ullam obcaecati
                    ducimus nisi voluptates itaque molestias alias!
                </p>
                <div class="social-links">
                    <a href="https://twitter.com" class="twitter"><i class="fa fa-twitter"></i></a>
                    <a href="https://facebook.com" class="facebook"><i class="fa fa-facebook"></i></a>
                    <a href="https://instagram.com" class="instagram"><i class="fa fa-instagram"></i></a>
                    <a href="https://skype.com" class="google-plus"><i class="fa fa-skype"></i></a>
                    <a href="https://linkedin.com" class="linkedin"><i class="fa fa-linkedin"></i></a>
                </div>

            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <h3 class="footer-link-title">Site Links</h3>
                <ul class="footer-links">
                    <li><a href="#">Bangladesh</a></li>
                    <li><a href="#">International</a></li>
                    <li><a href="#">Sports</a></li>
                    <li><a href="#">Business</a></li>

                </ul>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <h3 class="footer-link-title">Site Links</h3>
                <ul class="footer-links">
                    <li><a href="#">Bangladesh</a></li>
                    <li><a href="#">International</a></li>
                    <li><a href="#">Sports</a></li>
                    <li><a href="#">Business</a></li>

                </ul>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <h3 class="footer-link-title">Site Links</h3>
                <ul class="footer-links">
                    <li><a href="#">Bangladesh</a></li>
                    <li><a href="#">International</a></li>
                    <li><a href="#">Sports</a></li>
                    <li><a href="#">Business</a></li>

                </ul>
            </div>
        </div>
        <div class="copyright-area">
            <div class="copyright-text">© Copyright <a href="#">TopNews</a>. All Rights Reserved</div>
        </div>
    </div>

</footer>
</div>
  );
}

export default App;
