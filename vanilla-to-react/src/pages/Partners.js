import React from "react";
import { Link } from "react-router-dom";
import "../styles/2-Partners.css";

export default function Partners() {
  const partners = [
    {
      id: 1,
      name: "Mohamed",
      description:
        "Leading competitive gaming organization supporting our seasonal events.",
    },
    {
      id: 2,
      name: "Ayman",
      description:
        "Trusted partner in organizing top-tier esports tournaments worldwide.",
    },
    {
      id: 3,
      name: "Sara",
      description: "Premium peripherals and gear for pro-level performance.",
    },
  ];

  return React.createElement(
    "main",
    { className: "partners-section" },
    React.createElement("h1", null, "Our Partners"),
    partners.map((partner) =>
      React.createElement(
        "div",
        { key: partner.id, className: "partner-card" },
        React.createElement("div", { className: "partner-image" }),
        React.createElement(
          "div",
          { className: "partner-info" },
          React.createElement("h2", null, partner.name),
          React.createElement("p", null, partner.description),
          React.createElement(
            Link,
            { to: `/partners/${partner.id}`, className: "btn-details" },
            "View Details"
          )
        )
      )
    )
  );
}
