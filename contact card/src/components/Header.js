import React from "react";

const Header = () => {
  return (
    <div  style={mystyle}>     
        <h2>Contact Manager</h2>     
    </div>
  );
};
const mystyle = {
  color: "#fff",
  backgroundColor: "#287",
  padding: "10px",
  textAlign:"center",
  marginBottom: "1.2rem",
  marginTop:"0.2rem"
};
export default Header;