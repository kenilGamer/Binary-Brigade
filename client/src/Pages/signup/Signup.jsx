import { Button, Input } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    if (!email || !password || !username) {
      setError('Please fill out all fields.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: username });
      navigate("/profile");
    } catch (error) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          setError('Email is already in use.');
          break;
        case 'auth/invalid-email':
          setError('Invalid email address.');
          break;
        case 'auth/weak-password':
          setError('Password should be at least 6 characters.');
          break;
        default:
          setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="h-screen accent-bg flex p-10">
      <div className="basis-1/2 flex justify-center items-center">
        <div className="flex gap-4 justify-center">
          <div className="aspect-square h-36">
            <img className="h-full" src="logo.png" alt="Logo" />
          </div>
          <div className="w-1/2">
            <h1 className="text-[#002C5D] text-[50px] font-medium">SKILLSWAP</h1>
            <p className="text-[20px]">Connect with Developers and the world around them on SkillSwap.</p>
          </div>
        </div>
      </div>
      <div className="basis-1/2 flex p-10 justify-center items-center">
        <form className="shadow-[0px_0px_3px_1px_#00000025] rounded-[40px] w-full h-full max-w-[600px] max-h-[700px] bg-white flex flex-col items-center px-16">
          <h1 className="basis-full flex items-center text-4xl text-[#4169E1] font-bold tracking-wider">Sign Up</h1>
          <div className="basis-full w-full flex flex-col">
            <Input 
              aria-label="User name"
              onChange={(e) => setUsername(e.target.value)} 
              value={username} 
              bg="#F2F5FF" 
              h="55px" 
              borderRadius="10" 
              placeholder="User name" 
              type="text" 
              mb="18px" 
            />
            <Input 
              aria-label="Email Address"
              onChange={(e) => setEmail(e.target.value)} 
              value={email} 
              bg="#F2F5FF" 
              h="55px" 
              borderRadius="10" 
              placeholder="Email Address" 
              type="email" 
              mb="18px" 
            />
            <Input 
              aria-label="Password"
              onChange={(e) => setPassword(e.target.value)} 
              value={password} 
              bg="#F2F5FF" 
              h="55px" 
              borderRadius="10" 
              placeholder="Password" 
              type="password" 
            />
            <a href="#" className="text-blue-600 py-2">Forgot Password?</a>
          </div>
          <div className="basis-full w-full flex flex-col items-center justify-evenly">
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <Button 
              bg="#00AFF6" 
              colorScheme="twitter" 
              color="white" 
              w="fit-content" 
              py="22px" 
              px="50px" 
              mb="10px" 
              borderRadius="300" 
              onClick={handleSignup}
            >
              Sign Up
            </Button>
            <div className="flex">
              {/* Social icons here */}
            </div>
            <div>
              Already a member? <Link to="/login" className="text-blue-600">Log In</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
