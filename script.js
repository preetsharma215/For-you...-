body { margin:0; font-family:Arial; background:linear-gradient(to bottom, #fff5f5, #ffe4e1); color:#333; text-align:center; overflow:hidden; height:100vh; } /* Light contrast bg */
.screen { position:absolute; top:0; left:0; width:100%; height:100%; display:flex; justify-content:center; align-items:center; opacity:0; transition:opacity 0.5s; pointer-events:none; }
.screen.active { opacity:1; pointer-events:all; }
.msg-box { background:#ffdab9; /* Peach light */ padding:40px; border-radius:30px; /* Curvy */ max-width:80%; box-shadow:0 10px 20px rgba(0,0,0,0.1); }
h1 { font-size:2.5em; margin:20px 0; color:#ff69b4; }
p { font-size:1.4em; margin:20px 0; color:#555; }
.sticker { width:200px; border-radius:15px; margin:20px 0; }
button { background:#ff4757; color:white; border:none; padding:15px 40px; font-size:1.5em; border-radius:10px; cursor:pointer; margin:20px 0; transition:0.3s; }
button:hover { transform:scale(1.1); background:#ff6b81; }
.proposal { width:100%; }
#surprise h2 { font-size:3em; color:#ffd700; }
#hearts-container { position:fixed; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:10; }
.heart { position:absolute; font-size:2em; animation:fall 6s linear infinite; }
@keyframes fall { 0% { transform:translateY(-100vh) rotate(0deg); opacity:1; } 100% { transform:translateY(100vh) rotate(720deg); opacity:0; } }
