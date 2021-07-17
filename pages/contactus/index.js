import React, { useEffect } from "react";
import Navbar from "../../components/Common_Layout/Navbar/Navbar";
import useHydrateState from "../../components/useHydrateState";
import AdminToolbar from "../../components/Common_Layout/AdminToolbar/AdminToolbar";

function ContactUsPage() {
  const [hydrateWithLocalStorage] = useHydrateState();
  useEffect(() => {
    hydrateWithLocalStorage();
  }, []);

  return (
    <div>
      <Navbar />
      <AdminToolbar />
      <h1>Contact us</h1>
    </div>
  );
}

export default ContactUsPage;
