function renderXP(current, required) {
  const bar = document.querySelector('#xp_bar');
  const segments = 10;

  const progress = Math.min(Math.max(current / required, 0), 1);

  const totalFill = progress * segments;

  for (let i = 0; i < segments; i++) {
    const segment = document.createElement("div");
    segment.className = "xp-segment";

    const fill = document.createElement("div");
    fill.className = "xp-segment_fill";

    const amount = Math.min(Math.max(totalFill - i, 0), 1);

    fill.style.width = `${amount * 100}%`;

    segment.appendChild(fill);
    bar.appendChild(segment);

  }

}

renderXP(1, 3)
