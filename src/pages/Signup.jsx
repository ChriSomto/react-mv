import Input from "../components/Input";
import { Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { FcGoogle } from "react-icons/fc";



const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Pass: ${password}`);
  };

  const handleGoogleAuth = async () => {
    console.log("The signup action....");
  };

  return (
    <div className="flex h-[100vh] flex-col items-center py-6 px-4 transition-all duration-300 ease-in-out">
      <div className="w-[500px]">
        <div className="p-8">
          <h3 className="text-2xl mb-6 mt-1 text-center text-grey bg-clip-text">
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
              className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-purple-500 via-cyan-500 to-indigo-500 text-white font-bold rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
              type="submit"
            >
              Create account
            </button>
            <div className="flex items-center gap-4 w-full mt-4 justify-center">
              <div className="w-[40%] h-[1px] bg-[#f5f5f5]"></div>
              <p>or</p>
              <div className="w-[40%] h-[1px] bg-[#f5f5f5]"></div>
              </div>
              <div className="relative mt-5 w-full p-[2px] bg-gradient-to-r from-purple-500 via-cyan-500 to-indigo-500 rounded-lg shadow-lg">
                <button
                  className="w-full py-3 px-4 text-white font-bold rounded-lg flex items-center justify-center gap-3 bg-[#1a1a1a] focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:ring-offset-1 focus:ring-offset-gray-900 transition duration-200"
                  type="button"
                  onClick={handleGoogleAuth}
                >
                  <FcGoogle className="text-[#e83aff]" />
                  Google
                </button>
              </div>
          </form>
        </div>
        <div className="px-8 py-4 bg-transparent bg-opacity-50 flex justify-center">
          <div className="text-sm text-gray-400 flex nowrap">
           Already have an account?{" "}
            <Link to="/signin" className="text-[#e83aff] hover:underline">
            <p className="font-bold bg-gradient-to-r from-purple-500 ml-1 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
              Sign in
            </p>

            </Link>
          </div>
        </div>
          <div className="w-full flex justify-center items-center gap-3 h-max-content">
            <a href="/" className="flex gap-2 text-[#e83aff]">
              <ArrowLeft className="text-[#e83aff] cursor-pointer" /> Go Home
            </a>
          </div>
      </div>
    </div>
  );
};

export default Signup;
