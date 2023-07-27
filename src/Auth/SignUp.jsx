import { SignUp } from "@clerk/clerk-react";

export default function Register() {
  return (
    <div className=" flex justify-center items-center w-full h-screen " >
      <div className=" absolute bottom-[10%] " >
      <SignUp />
      </div>
      
    </div>
  
  );
}