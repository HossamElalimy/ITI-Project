import React from "react";
import "../styles/1-log-re.css"; // نفس تنسيقات صفحة Login

export default function Register() {
  return React.createElement(
    "div",
    { className: "login-section" },
    React.createElement(
      "div",
      { className: "login-box" },
      React.createElement("h1", null, "Create Account"),
      React.createElement(
        "form",
        null,
        React.createElement("input", {
          type: "text",
          placeholder: "Username",
          required: true,
        }),
        React.createElement("input", {
          type: "email",
          placeholder: "Email",
          required: true,
        }),
        React.createElement("input", {
          type: "password",
          placeholder: "Password",
          required: true,
        }),
        React.createElement(
          "button",
          { className: "btn-submit" },
          "Sign Up"
        )
      ),
      React.createElement(
        "p",
        null,
        "Already have an account? ",
        React.createElement("a", { href: "/login" }, "Sign in")
      )
    )
  );
}
