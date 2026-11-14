import './Xp.css'

function Xp({ current = 0, required = 1 }) {
  const n = 10;
  const progress = required > 0
    ? Math.min(Math.max(current / required, 0), 1)
    : 0;
  const totalFill = progress * n;

  return (
    <div className="Xp">
      <div className="XpContainer">
        <div className="XpTitle">
          <div className="XpLabel">Опыт</div>
          <div className="XpDivisor"></div>
          <div className="XpValue">{current}/{required}</div>
        </div>
        <div className="XpProgress">
          <div className="XpBar">
            {Array.from({ length: n }, (_, i) => {
              const amount = Math.min(Math.max(totalFill - i, 0), 1);

              return (
                <div className="Xp-segment" key={i}>
                  <div
                    className="Xp-segment_fill"
                    style={{ width: `${amount * 100}%` }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Xp
