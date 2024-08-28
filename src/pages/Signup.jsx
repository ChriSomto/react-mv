import Input from "../components/Input";
import { Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";


const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Pass: ${password}`)
   
  };

  return (
    <div className={`flex h-[100vh] flex-col items-center py-6 px-4 transition-all duration-300 ease-in-out`}>
        <div className="w-[500px]">
            <div className="p-8">
        <div className="w-full flex items-center gap-3 h-max-content ml-8">
            <a href="/" className="flex gap-2 text-[#e83aff] ml-13">
                <ArrowLeft className="text-[#e83aff] cursor-pointer"/> Home
            </a>
        </div>
        <h3 className="text-2xl mb-6 mt-10 text-center text-grey bg-clip-text">
          Create an Account
        </h3>

        <form onSubmit={handleSignUp} className="mt-10 px-15" autoComplete="off">
          <Input
            icon={User}
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
           Create account
          </button>
          
        </form>
            </div>
            <div className="px-8 py-4 bg-transparent bg-opacity-50 flex justify-center">
                <p className="text-sm text-gray-400">
                Already have an account?{" "}
                <Link to="/signin" className="text-[#e83aff] hover:underline">
                    Login
                </Link>
                </p>
            </div>
        </div>
    </div>
  );
};

export default Signup;
