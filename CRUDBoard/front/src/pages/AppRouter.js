import React from "react";
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";

import App from "../App";
import Login from "./Login";
import MyPosts from "./MyPosts";
import SignUp from "./SignUp";
import NewPost from "./NewPost";

class AppRouter extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Routes>
                            <Route path = "/login" element={<Login />} />
                            <Route path = "/signup" element={<SignUp />} />
                            <Route path = "/myPosts" element={<MyPosts />} />
                            <Route path = "/newPost" element={<NewPost />} />
                            <Route path = "/" element={<App />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default AppRouter;