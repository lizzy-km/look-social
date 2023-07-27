import { SignIn } from "@clerk/clerk-react";

export default function LogIn() {
  return (
    <div className=" flex py-[1rem] justify-center items-start w-full h-screen " >
      <div className=" flex  justify-center items-start p-[2rem] gap-3 bg-slate-500 rounded-[24px] w-[31%] h-[250px]  " >
        <div className=" flex justify-center items-end gap-3 w-[50%] " >
        <img src="/src/assets/L.svg" alt=""/>
        <img src="/src/assets/o.svg" alt=""/>

        <img src="/src/assets/o.svg" alt=""/>

        <img src="/src/assets/K.svg" alt=""/>
        </div>
        

        
      </div>
      <div className=" absolute bottom-[25%] " >
      <SignIn />
      </div>
      
    </div>
  
  );
}