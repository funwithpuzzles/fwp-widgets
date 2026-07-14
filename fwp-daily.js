/* FWP Daily Challenge Widget v6.7.3 | funwithpuzzles.com */
(function(){
'use strict';
var B='https://www.funwithpuzzles.com';
var LG='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYDi4jf-HGfN5sLOhCuMHA1VaBiuRCIS6rKVxp8buhYkncs5IdKzHWN6gQoH35k95LKE76A6Xl35xk4Bwv-L6S3EGhJ-ulrutR1BGoEz5qNRoRD9s9_R0JPOiw5WOK3CUeeCxERYjaBlA/s64/apple-touch-icon.png';
var SK='fwpv6s',TK='fwpv6t';
var EC='<div id="fwp-daily-widget"><\/div>\n<script src="https://cdn.jsdelivr.net/gh/funwithpuzzles/fwp-widgets@latest/fwp-daily.js"><\/scr'+'ipt>';

/* ── Explore labels: display name, exact Blogger label, hub page URL ──
   All label names verified from lebel-hubpage-mapping.txt
   Hub pages used for Browse More link and error fallback. */
var LABELS=[
  /* Difficulty */
  {d:'🟢 Easy Puzzles',              l:'Brain Teasers for Kids',                     h:'p/easy-puzzles.html'},
  {d:'🟡 Medium Puzzles',            l:'Brain Teasers for Teens',                    h:'p/intermediate-level-puzzles.html'},
  {d:'🔴 Hard Puzzles',              l:'Brain Teasers for Adults',                   h:'p/hard-puzzles.html'},
  /* Riddles */
  {d:'💡 Riddles',                   l:'Brain Teasers and Riddles',                  h:'p/riddles.html'},
  {d:'❓ Tricky Riddles',            l:'Tricky Questions',                           h:'p/tricky-riddles.html'},
  {d:'🤔 What Am I',                 l:'What am I Riddles',                          h:'p/what-am-i-riddles.html'},
  {d:'😄 Funny Riddles',             l:'Funny Riddles',                              h:'p/funny-riddles.html'},
  {d:'🕵️ Mystery Riddles',          l:'Mystery Riddles',                            h:'p/mystery-riddles.html'},
  {d:'📝 English Riddles',           l:'English Puzzles and Riddles',                h:'p/english-word-riddles.html'},
  /* Logic */
  {d:'🔐 Crack the Code',            l:'Crack the Code Puzzles',                     h:'p/crack-code-puzzles.html'},
  {d:'🧠 Lateral Thinking',          l:'Lateral Thinking Puzzles',                   h:'p/lateral-thinking-puzzles.html'},
  {d:'⚖️ Logical Equations',         l:'Logical Equations Puzzles',                  h:'p/logical-equations-puzzles.html'},
  {d:'🔍 Logical Reasoning',         l:'Logical Reasoning Questions and Puzzles',    h:'p/logical-reasoning-puzzles.html'},
  {d:'💼 Interview Questions',        l:'Interview Questions',                        h:'p/interview-questions.html'},
  /* Maths */
  {d:'➕ Maths Puzzles',             l:'Maths Puzzles',                              h:'p/maths-puzzles.html'},
  {d:'🔢 Missing Numbers',           l:'Missing Number Puzzles',                     h:'p/missing-number-puzzles.html'},
  {d:'📈 Number Series',             l:'Number Series Puzzles',                      h:'p/maths-reasoning-number-series-puzzles.html'},
  {d:'🔥 Matchstick Puzzles',        l:'Matchstick Puzzles',                         h:'p/matchstick-maths-puzzles.html'},
  {d:'🔺 Triangle Puzzles',          l:'Triangle Puzzles',                           h:'p/triangle-maths-logic-puzzles.html'},
  {d:'🔼 Pyramid Puzzles',           l:'Pyramid Puzzles',                            h:'p/pyramid-maths-puzzles.html'},
  {d:'⭕ Circle Reasoning',          l:'Circle Reasoning Puzzles',                   h:'p/circle-reasoning-puzzles.html'},
  {d:'🔷 Square Puzzles',            l:'Square Reasoning Puzzles',                   h:'p/square-reasoning-puzzles.html'},
  {d:'🧮 Maths Riddles',             l:'Maths Riddles',                              h:'p/maths-riddles.html'},
  /* Picture Puzzles */
  {d:'🖼️ Picture Puzzles',           l:'Brain Teasers: Picture Puzzles',             h:'p/picture-puzzles.html'},
  {d:'👁️ Find the Mistake',          l:'Find the Mistake Puzzles',                   h:'p/find-mistake-puzzles.html'},
  {d:'🧩 Odd One Out',               l:'Odd One Out Puzzles',                        h:'p/odd-one-out-picture-puzzles.html'},
  {d:'🔎 Spot the Difference',       l:'Spot the Difference Puzzles',                h:'p/spot-differences-picture-puzzles.html'},
  {d:'🌀 Optical Illusions',         l:'Optical Illusions',                          h:'p/optical-illusions.html'},
  {d:'🔷 Count Shapes',              l:'Count the Shapes Puzzles',                   h:'p/count-shapes-puzzles.html'},
  {d:'🔤 Hidden Letters',            l:'Hidden Letter Puzzles',                      h:'p/hidden-letter-puzzles.html'},
  {d:'🐾 Hidden Animals',            l:'Hidden Animal Puzzles',                      h:'p/hidden-animal-puzzles.html'},
  {d:'🔢 Eye Test / Numbers',        l:'Eye Test Puzzles',                           h:'p/hidden-number-picture-puzzles.html'},
  {d:'🔍 Find the Pair',             l:'Find the Pair Puzzles',                      h:'p/find-pair-picture-puzzles.html'},
  {d:'🅰️ Can You Read This',         l:'Can you Read this',                          h:'p/can-you-read-this.html'},
  {d:'🌑 Shadow Riddles',            l:'Shadow Riddles',                             h:'p/shadow-picture-riddles.html'},
  {d:'🧠 Visual Puzzles',            l:'Brain Teasers: Visual Puzzles',              h:'p/visual-puzzles-test-your-observation.html'},
  /* Chess */
  {d:'♟️ Chess Puzzles',             l:'Chess Puzzles',                              h:'p/fun-chess-puzzles.html'},
  {d:'♟️ Easy Chess',                l:'Easy Chess Puzzles',                         h:'p/easy-chess-puzzles.html'},
  {d:'♟️ Medium Chess',              l:'Medium Level Chess Puzzles',                 h:'p/medium-level-chess-puzzles.html'},
  {d:'♟️ Hard Chess',                l:'Hard Chess Puzzles',                         h:'p/hard-chess-puzzles.html'},
  /* Sudoku */
  {d:'🔢 Sudoku',                    l:'Sudoku',                                     h:'p/sudoku.html'},
  {d:'🔢 Sudoku Variants',           l:'Sudoku Variants',                            h:'p/sudoku-puzzles.html'},
  {d:'🔢 Killer Sudoku',             l:'Killer Sudoku',                              h:'2017/01/killer-sudoku-puzzles-index.html'},
  {d:'🔢 Diagonal Sudoku',           l:'Diagonal Sudoku',                            h:'2015/10/diagonal-sudoku-puzzles.html'},
  {d:'🔢 Thermo Sudoku',             l:'Thermo Sudoku',                              h:'2017/01/thermometer-sudoku-puzzles-index.html'},
  /* Other */
  {d:'🖼️ Rebus Puzzles',             l:'Rebus Puzzles',                              h:'p/rebus-riddles.html'},
  {d:'😎 Emoji Puzzles',             l:'Emoji Puzzles',                              h:'p/emoji-puzzles.html'},
  {d:'🌍 GK Puzzles',               l:'GK Puzzles',                                 h:'p/general-knowledge-quizzes-and-riddles.html'},
  {d:'📐 Spatial Reasoning',         l:'Spatial Reasoning Puzzles',                  h:'p/spatial-reasoning-puzzles.html'},
  {d:'💧 Water Tank',                l:'Water Tank Puzzles',                         h:'p/water-tank-puzzles.html'},
  {d:'⚙️ Gear Puzzles',              l:'Gear Puzzles',                               h:'p/gear-puzzles.html'},
  {d:'⚡ Quick Puzzles',             l:'Quick Puzzles',                              h:'p/quick-puzzles-brain-teasers-and-riddles.html'},
  {d:'🧩 Jigsaw Puzzles',            l:'Jigsaw Puzzles',                             h:'p/jigsaw-puzzles.html'},
  {d:'👀 Stereograms',               l:'Stereograms',                                h:'p/stereogram-puzzles.html'},
  {d:'🅰️ Missing Vowels',            l:'Missing Vowels Quiz',                        h:'p/missing-vowels-quiz-puzzles.html'},
  {d:'📊 Non-Verbal Reasoning',      l:'Non Verbal Reasoning',                       h:'p/non-verbal-reasoning-puzzles.html'},
  {d:'🧠 Mental Ability',            l:'Mental Ability Questions',                   h:'p/mental-ability-questions-brain-test.html'},
  {d:'🅿️ Parking Puzzles',           l:'Parking Puzzles',                            h:'p/parking-pattern-puzzles.html'},
  {d:'🔢 Number Logic',              l:'Number Logic Puzzles',                       h:'p/number-logic-puzzles.html'},
  {d:'🏆 Best Puzzles',              l:'Best Brain Teasers',                         h:'p/popular-puzzles.html'}
];

/* ── CSS ── */
if(!document.getElementById('fwpv6css')){
  var _cs=document.createElement('style');
  _cs.id='fwpv6css';
  _cs.textContent=
'.fwpw{display:block !important;width:100%;max-width:560px;margin:0 auto;font-family:Roboto,Arial,sans-serif;font-size:13px;color:#111;line-height:1.4;}'
+'.fwpw *{box-sizing:border-box;}'
+'.fwpc{background:#fff;border-radius:14px;overflow:hidden;border:2.5px solid #0A0AFF;box-shadow:0 3px 16px rgba(10,10,255,.13);}'
/* HEAD */
+'.fwph{background:#0A0AFF;padding:11px 14px;display:flex;align-items:center;justify-content:space-between;gap:10px;min-width:0;}'
+'.fwphl{display:flex;align-items:center;gap:9px;flex:1 1 0;min-width:0;overflow:hidden;}'
+'.fwplogo{width:36px;height:36px;min-width:36px;max-width:36px;border-radius:7px;object-fit:contain;background:rgba(255,255,255,.12);padding:2px;border:1.5px solid rgba(255,255,255,.3);flex-shrink:0;display:block;}'
+'.fwptxt{min-width:0;flex:1;overflow:hidden;}'
+'.fwpbrand{font-size:9px;color:rgba(255,255,255,.82);text-transform:uppercase;letter-spacing:1.3px;margin-bottom:2px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}'
+'.fwptitle{font-size:14px;font-weight:700;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}'
+'.fwpsk{display:flex;align-items:center;gap:4px;background:rgba(255,255,255,.15);border:1.5px solid rgba(255,255,255,.32);border-radius:30px;padding:4px 10px;color:#fff;font-size:11px;font-weight:700;white-space:nowrap;flex-shrink:0;}'
+'.fwpskn{font-size:13px;font-weight:800;}'
/* date bar */
+'.fwpbar{background:#13253a;padding:5px 14px;display:flex;align-items:center;justify-content:space-between;gap:6px;min-width:0;}'
+'.fwpbd{font-size:10px;color:rgba(255,255,255,.9);font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;}'
+'.fwpbt{font-size:9px;color:rgba(255,255,255,.55);white-space:nowrap;flex-shrink:0;}'
/* progress */
+'.fwppr{height:3px;background:#e5e7eb;}'
+'.fwppf{height:3px;background:#0A0AFF;width:0%;transition:width .4s ease;}'
/* tabs */
+'.fwptabs{display:flex;padding:9px 10px 0;background:#f4f5ff;border-bottom:2px solid #0A0AFF;gap:4px;overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none;}'
+'.fwptabs::-webkit-scrollbar{display:none;}'
+'.fwptab{flex:0 0 auto;padding:6px 11px;font-size:10.5px;font-weight:700;color:#6b7280;background:#fff;border:1.5px solid #d1d5db;border-bottom:2px solid #d1d5db;border-radius:7px 7px 0 0;cursor:pointer;white-space:nowrap;font-family:inherit;transition:all .15s;margin-bottom:-2px;position:relative;}'
+'.fwptab.on{color:#0A0AFF;border-color:#0A0AFF;border-bottom-color:#f4f5ff;background:#f4f5ff;z-index:1;}'
+'.fwptab:hover:not(.on){color:#374151;border-color:#a5b4fc;background:#eef1ff;}'
+'.fwptab.exptab{color:#7c3aed;}'
+'.fwptab.exptab.on{color:#7c3aed;border-color:#7c3aed;border-bottom-color:#f4f5ff;}'
+'.fwptab.exptab:hover:not(.on){color:#6d28d9;border-color:#c4b5fd;background:#f5f3ff;}'
/* offline body */
+'.fwpbody{padding:13px 14px;}'
+'.fwptop{display:flex;align-items:center;justify-content:space-between;margin-bottom:11px;}'
+'.fwpctr{font-size:10px;color:#9ca3af;font-weight:500;}'
+'.fwpnavs{display:flex;gap:5px;}'
+'.fwpnav{width:26px;height:26px;border-radius:50%;border:1.5px solid #e5e7eb;background:#fff;color:#9ca3af;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;transition:all .15s;padding:0;font-family:inherit;}'
+'.fwpnav:hover{background:#eef1ff;color:#0A0AFF;border-color:#0A0AFF;}'
+'.fwpbdg{display:inline-flex;align-items:center;gap:4px;font-size:9.5px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;padding:3px 9px;border-radius:30px;margin-bottom:9px;}'
+'.fwpbdg.easy{background:#EAF3DE;color:#27500A;}'
+'.fwpbdg.medium{background:#FAEEDA;color:#633806;}'
+'.fwpbdg.hard{background:#FCEBEB;color:#791F1F;}'
+'.fwpq{font-size:13px;line-height:1.75;color:#111827;white-space:pre-line;min-height:44px;margin-bottom:10px;word-break:break-word;}'
+'.fwphbtn{background:none;border:none;cursor:pointer;font-size:11px;color:#0A0AFF;display:inline-flex;align-items:center;gap:4px;padding:0;font-family:inherit;font-weight:600;}'
+'.fwphbtn:hover{text-decoration:underline;}'
+'.fwphbox{background:#eef2ff;border-left:3px solid #0A0AFF;border-radius:0 7px 7px 0;padding:8px 11px;font-size:12px;color:#1e1b4b;line-height:1.6;margin-top:7px;margin-bottom:9px;display:none;word-break:break-word;}'
+'.fwpirow{display:flex;gap:6px;margin-top:11px;}'
+'.fwpinp{flex:1;min-width:0;height:40px;border:1.5px solid #e5e7eb;border-radius:8px;padding:0 11px;font-size:13px;color:#111827;background:#fff;outline:none;font-family:inherit;transition:border-color .15s,box-shadow .15s;}'
+'.fwpinp:focus{border-color:#0A0AFF;box-shadow:0 0 0 3px rgba(10,10,255,.1);}'
+'.fwpinp:disabled{background:#f9fafb;color:#6b7280;}'
+'.fwpchk{height:40px;padding:0 14px;background:#0A0AFF;color:#fff;border:none;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;white-space:nowrap;transition:background .15s;flex-shrink:0;}'
+'.fwpchk:hover{background:#2222ff;}'
+'.fwpres{font-size:12px;padding:8px 11px;border-radius:8px;line-height:1.5;margin-top:7px;display:none;word-break:break-word;}'
+'.fwpres.ok{background:#EAF3DE;color:#166534;display:block;}'
+'.fwpres.no{background:#FCEBEB;color:#991b1b;display:block;}'
+'.fwprev{margin-top:6px;background:#fff;border:1.5px solid #e5e7eb;border-radius:8px;padding:7px 11px;font-size:11px;color:#6b7280;cursor:pointer;font-family:inherit;display:none;width:100%;text-align:left;transition:background .15s;}'
+'.fwprev:hover{background:#f9fafb;}'
+'.fwpdots{display:flex;gap:7px;justify-content:center;margin-top:13px;}'
+'.fwpdot{width:9px;height:9px;border-radius:50%;background:#e5e7eb;cursor:pointer;border:none;transition:all .2s;flex-shrink:0;padding:0;}'
+'.fwpdot:hover{transform:scale(1.3);}'
+'.fwpdot.on{background:#0A0AFF;transform:scale(1.2);}'
+'.fwpdot.done{background:#16a34a;}'
+'.fwpdot.wrong{background:#dc2626;}'
+'.fwpban{display:none;background:linear-gradient(135deg,#0A0AFF,#13253a);border-radius:10px;padding:12px 14px;margin-top:11px;text-align:center;color:#fff;}'
+'.fwpban p{font-size:13px;font-weight:700;margin-bottom:4px;color:#fff;}'
+'.fwpban small{font-size:11px;color:rgba(255,255,255,.75);}'
/* ── EXPLORE TAB ── */
+'.fwpexp{display:none;padding:13px 14px;}'
+'.fwpexp-toprow{display:flex;align-items:center;gap:7px;margin-bottom:11px;}'
+'.fwpexp-sel{flex:1;min-width:0;height:36px;border:1.5px solid #d1d5db;border-radius:8px;padding:0 10px;font-size:11.5px;color:#374151;background:#fff;outline:none;font-family:inherit;cursor:pointer;transition:border-color .15s;}'
+'.fwpexp-sel:focus{border-color:#7c3aed;box-shadow:0 0 0 3px rgba(124,58,237,.1);}'
+'.fwpexp-ref{height:36px;padding:0 11px;background:#7c3aed;color:#fff;border:none;border-radius:8px;font-size:11.5px;font-weight:700;cursor:pointer;font-family:inherit;white-space:nowrap;transition:background .15s;flex-shrink:0;}'
+'.fwpexp-ref:hover{background:#6d28d9;}'
+'.fwpexp-ref:disabled{background:#a78bfa;cursor:not-allowed;}'
/* nav row — fixed height prevents layout shift */
+'.fwpexp-nav{display:flex;align-items:center;justify-content:space-between;margin-bottom:9px;min-height:26px;}'
+'.fwpexp-ctr{font-size:10px;color:#9ca3af;font-weight:500;}'
+'.fwpexp-navs{display:flex;gap:5px;}'
+'.fwpexp-nb{width:26px;height:26px;border-radius:50%;border:1.5px solid #e5e7eb;background:#fff;color:#9ca3af;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;transition:all .15s;padding:0;font-family:inherit;}'
+'.fwpexp-nb:hover{background:#f5f3ff;color:#7c3aed;border-color:#7c3aed;}'
/* card container — FIXED HEIGHT prevents layout shift */
+'.fwpw .fwpexp-wrap{position:relative;}'
/* card */
+'.fwpw .fwpexp-card{border-radius:10px;overflow:hidden;border:1.5px solid #e5e7eb;cursor:pointer;transition:box-shadow .2s,transform .2s;text-decoration:none;display:block;background:#fff;}'
+'.fwpw .fwpexp-card:hover{box-shadow:0 4px 20px rgba(0,0,0,.12);transform:translateY(-2px);}'
/* IMAGE FIX:
   - padding-top:56.25% reserves exact 16:9 space BEFORE image loads = zero layout shift
   - object-fit:contain = full image visible, no cropping on sidebar OR desktop
   - background:#f8f9ff fills any letterbox gaps cleanly */
+'.fwpw .fwpexp-imgwrap{width:100%;padding-top:56.25%;position:relative;background:#f8f9ff;overflow:hidden;}'
+'.fwpw .fwpexp-img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;display:block;transition:transform .3s;}'
+'.fwpw .fwpexp-card:hover .fwpexp-img{transform:scale(1.02);}'
+'.fwpw .fwpexp-imgph{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#e0e7ff,#f5f3ff);}'
+'.fwpw .fwpexp-imgph img{width:52px;height:52px;opacity:.35;object-fit:contain;}'
/* card body */
+'.fwpexp-cbody{padding:11px 13px 13px;}'
+'.fwpexp-cat{display:inline-block;font-size:9.5px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;padding:2px 8px;border-radius:20px;background:#f5f3ff;color:#7c3aed;margin-bottom:7px;}'
+'.fwpexp-title{font-size:13px;font-weight:700;color:#111827;line-height:1.55;margin-bottom:10px;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;}'
+'.fwpexp-solve{display:flex;align-items:center;justify-content:space-between;background:#7c3aed;color:#fff;border-radius:8px;padding:9px 13px;font-size:12px;font-weight:700;}'
+'.fwpexp-solve span{font-size:15px;}'
/* skeleton — same structure as card so no layout shift */
+'.fwpexp-skel{border-radius:10px;overflow:hidden;border:1.5px solid #e5e7eb;background:#fff;}'
+'.fwpexp-skel-img{width:100%;padding-top:56.25%;background:linear-gradient(90deg,#f3f4f6 25%,#e9eaec 50%,#f3f4f6 75%);background-size:200% 100%;animation:fwpsh 1.3s infinite;}'
+'.fwpexp-skel-body{padding:11px 13px 13px;}'
+'.fwpexp-skel-tag{height:16px;width:90px;border-radius:8px;margin-bottom:10px;background:linear-gradient(90deg,#f3f4f6 25%,#e9eaec 50%,#f3f4f6 75%);background-size:200% 100%;animation:fwpsh 1.3s infinite;}'
+'.fwpexp-skel-l{height:13px;border-radius:6px;background:linear-gradient(90deg,#f3f4f6 25%,#e9eaec 50%,#f3f4f6 75%);background-size:200% 100%;animation:fwpsh 1.3s infinite;margin-bottom:7px;}'
+'.fwpexp-skel-btn{height:36px;border-radius:8px;margin-top:10px;background:linear-gradient(90deg,#f3f4f6 25%,#e9eaec 50%,#f3f4f6 75%);background-size:200% 100%;animation:fwpsh 1.3s infinite;}'
+'@keyframes fwpsh{0%{background-position:200% 0}100%{background-position:-200% 0}}'
/* error */
+'.fwpexp-err{text-align:center;padding:30px 14px;color:#6b7280;min-height:200px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;}'
+'.fwpexp-err p{font-size:13px;margin:0;}'
+'.fwpexp-err a{color:#7c3aed;font-weight:700;font-size:12px;text-decoration:none;}'
+'.fwpexp-err a:hover{text-decoration:underline;}'
/* explore dots */
+'.fwpexp-dots{display:flex;gap:7px;justify-content:center;margin-top:11px;min-height:16px;}'
+'.fwpexp-dot{width:9px;height:9px;border-radius:50%;background:#e5e7eb;cursor:pointer;border:none;transition:all .2s;flex-shrink:0;padding:0;}'
+'.fwpexp-dot.on{background:#7c3aed;transform:scale(1.2);}'
+'.fwpexp-dot:hover{transform:scale(1.3);}'
/* footer */
+'.fwpfoot{border-top:1px solid #e5e7eb;padding:9px 14px;display:flex;align-items:center;justify-content:space-between;background:#f8f9ff;gap:8px;flex-wrap:nowrap;}'
+'.fwpfl{display:flex;gap:10px;align-items:center;flex:1 1 auto;min-width:0;overflow:hidden;}'
+'.fwpmore{font-size:11px;font-weight:700;color:#0A0AFF;text-decoration:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:0 1 auto;}'
+'.fwpmore:hover{text-decoration:underline;}'
+'.fwpac{font-size:10px;color:#9ca3af;text-decoration:none;white-space:nowrap;flex:0 0 auto;}'
+'.fwpac:hover{color:#374151;}'
+'.fwpsh{display:flex;align-items:center;gap:4px;background:#fff;border:1.5px solid #e5e7eb;border-radius:8px;padding:5px 10px;font-size:11px;color:#6b7280;cursor:pointer;font-family:inherit;font-weight:600;white-space:nowrap;transition:all .15s;flex-shrink:0;flex:0 0 auto;}'
+'.fwpsh:hover{background:#eef2ff;color:#0A0AFF;border-color:#0A0AFF;}'
/* add to site */
+'.fwpadd{border-top:2px dashed #c7d2fe;padding:9px 14px;background:#f0f2ff;}'
+'.fwpabtn{background:none;border:none;cursor:pointer;font-size:11px;color:#0A0AFF;font-family:inherit;font-weight:700;display:flex;align-items:center;gap:5px;padding:0;width:100%;text-align:left;}'
+'.fwpabtn:hover{text-decoration:underline;}'
+'.fwpebox{margin-top:10px;display:none;}'
+'.fwpebox p{font-size:11px;color:#374151;margin-bottom:8px;line-height:1.55;}'
+'.fwpec{display:block;background:#1e293b;color:#7dd3fc;font-family:monospace;font-size:10.5px;padding:10px 12px;border-radius:8px;white-space:pre;overflow-x:auto;line-height:1.7;border:1px solid #334155;}'
+'.fwpcb{margin-top:7px;background:#0A0AFF;color:#fff;border:none;border-radius:7px;padding:6px 14px;font-size:11px;font-weight:700;cursor:pointer;font-family:inherit;transition:background .15s;}'
+'.fwpcb:hover{background:#2222ff;}'
+'.fwpcb.copied{background:#16a34a;}'
+'.fwpattr{font-size:10px;color:#9ca3af;text-align:center;padding:5px 0 8px;}'
+'.fwpattr a{color:#0A0AFF;text-decoration:none;}'
+'.fwpattr a:hover{text-decoration:underline;}';
  document.head.appendChild(_cs);
}

/* ── One-time network warm-up: open the connections early so the first
   Explore fetch and its images don't pay full DNS+TLS setup cost ── */
if(!document.getElementById('fwpv6preconnect')){
  var _pc1=document.createElement('link');_pc1.id='fwpv6preconnect';_pc1.rel='preconnect';_pc1.href=B;
  document.head.appendChild(_pc1);
  var _pc2=document.createElement('link');_pc2.rel='preconnect';_pc2.href='https://blogger.googleusercontent.com';_pc2.crossOrigin='anonymous';
  document.head.appendChild(_pc2);
}

/* ── Offline puzzle data (6 tabs) ── */
var C=[
{t:"Riddles",s:"riddles",p:[
{d:"easy",q:"I speak without a mouth and hear without ears. I have no body but come alive with wind. What am I?",h:"Think of sounds bouncing back in a valley.",a:"echo"},
{d:"easy",q:"The more you take, the more you leave behind. What am I?",h:"Think about walking on a sandy beach.",a:"footsteps"},
{d:"easy",q:"I am tall when young and short when old. What am I?",h:"Think about what burns down over time.",a:"candle"},
{d:"easy",q:"What has one eye but cannot see?",h:"Think about sewing.",a:"needle"},
{d:"easy",q:"What has hands but cannot clap?",h:"You look at it to know the time.",a:"clock"},
{d:"easy",q:"What is full of holes but still holds water?",h:"You use it in the shower.",a:"sponge"},
{d:"easy",q:"What has a head and a tail but no body?",h:"Think coins.",a:"coin"},
{d:"easy",q:"I have no wings but I fly, no eyes but I cry. What am I?",h:"Think about weather.",a:"cloud"},
{d:"easy",q:"What has legs but cannot walk?",h:"You sit on it.",a:"table"},
{d:"medium",q:"I have cities but no houses, mountains but no trees, water but no fish. What am I?",h:"You can fold me and put me in your pocket.",a:"map"},
{d:"medium",q:"I am always in front of you but can never be seen. What am I?",h:"Think about what lies ahead in time.",a:"future"},
{d:"medium",q:"The more you remove from me, the bigger I get. What am I?",h:"Think about digging in the ground.",a:"hole"},
{d:"medium",q:"I have a thousand needles but I do not sew. What am I?",h:"Think about a prickly plant.",a:"cactus"},
{d:"medium",q:"I go up but never come down. What am I?",h:"Think about getting older.",a:"age"},
{d:"hard",q:"I can be cracked, made, told and played. What am I?",h:"Comedians do this every night on stage.",a:"joke"},
{d:"hard",q:"What has a bottom at the top?",h:"Think about clothing worn on your legs.",a:"legs"},
{d:"hard",q:"I bind it and it walks. I loose it and it stops. What am I?",h:"Think about a sandal.",a:"sandal"},
{d:"hard",q:"What can travel around the world while staying in a corner?",h:"Think about postage.",a:"stamp"}
]},
{t:"Tricky",s:"tricky-riddles",p:[
{d:"easy",q:"What goes up but never comes down?",h:"Think about getting older.",a:"age"},
{d:"easy",q:"A rooster laid an egg on the roof. Which side did it roll down?",h:"Roosters do not lay eggs.",a:"neither"},
{d:"easy",q:"How many months have 28 days?",h:"Do not just say one.",a:"all of them"},
{d:"easy",q:"What can you catch but not throw?",h:"You might get this when someone near you is sick.",a:"cold"},
{d:"easy",q:"What gets wetter as it dries?",h:"You use it after a shower.",a:"towel"},
{d:"easy",q:"What has many keys but cannot open a single lock?",h:"You use it to type text.",a:"keyboard"},
{d:"easy",q:"You see me once in a minute, twice in a moment, but not in a thousand years. What am I?",h:"Look at the letters.",a:"letter m"},
{d:"easy",q:"What question can you never answer yes to?",h:"Think about being awake.",a:"are you asleep"},
{d:"medium",q:"Before Mt Everest was discovered, what was the tallest mountain on Earth?",h:"Discovery does not change geography.",a:"everest"},
{d:"medium",q:"I am not alive but I grow. I need air but have no lungs. Water kills me. What am I?",h:"You see me in a fireplace.",a:"fire"},
{d:"medium",q:"A man shaves many times a day yet still has a beard. How?",h:"Think about who shaves other people for a living.",a:"barber"},
{d:"medium",q:"A woman had two sons at the same hour on the same day in the same year. Yet they were not twins. How?",h:"Think bigger than two.",a:"triplets"},
{d:"hard",q:"What word in English is always spelled incorrectly?",h:"Read the question very literally.",a:"incorrectly"},
{d:"hard",q:"A woman shoots her husband then holds him underwater. They go to dinner an hour later. How?",h:"What profession shoots people harmlessly?",a:"photographer"},
{d:"hard",q:"What has a head and a tail but no body? It is not alive but you find it in your pocket.",h:"You flip it to make a decision.",a:"coin"},
{d:"hard",q:"A man who was outside in the rain without an umbrella or hat did not get a single hair wet. How?",h:"Think about hair.",a:"he was bald"}
]},
{t:"What Am I",s:"what-am-i-riddles",p:[
{d:"easy",q:"I have keys but no locks, space but no room. You can enter but not go inside. What am I?",h:"You use me to type.",a:"keyboard"},
{d:"easy",q:"I run but have no legs. What am I?",h:"Think about flowing water.",a:"river"},
{d:"easy",q:"I have a neck but no head. What am I?",h:"You pour drinks from me.",a:"bottle"},
{d:"easy",q:"I fly without wings. What am I?",h:"Think about what passes every second.",a:"time"},
{d:"easy",q:"I have teeth but cannot bite. What am I?",h:"You use me to tidy your hair.",a:"comb"},
{d:"easy",q:"I have hands but cannot clap. I have a face but no eyes. What am I?",h:"You look at it to know the time.",a:"clock"},
{d:"easy",q:"I have a spine but no bones. What am I?",h:"You read me.",a:"book"},
{d:"easy",q:"I have a tongue but cannot talk. What am I?",h:"Think about footwear.",a:"shoe"},
{d:"medium",q:"I can travel around the world without moving from my place. What am I?",h:"Think about sending letters.",a:"stamp"},
{d:"medium",q:"I have branches but no fruit, trunk or leaves. What am I?",h:"You go here to borrow books or save money.",a:"bank"},
{d:"medium",q:"I am taken from a mine and shut in a wooden case. Used by everyone but never touched. What am I?",h:"Think about writing tools.",a:"pencil lead"},
{d:"medium",q:"I get shorter as I get older. What am I?",h:"Think about what burns down over time.",a:"candle"},
{d:"medium",q:"I have an eye but cannot see. I have a body but no legs. What am I?",h:"Think about severe weather.",a:"needle or hurricane"},
{d:"hard",q:"The person who makes me does not need me. The buyer does not use me. The user does not know. What am I?",h:"Think about a final resting place.",a:"coffin"},
{d:"hard",q:"You see me once in June, twice in November, not at all in May. What am I?",h:"Look at the letters of each month name.",a:"letter n"},
{d:"hard",q:"I am always hungry and must always be fed. The finger I touch will soon turn red. What am I?",h:"Think about heat.",a:"fire"}
]},
{t:"Funny",s:"funny-riddles",p:[
{d:"easy",q:"Why do bicycles fall over?",h:"Think about how many wheels it has.",a:"two tired"},
{d:"easy",q:"What do you call a fish without eyes?",h:"Say it out loud and remove the letter i.",a:"fsh"},
{d:"easy",q:"Why can a leopard never hide?",h:"Think about its coat pattern.",a:"always spotted"},
{d:"easy",q:"What do you call a sleeping dinosaur?",h:"It makes a loud rumbling sound.",a:"dino-snore"},
{d:"easy",q:"What do you call cheese that is not yours?",h:"It belongs to someone else.",a:"nacho cheese"},
{d:"easy",q:"Why did the scarecrow win an award?",h:"Think about what makes a field special.",a:"outstanding in his field"},
{d:"easy",q:"What do you call a fake noodle?",h:"It is an impasta!",a:"impasta"},
{d:"easy",q:"Why did the math book look so sad?",h:"Think about what is inside it.",a:"too many problems"},
{d:"medium",q:"What did the ocean say to the beach?",h:"Think of a wavy greeting.",a:"nothing it just waved"},
{d:"medium",q:"Why do scientists not trust atoms?",h:"They are guilty of something.",a:"they make up everything"},
{d:"medium",q:"What did one wall say to the other?",h:"Think about a corner.",a:"i will meet you at the corner"},
{d:"medium",q:"Why did the bicycle not win the race?",h:"Think about what it was.",a:"two tired"},
{d:"medium",q:"What is a vampire's favourite fruit?",h:"Think about the neck.",a:"a blood orange"},
{d:"hard",q:"I have 4 legs in the morning, 2 at noon, and 3 in the evening. What am I?",h:"This is the riddle of the Sphinx.",a:"human"},
{d:"hard",q:"What word becomes shorter when you add two letters to it?",h:"Think of the word meaning not long.",a:"short"},
{d:"hard",q:"What runs but never walks, has a mouth but never talks, has a head but never weeps?",h:"Think about flowing water.",a:"river"}
]},
{t:"Mystery",s:"mystery-riddles",p:[
{d:"easy",q:"How far can a dog run into the woods?",h:"Think about the halfway point.",a:"halfway"},
{d:"easy",q:"What is always coming but never arrives?",h:"Think about time.",a:"tomorrow"},
{d:"easy",q:"If you drop me I will crack, but smile at me and I will smile back. What am I?",h:"You look at this every morning.",a:"mirror"},
{d:"easy",q:"A father has 5 sons, each son has one sister. How many children are there?",h:"They all share the same sister.",a:"6"},
{d:"easy",q:"A man is 20 years old but has only had 5 birthdays. How?",h:"Think about when his birthday falls.",a:"born on february 29"},
{d:"easy",q:"What has 13 hearts but no other organs?",h:"You use it to play card games.",a:"deck of cards"},
{d:"easy",q:"What is always the last thing to make you smile?",h:"Think about a photo.",a:"your cheeks"},
{d:"easy",q:"A rooster lays an egg on top of a barn. Which way does it roll?",h:"Think about whether a rooster can lay eggs.",a:"roosters dont lay eggs"},
{d:"medium",q:"A man pushes his car to a hotel and declares bankruptcy. Why?",h:"Think about a popular board game.",a:"monopoly"},
{d:"medium",q:"A man is found dead by a cassette. Police press play, hear a gunshot and know it is murder. Why?",h:"Think about what the recording reveals.",a:"someone rewound it"},
{d:"medium",q:"A woman lives on the 20th floor. On sunny days she takes the lift to the 10th and walks up. On rainy days all the way. Why?",h:"Think about what she carries on rainy days.",a:"umbrella"},
{d:"medium",q:"How can a man go 25 days without sleep?",h:"He does not need to sleep during the day.",a:"he sleeps at night"},
{d:"hard",q:"A man found dead in a field next to an unopened package. No marks, no one around. How did he die?",h:"Think about what the package was supposed to do.",a:"parachute failed to open"},
{d:"hard",q:"A woman asks a hardware store for a number. Clerk says 75 paise per digit. She pays Rs 1.50. What did she buy?",h:"Think about house numbers.",a:"house number with 2 digits"},
{d:"hard",q:"3 doors: freedom behind one, lions behind others. Which do you pick?",h:"Think about lions unfed for 3 years.",a:"any they would be dead"},
{d:"hard",q:"A man walks into a bar and asks the bartender for a glass of water. The bartender pulls out a gun. The man says thank you and leaves. Why?",h:"Think about what cures hiccups.",a:"hiccups"}
]},
{t:"Maths",s:"maths-puzzles",p:[
{d:"easy",q:"A farmer has 17 sheep. All but 9 run away. How many are left?",h:"Read all but 9 very carefully.",a:"9"},
{d:"easy",q:"What is half of 2 plus 2?",h:"Follow the correct order of operations.",a:"3"},
{d:"easy",q:"If you have 3 apples and take away 2, how many apples do YOU have?",h:"Focus on the word YOU.",a:"2"},
{d:"easy",q:"How many times can you subtract 10 from 100?",h:"After the first time the number is no longer 100.",a:"once"},
{d:"easy",q:"What comes next: 1, 2, 4, 8, 16, __?",h:"Each number is doubled.",a:"32"},
{d:"easy",q:"If you throw a red stone into the blue sea, what does it become?",h:"Think about what happens physically.",a:"wet"},
{d:"easy",q:"How many sides does a circle have?",h:"Think carefully — it is not zero.",a:"one curved side"},
{d:"easy",q:"What is 1000 plus 20 plus 1000 plus 30 plus 1000 plus 1040?",h:"Add carefully step by step.",a:"4090"},
{d:"medium",q:"I am an odd number. Take away one letter and I become even. What number am I?",h:"Think about the word not the digit.",a:"seven"},
{d:"medium",q:"A bat and ball cost Rs 110 together. The bat costs Rs 100 more than the ball. What is the cost of the ball?",h:"Do not say Rs 10. Set up a proper equation.",a:"5"},
{d:"medium",q:"Two ropes each burn in 60 minutes unevenly. How do you measure exactly 45 minutes?",h:"Light both ends of one rope and one end of the other.",a:"45 minutes"},
{d:"medium",q:"If there are 3 apples and you take away 2, how many apples do you have?",h:"YOU took 2.",a:"2"},
{d:"hard",q:"A clock loses 3 minutes every hour. Set at noon, when will it next show the correct time?",h:"It must lose exactly 12 hours.",a:"240 days"},
{d:"hard",q:"8 identical balls, one slightly heavier. Using a balance only twice, find the heavy one.",h:"Divide into groups of 3, 3, and 2.",a:"two weighings"},
{d:"hard",q:"What 3 positive numbers give the same result when multiplied and when added?",h:"Try simple numbers like 1, 2, 3.",a:"1 2 3"},
{d:"hard",q:"You have two hourglasses — a 4-minute and a 7-minute. How do you measure exactly 9 minutes?",h:"Start both, flip the 4 when done, then flip again.",a:"flip strategically"}
]},
{t:"Missing #",s:"missing-number-puzzles",p:[
{d:"easy",q:"2, 4, 6, 8, __ — What comes next?",h:"Each number increases by the same amount.",a:"10"},
{d:"easy",q:"1, 1, 2, 3, 5, 8, __ — What comes next?",h:"Each number is the sum of the two before it.",a:"13"},
{d:"easy",q:"10, 20, 30, 40, __ — What comes next?",h:"Count in tens.",a:"50"},
{d:"easy",q:"5, 10, 20, 40, __ — What comes next?",h:"Each number is doubled.",a:"80"},
{d:"easy",q:"100, 90, 80, 70, __ — What comes next?",h:"Counting backwards by tens.",a:"60"},
{d:"easy",q:"1, 4, 9, 16, 25, __ — What comes next?",h:"Think about perfect squares.",a:"36"},
{d:"easy",q:"3, 9, 27, 81, __ — What comes next?",h:"Each number is multiplied by 3.",a:"243"},
{d:"easy",q:"2, 4, 8, 16, __ — What comes next?",h:"Each number doubles.",a:"32"},
{d:"medium",q:"3, 6, 12, 24, __ — What comes next?",h:"Each number is multiplied by the same value.",a:"48"},
{d:"medium",q:"Grid:\n2  4  8\n3  9  27\n4  16  ?\nWhat replaces the ?",h:"Look at the pattern across each row.",a:"64"},
{d:"medium",q:"7, 14, 21, 28, __ — What comes next?",h:"Multiples of 7.",a:"35"},
{d:"medium",q:"1, 3, 6, 10, 15, __ — What comes next?",h:"These are triangle numbers.",a:"21"},
{d:"hard",q:"1, 2, 6, 24, 120, __ — What comes next?",h:"Each term equals previous term multiplied by its position.",a:"720"},
{d:"hard",q:"Find the missing number:\n6  13  25\n11 23  45\n16 33  __",h:"Look at the relationship across each row.",a:"65"},
{d:"hard",q:"What is the sum of the first 100 natural numbers?",h:"Use the formula n x (n+1) divided by 2.",a:"5050"},
{d:"hard",q:"What comes next: 0, 1, 1, 2, 3, 5, 8, 13, 21, __?",h:"Each number is the sum of the two before it.",a:"34"}
]},
{t:"Series",s:"maths-reasoning-number-series-puzzles",p:[
{d:"easy",q:"2, 6, 18, 54, __ — What comes next?",h:"Each number is multiplied by 3.",a:"162"},
{d:"easy",q:"3, 6, 9, 12, 15, __ — What comes next?",h:"Multiples of 3.",a:"18"},
{d:"easy",q:"1, 3, 5, 7, 9, __ — What comes next?",h:"These are odd numbers in order.",a:"11"},
{d:"easy",q:"2, 3, 5, 7, 11, 13, __ — What comes next?",h:"These are all prime numbers.",a:"17"},
{d:"easy",q:"4, 8, 12, 16, __ — What comes next?",h:"Multiples of 4.",a:"20"},
{d:"easy",q:"100, 95, 85, 70, 50, __ — What comes next?",h:"Look at how much is subtracted each time.",a:"25"},
{d:"easy",q:"1, 2, 4, 8, 16, __ — What comes next?",h:"Powers of 2.",a:"32"},
{d:"easy",q:"5, 10, 15, 20, 25, __ — What comes next?",h:"Multiples of 5.",a:"30"},
{d:"medium",q:"1, 2, 4, 7, 11, 16, __ — What comes next?",h:"The difference between terms increases by 1 each time.",a:"22"},
{d:"medium",q:"1, 8, 27, 64, 125, __ — What comes next?",h:"Think about perfect cubes.",a:"216"},
{d:"medium",q:"2, 5, 10, 17, 26, __ — What comes next?",h:"Look at the differences: 3, 5, 7, 9 ...",a:"37"},
{d:"medium",q:"0, 1, 4, 9, 16, __ — What comes next?",h:"These are perfect squares starting from 0.",a:"25"},
{d:"hard",q:"3, 5, 11, 29, 83, __ — What comes next?",h:"Each term equals previous term x 3 minus 4.",a:"245"},
{d:"hard",q:"What is the next number: 1, 11, 21, 1211, 111221, __?",h:"Read each number aloud to describe the previous one.",a:"312211"},
{d:"hard",q:"What is the next prime number after 89?",h:"Check 97: is it divisible by 2, 3, 5, 7?",a:"97"},
{d:"hard",q:"2, 12, 36, 80, 150, __? What comes next?",h:"Try n squared times (n+1).",a:"252"}
]},
{t:"Logic",s:"logical-equations-puzzles",p:[
{d:"easy",q:"If Apple=5, Banana=6, Cherry=6, then Mango=?",h:"Count the letters in each word.",a:"5"},
{d:"easy",q:"If Cat=3, Dog=3, Elephant=8, then Ant=?",h:"Count the letters in each word.",a:"3"},
{d:"easy",q:"Circle + Circle = 10. Circle x Circle = ?",h:"Find the value of Circle first.",a:"25"},
{d:"easy",q:"1+4=5, 2+5=12, 3+6=21. Then 5+8=?",h:"Result = first x (first + second).",a:"65"},
{d:"easy",q:"If 2+2=8, 3+3=18, 4+4=32, then 5+5=?",h:"Look at the pattern carefully.",a:"50"},
{d:"easy",q:"If MILK=3, WATER=4, JUICE=4, then TEA=?",h:"Count the vowels in each word.",a:"2"},
{d:"easy",q:"If 1=5, 2=10, 3=15, 4=20, then 5=?",h:"Look at what 1=5 tells you about 5.",a:"1"},
{d:"easy",q:"Sun=3, Moon=4, Star=4. Earth=?",h:"Count the letters.",a:"5"},
{d:"medium",q:"Cat + Cat = 10, Cat + Dog = 12, Dog - Cat = ?",h:"Find the value of each animal first.",a:"2"},
{d:"medium",q:"If RED=27, BLUE=40, then GREEN=?",h:"A=1, B=2 ... add all letter values.",a:"49"},
{d:"medium",q:"5 people shake hands with each other exactly once. How many handshakes total?",h:"n x (n-1) divided by 2.",a:"10"},
{d:"medium",q:"If A+B=10, B+C=15, A+C=13, what is A+B+C?",h:"Add all three equations then halve.",a:"19"},
{d:"hard",q:"All Bloops are Razzles. All Razzles are Lazzles. Are all Bloops definitely Lazzles?",h:"If A implies B and B implies C ...",a:"yes"},
{d:"hard",q:"If the day before yesterday was Thursday, what day is the day after tomorrow?",h:"Map out the days carefully.",a:"monday"},
{d:"hard",q:"In a group of 23 people, roughly what is the chance two share a birthday?",h:"This is the famous birthday problem.",a:"about 50 percent"},
{d:"hard",q:"Three friends split a Rs 300 bill. They each pay Rs 100. The waiter returns Rs 50. They each get Rs 10 back. Where did the missing Rs 10 go?",h:"There is no missing Rs 10. Recount carefully.",a:"there is no missing rupee"}
]},
{t:"Crack Code",s:"crack-code-puzzles",p:[
{d:"easy",q:"If A=1, B=2, C=3 ... what word does 8-5-12-12-15 spell?",h:"Convert each number to its letter.",a:"hello"},
{d:"easy",q:"ROT13: What does CHMMYR decode to?",h:"Each letter shifts 13 places forward.",a:"puzzle"},
{d:"easy",q:"If 1=A, 2=B, 3=C ... what does 6-21-14 spell?",h:"F=6, U=21, N=14.",a:"fun"},
{d:"easy",q:"What letter is the mirror of E in the alphabet A-Z?",h:"A=Z, B=Y, C=X ...",a:"v"},
{d:"easy",q:"In the code BSBOC each letter is one ahead of the real letter. What word does it spell?",h:"Shift each letter one place back in the alphabet.",a:"brain"},
{d:"easy",q:"What number comes next: 2, 4, 6, 8, __?",h:"Even numbers in sequence.",a:"10"},
{d:"easy",q:"Decode: 20-5-19-20. A=1, B=2 ...",h:"Convert each number to a letter.",a:"test"},
{d:"easy",q:"If ZAP = 26-1-16, what does CAT equal?",h:"A=1, B=2, C=3 ...",a:"3-1-20"},
{d:"medium",q:"682: one digit right place. 614: one digit wrong place. 206: two digits wrong places. What is the code?",h:"Start with 682 to find which position is correct.",a:"042"},
{d:"medium",q:"In a 4-digit lock using digits 1-4 with no repeats, how many codes are possible?",h:"4 x 3 x 2 x 1.",a:"24"},
{d:"medium",q:"Caesar cipher shift 3: decode SXCCOH",h:"Shift each letter back 3 places.",a:"puzzle"},
{d:"medium",q:"What pattern: 1, 11, 121, 1331, 14641?",h:"Think about Pascal triangle.",a:"powers of 11"},
{d:"hard",q:"A says B is lying. B says C is lying. C says A and B are both lying. Who tells the truth?",h:"Test each possibility. Only one is consistent.",a:"c"},
{d:"hard",q:"What is the next number: 1, 11, 21, 1211, 111221, __?",h:"Read each number aloud to describe the previous.",a:"312211"},
{d:"hard",q:"Using digits 1, 2, 3, 4 each exactly once with + - x, make 10.",h:"Try 1+2+3+4.",a:"1+2+3+4"},
{d:"hard",q:"A book has 500 pages. How many times does the digit 1 appear?",h:"Count pages: 1, 10-19, 100-199 ...",a:"200"}
]},
{t:"Chess",s:"fun-chess-puzzles",p:[
{d:"easy",q:"Which chess piece can jump over other pieces?",h:"It moves in an L-shape.",a:"knight"},
{d:"easy",q:"What is it called when a king is under attack and cannot escape?",h:"Check + ___.",a:"checkmate"},
{d:"easy",q:"How many squares are on a standard chessboard?",h:"8 x 8.",a:"64"},
{d:"easy",q:"Which chess piece can only move diagonally?",h:"Associated with a religious leader.",a:"bishop"},
{d:"easy",q:"What is the most powerful piece in chess?",h:"Can move in any direction any number of squares.",a:"queen"},
{d:"easy",q:"How many pawns does each player start with?",h:"They fill the entire second row.",a:"8"},
{d:"easy",q:"What colour square does the white queen start on?",h:"The queen always starts on her own colour.",a:"white"},
{d:"easy",q:"How many pieces does each player start with?",h:"Count all pieces on one side.",a:"16"},
{d:"medium",q:"A pawn reaches the last rank. Which piece can it NOT promote to?",h:"One piece is excluded from promotion.",a:"king"},
{d:"medium",q:"Which special move allows the king and rook to switch sides?",h:"Only move where two pieces move at once.",a:"castling"},
{d:"medium",q:"A player has no legal moves but their king is NOT in check. What is this called?",h:"The game ends immediately as a draw.",a:"stalemate"},
{d:"medium",q:"Which chess piece is worth roughly 3 pawns?",h:"It moves in an L-shape or along diagonals.",a:"knight or bishop"},
{d:"hard",q:"What opening starts: 1.e4 e5 2.Nf3 Nc6 3.Bc4?",h:"Named after a city in Italy.",a:"italian game"},
{d:"hard",q:"What is en passant?",h:"A pawn captures another that just moved two squares.",a:"special pawn capture"},
{d:"hard",q:"How many possible games exist after each player makes 2 moves?",h:"Each side has 20 first moves and 20 second moves.",a:"400"},
{d:"hard",q:"How many possible first moves does white have in chess?",h:"Pawns and knights can move.",a:"20"}
]},
{t:"Sudoku",s:"fun-with-sudoku",p:[
{d:"easy",q:"How many 3x3 boxes are in a standard 9x9 Sudoku?",h:"Rows of boxes multiplied by columns of boxes.",a:"9"},
{d:"easy",q:"In Sudoku, which digit can appear more than once in the same row?",h:"Trick question. Re-read the core rule.",a:"none"},
{d:"easy",q:"How many cells are in a standard Sudoku grid?",h:"9 x 9.",a:"81"},
{d:"easy",q:"Digits 1-9 must appear exactly once in each what?",h:"Three things: row, column, and ...",a:"row column and box"},
{d:"easy",q:"What is the most common Mini Sudoku grid size?",h:"Think half of 9, rounded.",a:"6x6"},
{d:"easy",q:"What does it mean for a Sudoku to have a unique solution?",h:"There is only one correct way to fill the grid.",a:"only one solution exists"},
{d:"easy",q:"In a 9x9 Sudoku, how many rows are there?",h:"Count them.",a:"9"},
{d:"easy",q:"How many numbers appear in each row of a completed Sudoku?",h:"Each digit 1 through 9 appears once.",a:"9"},
{d:"medium",q:"In Consecutive Sudoku, what extra rule applies between adjacent cells?",h:"It involves the difference between neighbouring values.",a:"must be consecutive"},
{d:"medium",q:"In Killer Sudoku, digits in a cage must sum to a target AND follow which rule?",h:"Same rule as every row and column.",a:"no repeat"},
{d:"medium",q:"What is a Thermo Sudoku?",h:"Think about temperature increasing along a path.",a:"digits increase along thermometer shape"},
{d:"medium",q:"What is the Naked Single technique in Sudoku?",h:"Only one digit can go in a cell.",a:"only one possible digit for a cell"},
{d:"hard",q:"What is the minimum number of clues a valid Sudoku needs for a unique solution?",h:"Research by McGuire et al. 2012.",a:"17"},
{d:"hard",q:"How many valid completed Sudoku grids exist approximately?",h:"The answer is in the billions of billions.",a:"6.7 sextillion"},
{d:"hard",q:"In a Diagonal Sudoku, how many extra constraints are added?",h:"Count the two main diagonals.",a:"2"},
{d:"hard",q:"What technique uses the fact that a digit must appear in one row or column of a box?",h:"It eliminates that digit from the rest of the row or column.",a:"pointing pairs"}
]},
{t:"Lateral",s:"lateral-thinking-puzzles",p:[
{d:"easy",q:"A man lives on the 10th floor. He takes the lift down each morning but walks up from the 6th floor. Why?",h:"Think about a physical limitation.",a:"he is too short to reach floor 10 button"},
{d:"easy",q:"How can a man go 8 days without sleep?",h:"He does not need to.",a:"he sleeps at night"},
{d:"easy",q:"An electric train heads north. Which way does the smoke blow?",h:"Electric trains produce no smoke.",a:"no smoke"},
{d:"easy",q:"A woman had two sons born same time same day. Not twins. How?",h:"Think about more than two.",a:"they are triplets"},
{d:"easy",q:"A man walks into a bar and asks for water. The bartender pulls a gun. The man says thanks and leaves. Why?",h:"Why would someone urgently need water?",a:"hiccups"},
{d:"easy",q:"A rooster laid an egg on a roof peak. Which way does it roll?",h:"Roosters do not lay eggs.",a:"roosters dont lay eggs"},
{d:"easy",q:"How do you make the number 7 even?",h:"Think about removing a letter.",a:"remove the s"},
{d:"easy",q:"A girl fell off a 20-foot ladder but was not hurt. How?",h:"Think about which rung she was on.",a:"she fell from the first rung"},
{d:"medium",q:"A woman shoots her husband then holds him underwater. They go to dinner an hour later. How?",h:"What profession shoots people harmlessly?",a:"photographer"},
{d:"medium",q:"A man dead in a field, unopened package beside him, no marks, no one around. How?",h:"What was the package supposed to do?",a:"parachute failed"},
{d:"medium",q:"You are in a boat on a lake. You drop an anchor overboard. Does the lake level rise or fall?",h:"Think about weight displacement.",a:"falls"},
{d:"medium",q:"A man is pushing his car. He stops at a hotel and says he is broke. What is he doing?",h:"Think about a board game.",a:"playing monopoly"},
{d:"hard",q:"3 switches outside control 3 bulbs in a windowless room. Enter only once. How do you identify each?",h:"Switches do more than light bulbs. Think heat.",a:"turn one on wait turn off turn another on then enter"},
{d:"hard",q:"5 pirates divide 100 coins by majority vote. What does the most senior propose?",h:"Work backwards from 2 pirates.",a:"96 0 1 0 3"},
{d:"hard",q:"A house has 4 sides all facing south. A bear walks by. What colour is the bear?",h:"Think about where all 4 sides can face south.",a:"white"},
{d:"hard",q:"How can you throw a ball so it goes a short distance, comes to a complete stop, and returns to you without bouncing or hitting anything?",h:"Think about throwing direction.",a:"throw it straight up"}
]},
{t:"Matchstick",s:"matchstick-maths-puzzles",p:[
{d:"easy",q:"How many matchsticks does it take to build a single square?",h:"Count the sides.",a:"4"},
{d:"easy",q:"5 + 5 + 5 = 550 is wrong. Add ONE straight line to make it correct.",h:"You can draw on any digit or symbol.",a:"545+5=550"},
{d:"easy",q:"How many matchsticks does it take to write number 8 on a digital display?",h:"Count all the segments.",a:"7"},
{d:"easy",q:"Move 1 matchstick in 5+5=6 to make it correct.",h:"You can change any digit or the operator.",a:"5+1=6"},
{d:"easy",q:"Using exactly 4 matchsticks, what is the maximum number of squares you can make?",h:"Think about sharing sides between shapes.",a:"2"},
{d:"easy",q:"How many matchsticks make the number 1 on a digital display?",h:"Count the segments in a digital 1.",a:"2"},
{d:"easy",q:"How many triangles can you make with 3 matchsticks?",h:"Each matchstick is one side.",a:"1"},
{d:"easy",q:"How many matchsticks does it take to make the number 0 on a digital display?",h:"Count all segments of a digital zero.",a:"6"},
{d:"medium",q:"How many triangles can you make with 6 equal matchsticks without breaking any?",h:"Think in three dimensions.",a:"4"},
{d:"medium",q:"Move ONE matchstick in VI - IV = IX to make it correct.",h:"Roman numerals. One stick changes a numeral.",a:"VI + IV = X"},
{d:"medium",q:"How many squares of ANY size are in a 3x3 matchstick grid?",h:"Count 1x1, 2x2, and 3x3 squares separately.",a:"14"},
{d:"medium",q:"Remove 2 matchsticks from a 2x2 grid of squares to leave exactly 2 squares.",h:"Think about shared sides.",a:"remove two adjacent sides"},
{d:"hard",q:"Remove 2 matchsticks from a 3x3 grid of squares to leave exactly 3 squares.",h:"Removing a shared side destroys two squares at once.",a:"remove two shared sides"},
{d:"hard",q:"How many squares of all sizes are in a 4x4 matchstick grid?",h:"Count 1x1=16, 2x2=9, 3x3=4, 4x4=1.",a:"30"},
{d:"hard",q:"Move 2 matchsticks in 8-4=11 to make it correct.",h:"You can change any part of the equation.",a:"8-4=4"},
{d:"hard",q:"How many matchsticks are needed to spell CAT in capital block letters?",h:"Count each letter carefully using straight lines.",a:"9"}
]},
{t:"Rebus",s:"rebus-riddles",p:[
{d:"easy",q:"What phrase does HE + ART represent?",h:"Read the letters and their position.",a:"heart"},
{d:"easy",q:"HIJKLMNO — What one word does this represent?",h:"These letters span H to O.",a:"water"},
{d:"easy",q:"What does BAN + ANA represent?",h:"Put the sounds together.",a:"banana"},
{d:"easy",q:"What does EZ represent?",h:"Say the letters aloud.",a:"easy"},
{d:"easy",q:"What phrase does HEAD over HEELS represent?",h:"One word is above another.",a:"head over heels"},
{d:"easy",q:"What word is hidden inside: PRAISECTION?",h:"Look for a smaller word inside.",a:"raise"},
{d:"easy",q:"What does GR + 8 represent?",h:"Say each part aloud.",a:"great"},
{d:"easy",q:"What does B4 represent?",h:"Say it aloud as a number and letter.",a:"before"},
{d:"medium",q:"What does this represent?\nSTAND\nI I I I",h:"What are the I's doing relative to STAND?",a:"i understand"},
{d:"medium",q:"ONCE\n----\nTIME\nWhat does this represent?",h:"Think about position.",a:"once upon a time"},
{d:"medium",q:"What phrase is shown by TIMING TIM ING?",h:"One word is inside another.",a:"perfect timing"},
{d:"medium",q:"What does this mean: DEATH LIFE?",h:"Think about what comes between the two words.",a:"life after death"},
{d:"hard",q:"What does MAN / BOARD represent?",h:"Think about position.",a:"man overboard"},
{d:"hard",q:"What does NE14 10S mean?",h:"Say each part aloud.",a:"anyone for tennis"},
{d:"hard",q:"TIMING TIM ING — what is the hidden phrase?",h:"The word TIM is inside TIMING.",a:"split second timing"},
{d:"hard",q:"What does ROADS represent?",h:"Think about crossroads.",a:"crossroads"}
]},
{t:"GK",s:"general-knowledge-quizzes-and-riddles",p:[
{d:"easy",q:"Which planet has the most moons?",h:"The largest planet in our solar system.",a:"jupiter"},
{d:"easy",q:"What is the only country that is also a continent?",h:"Southern Hemisphere, has kangaroos.",a:"australia"},
{d:"easy",q:"Which element has the chemical symbol Fe?",h:"A common metal used in construction.",a:"iron"},
{d:"easy",q:"What is the capital of Japan?",h:"One of the most populated cities in the world.",a:"tokyo"},
{d:"easy",q:"How many sides does a hexagon have?",h:"Think about the prefix hex.",a:"6"},
{d:"easy",q:"What is the largest ocean on Earth?",h:"It covers more than one third of Earth.",a:"pacific"},
{d:"easy",q:"What is the boiling point of water in Celsius?",h:"Think about cooking pasta.",a:"100"},
{d:"easy",q:"How many continents are there on Earth?",h:"Think: Africa, Asia, Europe, Americas, etc.",a:"7"},
{d:"medium",q:"What is the shortest war in history, lasting only 38-45 minutes?",h:"Between Britain and a Sultanate in East Africa, 1896.",a:"zanzibar"},
{d:"medium",q:"Which element has the highest melting point of all elements?",h:"Used in light bulb filaments.",a:"tungsten"},
{d:"medium",q:"What is the speed of light in a vacuum, approximately?",h:"About 300 million metres per second.",a:"300000 km per second"},
{d:"medium",q:"What is the largest desert in the world?",h:"It is not the Sahara.",a:"antarctica"},
{d:"hard",q:"I am a country, language and nationality all sharing one name. Capital is Amsterdam. What am I?",h:"Famous for tulips, windmills, and cycling.",a:"netherlands"},
{d:"hard",q:"What is the only number in English with the same number of letters as its value?",h:"Count the letters in the word.",a:"four"},
{d:"hard",q:"Which country has the most natural lakes?",h:"It has over 60 percent of the world total.",a:"canada"},
{d:"hard",q:"What is the only planet that rotates clockwise when viewed from above?",h:"It spins backwards compared to most planets.",a:"venus"}
]},
{t:"Odd One",s:"odd-one-out-picture-puzzles",p:[
{d:"easy",q:"Odd one out:\nApple, Banana, Carrot, Mango",h:"Three are fruits. One is not.",a:"carrot"},
{d:"easy",q:"Odd one out:\nRed, Blue, Green, Yellow, Circle",h:"Four are colours. One is a shape.",a:"circle"},
{d:"easy",q:"Odd one out:\nDog, Cat, Eagle, Rabbit",h:"Three are mammals. One is a bird.",a:"eagle"},
{d:"easy",q:"Odd one out:\nSpain, France, India, Italy",h:"Three are European. One is not.",a:"india"},
{d:"easy",q:"Odd one out:\nSwimming, Running, Tennis, Cycling",h:"Three do not need a partner. One does.",a:"tennis"},
{d:"easy",q:"Odd one out:\nSon, Moon, Star, Earth",h:"Three are in space. One is a family member.",a:"son"},
{d:"easy",q:"Odd one out:\nRose, Lotus, Tulip, Oak",h:"Three are flowers. One is not.",a:"oak"},
{d:"easy",q:"Odd one out:\nCow, Horse, Hen, Tiger",h:"Three are domestic. One is wild.",a:"tiger"},
{d:"medium",q:"Odd one out:\nPiano, Guitar, Violin, Trumpet, Flute",h:"Four need air or strings. One is different.",a:"piano"},
{d:"medium",q:"Odd one out:\n3, 5, 7, 9, 11",h:"All are odd but look at which are prime.",a:"9"},
{d:"medium",q:"Odd one out:\nNile, Amazon, Thames, Sahara",h:"Three are rivers. One is not.",a:"sahara"},
{d:"medium",q:"Odd one out:\n2, 3, 5, 7, 9, 11",h:"One is not prime.",a:"9"},
{d:"hard",q:"Odd one out:\nMercury, Venus, Earth, Pluto, Mars",h:"Think about their official planetary status.",a:"pluto"},
{d:"hard",q:"Odd one out:\n121, 144, 169, 196, 225, 250",h:"Five are perfect squares. One is not.",a:"250"},
{d:"hard",q:"Odd one out:\nNovember, April, June, September, February",h:"Think about the number of days in each month.",a:"february"},
{d:"hard",q:"Odd one out:\nCow, Buffalo, Camel, Horse, Calf",h:"Think about the stage of life.",a:"calf"}
]},
{t:"Mistake",s:"find-mistake-puzzles",p:[
{d:"easy",q:"Spot the mistake:\n1, 2, 3, 4, 5, 6, 8, 9, 10",h:"Count the numbers carefully.",a:"7 is missing"},
{d:"easy",q:"Spot the mistake:\nMonday, Tuesday, Wednesday, Thursday, Friday, Sunday",h:"Check all the days of the week.",a:"saturday is missing"},
{d:"easy",q:"What is wrong with: She have three cats.",h:"Subject-verb agreement.",a:"have should be has"},
{d:"easy",q:"Spot the mistake:\nJanuary, February, March, April, May, July",h:"Check all the months.",a:"june is missing"},
{d:"easy",q:"Which sentence has a mistake?\nA. The cat sat on the mat.\nB. She go to school every day.\nC. I am happy.",h:"Look at the verb agreement.",a:"B"},
{d:"easy",q:"Spot the error:\n2, 4, 6, 8, 10, 12, 15, 16",h:"Even numbers increase by 2 each time.",a:"15 should be 14"},
{d:"easy",q:"Spot the mistake:\nA, B, C, D, E, F, H, I",h:"Check the alphabet carefully.",a:"G is missing"},
{d:"easy",q:"What is wrong: The earth revolve around the sun.",h:"Subject-verb agreement with a singular subject.",a:"revolve should be revolves"},
{d:"medium",q:"Find the deliberate mistake:\n2, 4, 8, 16, 36, 64",h:"Each number should double.",a:"36 should be 32"},
{d:"medium",q:"Which is wrong?\nWater boils at 100C.\nIce melts at 0C.\nSun rises in East.\nMoon is a planet.",h:"The moon is NOT a planet.",a:"moon is not a planet"},
{d:"medium",q:"Find the error: There our three mistakes in this sentance.",h:"There are actually 3 errors.",a:"our should be are sentance should be sentence"},
{d:"medium",q:"What is wrong: A triangle has 4 sides.",h:"Basic geometry.",a:"a triangle has 3 sides not 4"},
{d:"hard",q:"Spot the mistake:\n6x8=48\n7x8=54\n8x8=64\n9x8=72",h:"Check each multiplication.",a:"7x8 should be 56 not 54"},
{d:"hard",q:"What is wrong with a triangle of sides 3, 4, and 8?",h:"Triangle inequality: sum of two sides must exceed third.",a:"not a valid triangle"},
{d:"hard",q:"Find the mistake: All prime numbers are odd. Therefore 2 is not prime.",h:"2 is the only even prime number.",a:"2 is prime"},
{d:"hard",q:"Spot the mistake:\n5! = 120\n4! = 24\n3! = 6\n2! = 1",h:"Check factorial of 2.",a:"2! should be 2 not 1"}
]},
{t:"English",s:"english-word-riddles",p:[
{d:"easy",q:"Which word in the dictionary is always spelled incorrectly?",h:"Read the question very literally.",a:"incorrectly"},
{d:"easy",q:"What 5-letter word becomes shorter when you add 2 letters?",h:"Think of the word meaning not long.",a:"short"},
{d:"easy",q:"What starts with E, ends with E, but only has one letter?",h:"It carries letters.",a:"envelope"},
{d:"easy",q:"Find the hidden animal in: I visited my friend in SPARTA.",h:"Look inside the word SPARTA.",a:"rat"},
{d:"easy",q:"What word has three consecutive double letters?",h:"Think about keeping books.",a:"bookkeeper"},
{d:"easy",q:"What is a word that reads the same forwards and backwards?",h:"These are called palindromes.",a:"racecar"},
{d:"easy",q:"What comes once in a minute, twice in a moment, but never in a thousand years?",h:"Think about the letter not the concept.",a:"letter m"},
{d:"easy",q:"Rearrange SILENT to make another common English word.",h:"It uses the same 6 letters.",a:"listen"},
{d:"medium",q:"What 8-letter word contains only one vowel?",h:"Think about building material.",a:"strength"},
{d:"medium",q:"Which word contains all 5 vowels in order: a, e, i, o, u?",h:"A word meaning moderate in habits.",a:"abstemious"},
{d:"medium",q:"What is the longest common English word typed using only the top keyboard row?",h:"QWERTY row: Q W E R T Y U I O P.",a:"typewriter"},
{d:"medium",q:"What 7-letter word has hundreds of letters in it?",h:"Think about what holds many letters.",a:"mailbox or postbox"},
{d:"hard",q:"What is the next letter: O, T, T, F, F, S, S, E, __?",h:"First letters of numbers: one, two, three ...",a:"n"},
{d:"hard",q:"What English word can have 4 of its 5 letters removed and still sound the same?",h:"Think about the word queue.",a:"queue"},
{d:"hard",q:"What word contains the letters of CINEMA in order but not consecutively?",h:"C-I-N-E-M-A spread through a longer word.",a:"ceremonial"},
{d:"hard",q:"What is the only word in English that ends in -mt?",h:"Think about something that was not allowed to happen.",a:"dreamt"}
]},
{t:"Quick",s:"quick-puzzles-brain-teasers-and-riddles",p:[
{d:"easy",q:"David's mother has 4 children: April, May, June, and who?",h:"Re-read the question. Who is mentioned first?",a:"david"},
{d:"easy",q:"What has 13 hearts but no other organs?",h:"You use it to play card games.",a:"deck of cards"},
{d:"easy",q:"If you throw a red stone into the blue sea, what does it become?",h:"Think about what happens physically.",a:"wet"},
{d:"easy",q:"What can you hold in your right hand but not in your left?",h:"Think about which hand is which.",a:"your left hand"},
{d:"easy",q:"What goes up when rain comes down?",h:"Think about what you use in the rain.",a:"umbrella"},
{d:"easy",q:"I have a tail and a head but no body. What am I?",h:"You flip me to make a decision.",a:"coin"},
{d:"easy",q:"How many seconds are in a year?",h:"Think literally about the word second.",a:"12 the 2nd of each month"},
{d:"easy",q:"A rooster lays an egg at the very top of a slanted roof. Which side does it roll off?",h:"Can a rooster lay eggs?",a:"roosters dont lay eggs"},
{d:"medium",q:"A man drives from A to B at 60 km/h and returns at 40 km/h. What is his average speed?",h:"Do not just average the speeds. Use total distance over total time.",a:"48 km/h"},
{d:"medium",q:"A snail is at the bottom of a 10m well. Each day it climbs 3m but slides back 2m at night. How many days to escape?",h:"On the last day it reaches the top before sliding.",a:"8 days"},
{d:"medium",q:"100 people in a room. 99 percent have blue eyes. How many must leave so 98 percent have blue eyes?",h:"This is a tricky percentage puzzle.",a:"50"},
{d:"medium",q:"If a doctor gives you 3 pills and tells you to take one every 30 minutes, how long until they are all gone?",h:"Count carefully from when you take the first.",a:"1 hour"},
{d:"hard",q:"You have a candle, a match, and a gas lamp. Which do you light first?",h:"You need one thing before you can light anything.",a:"the match"},
{d:"hard",q:"If 5 cats catch 5 mice in 5 minutes, how many cats catch 100 mice in 100 minutes?",h:"Work out the rate per cat.",a:"5"},
{d:"hard",q:"What is the next number: 1, 11, 21, 1211, 111221, __?",h:"Read each number aloud to describe the previous one.",a:"312211"},
{d:"hard",q:"A clock shows 3:15. What is the exact angle between the hour and minute hands?",h:"The hour hand moves too. It is not at exactly 3.",a:"7.5 degrees"}
]},
{t:"Kids",s:"easy-puzzles",p:[
{d:"easy",q:"What has a face and two hands but no arms or legs?",h:"You look at it to know the time.",a:"clock"},
{d:"easy",q:"What is black when you buy it, red when you use it, grey when you throw it away?",h:"You use it to write on a board.",a:"charcoal"},
{d:"easy",q:"What animal has a trunk but never packs for a holiday?",h:"The largest land animal.",a:"elephant"},
{d:"easy",q:"What gets bigger the more you take away from it?",h:"Think about digging.",a:"hole"},
{d:"easy",q:"I have a tail and a head but no body. What am I?",h:"You flip me to make a decision.",a:"coin"},
{d:"easy",q:"What stays in a corner but travels all over the world?",h:"You put me on an envelope.",a:"stamp"},
{d:"easy",q:"What has 4 legs in the morning and 4 legs all day?",h:"A simple one — not the Sphinx riddle.",a:"table"},
{d:"easy",q:"What has a lot of keys but cannot open any door?",h:"You use it to play music.",a:"piano"},
{d:"medium",q:"How many months have 28 days?",h:"Do not just say one.",a:"all of them"},
{d:"medium",q:"What goes up when rain comes down?",h:"Think about what you use in the rain.",a:"umbrella"},
{d:"medium",q:"A man has 10 horses and 9 stables. One horse in each stable — possible?",h:"Re-read: does it say one horse PER stable?",a:"no 10 horses only 9 stables"},
{d:"medium",q:"What can you keep after giving it to someone?",h:"Think about something intangible.",a:"your word"},
{d:"hard",q:"The word CANDY can be spelled using just 2 letters. How?",h:"C and Y — CandY.",a:"C and Y"},
{d:"hard",q:"What is the next letter: O, T, T, F, F, S, S, E, __?",h:"First letters of: one, two, three ...",a:"N"},
{d:"hard",q:"A farmer has 5 haystacks in one field and 4 in another. He combines them. How many haystacks?",h:"What happens when you combine haystacks?",a:"1"},
{d:"hard",q:"What is special about the number 8,549,176,320?",h:"Think about what it contains.",a:"contains all digits 0-9 each once"}
]},
{t:"Pyramid",s:"pyramid-maths-puzzles",p:[
{d:"easy",q:"In a number pyramid each block = sum of two blocks below.\nWhat goes on top?\n?\n3  4",h:"Add the two bottom numbers.",a:"7"},
{d:"easy",q:"Fill the pyramid:\n?\n5  6",h:"Add the two bottom blocks.",a:"11"},
{d:"easy",q:"In a pyramid:\n10\n?  3\nWhat is the missing number?",h:"Top = sum of two below.",a:"7"},
{d:"easy",q:"Pyramid: top is 15, one base is 7. What is the other base?",h:"Top = sum of two below.",a:"8"},
{d:"easy",q:"Bottom row of pyramid: 2, 3. What is the top?",h:"Add the two bottom numbers.",a:"5"},
{d:"easy",q:"Bottom row: 1, 4. Top = ?",h:"Add the two bottom numbers.",a:"5"},
{d:"easy",q:"Top = 20. Bottom left = 8. Bottom right = ?",h:"Top = sum of two below.",a:"12"},
{d:"easy",q:"3-row pyramid. Bottom row: 4, 5, 6. Each block above = sum of the two blocks below it. What is the top value?",h:"First find the middle row (4+5 and 5+6), then add those two.",a:"20"},
{d:"medium",q:"Complete the pyramid:\n?\n?  ?\n1  2  3",h:"Build layer by layer from the bottom.",a:"9"},
{d:"medium",q:"Bottom row: 5, 3, 8. Each block = difference of two below. What is the top?",h:"Middle row first, then top.",a:"3"},
{d:"medium",q:"A 4-row pyramid bottom row: 1, 2, 3, 4. Each block = sum of two below. What is the top?",h:"Build row by row: 3,5,7 then 8,12 then 20.",a:"20"},
{d:"medium",q:"Pyramid top=18. Middle row: 7, ?. Bottom row: 3, 4, ?",h:"Work downwards and upwards.",a:"11 and 7"},
{d:"hard",q:"Pyramid top=50. Second row: 20 and ?. Third row: 8, 12, ?. Find missing values.",h:"Work both up and down.",a:"30 and 18"},
{d:"hard",q:"5-row pyramid, bottom row all 1s. What is the top?",h:"Use Pascal triangle pattern.",a:"16"},
{d:"hard",q:"Bottom row: a, b, c. Top = a+2b+c. If top=20, a=3, c=5, find b.",h:"Top = a + 2b + c.",a:"6"},
{d:"hard",q:"In a multiplication pyramid each block = product of two below. Bottom: 2, 3, 4. Top = ?",h:"Middle row: 6, 12. Then top = 72.",a:"72"}
]},
{t:"Shapes",s:"count-shapes-puzzles",p:[
{d:"easy",q:"How many triangles are in a large triangle divided into 4 smaller equal triangles?",h:"Count the small ones and the large one.",a:"5"},
{d:"easy",q:"How many squares are in a 2x2 grid of squares?",h:"Count 1x1 and 2x2 squares.",a:"5"},
{d:"easy",q:"How many lines make a triangle?",h:"A triangle has 3 sides.",a:"3"},
{d:"easy",q:"How many triangles are in a Star of David?",h:"Count all sizes including overlapping ones.",a:"8"},
{d:"easy",q:"How many rectangles are in a 1x3 grid of squares?",h:"Count all rectangles including the squares themselves.",a:"6"},
{d:"easy",q:"How many sides does a hexagon have?",h:"Think about the prefix hex.",a:"6"},
{d:"easy",q:"How many sides does an octagon have?",h:"Think about the prefix oct.",a:"8"},
{d:"easy",q:"How many diagonals does a square have?",h:"Draw it and count.",a:"2"},
{d:"medium",q:"How many squares of ALL sizes are in a 3x3 grid?",h:"Count 1x1, 2x2, and 3x3 separately.",a:"14"},
{d:"medium",q:"How many rectangles are in a 3x2 grid?",h:"Use: (r+1)r/2 x (c+1)c/2.",a:"18"},
{d:"medium",q:"How many triangles in a hexagon divided into 6 triangles from centre?",h:"Count all sizes: 1, 2, 3, 4, 5, 6 unit triangles.",a:"18"},
{d:"medium",q:"How many triangles are in a regular pentagram (5-pointed star)?",h:"Count all sizes carefully.",a:"10"},
{d:"hard",q:"How many squares of ALL sizes are in a 4x4 grid?",h:"1x1=16, 2x2=9, 3x3=4, 4x4=1.",a:"30"},
{d:"hard",q:"How many rectangles are in a 4x4 grid?",h:"Use formula: C(5,2) x C(5,2).",a:"100"},
{d:"hard",q:"How many triangles are in an equilateral triangle divided into 16 smaller equal triangles?",h:"Count all sizes systematically.",a:"35"},
{d:"hard",q:"How many squares of all sizes are in a 5x5 grid?",h:"1x1=25, 2x2=16, 3x3=9, 4x4=4, 5x5=1.",a:"55"}
]},
{t:"Spatial",s:"spatial-reasoning-puzzles",p:[
{d:"easy",q:"How many faces does a cube have?",h:"Think about a dice.",a:"6"},
{d:"easy",q:"If you unfold a cube, how many squares do you see?",h:"Net of a cube.",a:"6"},
{d:"easy",q:"How many edges does a cube have?",h:"Count the lines where two faces meet.",a:"12"},
{d:"easy",q:"What 3D shape has a circular base and comes to a point?",h:"Think about a party hat.",a:"cone"},
{d:"easy",q:"How many vertices does a cube have?",h:"Count the corners.",a:"8"},
{d:"easy",q:"A shape has 4 equal sides and 4 right angles. What is it?",h:"All sides equal, all angles right angles.",a:"square"},
{d:"easy",q:"How many faces does a triangular prism have?",h:"Two triangles and three rectangles.",a:"5"},
{d:"easy",q:"What is the shape of a football panel?",h:"Two types of polygon are used.",a:"pentagon and hexagon"},
{d:"medium",q:"A cube painted red on all faces is cut into 27 small cubes. How many have exactly 2 red faces?",h:"Think about edge cubes not corner cubes.",a:"12"},
{d:"medium",q:"A cylinder has how many faces, edges, and vertices?",h:"Think carefully about curved surfaces.",a:"3 faces 2 edges 0 vertices"},
{d:"medium",q:"If a cube is cut into 64 small cubes, how many have NO painted faces?",h:"Think about the inner cubes.",a:"8"},
{d:"medium",q:"How many small cubes have exactly 3 painted faces when a cube is cut into 27?",h:"Think about corner cubes.",a:"8"},
{d:"hard",q:"How many different nets does a cube have?",h:"A net is an unfolded version.",a:"11"},
{d:"hard",q:"A solid has 6 faces, 12 edges, and 8 vertices. What solid is this?",h:"Use Euler formula: F + V - E = 2.",a:"cube"},
{d:"hard",q:"How many cubes in a 3x3x3 cube have at least one face painted on the outside?",h:"Total cubes minus inner cubes.",a:"26"},
{d:"hard",q:"A cube has its corner cut off. How many faces does the new solid have?",h:"The cut adds a new triangular face.",a:"7"}
]},
{t:"Interview",s:"interview-questions",p:[
{d:"easy",q:"Why are manholes round and not square?",h:"Think about what happens if you drop a square cover.",a:"cannot fall in"},
{d:"easy",q:"How many golf balls can fit in a school bus?",h:"Estimate volume of both then divide.",a:"about 500000"},
{d:"easy",q:"How do you weigh an elephant without a scale?",h:"Think about water displacement.",a:"use a boat and mark the waterline"},
{d:"easy",q:"A 4x4x4 cube painted outside is cut into 1x1x1 cubes. How many have no paint?",h:"Think about the inner cubes.",a:"8"},
{d:"easy",q:"You have 3L and 5L jugs. How do you measure exactly 4L?",h:"Fill 5, pour into 3, dump, repeat.",a:"fill 5 pour into 3 leaving 2 fill 3 from 5 gives 4"},
{d:"easy",q:"How many times do the hands of a clock overlap in 12 hours?",h:"They overlap approximately every 65.45 minutes.",a:"11"},
{d:"easy",q:"How many windows are in your city?",h:"Estimate population then multiply by windows per person.",a:"estimate based on population"},
{d:"easy",q:"How would you move Mount Fuji?",h:"Think creatively — this is a judgement test.",a:"move the reference point or tunnel through it"},
{d:"medium",q:"8 identical balls, one slightly heavier. Using a balance only twice, find the heavy one.",h:"Divide into groups of 3, 3, and 2.",a:"two weighings"},
{d:"medium",q:"How many piano tuners are in a city of 1 million people?",h:"Estimate pianos per person and tunings per year.",a:"about 200"},
{d:"medium",q:"3 switches control 3 bulbs in a windowless room. Enter only once. How identify each?",h:"Think about heat from a bulb.",a:"leave one on wait turn off turn another on then enter check heat"},
{d:"medium",q:"You have 100 lockers all open. You toggle every 2nd, then every 3rd, etc. Which are open at the end?",h:"Only lockers with an odd number of factors stay open.",a:"perfect square numbered lockers"},
{d:"hard",q:"How many times do the hands of a clock overlap in 24 hours?",h:"They overlap approximately every 65.45 minutes.",a:"22"},
{d:"hard",q:"5 pirates divide 100 coins by majority vote. What does the most senior propose?",h:"Work backwards from 2 pirates.",a:"96 0 1 0 3"},
{d:"hard",q:"If 5 cats catch 5 mice in 5 minutes, how many cats catch 100 mice in 100 minutes?",h:"Work out the rate per cat.",a:"5"},
{d:"hard",q:"You are shrunk to penny-height and put in a blender. What do you do?",h:"Think about the physics and your tiny weight.",a:"jump out as blades spin slowly at first"}
]},
{t:'Word Play',s:'english-word-riddles',p:[
{d:'easy',q:'What word becomes shorter when you add two letters to it?',h:'Add letters that spell out a small amount.',a:'short'},
{d:'easy',q:'What 8-letter word has only one letter in it?',h:'Read it literally, not as a category.',a:'envelope'},
{d:'easy',q:'What word looks the same upside down and backwards?',h:'Think of a simple 5-letter word about swimming.',a:'swims'},
{d:'easy',q:'Rearrange the letters of "LISTEN" to make another common word.',h:'It relates to being quiet or peaceful.',a:'silent'},
{d:'easy',q:'What do you call a word that reads the same forwards and backwards?',h:'Think of the word "level" as an example.',a:'palindrome'},
{d:'easy',q:'What is the only English number word whose letters are in alphabetical order?',h:'It has 4 letters.',a:'forty'},
{d:'easy',q:'What word begins and ends with "he" and has "he" in the middle too?',h:'Think about a place full of chickens.',a:'henhouse'},
{d:'easy',q:'What single letter, when added to "OWE", makes a word meaning a farming tool?',h:'Farmers use this tool to break up soil.',a:'hoe'},
{d:'medium',q:'I am a word of letters three. Add two and fewer there will be. What word am I?',h:'The word itself means "not many".',a:'few'},
{d:'medium',q:'What common English word contains all five vowels in order, exactly once each?',h:'Think of a word about speaking without preparation.',a:'facetiously'},
{d:'medium',q:'What 7-letter word has hundreds of letters in it?',h:'Think about a place where mail arrives.',a:'mailbox'},
{d:'medium',q:'What word can precede both "BOX" and "STORM" to make two new words?',h:'Think about strong wind and cardboard containers.',a:'wind'},
{d:'hard',q:'What is the longest English word that can be typed using only the left hand on a QWERTY keyboard?',h:'Think of a word describing something exaggerated or overstated.',a:'stewardesses'},
{d:'hard',q:'What word starts with an E, ends with an E, but is spelled with just one letter?',h:'It carries a written message.',a:'envelope'},
{d:'hard',q:'What 9-letter word remains a word each time you remove the last letter, down to a single letter?',h:'It starts with a word about a place to stay.',a:'startling'},
{d:'hard',q:'Which English word is the odd one out — DESSERTS, STRESSED, or DRAWER — when spelled backwards?',h:'Two of them turn into real words when reversed.',a:'drawer'}
]},
{t:'Number Logic',s:'number-logic-puzzles',p:[
{d:'easy',q:'What is the smallest positive whole number that is not a prime and not 1?',h:'It is even.',a:'4'},
{d:'easy',q:'What do you call a number that can only be divided evenly by 1 and itself?',h:'2, 3, 5, 7, 11 are examples.',a:'prime number'},
{d:'easy',q:'What is the next number in this simple pattern: 1, 3, 5, 7, __?',h:'These are odd numbers in order.',a:'9'},
{d:'easy',q:'If you add all the numbers from 1 to 5, what do you get?',h:'1+2+3+4+5.',a:'15'},
{d:'easy',q:'What is the smallest 3-digit number?',h:'Think of the smallest possible hundreds digit.',a:'100'},
{d:'easy',q:'How many even numbers are there between 1 and 10 (inclusive)?',h:'Count 2, 4, 6, 8, 10.',a:'5'},
{d:'easy',q:'What number, when doubled, equals 18?',h:'Divide 18 by 2.',a:'9'},
{d:'easy',q:'What is 7 squared?',h:'7 multiplied by itself.',a:'49'},
{d:'medium',q:'In a 3x3 magic square using 1-9, every row, column and diagonal sums to the same number. What is that number?',h:'The total of 1 through 9 is 45. Divide by 3 rows.',a:'15'},
{d:'medium',q:'What is the smallest number divisible by both 4 and 6?',h:'Find the least common multiple.',a:'12'},
{d:'medium',q:'A number is divisible by 9 if what is true about its digits?',h:'Add up the digits and check that sum.',a:'the digit sum is divisible by 9'},
{d:'medium',q:'What is the sum of the digits of 999?',h:'9+9+9.',a:'27'},
{d:'hard',q:'What is the only even prime number?',h:'Every other even number can be divided by 2 evenly, which disqualifies it from being prime — except this one.',a:'2'},
{d:'hard',q:'A 4-digit number reads the same forwards and backwards. What is this type of number called?',h:'Think about the word for something symmetric, like "level" or "1221".',a:'palindrome'},
{d:'hard',q:'What is the smallest number that is both a perfect square and a perfect cube (excluding 0 and 1)?',h:'Try 2 to the power of 6.',a:'64'},
{d:'hard',q:'What do you call a number equal to the sum of its own proper divisors, like 6 = 1+2+3?',h:'The next such number after 6 is 28.',a:'perfect number'}
]},
{t:'Emoji',s:'emoji-puzzles',p:[
{d:'easy',q:'🍎 + 🥧 = ? (guess the food)',h:'A classic American dessert.',a:'apple pie'},
{d:'easy',q:'🐝 + 🍯 — which insect makes this sweet food?',h:'Think about a buzzing insect.',a:'bee honey'},
{d:'easy',q:'🌞 + 🌻 — what flower always turns to face this?',h:'Its name literally describes the behaviour.',a:'sunflower'},
{d:'easy',q:'❄️ + ☃️ — what season features both?',h:'The cold season.',a:'winter'},
{d:'easy',q:'🌧️ + 🐱 + 🐶 — what English idiom describes very heavy rain?',h:"It's raining ___ and ___.",a:'raining cats and dogs'},
{d:'easy',q:'🍞 + 🧈 — what do you spread on the bread?',h:'A dairy product.',a:'butter'},
{d:'easy',q:'🌧️ + 🌈 — what appears in the sky after rain and sun combine?',h:'A colourful arc.',a:'rainbow'},
{d:'easy',q:'🥚 + 🐔 — which classic philosophical question involves both?',h:'Which came first?',a:'the chicken or the egg'},
{d:'medium',q:'⏰ + ✈️ — what common phrase means time passes quickly?',h:'Think about a flying insect too, if that helps.',a:'time flies'},
{d:'medium',q:'🌙 + 🚶 = ? (a phrase about staying up late walking)',h:'Not literally walking on the moon.',a:'moonwalk'},
{d:'medium',q:'🐛 + 🦋 — what natural process does this represent?',h:'A caterpillar becomes something else.',a:'metamorphosis'},
{d:'medium',q:'🔥 + 👨‍🚒 — what job puts out fires?',h:'Wears a helmet, drives a red truck.',a:'firefighter'},
{d:'hard',q:'🦁 + 👑 — what is this animal often called because of its emoji pairing?',h:"Think about a famous animated movie title.",a:'the lion king'},
{d:'hard',q:'🌍 + 🔥 + 🌡️ — what environmental issue do these three represent together?',h:'Rising planetary temperatures.',a:'global warming'},
{d:'hard',q:'🧠 + 💡 — what phrase describes a sudden clever idea?',h:'A lightbulb moment.',a:'brainwave or bright idea'},
{d:'hard',q:'⏰ + 🐦 — what English idiom about being early does this represent?',h:'A proverb about worms.',a:'the early bird catches the worm'}
]}
];

/* ── Helpers ── */
function _td(){var d=new Date();return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();}
function _sh(a,s){var r=a.slice(),x=(s||1)&0x7fffffff,i,j,t;for(i=r.length-1;i>0;i--){x=(x*1664525+1013904223)&0x7fffffff;j=x%(i+1);t=r[i];r[i]=r[j];r[j]=t;}return r;}
function _rnd(a){var r=a.slice(),i,j,t;for(i=r.length-1;i>0;i--){j=Math.floor(Math.random()*(i+1));t=r[i];r[i]=r[j];r[j]=t;}return r;}
function _ds(){var d=new Date();return d.getFullYear()*10000+(d.getMonth()+1)*100+d.getDate();}
function _pk(c,s){
  var e=_sh(c.p.filter(function(x){return x.d==='easy';}),s);
  var m=_sh(c.p.filter(function(x){return x.d==='medium';}),s+7);
  var h=_sh(c.p.filter(function(x){return x.d==='hard';}),s+13);
  return[e[0],e[1],e[2],m[0],h[0]];
}
function _nr(s){return s.trim().toLowerCase().replace(/[^a-z0-9\s]/g,'').replace(/\s+/g,' ');}
function _fz(r,a){
  var x=_nr(r),c=_nr(a);
  if(x===c)return true;
  var cw=c.split(' '),rw=x.split(' ');
  var h=cw.filter(function(w){return w.length>3&&rw.indexOf(w)!==-1;});
  return h.length>=Math.max(1,Math.floor(cw.length*0.6));
}
/* extract image from blogger post html
   Handles ALL blogger CDN URL formats:
   - /s640-rw/image.PNG  (old)
   - /w400-h266-p-k-no-nu/image.png  (new)
   - /s72-c/image.png  (thumbnail old)
   - /w72-h72-p-k-no-nu/image.png  (thumbnail new)
   Strategy: grab full blogger CDN URL then normalise size to s600 */
function _img(html){
  if(!html)return null;
  /* match ANY blogger googleusercontent URL */
  var m=html.match(/src=["'](https?:\/\/[^"']*blogger[^"']*googleusercontent[^"']*\/[^"'\/]+\/[^"']+)/i);
  if(m){
    var u=m[1];
    /* normalise size portion — replace whatever comes before the filename */
    u=u.replace(/\/(s\d+[^/]*|w\d+-h\d+[^/]*)\//,'/s600/');
    return u;
  }
  /* fallback: any image src */
  var m2=html.match(/src=["']([^"']+\.(?:jpg|jpeg|png|gif|webp|PNG|JPG)[^"']*)/i);
  return m2?m2[1]:null;
}

/* ── Widget factory ── */
function _boot(tid,_SK,_TK){
  var el=document.getElementById(tid);if(!el)return;
  var ds=_ds(),td=_td();
  /* shuffle offline cats daily so the order rotates */
  /* Show only 3 offline tabs per day, picked from the full category pool (C).
     _sh(C,ds) shuffles the ENTIRE pool deterministically using today's date
     as the seed, so every visitor sees the same 3 categories today — and a
     different 3 tomorrow, since ds changes daily. Slicing to 3 keeps the
     tab bar to "3 tabs + Explore" no matter how large the pool grows. */
  var TABS_PER_DAY=3;
  var ac=_sh(C,ds).slice(0,TABS_PER_DAY);
  var EXPLORE_IDX=ac.length; /* Explore tab always sits right after the offline category tabs */
  var st;
  try{var _r=JSON.parse(localStorage.getItem(_SK)||'null');st=_r&&_r.date===td?_r:null;}catch(e){st=null;}
  if(!st)st={date:td,tab:0,puzz:0,ans:{},rev:{}};
  /* Guard against a saved tab index that no longer maps to an offline category
     (e.g. the visitor left the widget on the Explore tab, or a previous
     version had a different number of offline tabs). Without this clamp,
     ac[st.tab] is undefined and rend() throws when reading its properties. */
  if(typeof st.tab!=='number'||st.tab<0||st.tab>=ac.length){st.tab=0;st.puzz=0;}
  var sk=1;
  try{
    var _s=JSON.parse(localStorage.getItem(_TK)||'null');
    var _yd=new Date();_yd.setDate(_yd.getDate()-1);
    var _ys=_yd.getFullYear()+'-'+(_yd.getMonth()+1)+'-'+_yd.getDate();
    if(_s){
      if(_s.last===td)sk=_s.count;
      else if(_s.last===_ys){sk=_s.count+1;localStorage.setItem(_TK,JSON.stringify({last:td,count:sk}));}
      else{sk=1;localStorage.setItem(_TK,JSON.stringify({last:td,count:1}));}
    }else{localStorage.setItem(_TK,JSON.stringify({last:td,count:1}));}
  }catch(e){}

  function sv(){try{localStorage.setItem(_SK,JSON.stringify(st));}catch(e){}}
  function k(t,p){return t+'_'+p;}
  var cp=[],ho=false;
  var px='v6_'+tid.replace(/[^a-z0-9]/gi,'_');
  function g(id){return document.getElementById(px+'_'+id);}

  /* Explore state */
  /* Shuffle label order daily — same order for all visitors same day */
  var shuffledLabels=_sh(LABELS.slice(),ds+99);
  var expLabelObj=shuffledLabels[0];
  var expPosts=[],expIdx=0,expLoading=false;
  var expCache={};
  var expTotals={}; /* label -> total post count in that category, so a repeat visit/refresh skips the count lookup */

  /* ── Build HTML ── */
  el.innerHTML=
    '<div class="fwpw"><div class="fwpc">'
    +'<div class="fwph">'
      +'<div class="fwphl">'
        +'<img class="fwplogo" src="'+LG+'" alt="FWP" onerror="this.style.display=\'none\'"/>'
        +'<div class="fwptxt"><div class="fwpbrand">Fun With Puzzles</div><div class="fwptitle">Today\'s Challenges</div></div>'
      +'</div>'
      +'<div class="fwpsk">\uD83D\uDD25 <span class="fwpskn" id="'+px+'_sk">1</span>\u00a0day</div>'
    +'</div>'
    +'<div class="fwpbar"><span class="fwpbd" id="'+px+'_date"></span><span class="fwpbt">\u2728 New every day</span></div>'
    +'<div class="fwppr"><div class="fwppf" id="'+px+'_prog"></div></div>'
    +'<div class="fwptabs" id="'+px+'_tabs" role="tablist"></div>'
    /* offline section */
    +'<div class="fwpbody" id="'+px+'_offline">'
      +'<div class="fwptop"><span class="fwpctr" id="'+px+'_ctr"></span>'
        +'<div class="fwpnavs"><button class="fwpnav" id="'+px+'_prev">\u2039</button><button class="fwpnav" id="'+px+'_next">\u203a</button></div>'
      +'</div>'
      +'<div class="fwpbdg easy" id="'+px+'_diff"></div>'
      +'<p class="fwpq" id="'+px+'_q"></p>'
      +'<button class="fwphbtn" id="'+px+'_hbtn">\uD83D\uDCA1 Show hint</button>'
      +'<div class="fwphbox" id="'+px+'_hbox"></div>'
      +'<div class="fwpirow"><input class="fwpinp" id="'+px+'_inp" type="text" placeholder="Your answer..."/><button class="fwpchk" id="'+px+'_chk">Check</button></div>'
      +'<div class="fwpres" id="'+px+'_res"></div>'
      +'<button class="fwprev" id="'+px+'_rev">\uD83D\uDC41 Show answer</button>'
      +'<div class="fwpdots" id="'+px+'_dots"></div>'
      +'<div class="fwpban" id="'+px+'_ban"><p>\uD83C\uDF89 All puzzles complete!</p><small>Come back tomorrow for fresh challenges!</small></div>'
    +'</div>'
    /* explore section */
    +'<div class="fwpexp" id="'+px+'_exp">'
      +'<div class="fwpexp-toprow">'
        +'<select class="fwpexp-sel" id="'+px+'_expsel"></select>'
        +'<button class="fwpexp-ref" id="'+px+'_expref">\u21BB Refresh</button>'
      +'</div>'
      +'<div class="fwpexp-nav">'
        +'<span class="fwpexp-ctr" id="'+px+'_expctr"></span>'
        +'<div class="fwpexp-navs"><button class="fwpexp-nb" id="'+px+'_expprev">\u2039</button><button class="fwpexp-nb" id="'+px+'_expnext">\u203a</button></div>'
      +'</div>'
      +'<div class="fwpexp-wrap"><div id="'+px+'_expcard"></div></div>'
      +'<div class="fwpexp-dots" id="'+px+'_expdots"></div>'
    +'</div>'
    /* footer */
    +'<div class="fwpfoot"><div class="fwpfl">'
      +'<a class="fwpmore" id="'+px+'_more" href="'+B+'/p/index.html" target="_blank" rel="noopener">More puzzles</a>'
      +'<a class="fwpac" href="'+B+'/p/index.html" target="_blank" rel="noopener">All categories</a>'
    +'</div><button class="fwpsh" id="'+px+'_sh">\u2191 Share</button></div>'
    +'<div class="fwpadd">'
      +'<button class="fwpabtn" id="'+px+'_abtn">\u2795 Add this widget to your website \u2014 free!</button>'
      +'<div class="fwpebox" id="'+px+'_ebox"><p>Copy these 2 lines and paste into any webpage. Widget loads automatically, all links point to funwithpuzzles.com, and future updates apply everywhere.</p>'
        +'<code class="fwpec" id="'+px+'_ec"></code>'
        +'<button class="fwpcb" id="'+px+'_cb">Copy code</button>'
      +'</div>'
    +'</div>'
    +'<div class="fwpattr">Powered by <a href="'+B+'" target="_blank" rel="noopener">funwithpuzzles.com</a></div>'
    +'</div></div>';

  /* populate dropdown — daily shuffled order */
  var sel=g('expsel');
  shuffledLabels.forEach(function(lb,i){
    var o=document.createElement('option');
    o.value=i;
    o.textContent=lb.d;
    sel.appendChild(o);
  });

  g('ec').textContent=EC;
  g('date').textContent=new Date().toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short',year:'numeric'});
  g('sk').textContent=sk;

  /* ── Offline render ── */
  function rend(){
    var p=cp[st.puzz],kk=k(st.tab,st.puzz),ans=st.ans[kk],rev=st.rev[kk];
    g('q').textContent=p.q;
    g('hbox').textContent=p.h;
    g('hbox').style.display='none';
    g('hbtn').textContent='\uD83D\uDCA1 Show hint';
    ho=false;
    var di=g('diff');
    di.className='fwpbdg '+p.d;
    di.textContent=p.d==='easy'?'\uD83D\uDFE2 Easy':p.d==='medium'?'\uD83D\uDFE1 Medium':'\uD83D\uDD34 Hard';
    g('ctr').textContent='Puzzle '+(st.puzz+1)+' of '+cp.length;
    var mo=g('more');
    mo.href=B+'/p/'+ac[st.tab].s+'.html';
    mo.textContent='More '+ac[st.tab].t+' puzzles';
    var inp=g('inp'),res=g('res'),rv=g('rev');
    if(ans!==undefined){
      inp.value=ans;inp.disabled=true;
      var ok=_fz(ans,p.a);
      if(ok){res.className='fwpres ok';res.textContent='\u2713 Correct! Well done.';rv.style.display='none';}
      else{res.className='fwpres no';res.textContent='\u2717 Not quite. Try again or reveal the answer.';rv.style.display='block';rv.textContent=rev?'Answer: '+p.a:'\uD83D\uDC41 Show answer';}
    }else if(rev){
      inp.value='';inp.disabled=false;
      res.className='fwpres no';res.textContent='Answer: '+p.a;rv.style.display='none';
    }else{
      inp.value='';inp.disabled=false;
      res.className='fwpres';res.textContent='';rv.style.display='none';
    }
    _dots();_prog();
  }

  function _dots(){
    var de=g('dots');de.innerHTML='';
    cp.forEach(function(_,i){
      var d=document.createElement('button');d.className='fwpdot';
      var kk=k(st.tab,i),a=st.ans[kk];
      if(i===st.puzz)d.className+=' on';
      else if(a!==undefined)d.className+=_fz(a,cp[i].a)?' done':' wrong';
      else if(st.rev[kk])d.className+=' wrong';
      d.setAttribute('aria-label','Puzzle '+(i+1));
      (function(n){d.onclick=function(){st.puzz=n;sv();rend();};}(i));
      de.appendChild(d);
    });
    var tot=cp.length*ac.length,dn=0;
    for(var t=0;t<ac.length;t++){
      var ps=_pk(ac[t],ds*31+t);
      for(var pi=0;pi<ps.length;pi++){var kk=k(t,pi);if(st.ans[kk]!==undefined||st.rev[kk])dn++;}
    }
    g('ban').style.display=(dn>=tot)?'block':'none';
  }

  function _prog(){
    var tot=cp.length*ac.length,dn=0;
    for(var t=0;t<ac.length;t++){
      var ps=_pk(ac[t],ds*31+t);
      for(var pi=0;pi<ps.length;pi++){var kk=k(t,pi);if(st.ans[kk]!==undefined||st.rev[kk])dn++;}
    }
    g('prog').style.width=Math.round((dn/tot)*100)+'%';
  }

  function _sw(n){
    st.tab=n;st.puzz=0;sv();
    document.querySelectorAll('#'+px+'_tabs .fwptab').forEach(function(b,i){
      b.className='fwptab'+(i===EXPLORE_IDX?' exptab':'')+(i===n?' on':'');
    });
    if(n===EXPLORE_IDX){
      g('offline').style.display='none';
      g('exp').style.display='block';
      g('more').textContent='More '+expLabelObj.d+' puzzles';
      g('more').href=B+'/'+expLabelObj.h;
      /* posts may already be sitting in memory from the idle-time
         background prefetch done right after boot — render immediately
         instead of re-fetching, so the tab feels instant */
      if(expPosts.length>0)_expRender();
      else if(!expLoading)_expFetch(expLabelObj,false);
    }else{
      g('offline').style.display='block';
      g('exp').style.display='none';
      cp=_pk(ac[n],ds*31+n);
      rend();
    }
  }

  function _dc(){
    var raw=g('inp').value;if(!raw.trim())return;
    var kk=k(st.tab,st.puzz);if(st.ans[kk]!==undefined)return;
    st.ans[kk]=raw;sv();rend();
  }

  /* ── Explore render ── */
  function _expRender(){
    if(expPosts.length===0){
      g('expcard').innerHTML=
        '<div class="fwpexp-err">'
          +'<p>\uD83D\uDE15 No puzzles found for this category.</p>'
          +'<a href="'+B+'" target="_blank" rel="noopener">Browse all puzzles \u2192</a>'
        +'</div>';
      g('expctr').textContent='';
      g('expdots').innerHTML='';
      return;
    }
    var p=expPosts[expIdx];
    g('expctr').textContent='Puzzle '+(expIdx+1)+' of '+expPosts.length;
    /* build card */
    var imgHtml=p.img
      ?'<div class="fwpexp-imgwrap"><img class="fwpexp-img" src="'+p.img+'" alt="'+p.title.replace(/[<>"]/g,'')+'" onerror="this.parentNode.innerHTML=\'<div class=fwpexp-imgph><img src='+LG+' /></div>\'"/></div>'
      :'<div class="fwpexp-imgph"><img src="'+LG+'"/></div>';
    g('expcard').innerHTML=
      '<a class="fwpexp-card" href="'+p.url+'" target="_blank" rel="noopener">'
        +imgHtml
        +'<div class="fwpexp-cbody">'
          +'<div class="fwpexp-cat">'+expLabelObj.d+'</div>'
          +'<div class="fwpexp-title">'+p.title+'</div>'
          +'<div class="fwpexp-solve">Solve this puzzle \u2192 <span>\uD83D\uDCA1</span></div>'
        +'</div>'
      +'</a>';
    /* dots */
    var de=g('expdots');de.innerHTML='';
    expPosts.forEach(function(_,i){
      var d=document.createElement('button');
      d.className='fwpexp-dot'+(i===expIdx?' on':'');
      d.setAttribute('aria-label','Post '+(i+1));
      (function(n){d.onclick=function(){expIdx=n;_expRender();};}(i));
      de.appendChild(d);
    });
  }

  /* ── Explore fetch via JSONP ──
     Two-step strategy instead of pulling the 150 newest posts every time:
       1) ask Blogger for just the total post count in the category (tiny reply)
       2) fetch a small window (up to 20 posts) starting at a UNIFORMLY RANDOM
          offset across the category's whole history, then sample 5 from it
     This makes every post — including the very oldest — equally likely to be
     picked, and downloads far less JSON than before, so it loads faster. */
  function _jsonp(url,onData,onFail){
    var cbName='fwpjp_'+px+'_'+Date.now()+'_'+Math.floor(Math.random()*1e6);
    var script=document.createElement('script');
    var done=false;
    function cleanup(){
      if(done)return;done=true;
      clearTimeout(_timer);
      try{document.head.removeChild(script);}catch(e){}
      delete window[cbName];
    }
    var _timer=setTimeout(function(){cleanup();onFail();},8000);
    window[cbName]=function(data){cleanup();onData(data);};
    script.onerror=function(){cleanup();onFail();};
    script.src=url+'&callback='+cbName;
    document.head.appendChild(script);
  }

  function _expParseEntry(e){
    var title=(e.title&&e.title.$t)||'Untitled';
    var pUrl='';
    if(e.link){for(var i=0;i<e.link.length;i++){if(e.link[i].rel==='alternate'){pUrl=e.link[i].href;break;}}}
    var content=(e.content&&e.content.$t)||(e.summary&&e.summary.$t)||'';
    /* try media thumbnail first — most reliable */
    var img=null;
    if(e.media$thumbnail&&e.media$thumbnail.url){
      img=e.media$thumbnail.url
        .replace(/\/(s\d+[^/]*|w\d+-h\d+[^/]*)\//,'/s600/')
        .replace(/=s\d+(-c)?/,'=s600');
    }
    if(!img)img=_img(content);
    return{title:title,url:pUrl,img:img};
  }

  /* preload the images for the current post set in the background so that
     paging with the next/prev arrows shows an already-cached image instead
     of waiting on a fresh download each click */
  function _expPreload(){
    expPosts.forEach(function(p){
      if(p.img){var im=new Image();im.src=p.img;}
    });
  }

  function _expFail(labelObj,msg){
    expLoading=false;
    var ref=g('expref');if(ref){ref.disabled=false;ref.textContent='\u21BB Refresh';}
    g('expcard').innerHTML=
      '<div class="fwpexp-err">'
        +'<p>\uD83D\uDE15 '+msg+'</p>'
        +'<a href="'+B+'/'+labelObj.h+'" target="_blank" rel="noopener">Browse '+labelObj.d+' on the website \u2192</a>'
      +'</div>';
    g('expctr').textContent='';g('expdots').innerHTML='';
  }

  function _expFetchWindow(labelObj,total,cacheKey){
    var batch=Math.min(20,total);
    var maxStart=Math.max(1,total-batch+1);
    var start=1+Math.floor(Math.random()*maxStart); /* Blogger start-index is 1-based */
    var url=B+'/feeds/posts/default/-/'+encodeURIComponent(labelObj.l)
      +'?alt=json&max-results='+batch+'&start-index='+start;
    _jsonp(url,function(data){
      expLoading=false;
      var ref=g('expref');if(ref){ref.disabled=false;ref.textContent='\u21BB Refresh';}
      var entries=(data&&data.feed&&data.feed.entry)||[];
      var posts=entries.map(_expParseEntry).filter(function(p){return p.url;});
      if(posts.length===0){expPosts=[];_expRender();return;}
      expCache[cacheKey]=posts;
      expPosts=_rnd(posts).slice(0,5);
      expIdx=0;_expRender();_expPreload();
    },function(){
      _expFail(labelObj,'Timed out. The feed took too long to respond.');
    });
  }

  function _expFetchCount(labelObj,cacheKey){
    var url=B+'/feeds/posts/default/-/'+encodeURIComponent(labelObj.l)+'?alt=json&max-results=1';
    _jsonp(url,function(data){
      var total=(data&&data.feed&&data.feed.openSearch$totalResults&&parseInt(data.feed.openSearch$totalResults.$t,10))||0;
      if(!total){expLoading=false;expPosts=[];_expRender();return;}
      expTotals[cacheKey]=total;
      _expFetchWindow(labelObj,total,cacheKey);
    },function(){
      _expFail(labelObj,'Could not load puzzles. Please check your connection.');
    });
  }

  function _expFetch(labelObj,forceRefresh){
    if(expLoading)return;
    var cacheKey=labelObj.l;
    if(!forceRefresh&&expCache[cacheKey]){
      expPosts=_rnd(expCache[cacheKey]).slice(0,5);
      expIdx=0;_expRender();_expPreload();return;
    }
    expLoading=true;
    var ref=g('expref');if(ref){ref.disabled=true;ref.textContent='\u23F3 Loading...';}
    g('expcard').innerHTML=_expSkel();
    g('expctr').textContent='Fetching puzzles...';
    g('expdots').innerHTML='';

    if(expTotals[cacheKey]){_expFetchWindow(labelObj,expTotals[cacheKey],cacheKey);}
    else{_expFetchCount(labelObj,cacheKey);}
  }

  function _expSkel(){
    return '<div class="fwpexp-skel">'
      +'<div class="fwpexp-skel-img"></div>'
      +'<div class="fwpexp-skel-body">'
        +'<div class="fwpexp-skel-tag"></div>'
        +'<div class="fwpexp-skel-l" style="width:95%"></div>'
        +'<div class="fwpexp-skel-l" style="width:80%"></div>'
        +'<div class="fwpexp-skel-l" style="width:65%"></div>'
        +'<div class="fwpexp-skel-btn"></div>'
      +'</div>'
    +'</div>';
  }

  /* ── Build tabs ── */
  var te=g('tabs');
  ac.forEach(function(cat,i){
    var btn=document.createElement('button');
    btn.className='fwptab'+(i===st.tab?' on':'');
    btn.textContent=cat.t;
    btn.setAttribute('role','tab');
    (function(n){btn.onclick=function(){_sw(n);};}(i));
    te.appendChild(btn);
  });
  var expBtn=document.createElement('button');
  expBtn.className='fwptab exptab';
  expBtn.textContent='\uD83D\uDD0D Explore';
  expBtn.setAttribute('role','tab');
  expBtn.onclick=function(){_sw(EXPLORE_IDX);};
  te.appendChild(expBtn);

  /* ── Wire offline events ── */
  g('prev').onclick=function(){st.puzz=(st.puzz-1+cp.length)%cp.length;sv();rend();};
  g('next').onclick=function(){st.puzz=(st.puzz+1)%cp.length;sv();rend();};
  g('hbtn').onclick=function(){ho=!ho;g('hbox').style.display=ho?'block':'none';this.textContent=ho?'\uD83D\uDE48 Hide hint':'\uD83D\uDCA1 Show hint';};
  g('chk').onclick=_dc;
  g('inp').onkeydown=function(e){if(e.key==='Enter')_dc();};
  g('rev').onclick=function(){
    var kk=k(st.tab,st.puzz),p=cp[st.puzz];
    if(st.rev[kk]){
      delete st.ans[kk];delete st.rev[kk];sv();
      g('inp').disabled=false;g('inp').value='';
      g('res').className='fwpres';g('res').textContent='';
      this.style.display='none';
    }else{
      st.rev[kk]=true;sv();
      g('res').className='fwpres no';g('res').textContent='Answer: '+p.a;
      this.style.display='none';_dots();_prog();
    }
  };
  g('sh').onclick=function(){
    var p=cp[st.puzz];
    var txt='Can you solve this?\n\n'+p.q+'\n\nMore at '+B;
    var url=B+'/p/daily-challenge.html';
    if(navigator.share){navigator.share({title:"Fun With Puzzles \u2014 Today's Challenges",text:txt,url:url}).catch(function(){});}
    else{window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent(txt+'\n'+url),'_blank');}
  };

  /* ── Wire explore events ── */
  g('expsel').onchange=function(){
    expLabelObj=shuffledLabels[parseInt(this.value,10)];
    expPosts=[];expIdx=0;
    g('more').textContent='More '+expLabelObj.d+' puzzles';
    g('more').href=B+'/'+expLabelObj.h;
    _expFetch(expLabelObj,false);
  };
  g('expref').onclick=function(){_expFetch(expLabelObj,true);};
  g('expprev').onclick=function(){if(!expPosts.length)return;expIdx=(expIdx-1+expPosts.length)%expPosts.length;_expRender();};
  g('expnext').onclick=function(){if(!expPosts.length)return;expIdx=(expIdx+1)%expPosts.length;_expRender();};

  /* add-to-site */
  var eo=false;
  g('abtn').onclick=function(){
    eo=!eo;
    g('ebox').style.display=eo?'block':'none';
    this.textContent=eo?'\u2212 Close':'\u2795 Add this widget to your website \u2014 free!';
  };
  g('cb').onclick=function(){
    var btn=this;
    function done(){btn.textContent='Copied!';btn.className='fwpcb copied';setTimeout(function(){btn.textContent='Copy code';btn.className='fwpcb';},2500);}
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(EC).then(done).catch(function(){});}
    else{var ta=document.createElement('textarea');ta.value=EC;ta.style.cssText='position:fixed;opacity:0;top:0;left:0;';document.body.appendChild(ta);ta.focus();ta.select();try{document.execCommand('copy');done();}catch(e){}document.body.removeChild(ta);}
  };

  /* ── Boot ── */
  cp=_pk(ac[st.tab],ds*31+st.tab);
  rend();

  /* Warm the Explore tab in the background during idle time so that if the
     visitor clicks Explore, the first post is already in memory instead of
     waiting on a network round trip. Only runs if nothing is loaded yet. */
  function _idlePrefetch(){
    if(expPosts.length===0&&!expLoading)_expFetch(expLabelObj,false);
  }
  if('requestIdleCallback' in window){requestIdleCallback(_idlePrefetch,{timeout:4000});}
  else{setTimeout(_idlePrefetch,1500);}
}

/* Auto-discover all widget divs */
var _found=[];
document.querySelectorAll('[id^="fwp-daily-widget"]').forEach(function(el){_found.push(el.id);});
if(!_found.length&&document.getElementById('fwp-daily-widget'))_found=['fwp-daily-widget'];
_found.forEach(function(id,i){_boot(id,SK+(i?String(i):''),TK+(i?String(i):''));});

})();
