import './grid.css';
import './style.css';
import Header from './header';
import Post from "./Post";
import Footer from './footer';
import {Route,Routes} from "react-router-dom";
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

             <Routes>
                 <Route index element = {
                    <body>
                    <Header />
                    <main class="main-area">
                        <section class="featured-posts-area">
                            <div class="container">
                                <a href="#" class="featured-header-link">
                                    <h3 class="featured-header">Bangladesh</h3> <i class="fa fa-chevron-right"></i>
                                </a>
                                <div class="row">
                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                                        <Post />
                                    </div>
                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                                        <Post />
                                    </div>
                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                                        <Post />
                                    </div>
                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                                        <Post />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="featured-posts-area">
                            <div class="container">
                                <div class="row">
                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                                        <a href="#" class="featured-header-link">
                                            <h3 class="featured-header2">Health</h3> <i class="fa fa-chevron-right"></i>
                                        </a>
                                        <div class="post-card">
                                            <a href="single.html">
                                                <img src="assets/images/student-movement.jpeg" alt="" />
                                                <div class="post-container">
                                                    <h4 class="post-header">Students take to streets again with 11-point demand</h4>
                                                </div>
                                            </a>
                                            <hr />
                                            <a href="#">
                                                <div class="post-container">
                                                    <h4 class="post-header">Students take to streets again with 11-point demand</h4>
                                                </div>
                                            </a>
                                            <hr />
                                            <a href="#">
                                                <div class="post-container">
                                                    <h4 class="post-header">Students take to streets again with 11-point demand</h4>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                                        <a href="#" class="featured-header-link">
                                            <h3 class="featured-header2">Food</h3> <i class="fa fa-chevron-right"></i>
                                        </a>
                                        <div class="post-card">
                                            <a href="single.html">
                                                <img src="assets/images/student-movement.jpeg" alt="" />
                                                <div class="post-container">
                                                    <h4 class="post-header">Students take to streets again with 11-point demand</h4>
                                                </div>
                                            </a>
                                            <hr />
                                            <a href="#">
                                                <div class="post-container">
                                                    <h4 class="post-header">Students take to streets again with 11-point demand</h4>
                                                </div>
                                            </a>
                                            <hr />
                                            <a href="#">
                                                <div class="post-container">
                                                    <h4 class="post-header">Students take to streets again with 11-point demand</h4>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                                        <a href="#" class="featured-header-link">
                                            <h3 class="featured-header2">Sports</h3> <i class="fa fa-chevron-right"></i>
                                        </a>
                                        <div class="post-card">
                                            <a href="#">
                                                <img src="assets/images/student-movement.jpeg" alt="" />
                                                <div class="post-container">
                                                    <h4 class="post-header">Students take to streets again with 11-point demand</h4>
                                                </div>
                                            </a>
                                            <hr />
                                            <a href="#">
                                                <div class="post-container">
                                                    <h4 class="post-header">Students take to streets again with 11-point demand</h4>
                                                </div>
                                            </a>
                                            <hr />
                                            <a href="#">
                                                <div class="post-container">
                                                    <h4 class="post-header">Students take to streets again with 11-point demand</h4>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                                        <a href="#" class="featured-header-link">
                                            <h3 class="featured-header2">Analysis</h3> <i class="fa fa-chevron-right"></i>
                                        </a>
                                        <div class="post-card">
                                            <a href="#">
                                                <img src="assets/images/student-movement.jpeg" alt="" />
                                                <div class="post-container">
                                                    <h4 class="post-header">Students take to streets again with 11-point demand</h4>
                                                </div>
                                            </a>
                                            <hr />
                                            <a href="#">
                                                <div class="post-container">
                                                    <h4 class="post-header">Students take to streets again with 11-point demand</h4>
                                                </div>
                                            </a>
                                            <hr />
                                            <a href="#">
                                                <div class="post-container">
                                                    <h4 class="post-header">Students take to streets again with 11-point demand</h4>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                        </section>
                        <section class="featured-posts-area">
                            <div class="container">
                                <a href="#" class="featured-header-link">
                                    <h3 class="featured-header">International</h3> <i class="fa fa-chevron-right"></i>
                                </a>
                                <div class="row">
                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                                        <Post />
                                    </div>
                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                                        <Post />
                                    </div>
                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                                        <Post />
                                    </div>
                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                                        <Post />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="featured-posts-area">
                            <div class="container">
                                <a href="#" class="featured-header-link">
                                    <h3 class="featured-header">More News</h3> <i class="fa fa-chevron-right"></i>
                                </a>
                                <div class="row">
                                    <div class="col-12 col-sm-6 col-md-3 col-lg-2">
                                        <div class="post-card">
                                            <a href="#">
                                                <img src="assets/images/student-movement.jpeg" class="more-news-img" alt="" />
                                                <div class="post-container">
                                                    <h4 class="post-header">Students take to streets again with 11-point demand</h4>
                                                    <p class="upload-time">Just Now...</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6 col-md-3 col-lg-2">
                                        <div class="post-card">
                                            <a href="#">
                                                <img src="assets/images/student-movement.jpeg" class="more-news-img" alt="" />
                                                <div class="post-container">
                                                    <h4 class="post-header">Students take to streets again with 11-point demand</h4>
                                                    <p class="upload-time">Just Now...</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6 col-md-3 col-lg-2">
                                        <div class="post-card">
                                            <a href="#">
                                                <img src="assets/images/student-movement.jpeg" class="more-news-img" alt="" />
                                                <div class="post-container">
                                                    <h4 class="post-header">Students take to streets again with 11-point demand</h4>
                                                    <p class="upload-time">Just Now...</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6 col-md-3 col-lg-2">
                                        <div class="post-card">
                                            <a href="#">
                                                <img src="assets/images/student-movement.jpeg" class="more-news-img" alt="" />
                                                <div class="post-container">
                                                    <h4 class="post-header">Students take to streets again with 11-point demand</h4>
                                                    <p class="upload-time">Just Now...</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6 col-md-3 col-lg-2">
                                        <div class="post-card">
                                            <a href="#">
                                                <img src="assets/images/student-movement.jpeg" class="more-news-img" alt="" />
                                                <div class="post-container">
                                                    <h4 class="post-header">Students take to streets again with 11-point demand</h4>
                                                    <p class="upload-time">Just Now...</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6 col-md-3 col-lg-2">
                                        <div class="post-card">
                                            <a href="#">
                                                <img src="assets/images/student-movement.jpeg" class="more-news-img" alt="" />
                                                <div class="post-container">
                                                    <h4 class="post-header">Students take to streets again with 11-point demand</h4>
                                                    <p class="upload-time">Just Now...</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
        
                    </main>
                    <Footer />
                    </body>

                 } />
             </Routes>
    );
}

export default App;
