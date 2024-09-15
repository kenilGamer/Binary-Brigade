/* eslint-disable no-unused-vars */
import { Button, Input } from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "../../Firebase/Firebase"
import { useState } from "react"

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Update the profile after creating the user
        return updateProfile(auth.currentUser, { displayName: username });
      })
      .then(() => {
        // Navigate to the profile page after updating the profile
        navigate("/profile");
      })
      .catch((error) => {
        // Handle specific errors
        if (error.code === 'auth/email-already-in-use') {
          alert("This email address is already in use. Please use a different email.");
        } else if (error.code === 'auth/weak-password') {
          alert("The password is too weak. Please use a stronger password.");
        } else if (error.code === 'auth/invalid-email') {
          alert("The email address is not valid. Please enter a valid email address.");
        } else {
          // Handle other errors
          alert("An error occurred: " + error.message);
        }
      });
  }
    
  return (
    <div className="h-screen accent-bg flex p-10">
      <div className="basis-1/2 flex justify-center items-center">
        <div className="flex gap-4 justify-center">
          <div className="aspect-square h-36">
            <img className="h-full" src="logo.png" alt="" />
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
              onChange={e => setUsername(e.target.value)} 
              value={username} 
              bg="#F2F5FF" 
              h="55px" 
              borderRadius="10" 
              placeholder="User name" 
              type="text" 
              mb="18px" 
            />
            <Input 
              onChange={e => setEmail(e.target.value)} 
              value={email} 
              bg="#F2F5FF" 
              h="55px" 
              borderRadius="10" 
              placeholder="Email Address" 
              type="email" 
              mb="18px" 
            />
            <Input 
              onChange={e => setPassword(e.target.value)} 
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
            <Button 
              bg="#00AFF6" 
              colorScheme="twitter" 
              color="white" 
              w="fit-content" 
              py="22px" 
              px="50px" 
              mb="10px" 
              borderRadius="300" 
              onClick={handSignup}
            >
              Sign Up
            </Button>
            <div className="flex">
              {/* Your SVGs here */}
            </div>
            <div>
              Already a member? <Link to="/login" className="text-blue-600">Log In</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup;
