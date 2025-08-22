import React from "react";
import { Link } from "react-router-dom";
import '../styles/1-log-re.css';

export default function Login() {
  return React.createElement(
    "main",
    { className: "login-section" },
    React.createElement(
      "div",
      { className: "login-box" },
      React.createElement("h1", null, "Welcome back Zeina"),
      React.createElement("input", { type: "email", placeholder: "Email" }),
      React.createElement("input", { type: "password", placeholder: "Password" }),
      React.createElement(
        "div",
        { className: "btn-row" },
        React.createElement(
          "a",
          { className: "forgot-link", href: "#" },
          "Forgot password?"
        ),
        React.createElement(
          "button",
          { className: "btn-submit" },
          "Sign in"
        )
      ),
      React.createElement(
        "p",
        null,
        "Don't have an account? ",
        React.createElement(Link, { to: "/register" }, "Create account")
      )
    )
  );
}
