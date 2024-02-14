import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";
export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const { setUserInfo } = useContext(UserContext);
    async function login(ev) {
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });
        if (response.ok) {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
                setRedirect(true);
            });
        } else {
            alert('wrong credentials');
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }
    return (
        <main className="main-area">
            <div className="container">
                <section id="login-area" className="login-area">
                    <h2>Login</h2>
                    <form action="" className="login-form">
                        <div className="username-area">
                            <label for="username">Username or Email</label><br />
                            <input type="text" className="username" id="username" value={username}
                                onChange={ev => setUsername(ev.target.value)} />
                        </div>
                        <div className="password-area">
                            <label for="password">Password</label><br />
                            <input type="password" className="password" id="password" value={password}
                                onChange={ev => setPassword(ev.target.value)} />

                        </div>
                        <button className="btn">Login</button>
                    </form>
                    {/* <a href="javascript:void(0)" id="go-signup" className="go-signup">Or,SignUp</a> */}
                    <Link to="/register">Or, SignUp</Link>
                </section>
            </div>

        </main>
    );
}