import React from "react";
import '../styles/3-styles.css';

export default function Home() {
  return React.createElement(
    "main",
    null,
    React.createElement(
      "section",
      { className: "hero" },
      React.createElement("h1", null, "Tournaments"),
      React.createElement("button", { className: "btn-cta" }, "Get Start")
    ),
    React.createElement(
      "section",
      { className: "tournaments-section" },
      React.createElement(
        "div",
        { className: "title-section" },
        React.createElement("h1", null, "Tournaments"),
        React.createElement(
          "button",
          { className: "all-tournaments-btn" },
          "All tournaments"
        )
      ),
      React.createElement(
        "div",
        { className: "status" },
        React.createElement("span", { className: "active" }, "Active"),
        React.createElement("span", { className: "expired" }, "Expired")
      ),
      React.createElement(
        "div",
        { className: "tournaments-table" },
        React.createElement(
          "div",
          { className: "table-header" },
          React.createElement("div", null, "Game"),
          React.createElement("div", null, "Date"),
          React.createElement("div", null, "Teams"),
          React.createElement("div", null, "Status"),
          React.createElement("div", null, "Action")
        ),
        React.createElement(
          "div",
          { className: "table-row" },
          React.createElement(
            "div",
            null,
            "Valorant ",
            React.createElement("span", { className: "live-badge" }, "LIVE")
          ),
          React.createElement("div", null, "Aug 24"),
          React.createElement("div", null, "16"),
          React.createElement("div", null, "Ongoing"),
          React.createElement(
            "div",
            null,
            React.createElement("button", { className: "checkin-btn" }, "Check In")
          )
        ),
        React.createElement(
          "div",
          { className: "table-row2" },
          React.createElement("div", null, "CS:GO"),
          React.createElement("div", null, "Aug 28"),
          React.createElement("div", null, "8"),
          React.createElement("div", null, "Registration"),
          React.createElement(
            "div",
            null,
            React.createElement("button", { className: "checkin-btn2" }, "Details")
          )
        ),
        React.createElement(
          "div",
          { className: "table-row3" },
          React.createElement("div", null, "Fortnite"),
          React.createElement("div", null, "Sep 2"),
          React.createElement("div", null, "24"),
          React.createElement("div", null, "Upcoming"),
          React.createElement(
            "div",
            null,
            React.createElement("button", { className: "checkin-btn3" }, "Join")
          )
        )
      )
    )
  );
}
