import { Button, Input } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../services/api"; // Ensure correct path

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await loginUser({ email, password });
      if (response.token) {
        localStorage.setItem('token', response.token);
        navigate('/');
      } else {
        setError(response.message || 'Login failed');
      }
    } catch (error) {
      console.error(error); // Log error details
      setError('Login failed');
    }
  };

  return (
    <div className="h-screen accent-bg flex p-10">
      <div className="basis-1/2 flex justify-center items-center">
        <div className="flex gap-4 justify-center">
          <div className="aspect-square w-36 overflow-hidden">
            <img className="w-full" src="logo.png" alt="SkillSwap Logo" />
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
            <Input 
              aria-label="Email Address"
              onChange={e => setEmail(e.target.value)} 
              value={email} 
              bg="#F2F5FF" 
              h="55px" 
              borderRadius="10" 
              placeholder="Email Address" 
              mb="30px" 
              type="email" 
            />
            <Input 
              aria-label="Password"
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
          {error && <p className="text-red-500">{error}</p>}
          <div className="basis-full w-full flex flex-col items-center justify-evenly">
            <Button 
              bg="#00AFF6" 
              colorScheme="twitter" 
              color="white" 
              w="fit-content" 
              py="22px" 
              px="50px" 
              mb="30px" 
              borderRadius="300" 
              onClick={handleLogin}
            >
              Login
            </Button>
            <div className="flex">
              {/* Social media buttons */}
            </div>
            <div>Not a member? <Link to="/signup" className="text-blue-600">Sign Up</Link></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
