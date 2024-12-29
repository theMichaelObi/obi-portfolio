import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div className={`w-full inline-block z-0 bg-white ${className}`}>
      {children}
    </div>
  )
}

export default Layout;