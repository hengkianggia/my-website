"use client";

import React from "react";
import { BsGithub } from "react-icons/bs";
import { createClient } from "@/utils/supabase/client";

const LoginAdmin = () => {
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
    <div className="w-screen h-screen grid place-items-center">
      <div className="flex flex-col gap-3 items-center">
        <p>Login to admin dashboard</p>
        <div className="p-3 rounded-md bg-gray-100">
          <BsGithub
            size={44}
            className="cursor-pointer"
            onClick={handleSignIn}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
