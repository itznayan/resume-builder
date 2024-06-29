import React from "react";
import { Button } from "../button";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

const Header = () => {
  const { user, isSignedIn } = useUser();

  return (
    <div className="p-3 px-5 flex justify-between shadow-lg">
      <img
        src="./logo.png"
        alt="logo"
        className=" px-2 scale-150"
        width={100}
        height={100}
      />
      {isSignedIn ? (
        <div className="flex gap-2 items-center">
          <Link to={"/dashboard"}>
            <Button>Dashboard</Button>
          </Link>
          <div className="bg-gray-200 flex justify-center items-center p-[3px] rounded-full">
            <UserButton />
          </div>
        </div>
      ) : (
        <Link to={"./auth/sign-in"}>
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
