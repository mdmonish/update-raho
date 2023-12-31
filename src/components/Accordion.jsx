import React from "react";
import millify from "millify";

const Accordion = ({ items, active, setActive }) => {
  return (
    <div className={!!items ? "min-h-[84vh]" : ""}>
      <div className="grid grid-cols-2 sm:grid-cols-4 py-4 px-2 ">
        <h4>Exchanges</h4>
        <h4>24h Trade Volume</h4>
        <h4 className="hidden sm:block">Markets</h4>
        <h4 className="hidden sm:block">Changes</h4>
      </div>
      {items?.map((ex, index) => (
        <div key={index}>
          <div
            className={`grid grid-cols-2 sm:grid-cols-4 font-semibold bg-slate-100 rounded-md ${
              index === active ? "rounded-b-none" : " "
            } border-b-2 py-4 px-1 sm:px-2`}
            onClick={() => setActive(active === index ? -1 : index)}
          >
            <h4>
              {ex.reported_rank}.{ex.name}{" "}
            </h4>
            <h4>${millify(ex.quotes?.USD?.reported_volume_24h)}</h4>
            <h4 className="hidden sm:block">{ex.markets}</h4>
            <h4 className="hidden sm:block">
              {" "}
              {millify(ex.confidence_score)}%
            </h4>
          </div>
          {index === active && (
            <div className="py-4 px-2">
              <p>{ex.description.split("<")[0]}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
