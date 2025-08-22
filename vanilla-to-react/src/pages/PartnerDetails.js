import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaGlobe } from "react-icons/fa";
import "../styles/PartnerDetails.css";

export default function PartnerDetails() {
  const { id } = useParams();

  const partners = {
    1: {
      name: "Mohamed",
      description:
        "Leading competitive gaming organization supporting our seasonal events.",
      extra:
        "Mohamed is a well-known figure in esports with years of experience organizing international tournaments.",
      socials: ["facebook", "twitter", "youtube"],
      image: "https://via.placeholder.com/300x200?text=Mohamed",
    },
    2: {
      name: "Ayman",
      description:
        "Trusted partner in organizing top-tier esports tournaments worldwide.",
      extra: "Ayman has been supporting esports communities since 2015 with passion and dedication.",
      socials: ["facebook", "twitter", "youtube"],
      image: "https://via.placeholder.com/300x200?text=Ayman",
    },
    3: {
      name: "Sara",
      description: "Premium peripherals and gear for pro-level performance.",
      extra: "Sara’s brand provides top-notch equipment trusted by professional players worldwide.",
      socials: ["website", "instagram"],
      image: "https://via.placeholder.com/300x200?text=Sara",
    },
  };

  const partner = partners[id];

  if (!partner) {
    return React.createElement("h2", { className: "not-found" }, "Partner not found");
  }

  // Map socials → icons
  const getSocialIcon = (platform) => {
    switch (platform) {
      case "facebook":
        return React.createElement(FaFacebook);
      case "twitter":
        return React.createElement(FaTwitter);
      case "youtube":
        return React.createElement(FaYoutube);
      case "instagram":
        return React.createElement(FaInstagram);
      case "website":
        return React.createElement(FaGlobe);
      default:
        return null;
    }
  };

  return React.createElement(
    "main",
    { className: "partner-details" },
    React.createElement(
      "div",
      { className: "card" },
      React.createElement("img", {
        src: partner.image,
        alt: partner.name,
        className: "partner-img",
      }),
      React.createElement(
        "div",
        { className: "info" },
        React.createElement("h1", null, partner.name),
        React.createElement("p", { className: "desc" }, partner.description),
        React.createElement("p", { className: "extra" }, partner.extra),
        React.createElement(
          "div",
          { className: "socials" },
          partner.socials.map((social, index) =>
            React.createElement(
              "a",
              { key: index, href: "#", className: `icon ${social}` },
              getSocialIcon(social)
            )
          )
        ),
        React.createElement(
          Link,
          { to: "/partners", className: "back-btn" },
          "← Back to Partners"
        )
      )
    )
  );
}
