---
{"dg-publish":true,"permalink":"/exp/"}
---

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Victory</title>
  <style>
    body {
      margin: 0;
      height: 100vh;
      background: linear-gradient(#0b1323 70%, #385cf8 100%);
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }
    .victory-container {
      margin-top: 34px;
      width: min(95vw, 900px);
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: start;
      position: relative;
    }
    .shine {
      animation: sweep 2.2s linear infinite;
    }
    @keyframes sweep {
      0% { transform: translateX(-700px);}
      100% { transform: translateX(700px);}
    }
  </style>
</head>
<body>
  <div class="victory-container">
    <svg viewBox="0 0 900 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Blue beams radial gradient -->
        <radialGradient id="beamRadial" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#53c7ff" stop-opacity="0.52"/>
          <stop offset="70%" stop-color="#385cf8" stop-opacity="0.22"/>
          <stop offset="100%" stop-color="#243464" stop-opacity="0"/>
        </radialGradient>
        <!-- Animated blue sweep -->
        <linearGradient id="blueSweep" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#0000"/>
          <stop offset="38%" stop-color="#7aefff"/>
          <stop offset="50%" stop-color="#35c2ff"/>
          <stop offset="62%" stop-color="#7aefff"/>
          <stop offset="100%" stop-color="#0000"/>
        </linearGradient>
        <!-- Mask for shimmer effect -->
        <mask id="victory-mask">
          <rect width="100%" height="100%" fill="black"/>
          <text x="50%" y="150" text-anchor="middle" font-size="130" font-weight="900" fill="white" letter-spacing="16">VICTORY</text>
        </mask>
        <!-- Main text glow -->
        <filter id="glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="9" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <!-- Glow beams behind text -->
      <ellipse cx="450" cy="132" rx="340" ry="63" fill="url(#beamRadial)" opacity="0.98"/>
      <!-- Animated blue shimmer inside text -->
      <g mask="url(#victory-mask)">
        <rect class="shine" x="-700" y="90" width="1400" height="80" fill="url(#blueSweep)"/>
      </g>
      <!-- Main "VICTORY" text with glow -->
      <text x="50%" y="150" text-anchor="middle" font-size="130" font-weight="900"
            fill="#ffffff" letter-spacing="16" opacity="0.98"
            style="text-shadow: 0px 0px 22px #53c7ffaa;"
            filter="url(#glow)">
        VICTORY
      </text>
    </svg>
  </div>
</body>
</html>
