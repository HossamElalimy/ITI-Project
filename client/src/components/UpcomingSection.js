import SectionLead from "./SectionLead";
import UpcomingTournamentsTable from "./UpcomingTournamentsTable";
import "./upcoming-section.css";

export default function UpcomingSection({ items }) {
  return (
    <section className="upsec">
      <div className="upsec__container">
        <div className="upsec__grid">
          <SectionLead
            eyebrow="Tournaments"
            title="Upcoming Tournaments"
            ctaText="See all"
            ctaHref="/tournaments"
          />
          <UpcomingTournamentsTable items={items} />
        </div>
      </div>
    </section>
  );
}
