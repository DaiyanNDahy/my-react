import { useState } from "react";
import { Link } from "react-router-dom";
export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    async function register(ev) {
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.status === 200) {
            alert('registration successful');
        } else {
            alert('registration failed');
        }
    }

    return (
        <main className="main-area">
            <div className="container">
                <section id="signup-are" className="signup-area">
                    <h2>Signup</h2>
                    <form action="" className="login-form register" onSubmit={register}>
                        <div className="username-area">
                            <label for="username">Username or Email</label><br />
                            <input type="text" className="username" id="username" value={username} onChange={ev => setUsername(ev.target.value)} />
                        </div>
                        <div className="password-area">
                            <label for="password">Password</label><br />
                            <input type="password" className="password" id="password" value={password} onChange={ev => setPassword(ev.target.value)} />
                        </div>
                        <button className="btn">Register</button>
                    </form>

                    {/* <a href="javascript:void(0)" id="go-login" className="go-login">Or,login</a> */}
                    <Link to="/login">Or, login</Link>
                </section>
            </div>

        </main>
    );
}