import React, { useEffect, useState } from "react";
import SiteBar from "./home/Navbar";
import Auth from "./auth/Auth";

function App() {
  const [sessionToken, setSessionToken] = useState(""); //1

  useEffect(() => {
    //2
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);
  const updateToken = (newToken) => {
    //3
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };
  return (
    <div>
      <SiteBar />
      <Auth updateToken={updateToken} />
    </div>
  );
}

export default App;
