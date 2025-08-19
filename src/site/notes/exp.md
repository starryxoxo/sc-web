---
{"dg-publish":true,"permalink":"/exp/"}
---


<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Victory Glow</title>
<style>
  body {
    margin:0;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#0b1323;
    background:
      radial-gradient(900px 500px at 50% 15%, #172544 0%, transparent 60%),
      radial-gradient(700px 400px at 50% 85%, #101d36 0%, transparent 70%),
      #0b1323;
  }

  svg {
    width: min(90vw, 1000px);
    height: auto;
  }

  /* Animate the blue sweep */
  .shine {
    animation: sweep 3s linear infinite;
  }
  @keyframes sweep {
    0%   { transform: translateX(-400px); }
    100% { transform: translateX(400px); }
  }

  /* Animate the top arc pulse */
  .top-arc {
    animation: arcPulse 3.2s ease-in-out infinite;
    transform-origin: center;
  }
  @keyframes arcPulse {
    0%,100% { transform: scaleX(1); opacity:.9; }
    50%     { transform: scaleX(1.05); opacity:1; }
  }
</style>
</head>
<body>

<svg viewBox="0 0 1000 360" xmlns="http://www.w3.org/2000/svg">

  <defs>
    <!-- Gold gradient -->
    <linearGradient id="gold" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%"  stop-color="#fff6d6"/>
      <stop offset="55%" stop-color="#f2c86e"/>
      <stop offset="100%" stop-color="#8a6b2b"/>
    </linearGradient>

    <!-- Blue sweep -->
    <linearGradient id="blueSweep" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%"   stop-color="#000" stop-opacity="0"/>
      <stop offset="40%"  stop-color="#83e5ff" stop-opacity="1"/>
      <stop offset="50%"  stop-color="#35c2ff" stop-opacity="1"/>
      <stop offset="60%"  stop-color="#83e5ff" stop-opacity="1"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0"/>
    </linearGradient>

    <!-- Arc gradient -->
    <radialGradient id="arcGrad" cx="50%" cy="110%" r="90%">
      <stop offset="0%"   stop-color="#58d3ff" stop-opacity="0.55"/>
      <stop offset="35%"  stop-color="#2babff" stop-opacity="0.35"/>
      <stop offset="70%"  stop-color="#2babff" stop-opacity="0"/>
    </radialGradient>

    <!-- Blur filters -->
    <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="6"/>
    </filter>
    <filter id="arcBlur" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="8"/>
    </filter>

    <!-- Mask shaped like VICTORY -->
    <mask id="textMask">
      <rect width="100%" height="100%" fill="black"/>
      <text x="50%" y="215" text-anchor="middle"
            font-size="160" font-weight="900" letter-spacing="10"
            fill="white">VICTORY</text>
    </mask>
  </defs>

  <!-- Top glowing arc -->
  <g class="top-arc" filter="url(#arcBlur)">
    <ellipse cx="500" cy="70" rx="360" ry="42" fill="url(#arcGrad)"/>
  </g>

  <!-- Gold text -->
  <text x="50%" y="215" text-anchor="middle"
        font-size="160" font-weight="900" letter-spacing="10"
        fill="url(#gold)" stroke="#ffffff" stroke-opacity=".18" stroke-width="2">
    VICTORY
  </text>

  <!-- Soft glow behind text -->
  <ellipse cx="500" cy="225" rx="360" ry="60" fill="#53c7ff" opacity=".18" filter="url(#softGlow)"/>

  <!-- Blue shimmer inside letters -->
  <g mask="url(#textMask)" filter="url(#softGlow)">
    <rect class="shine" x="-500" y="120" width="2000" height="80" fill="url(#blueSweep)"/>
  </g>

  <!-- Subtitle -->
  <text x="50%" y="255" text-anchor="middle"
        font-size="18" fill="#ffffff" opacity=".55" letter-spacing="6">MATCH RESULT</text>
</svg>

</body>
</html>