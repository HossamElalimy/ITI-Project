import "./section-lead.css";

export default function SectionLead({
  eyebrow = "Tournaments",
  title = "Upcoming Tournaments",
  blurb = "",
  ctaText = "View all",
  ctaHref = "/tournaments",
}) {
  return (
    <aside className="lead">
      <div className="lead__eyebrow">{eyebrow}</div>
      <h2 className="lead__title">{title}</h2>
      {blurb && <p className="lead__blurb">{blurb}</p>}
      <a href={ctaHref} className="lead__cta">{ctaText}</a>
    </aside>
  );
}
