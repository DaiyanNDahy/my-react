import './App.css';
import './grid.css';
import './style.css';
import Layout from './Layout';
import Header from './header';
import Post from "./Post";
import Footer from './footer';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import { Route, Routes } from "react-router-dom";
import IndexPage from './Pages/IndexPage';
import { UserContextProvider } from "./UserContext";
import CreatePost from "./Pages/CreatePost";
// import PostPage from "./pages/PostPage";
// import EditPost from "./pages/EditPost";
function App() {
    return (
        <UserContextProvider>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<IndexPage />} />
                    <Route path={'/login'} element={<LoginPage />} />
                    <Route path={'/register'} element={<RegisterPage />} />
                    <Route path="/create" element={<CreatePost />} />
                    {/* <Route path="/post/:id" element={<PostPage />} />
                    <Route path="/edit/:id" element={<EditPost />} /> */}

                </Route>

            </Routes>
        </UserContextProvider>

    );
}

export default App;
