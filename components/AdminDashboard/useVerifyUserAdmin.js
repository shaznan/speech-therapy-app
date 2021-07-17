import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

function useVerifyUserAdmin() {
  const [isAdmin, setIsAdmin] = useState(false);
  const userRole = useSelector((state) => state.user.entities[0].userRole);
  const router = useRouter();

  const verifyAdmin = () => {
    userRole === "Admin" ? setIsAdmin(true) : setIsAdmin(false);

    if (userRole !== "Admin") {
      router.push("/", null, { shallow: true });
    }
  };

  return [isAdmin, verifyAdmin];
}

export default useVerifyUserAdmin;
