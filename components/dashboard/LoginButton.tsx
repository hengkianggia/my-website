"use client";

import { createClient } from "@/utils/supabase/client";
import React from "react";
import { BsGithub } from "react-icons/bs";

const LoginButton = () => {
  const supabase = createClient();

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  };

  return (
    <div className="">
      <p className="text-5xl">Login to admin dashboard</p>
      <div className="p-3 rounded-md bg-gray-100">
        <BsGithub size={44} className="cursor-pointer" onClick={handleSignIn} />
      </div>
    </div>
  );
};

export default LoginButton;
