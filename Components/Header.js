import React from "react";
import Link from "next/link"

const Header = () => {
  return (
    <>
      <header className=" bg-cyan-600 text-white">
        <div className="px-3 h-14 bg-cyan-600 flex items-center justify-between ">
          <h2>LOGO</h2>
          <div className="flex items-center justify-between gap-8">
          <Link href ="/About"><h3>About</h3></Link>
          <Link href ="/About"><h3>Write</h3></Link>
          <Link href ="/About"><h3>Help</h3></Link>
          <Link href ="/About"><button className=""><h3>Sign In</h3></button></Link>
          <Link href ="/About"><button className="bg-neutral-600 px-6 py-1 rounded  font-bold"><h3>Get Started</h3></button></Link>
        </div>
        </div>
      </header>
    </>
  );
};

export default Header;
