/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Button, Input } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to store error messages

  const handleLogin = () => {
    // Clear previous error message
    setError("");

    // Check if email or password is empty
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Navigate to home on successful login
        navigate('/');
      })
      .catch((error) => {
        // Handle specific Firebase authentication errors
        switch (error.code) {
          case 'auth/wrong-password':
            setError("Incorrect password. Please try again.");
            break;
          case 'auth/user-not-found':
            setError("No user found with this email.");
            break;
          case 'auth/invalid-email':
            setError("Invalid email address.");
            break;
          default:
            setError("An error occurred. Please try again.");
        }
      });
  };

  return (
    <div className="h-screen accent-bg flex p-10">
      <div className="basis-1/2 flex justify-center items-center">
        <div className="flex gap-4 justify-center">
          <div className="aspect-square w-36 overflow-hidden">
            <img className="w-full" src="logo.png" alt="Logo" />
          </div>
          <div className="w-1/2">
            <h1 className="text-[#002C5D] text-[50px] font-medium">SKILLSWAP</h1>
            <p className="text-[20px]">Connect with Developers and the world around them on SkillSwap.</p>
          </div>
        </div>
      </div>
      <div className="basis-1/2 flex p-10 justify-center items-center">
        <form className="shadow-[0px_0px_3px_1px_#00000025] rounded-[40px] w-full h-full max-w-[500px] max-h-[700px] bg-white flex flex-col items-center px-16">
          <h1 className="basis-full flex items-center text-4xl text-[#4169E1] font-bold tracking-wider">Login</h1>
          <div className="basis-full w-full flex flex-col justify-center">
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <Input onChange={e => setEmail(e.target.value)} value={email} bg="#F2F5FF" h="55px" borderRadius="10" placeholder="Email Address" mb="30px" type="email" />
            <Input onChange={e => setPassword(e.target.value)} value={password} bg="#F2F5FF" h="55px" borderRadius="10" placeholder="Password" type="password" />
            <a href="#" className="text-blue-600 py-2">Forgot Password?</a>
          </div>
          <div className="basis-full w-full flex flex-col items-center justify-evenly">
            <Button bg="#00AFF6" colorScheme="twitter" color="white" w="fit-content" py="22px" px="50px" mb="30px" borderRadius="300" onClick={handleLogin}>Login</Button>
            <div className="flex">
              {/* Add social login buttons if needed */}
            </div>
            <div>Not a member? <Link to="/signup" className="text-blue-600">Sign Up</Link></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
