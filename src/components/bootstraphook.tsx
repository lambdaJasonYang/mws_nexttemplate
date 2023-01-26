"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
const UseBootstrap = ({children}:any): any => {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      }, []);
    return (<>{children}</>)
}

export { UseBootstrap }