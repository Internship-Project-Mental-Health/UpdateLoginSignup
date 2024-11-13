// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import "./SignUp.css"
// import frameImage from "../../assets/Frame-37593.png"
// import Header from '../Common/Header/Header';
// import FooterNew from '../Common/Footer/FooterNew';
// function SignUp() {
//     const [login, setLogin] = useState({
//         username:"",
//         email: "",
//         phone:"",
//         password: "",
//     });
//     const [error, setError] = useState(""); // To display error message
//     const navigate = useNavigate(); // To redirect after login
//     const handleInput = (e) => {
//         const name = e.target.name;
//         const value = e.target.value;
//         setLogin({
//             ...login,
//             [name]: value,
//         });
//     };
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch("http://localhost:8000/api/auth/", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(login)
//             });

//             if (!response.ok) {
//                 const errorData = await response.json();
//                 setError(errorData.message || "Login failed"); // Set error message
//                 return;
//             }

//             const data = await response.json();
//             localStorage.setItem("token", data.token); // Store token if provided
//             console.log("Login successful:", data);

//             alert("You are logged in successfully!");
//             // navigate("/dashboard"); // Redirect to dashboard or any other page

//         } catch (error) {
//             setError("Something went wrong. Please try again.");
//             console.log("Login error:", error);
//         }
//     };
//   return (
//     <>
//     <Header/>
//       <div>
//           <div className="login-box">
//               <div className="lgn">
//                   <div className="lgn-right">
//                       <img src={frameImage} alt="" />
//                   </div>
//                   <div className="lgn-left">
//                       <div className="box">
//                           <div className="upper">
//                               <h1>Sign Up</h1>
//                               <br />
//                                   <form className="lgn-frm" onSubmit={handleSubmit}>
//                                   <div className="input-group">
//                                       <input className="inp" type="text" id="name" 
//                                       name='name'
//                                       autoComplete='off'
//                                       placeholder=" " 
//                                           value={login.name}
//                                           onChange={handleInput}/>
//                                       <label className="frm" htmlFor="name">Enter Username</label>
//                                   </div>
//                                   <div className="input-group">
//                                       <input className="inp"
//                                           type="text"
//                                           id="email"
//                                           name="email"
//                                           autoComplete="off"
//                                           value={login.email}
//                                           onChange={handleInput} />
//                                       <label className="frm" htmlFor="email">Enter Email </label>
//                                   </div>
//                                   <div className="input-group">
//                                       <input className="inp" type="number" id="phone"
//                                       name="phone"
//                                       autoComplete='off'
//                                           value={login.phone}
//                                           onChange={handleInput} />
//                                       <label className="frm" htmlFor="number">Enter Phone no.</label>
//                                   </div>
//                                   <div className="input-group">
//                                       <input className="inp"
//                                           type="password"
//                                           id="password"
//                                           name="password"
//                                           autoComplete="off"
//                                           value={login.password}
//                                           onChange={handleInput} />
//                                       <label className="frm" htmlFor="password">Create Password</label>
//                                   </div>
//                                   <button className="sign-in">Sign Up</button>
//                                   <br />
//                                   <p style={{ color: 'rgb(107, 106, 106)' }}>Already have an account? <a href="#">Log in now.</a></p>
//                               </form>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//           </div>
//       </div>
//       <FooterNew/>
//       </>
//   )
// }

// export default SignUp


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./SignUp.css";
import frameImage from "../../assets/Frame-37593.png";
import Header from '../Common/Header/Header';
import FooterNew from '../Common/Footer/FooterNew';

function SignUp() {
    const [login, setLogin] = useState({
        username: "",  // Ensure 'username' matches the name attribute in the form
        email: "",
        phone: "",
        password: "",
    });
    const [error, setError] = useState("");  // To display error message
    // const navigate = useNavigate(); // To redirect after sign-up

    // Handle input changes
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLogin({
            ...login,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation (can be extended)
        if (!login.username || !login.email || !login.phone || !login.password) {
            setError("Please fill in all fields.");
            return;
        }

        try {
            const response = await fetch("http://localhost:8000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(login),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.message || "Sign-up failed");  // Set error message
                return;
            }

            const data = await response.json();
            localStorage.setItem("token", data.token);  // Store token if provided
            console.log("Sign-up successful:", data);

            alert("You are signed up successfully!");
            // navigate("/dashboard");  // Redirect to dashboard after successful sign-up
        } catch (error) {
            setError("Something went wrong. Please try again.");
            console.log("Sign-up error:", error);
        }
    };

    return (
        <>
            <Header />
            <div className="signup-container">
                <div className="login-box">
                    <div className="lgn">
                        <div className="lgn-right">
                            <img src={frameImage} alt="frame" />
                        </div>
                        <div className="lgn-left">
                            <div className="box">
                                <div className="upper">
                                    <h1>Sign Up</h1>
                                    <br />
                                    <form className="lgn-frm" onSubmit={handleSubmit}>
                                        {error && <div className="error-message">{error}</div>}

                                        <div className="input-group">
                                            <input
                                                className="inp"
                                                type="text"
                                                id="username"
                                                name="username"
                                                autoComplete="off"
                                                placeholder=" "
                                                value={login.username}
                                                onChange={handleInput}
                                            />
                                            <label className="frm" htmlFor="username">Enter Username</label>
                                        </div>

                                        <div className="input-group">
                                            <input
                                                className="inp"
                                                type="email"
                                                id="email"
                                                name="email"
                                                autoComplete="off"
                                                placeholder=" "
                                                value={login.email}
                                                onChange={handleInput}
                                            />
                                            <label className="frm" htmlFor="email">Enter Email</label>
                                        </div>

                                        <div className="input-group">
                                            <input
                                                className="inp"
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                autoComplete="off"
                                                placeholder=" "
                                                value={login.phone}
                                                onChange={handleInput}
                                            />
                                            <label className="frm" htmlFor="phone">Enter Phone no.</label>
                                        </div>

                                        <div className="input-group">
                                            <input
                                                className="inp"
                                                type="password"
                                                id="password"
                                                name="password"
                                                autoComplete="off"
                                                placeholder=" "
                                                value={login.password}
                                                onChange={handleInput}
                                            />
                                            <label className="frm" htmlFor="password">Create Password</label>
                                        </div>

                                        <button className="sign-in">Sign Up</button>
                                        <br />
                                        <p style={{ color: 'rgb(107, 106, 106)' }}>
                                            Already have an account? <a href="#">Log in now.</a>
                                        </p>
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

export default SignUp;
