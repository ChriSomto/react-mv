import Input from "../components/Input";
import { Lock, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";


const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Pass: ${password}`)
   
  };

  return (
    <div className={`flex h-[100vh] flex-col items-center py-6 px-4 transition-all duration-300 ease-in-out`}>
        <div className="w-[500px]">
            <div className="p-8">
        <div className="w-full flex ml-5 items-center gap-3 h-max-content">
        <a href="/" className="flex gap-2 text-[#e83aff] ml-13">
                <ArrowLeft className="text-[#e83aff] cursor-pointer"/> Home
            </a>
        </div>
        <h3 className="text-2xl mb-6 mt-10 text-center text-grey bg-clip-text">
          Sign into your account
        </h3>

        <form onSubmit={handleSignUp} className="mt-10 px-15">
          <Input
            icon={Mail}
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={Lock}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        

          <button
            className="mt-5 w-full py-3 px-4 bg-[#b854cc] text-white font-bold rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-[#7b2286] focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
            type="submit"
          >
           Sign In
          </button>
          
        </form>
            </div>
            <div className="px-8 py-4 bg-transparent bg-opacity-50 flex justify-center">
                <p className="text-sm text-gray-400">
                Don&apos;t have an account?{" "}{" "}
                <Link to="/create-account" className="text-[#e83aff] hover:underline">
                    Create account
                </Link>
                </p>
            </div>
        </div>
    </div>
  );
};

export default Signin;
