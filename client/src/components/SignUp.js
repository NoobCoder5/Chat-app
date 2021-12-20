import React,{useState} from "react";
import "./style.css"
const SignUp = () => {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    console.log(username,password);
  return (
    <>
      <div className="flex justify-start items-center img h-screen">
        <div className="w-full m-14 max-w-xs">
          <form className="bg-transparent   rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                for="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                value={username}
                placeholder="Username"
                onChange={(e)=>{setusername(e.target.value)}}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-white text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                value={password}
                onChange={(e)=>{setpassword(e.target.value)}}
                type="password"
                placeholder="******************"
              />
              {/* <div className="mb-6">
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-white text-sm font-bold mb-2">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    className="mt-1 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="you@example.com"
                  />
                </label>
              </div> */}
              {/* <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p> */}
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
            
            </div>
          </form>
          
        </div>
      </div>
    </>
  );
};

export default SignUp;
