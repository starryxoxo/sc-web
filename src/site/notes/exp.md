---
{"dg-publish":true,"permalink":"/exp/"}
---

<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Victory Glow (HTML+CSS+SVG)</title>
<style>
  :root{
    --bg:#0b1323;
  }
  html,body{
    height:100%;
    margin:0;
  }
  body{
    display:grid; place-items:center; background:
      radial-gradient(900px 500px at 50% 15%, #172544 0%, transparent 60%),
      radial-gradient(700px 400px at 50% 85%, #101d36 0%, transparent 70%),
      var(--bg);
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  }
  /* Size the SVG responsively */
  .stage{ width:min(92vw, 1100px); }

  /* Animate the blue sweep rect that is masked by the text */
  .shine{
    animation: sweep 3s linear infinite;
    transform-box: fill-box;           /* make transforms relative to the rect box */
    transform-origin: center;
  }
  @keyframes sweep{
    0%   { transform: translateX(-40%); }
    100% { transform: translateX(40%);  }
  }

  /* Gentle pulse on the top arc */
  .top-arc{
    animation: arcPulse 3.2s ease-in-out infinite;
    transform-box: fill-box;
    transform-origin: center;
  }
  @keyframes arcPulse{
    0%,100% { transform: scaleX(1); opacity:.9; }
    50%     { transform: scaleX(1.06); opacity:1; }
  }
</style>
</head>
<body>

<!-- All visuals are inside this single SVG so it works everywhere -->
<svg class="stage" viewBox="0 0 1000 360" xmlns="http://www.w3.org/2000/svg">

  <!-- ====== DEFINITIONS ====== -->
  <defs>
    <!-- Gold text gradient -->
    <linearGradient id="gold" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%"  stop-color="#fff6d6"/>
      <stop offset="55%" stop-color="#f2c86e"/>
      <stop offset="100%" stop-color="#8a6b2b"/>
    </linearGradient>

    <!-- Blue sweep gradient (transparent → bright blue → transparent) -->
    <linearGradient id="blueSweep" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0%"   stop-color="rgba(0,0,0,0)"/>
      <stop offset="40%"  stop-color="#83e5ff"/>
      <stop offset="50%"  stop-color="#35c2ff"/>
      <stop offset="60%"  stop-color="#83e5ff"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </linearGradient>

    <!-- Blue arc gradient -->
    <radialGradient id="arcGrad" cx="50%" cy="110%" r="90%">
      <stop offset="0%"   stop-color="#58d3ff" stop-opacity=".55"/>
      <stop offset="35%"  stop-color="#2babff" stop-opacity=".35"/>
      <stop offset="70%"  stop-color="#2babff" stop-opacity="0"/>
    </radialGradient>

    <!-- Soft glow blur -->
    <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="6"/>
    </filter>
    <filter id="arcBlur" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="8"/>
    </filter>

    <!-- Mask shaped like the word VICTORY so we can sweep inside it -->
    <mask id="textMask">
      <rect width="100%" height="100%" fill="black"/>
      <text x="50%" y="215" text-anchor="middle"
            font-size="160" font-weight="900" letter-spacing="10"
            fill="white">VICTORY</text>
    </mask>
  </defs>

  <!-- ====== TOP BLUE ARC (the glow above the word) ====== -->
  <g class="top-arc" filter="url(#arcBlur)">
    <ellipse cx="500" cy="70" rx="360" ry="42" fill="url(#arcGrad)"/>
  </g>

  <!-- ====== BASE GOLD TEXT ====== -->
  <text x="50%" y="215" text-anchor="middle"
        font-size="160" font-weight="900" letter-spacing="10"
        fill="url(#gold)" stroke="#ffffff" stroke-opacity=".18" stroke-width="2">
    VICTORY
  </text>

  <!-- Soft outer glow under the text -->
  <ellipse cx="500" cy="225" rx="360" ry="60" fill="#53c7ff" opacity=".18" filter="url(#softGlow)"/>

  <!-- ====== BLUE SHIMMER that moves THROUGH the letters ====== -->
  <g mask="url(#textMask)" filter="url(#softGlow)">
    <!-- Wide rect so the gradient has room to travel -->
    <rect class="shine" x="-500" y="80" width="2000" height="120" fill="url(#blueSweep)"/>
  </g>

  <!-- Optional tiny caption -->
  <text x="50%" y="255" text-anchor="middle"
        font-size="18" fill="#ffffff" opacity=".55" letter-spacing="6">MATCH RESULT</text>
</svg>

</body>
</html>