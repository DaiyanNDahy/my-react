import {Link} from "react-router-dom";
export default function LoginPage() {
    return(
        <main class="main-area">
                        <div class="container">
                            <section id="login-area" class="login-area">
                                <h2>Login</h2>
                                <form action="" class="login-form">
                                    <div class="username-area">
                                        <label for="username">Username or Email</label><br />
                                        <input type="text" class="username" id="username" />
                                    </div>
                                    <div class="password-area">
                                        <label for="password">Password</label><br />
                                        <input type="password" class="password" id="password" />
                                    </div>
                                    <button class="btn">Login</button>
                                </form>
                                {/* <a href="javascript:void(0)" id="go-signup" class="go-signup">Or,SignUp</a> */}
                                <Link to="/register">Or, SignUp</Link>
                            </section>
                        </div>

                    </main>
    );
}