import { stats } from "../data/content";

export default function StatsBand() {
  return (
    <section className="stats">
      <div className="wrap">
        <div className="band">
          {stats.map((stat) => (
            <div key={stat.index} className="stat">
              <div className="k">
                <span>{stat.label}</span>
                <span>{stat.index}</span>
              </div>
              <div className="v">
                {stat.value}
                <span className="u">{stat.suffix}</span>
              </div>
              <div className="bars">
                {stat.bars.map((h, i) => (
                  <i key={i} style={{ height: `${h}px` }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
