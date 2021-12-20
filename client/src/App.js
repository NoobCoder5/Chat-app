import React,{useState} from "react";
import "./index.css";
import Chat from "./components/Chat"
import Top from "./components/Top"
import SignUp from "./components/SignUp"
const App = () => {
  const [user, setuser] = useState(false)
  return (
    <>
      {
        user ? 
        <div className="bg-gray-800  text-white w-screen h-screen">
        
       <Top/>
       <Chat/>

      </div>

      :
      <SignUp/>
      }
    </>
  );
};

export default App;
