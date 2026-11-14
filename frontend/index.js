function renderXP(current, required) {
  const bar = document.querySelector("#xp_bar");
  const value = document.querySelector(".xp_title_value");
  if (!bar) return;

  bar.replaceChildren();

  value.innerHTML = `${current}/${required}`

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

function renderTier(tier) {
  const text = document.querySelector(".tier_text");
  if (!text) return;

  if (!["Ss-", "Ss", "Ss+", "Sss-", "Sss"].includes(tier)) {
    text.replaceChildren(document.createTextNode(tier));
    return;
  }

  const suffix = document.createElement("span");
  suffix.className = "tier_suffix";
  suffix.textContent = tier.slice(1);

  text.replaceChildren(document.createTextNode(tier.charAt(0)), suffix);
}

function renderBattery(energy_cost) {
  const battery = document.querySelector(".energy > img");
  if (energy_cost < 0 || energy_cost > 3) return;

  battery.setAttribute("src", `meta/img/Battery_${energy_cost}.svg`)
}

renderXP(2, 3)
renderTier("F-");
renderBattery(2)
