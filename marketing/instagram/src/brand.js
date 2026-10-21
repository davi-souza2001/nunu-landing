/* Peças compartilhadas pelas artes do feed e pelo Reel. */

/** Ponto e tangente de uma cúbica de Bézier em t. */
function bez(p0, p1, p2, p3, t) {
  const u = 1 - t;
  const x = u * u * u * p0[0] + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t * t * t * p3[0];
  const y = u * u * u * p0[1] + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t * t * t * p3[1];
  const dx = 3 * u * u * (p1[0] - p0[0]) + 6 * u * t * (p2[0] - p1[0]) + 3 * t * t * (p3[0] - p2[0]);
  const dy = 3 * u * u * (p1[1] - p0[1]) + 6 * u * t * (p2[1] - p1[1]) + 3 * t * t * (p3[1] - p2[1]);
  return { x, y, a: (Math.atan2(dy, dx) * 180) / Math.PI };
}

/**
 * Ramo em traço (line art), no estilo das artes de referência.
 * Posicionado por x/y/rotação/escala dentro de um SVG 1080 de largura.
 */
function branch({ x, y, rot = 0, scale = 1, leaves = 7, color = '#9ab291', width = 3.2, filled = false }) {
  const p0 = [0, 0], p1 = [120, -60], p2 = [260, -40], p3 = [400, -110];
  let out = `<path d="M0 0 C120 -60 260 -40 400 -110" fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round"/>`;
  for (let i = 0; i < leaves; i++) {
    const t = 0.12 + (i / (leaves - 1)) * 0.86;
    const p = bez(p0, p1, p2, p3, t);
    const side = i % 2 === 0 ? -1 : 1;
    const len = 78 - i * 4;
    const ang = p.a + side * 48;
    const leaf = `M0 0 C ${len * 0.3} ${-len * 0.32}, ${len * 0.75} ${-len * 0.3}, ${len} 0 C ${len * 0.75} ${len * 0.3}, ${len * 0.3} ${len * 0.32}, 0 0 Z`;
    out += `<g transform="translate(${p.x} ${p.y}) rotate(${ang})">
      <path d="${leaf}" fill="${filled ? color : 'none'}" fill-opacity="${filled ? 0.55 : 0}" stroke="${color}" stroke-width="${width}" stroke-linejoin="round"/>
      <path d="M4 0 L${len * 0.78} 0" stroke="${color}" stroke-width="${width * 0.6}" stroke-linecap="round" opacity="${filled ? 0 : 0.9}"/>
    </g>`;
  }
  // Folha da ponta.
  const tip = bez(p0, p1, p2, p3, 1);
  out += `<g transform="translate(${tip.x} ${tip.y}) rotate(${tip.a})"><path d="M0 0 C 24 -24, 58 -22, 80 0 C 58 22, 24 24, 0 0 Z" fill="${filled ? color : 'none'}" fill-opacity="${filled ? 0.55 : 0}" stroke="${color}" stroke-width="${width}"/></g>`;
  return `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${scale})">${out}</g>`;
}

/** Ondas de onda sonora com alturas fixas (determinístico para o vídeo). */
function waveBars(n = 28) {
  const h = [10, 22, 34, 18, 40, 28, 14, 36, 24, 42, 16, 30, 38, 20, 12, 34, 26, 40, 18, 28, 36, 14, 22, 32, 18, 26, 12, 20];
  return Array.from({ length: n }, (_, i) => `<i style="height:${h[i % h.length]}px"></i>`).join('');
}

/** Prato do jantar desenhado em SVG (arroz, feijão, filé e salada). */
const PLATE_SVG = `
<svg viewBox="0 0 380 260" width="380" height="260" xmlns="http://www.w3.org/2000/svg">
  <rect width="380" height="260" fill="#cdb79a"/>
  <rect y="190" width="380" height="70" fill="#b89f80"/>
  <ellipse cx="190" cy="140" rx="150" ry="104" fill="#f4f0e8"/>
  <ellipse cx="190" cy="140" rx="118" ry="80" fill="#fbf8f2"/>
  <path d="M110 120 q30 -40 70 -14 q20 30 -12 52 q-44 18 -58 -38z" fill="#fffef9" stroke="#e6dfd2" stroke-width="2"/>
  <g fill="#6b4a33">${Array.from({ length: 22 }, (_, i) => `<ellipse cx="${200 + (i * 37) % 70}" cy="${92 + (i * 23) % 40}" rx="7" ry="5"/>`).join('')}</g>
  <path d="M168 168 q40 -26 92 -8 q16 16 -6 30 q-50 18 -86 -22z" fill="#a8683f"/>
  <path d="M182 172 q34 -14 66 -2" stroke="#7d4b2c" stroke-width="3" fill="none"/>
  <g fill="#8fb27f"><circle cx="270" cy="130" r="14"/><circle cx="288" cy="146" r="12"/><circle cx="262" cy="152" r="11"/></g>
  <g fill="#d9634d"><circle cx="282" cy="124" r="7"/><circle cx="276" cy="160" r="6"/></g>
</svg>`;

/** Celular com a conversa. `messages` define o que aparece. */
function phoneHTML(bodyHTML, day = true) {
  return `
  <div class="phone"><div class="screen">
    <div class="chat-head">
      <div class="avatar"><img src="../assets/simbolo.png" alt=""></div>
      <div><div class="name">Nunu</div><div class="status">online</div></div>
    </div>
    <div class="chat-body">${day ? '<div class="day">Hoje</div>' : ''}${bodyHTML}</div>
    <div class="chat-input">
      <div class="field">Mensagem</div>
      <div class="mic"><svg width="26" height="34" viewBox="0 0 26 34"><rect x="7" y="1" width="12" height="21" rx="6" fill="#fffdf9"/><path d="M2 15a11 11 0 0 0 22 0M13 26v6" stroke="#fffdf9" stroke-width="3" fill="none" stroke-linecap="round"/></svg></div>
    </div>
  </div></div>`;
}

const MSG = {
  audio: `<div class="bubble user" data-id="m1">
      <div class="audio"><span class="play"></span><span class="wave">${waveBars()}</span><span class="dur">0:04</span></div>
      <div class="transcript">“Vou treinar em 20 minutos, o que eu como?”</div>
      <span class="time">07:42</span></div>`,
  reply1: `<div class="bubble nunu" data-id="m2">Se é em 20 minutos, vai de algo leve: uma banana com um fio de mel resolve bem. 🍌

Uma sacada: faltando pouco tempo, refeição pesada atrapalha mais do que ajuda.<span class="time">07:42</span></div>`,
  photo: `<div class="bubble user" data-id="m3"><div class="photo">${PLATE_SVG}</div>e o jantar de ontem, tava ok?<span class="time">07:45</span></div>`,
  reply2: `<div class="bubble nunu" data-id="m4">Tava ótimo! Arroz, feijão e filé dão a base de carboidrato e proteína pra recuperar do treino.

Quer subir um degrau? Uma porção de salada fecha o prato. 🥗<span class="time">07:45</span></div>`,
  typing: `<div class="typing" data-id="typing"><i></i><i></i><i></i></div>`,
};
