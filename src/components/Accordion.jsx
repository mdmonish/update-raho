import React from "react";
import millify from "millify";

const Accordion = ({ items, active, setActive }) => {
  return (
    <>
      {items?.map((ex, index) => (
        <div key={index}>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}
            onClick={() => setActive(active === index ? -1 : index)}
          >
            <h4>
              {ex.reported_rank}.{ex.name}{" "}
            </h4>
            <h4>${millify(ex.quotes?.USD?.reported_volume_24h)}</h4>
            <h4>{ex.markets}</h4>
            <h4> {millify(ex.confidence_score)}%</h4>
          </div>
          {index === active && (
            <div>
              <p>{ex.description.split("<")[0]}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Accordion;
