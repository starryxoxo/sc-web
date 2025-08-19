---
{"dg-publish":true,"permalink":"/exp/"}
---

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Victory Flow</title>
  <style>
    body {
      margin: 0;
      height: 100vh;
      background: linear-gradient(#0b1323 70%, #385cf8 100%);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    svg {
      width: 90vw;
      max-width: 900px;
      height: 300px;
      display: block;
    }
    /* Animate vertical flow */
    .flowRect {
      animation: flowUp 3s linear infinite;
    }
    @keyframes flowUp {
      0% { transform: translateY(150px); }
      100% { transform: translateY(-150px); }
    }
  </style>
</head>
<body>
  <svg viewBox="0 0 900 300" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Blue flowing gradient -->
      <linearGradient id="blueFlowGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#35c2ff" stop-opacity="0.8"/>
        <stop offset="50%" stop-color="#83e5ff" stop-opacity="1"/>
        <stop offset="100%" stop-color="#35c2ff" stop-opacity="0.8"/>
      </linearGradient>

      <!-- Text mask -->
      <mask id="textMask">
        <rect width="900" height="300" fill="black"/>
        <text x="50%" y="190" font-size="130" font-weight="900" fill="white" letter-spacing="15" text-anchor="middle">
          VICTORY
        </text>
      </mask>

      <!-- Wave/distortion filter -->
      <filter id="waveFilter" x="0" y="0" width="100%" height="100%">
        <feTurbulence id="turbulence" baseFrequency="0.01 0.05" numOctaves="3" seed="2" result="turb" />
        <feDisplacementMap in="SourceGraphic" in2="turb" scale="12" xChannelSelector="R" yChannelSelector="G" />
        <animate xlink:href="#turbulence" attributeName="baseFrequency" values="0.02 0.08; 0.005 0.03; 0.02 0.08" dur="5s" repeatCount="indefinite" />
      </filter>
    </defs>

    <!-- Background blue glow ellipse -->
    <ellipse cx="450" cy="150" rx="350" ry="60" fill="#53c7ff" fill-opacity="0.3" />

    <!-- Flowing rectangle inside mask with wave filter -->
    <g mask="url(#textMask)" filter="url(#waveFilter)">
      <rect class="flowRect" x="0" y="0" width="900" height="300" fill="url(#blueFlowGrad)" />
    </g>

    <!-- Main text outline for visibility -->
    <text x="50%" y="190" font-size="130" font-weight="900" fill="white" letter-spacing="15" text-anchor="middle" opacity="0.8" style="text-shadow: 0 0 10px #35c2ff;">
      VICTORY
    </text>
  </svg>
</body>
</html>
