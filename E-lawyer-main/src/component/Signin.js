import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { UserAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import loginImg from "../assets/login.png";
import { FaGoogle } from "react-icons/fa";
import "./auth.css";
import Loader from "../component/Loader"
import { auth } from "../firebase";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate();
  const redirectUser = () => {
    navigate("/option");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        toast.success("Login Successful...");
        redirectUser();
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  // Login with Goooglr
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // const user = result.user;
        toast.success("Login Successfully");
        redirectUser();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
    {isLoading && <Loader/>}
      <section className="auth">
        <div className="img">
          <img src={loginImg} alt="Login" width="400" />
        </div>
        <div className="form">
          <h2>Login</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="--btn --btn-primary --btn-block">Login</button>
            <div className="links">
              <Link to="/reset">Reset Password</Link>
            </div>
            <p>-- or --</p>
          </form>
          <button className="--btn --btn-danger --btn-block"
          onClick={signInWithGoogle}>
            <FaGoogle color="#fff" /> Login With Google
          </button>
          <span className="register">
            <p>Don't have an account?</p>
            <Link to="/register">Register</Link>
          </span>
        </div>
      </section>
    </>
  );
};

export default Signin;
