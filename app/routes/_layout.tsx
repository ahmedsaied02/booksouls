import { Outlet } from "@remix-run/react";
import Logo from "~/assets/logoheader.svg?react";
export default function Layout() {
  return (
    <>
      <header className="bg-primary flex flex-col items-center" >
    
        <Logo  className=""/>
        <ul className="flex flex-row justify-center items-center">
            <li>Home</li>
            <div className="flex items-center justify-center w-[50px] h-[50px]">x</div>
            <li>Categries</li>
            <div className="flex items-center justify-center w-[50px] h-[50px]">x</div>
            <li>Authors</li>
            <div className="flex items-center justify-center w-[50px] h-[50px]">x</div>
            <li>Library</li>
        </ul>

        
        
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </>
  );
}
