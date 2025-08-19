---
{"dg-publish":true,"permalink":"/exp/"}
---


<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>MLBB-style Victory Glow</title>

<style>
  :root{
    --bg:#0a1220;
    --gold1:#f6d37a;
    --gold2:#e7b95a;
    --gold3:#8a6b2b;
  }

  /* Stage */
  body{
    margin:0;
    min-height:100svh;
    display:grid;
    place-items:center;
    background:
      radial-gradient(1200px 600px at 50% 10%, #15223f 0%, transparent 60%),
      radial-gradient(800px 400px at 50% 90%, #0f1a31 0%, transparent 70%),
      var(--bg);
    font-family: ui-sans-serif, system-ui, Segoe UI, Roboto, Helvetica, Arial;
    color:#fff;
  }

  .banner{
    position:relative;
    padding:40px 56px 56px;
    isolation:isolate; /* keep glows under control */
  }

  /* The word */
  .victory{
    position:relative;
    font-weight:900;
    font-size: clamp(48px, 12vw, 140px);
    letter-spacing: .1em;
    text-transform:uppercase;
    line-height:1;
    /* Golden bevel base */
    background:
      linear-gradient(#fff, #fff) padding-box,
      linear-gradient(180deg, var(--gold1), var(--gold2) 55%, var(--gold3)) border-box;
    -webkit-background-clip:text, border-box;
            background-clip:text, border-box;
    -webkit-text-fill-color:transparent;
    text-shadow:
      0 1px 0 #fff8,
      0 6px 16px #0008;
  }

  /* Soft pulsing outer glow */
  .victory::after{
    content:"";
    position:absolute; inset:-12px -28px -18px;
    filter:blur(18px);
    background: radial-gradient(60% 35% at 50% 60%, #53c7ff55, transparent 70%);
    z-index:-1;
    animation:pulse 2.4s ease-in-out infinite;
  }

  /* Blue shimmer sweeping *through* the text */
  .victory .shine{
    position:absolute; inset:0;
    background:
      linear-gradient(115deg,
        transparent 0 35%,
        #83e5ff 45%,
        #3cc4ff 50%,
        #83e5ff 55%,
        transparent 65% 100%);
    background-size: 220% 100%;
    mix-blend-mode:screen;         /* adds the glow to the gold */
    filter:blur(0.6px) drop-shadow(0 0 12px #38b6ff);
    animation:shimmer 3s linear infinite;
    -webkit-mask: linear-gradient(#000, #000) text; /* clip to text only */
            mask: linear-gradient(#000, #000) text;
    pointer-events:none;
  }

  /* Thin inner highlight band moving slightly faster */
  .victory .beam{
    position:absolute; inset:0;
    background:
      linear-gradient(115deg,
        transparent 0 40%,
        #e6fbff 50%,
        transparent 60% 100%);
    background-size:220% 100%;
    mix-blend-mode:screen;
    filter:blur(0.5px);
    animation:shimmer 2.2s linear infinite;
    -webkit-mask: linear-gradient(#000, #000) text;
            mask: linear-gradient(#000, #000) text;
  }

  /* A separate blue arc gliding above the word (like MLBB’s top glow) */
  .top-arc{
    position:absolute;
    left:50%; top:-24px; translate:-50% 0;
    width:min(92vw, 900px); height:80px;
    pointer-events:none; z-index:-1;
    background:
      radial-gradient(60% 90% at 50% 110%,
        #51d0ff55 0%,
        #2ca9ff33 35%,
        transparent 70%);
    mask: radial-gradient(90% 120% at 50% 120%, #0000 0 40%, #000 60% 100%);
    animation:arcSweep 3.6s ease-in-out infinite;
    filter: blur(8px) drop-shadow(0 10px 18px #1e9dff55);
  }

  /* Decorative wing flares (optional) */
  .wing{
    position:absolute; top:8%;
    width:26vw; max-width:280px; aspect-ratio:2.6/1;
    background:
      conic-gradient(from 200deg at 0% 50%, #49c8ff55, transparent 60%),
      radial-gradient(120% 120% at 100% 50%, #65d7ff44, transparent 70%);
    filter: blur(10px);
    mix-blend-mode:screen;
    z-index:-2;
  }
  .wing.left{ left:-6%; transform:scaleX(-1) rotate(-6deg); }
  .wing.right{ right:-6%; transform:rotate(-6deg); }

  /* Animations */
  @keyframes shimmer{
    from{ background-position: -30% 0; }
    to  { background-position: 130% 0; }
  }
  @keyframes pulse{
    0%,100%{ opacity:.55; transform:scale(1); }
    50%    { opacity:.85; transform:scale(1.03); }
  }
  @keyframes arcSweep{
    0%,100%{ transform:translateX(-50%) scaleX(1); opacity:.9; }
    50%    { transform:translateX(-50%) scaleX(1.06); opacity:1; }
  }

  /* helper: center & tiny subtitle */
  .sub{ margin-top:10px; opacity:.65; letter-spacing:.2em; font-size:clamp(10px,2.2vw,13px) }
</style>

</head>
<body>
  <div class="banner">
    <div class="top-arc"></div>
    <div class="wing left"></div>
    <div class="wing right"></div>

<div class="victory">
  VICTORY
    <span class="shine" aria-hidden="true"></span>
      <span class="beam"  aria-hidden="true"></span>
    </div>
    <div class="sub">MATCH RESULT</div>
  </div>
</body>
</html>