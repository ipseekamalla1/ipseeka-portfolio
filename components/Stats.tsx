import React from "react";
import CountUp from "react-countup";

const stats = [
  {
    nums: 4,
    text: "Expertised Languages",
  },
  {
    nums: 20,
    text: "Projects Completed",
  },
  {
    nums: 97,
    text: "Commits",
  },
];

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          {stats.map((item, index) => (
            <div key={index} className="p-4">
              <h2 className="text-4xl xl:text-6xl font-extrabold text-amber-600">
                <CountUp end={item.nums} duration={5} delay={2} />
              </h2>
              <p className="text-lg mt-2 font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
