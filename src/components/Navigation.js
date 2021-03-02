import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(){
    return (
        <div className="nav">
            {/* <a herf="/">Home</a> 를 사용하면 react의 spa의 장점을 못살림
                react-router-dom을 사용하여 <Link to="/">Home</Link>로 사용하기 */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Navigation;