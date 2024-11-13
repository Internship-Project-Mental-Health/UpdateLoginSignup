import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router for navigation
import "./Login.css";
import Header from '../Common/Header/Header';
import FooterNew from '../Common/Footer/FooterNew';
import frameImage from "../../assets/Frame-37593.png";
import { Link } from "react-router-dom";
function Login() {
    const [login, setLogin] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState(""); // To display error message
    const navigate = useNavigate(); // To redirect after login

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLogin({
            ...login,
            [name]: value,
        });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await fetch("http://localhost:8000/api/auth/login", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify(login)
    //         });

    //         if (!response.ok) {
    //             const errorData = await response.json();
    //             setError(errorData.message || "Login failed"); // Set error message
    //             return;
    //         }

    //         const data = await response.json();
    //         localStorage.setItem("token", data.token); // Store token if provided
    //         console.log("Login successful:", data);
            
    //         alert("You are logged in successfully!"); 
    //         // navigate("/dashboard"); // Redirect to dashboard or any other page

    //     } catch (error) {
    //         setError("Something went wrong. Please try again.");
    //         console.log("Login error:", error);
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(login)
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.message || "Login failed"); // Set error message
                return;
            }
    
            const data = await response.json();
            localStorage.setItem("token", data.token); // Store token if provided
            console.log("Login successful:", data);
    
            alert("You are logged in successfully!");
            
            // Redirect to the User Profile page after successful login
            navigate("/user-profile"); // Add the redirect here
    
        } catch (error) {
            setError("Something went wrong. Please try again.");
            console.log("Login error:", error);
        }
    };
    

    return (
        <>
            <Header />
            <div>
                <div className="login-box">
                    <div className="lgn">
                        <div className="lgn-right">
                            <img src={frameImage} alt="" />
                        </div>
                        <div className="lgn-left">
                            <div className="box">
                                <div className="upper">
                                    <h1>Log In</h1>
                                    {error && <p style={{ color: 'red' }}>{error}</p>}
                                    <form className="lgn-frm" onSubmit={handleSubmit}>
                                        <div className="input-group">
                                            <label className="frm" htmlFor="email"></label>
                                            <input
                                            placeholder='Email or mobile number'
                                                className="inp"
                                                type="text"
                                                id="email"
                                                name="email"
                                                autoComplete="off"
                                                value={login.email}
                                                onChange={handleInput}
                                            />
                                        </div>
                                        <div className="input-group">
                                            <label className="frm" htmlFor="password"></label>
                                            <input
                                            placeholder='Password'
                                                className="inp"
                                                type="password"
                                                id="password"
                                                name="password"
                                                autoComplete="off"
                                                value={login.password}
                                                onChange={handleInput}
                                            />
                                        </div>
                                        {/* <input type="checkbox" id="rememberMe" /> */}
                                        {/* <label htmlFor="rememberMe" style={{ position: 'relative', top: '-3px', fontSize: 16, textAlign: 'left' }}>Remember me</label> */}
                                        <button type="submit" className="sign-in">Log In</button>
                                        <br />
                                        {/* <p style={{ textAlign: 'center' }}><a href="#">Forgot password?</a></p> */}
                                        <p style={{ color: 'rgb(107, 106, 106)' }}>Don't have an account?  <Link to="/signup">SignUp Now</Link></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterNew />
        </>
    );
}

export default Login;
