export function ProjectVisual({
  kind,
  compact = false,
}: {
  kind: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`project-visual ${kind} ${compact ? "compact" : ""}`}
      aria-hidden="true"
    >
      {kind === "cobalt" && (
        <div className="ops-ui">
          <div className="ops-top">
            <i />
            <span>Live operations</span>
            <em>12:42</em>
          </div>
          <div className="ops-map">
            <span className="radar r1" />
            <span className="radar r2" />
            <i className="pin p1" />
            <i className="pin p2" />
            <i className="pin p3" />
          </div>
          <div className="ops-status">
            <span>
              <i />
              24 active
            </span>
            <span>2 need attention</span>
          </div>
        </div>
      )}
      {kind === "tangerine" && (
        <div className="city-ui">
          <div className="street-lines" />
          <div className="ticket t1">
            <small>SECTOR 12</small>
            <b>Streetlight repaired</b>
            <span>Resolved · 14:32</span>
          </div>
          <div className="ticket t2">
            <small>NEW REPORT</small>
            <b>Water logging</b>
            <span>Assigned to ward team</span>
          </div>
          <div className="ticket t3">
            <small>PUBLIC RECORD</small>
            <b>Every update, visible.</b>
          </div>
        </div>
      )}
      {kind === "violet" && (
        <div className="decision-ui">
          <span className="orbit o1" />
          <span className="orbit o2" />
          <div className="decision-center">
            What matters
            <br />
            <b>most?</b>
          </div>
          {["Evidence", "Values", "Risk", "Options"].map((x, i) => (
            <span className={`node n${i + 1}`} key={x}>
              {x}
            </span>
          ))}
        </div>
      )}
      {kind === "mint" && (
        <div className="chart-ui">
          <div className="chart-label">
            <small>NEXT 30 MIN</small>
            <b>Flow improving</b>
          </div>
          <svg viewBox="0 0 500 240" preserveAspectRatio="none">
            <defs>
              <linearGradient
                id={`fill-${compact}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0" stopColor="currentColor" stopOpacity=".28" />
                <stop offset="1" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              className="area"
              d="M0 210 C70 200 80 120 150 150 S240 190 290 90 S410 110 500 35 L500 240 L0 240Z"
              fill={`url(#fill-${compact})`}
            />
            <path d="M0 210 C70 200 80 120 150 150 S240 190 290 90 S410 110 500 35" />
          </svg>
          <div className="chart-axis">
            <span>Now</span>
            <span>+15</span>
            <span>+30 min</span>
          </div>
        </div>
      )}
    </div>
  );
}
