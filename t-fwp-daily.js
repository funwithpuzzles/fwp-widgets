/* FWP Daily Challenge Widget v6 | funwithpuzzles.com */
(function(){
'use strict';
var B='https://www.funwithpuzzles.com';
var LG='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYDi4jf-HGfN5sLOhCuMHA1VaBiuRCIS6rKVxp8buhYkncs5IdKzHWN6gQoH35k95LKE76A6Xl35xk4Bwv-L6S3EGhJ-ulrutR1BGoEz5qNRoRD9s9_R0JPOiw5WOK3CUeeCxERYjaBlA/s64/apple-touch-icon.png';
var SK='fwpv6s',TK='fwpv6t';
var EC='<div id="fwp-daily-widget"><\/div>\n<script src="https://cdn.jsdelivr.net/gh/funwithpuzzles/fwp-widgets@latest/fwp-daily.js"><\/scr'+'ipt>';

/* ── Explore labels ── */
var LABELS=[
  'Riddles','Tricky Riddles','What Am I','Funny Riddles','Mystery Riddles',
  'Maths Puzzles','Missing Number Puzzles','Number Series','Logical Equations',
  'Crack the Code','Chess Puzzles','Sudoku','Lateral Thinking','Picture Puzzles',
  'Matchstick Puzzles','Rebus Riddles','Emoji Puzzles','General Knowledge',
  'Odd One Out','Find the Mistake','English Word Riddles','Quick Puzzles',
  'Brain Teasers for Kids','Spatial Reasoning','Interview Puzzles',
  'Triangle Puzzles','Pyramid Puzzles','Count Shapes','Optical Illusions'
];

/* ── CSS ── */
if(!document.getElementById('fwpv6css')){
  var _cs=document.createElement('style');
  _cs.id='fwpv6css';
  _cs.textContent=
/* wrapper — caps width, centres on desktop */
'.fwpw{display:block !important;width:100%;max-width:560px;margin:0 auto;font-family:Roboto,Arial,sans-serif;font-size:13px;color:#111;line-height:1.4;}'
+'.fwpw *{box-sizing:border-box;}'
+'.fwpc{background:#fff;border-radius:14px;overflow:hidden;border:2.5px solid #0A0AFF;box-shadow:0 3px 16px rgba(10,10,255,.13);}'
/* HEAD */
+'.fwph{background:#0A0AFF;padding:11px 14px;display:flex;align-items:center;justify-content:space-between;gap:10px;min-width:0;}'
+'.fwphl{display:flex;align-items:center;gap:9px;flex:1 1 0;min-width:0;overflow:hidden;}'
/* logo fix — contain so it is never cropped */
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
+'.fwptab.explore{color:#7c3aed;border-color:#d1d5db;}'
+'.fwptab.explore.on{color:#7c3aed;border-color:#7c3aed;border-bottom-color:#f4f5ff;}'
+'.fwptab.explore:hover:not(.on){border-color:#c4b5fd;background:#f5f3ff;}'
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
/* label pills */
+'.fwpexp-top{margin-bottom:12px;}'
+'.fwpexp-row{display:flex;align-items:center;gap:8px;flex-wrap:nowrap;}'
+'.fwpexp-sel{flex:1;min-width:0;height:36px;border:1.5px solid #d1d5db;border-radius:8px;padding:0 10px;font-size:12px;color:#374151;background:#fff;outline:none;font-family:inherit;cursor:pointer;transition:border-color .15s;}'
+'.fwpexp-sel:focus{border-color:#7c3aed;box-shadow:0 0 0 3px rgba(124,58,237,.1);}'
+'.fwpexp-refresh{height:36px;padding:0 12px;background:#7c3aed;color:#fff;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;font-family:inherit;white-space:nowrap;transition:background .15s;flex-shrink:0;display:flex;align-items:center;gap:5px;}'
+'.fwpexp-refresh:hover{background:#6d28d9;}'
+'.fwpexp-refresh:disabled{background:#a78bfa;cursor:not-allowed;}'
/* nav row */
+'.fwpexp-nav{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;}'
+'.fwpexp-ctr{font-size:10px;color:#9ca3af;font-weight:500;}'
+'.fwpexp-navs{display:flex;gap:5px;}'
+'.fwpexp-navbtn{width:26px;height:26px;border-radius:50%;border:1.5px solid #e5e7eb;background:#fff;color:#9ca3af;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;transition:all .15s;padding:0;font-family:inherit;}'
+'.fwpexp-navbtn:hover{background:#f5f3ff;color:#7c3aed;border-color:#7c3aed;}'
/* card */
+'.fwpexp-card{border-radius:10px;overflow:hidden;border:1.5px solid #e5e7eb;cursor:pointer;transition:box-shadow .2s,transform .2s;text-decoration:none;display:block;background:#fff;}'
+'.fwpexp-card:hover{box-shadow:0 4px 20px rgba(0,0,0,.12);transform:translateY(-2px);}'
/* image container — fixed 16:9 ratio, never stretches */
+'.fwpexp-imgwrap{width:100%;padding-top:56.25%;position:relative;background:#f3f4f6;overflow:hidden;}'
+'.fwpexp-img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;transition:transform .3s;}'
+'.fwpexp-card:hover .fwpexp-img{transform:scale(1.04);}'
+'.fwpexp-imgph{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#e0e7ff,#f5f3ff);}'
+'.fwpexp-imgph img{width:48px;height:48px;opacity:.4;object-fit:contain;}'
/* card body */
+'.fwpexp-body{padding:11px 13px 13px;}'
+'.fwpexp-cat{display:inline-block;font-size:9.5px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;padding:2px 8px;border-radius:20px;background:#f5f3ff;color:#7c3aed;margin-bottom:7px;}'
+'.fwpexp-title{font-size:13px;font-weight:700;color:#111827;line-height:1.55;margin-bottom:10px;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;}'
+'.fwpexp-btn{display:flex;align-items:center;justify-content:space-between;background:#7c3aed;color:#fff;border-radius:8px;padding:8px 13px;font-size:12px;font-weight:700;font-family:inherit;}'
+'.fwpexp-btn span{font-size:16px;}'
/* skeleton loader */
+'.fwpexp-skel{border-radius:10px;overflow:hidden;border:1.5px solid #e5e7eb;background:#fff;}'
+'.fwpexp-skel-img{width:100%;padding-top:56.25%;background:linear-gradient(90deg,#f3f4f6 25%,#e5e7eb 50%,#f3f4f6 75%);background-size:200% 100%;animation:fwpshine 1.4s infinite;}'
+'.fwpexp-skel-body{padding:11px 13px 13px;}'
+'.fwpexp-skel-line{height:12px;border-radius:6px;background:linear-gradient(90deg,#f3f4f6 25%,#e5e7eb 50%,#f3f4f6 75%);background-size:200% 100%;animation:fwpshine 1.4s infinite;margin-bottom:8px;}'
+'.fwpexp-skel-line.w80{width:80%;}'
+'.fwpexp-skel-line.w60{width:60%;}'
+'.fwpexp-skel-line.w90{width:90%;}'
+'.fwpexp-skel-btn{height:34px;border-radius:8px;background:linear-gradient(90deg,#f3f4f6 25%,#e5e7eb 50%,#f3f4f6 75%);background-size:200% 100%;animation:fwpshine 1.4s infinite;}'
+'@keyframes fwpshine{0%{background-position:200% 0}100%{background-position:-200% 0}}'
/* error state */
+'.fwpexp-err{text-align:center;padding:24px 14px;color:#6b7280;}'
+'.fwpexp-err p{font-size:13px;margin-bottom:10px;}'
+'.fwpexp-err a{color:#7c3aed;font-weight:700;text-decoration:none;font-size:12px;}'
+'.fwpexp-err a:hover{text-decoration:underline;}'
/* dots for explore */
+'.fwpexp-dots{display:flex;gap:7px;justify-content:center;margin-top:12px;}'
+'.fwpexp-dot{width:9px;height:9px;border-radius:50%;background:#e5e7eb;cursor:pointer;border:none;transition:all .2s;flex-shrink:0;padding:0;}'
+'.fwpexp-dot.on{background:#7c3aed;transform:scale(1.2);}'
+'.fwpexp-dot:hover{transform:scale(1.3);}'
/* footer */
+'.fwpfoot{border-top:1px solid #e5e7eb;padding:9px 14px;display:flex;align-items:center;justify-content:space-between;background:#f8f9ff;gap:8px;flex-wrap:wrap;}'
+'.fwpfl{display:flex;gap:10px;align-items:center;flex-wrap:wrap;}'
+'.fwpmore{font-size:11px;font-weight:700;color:#0A0AFF;text-decoration:none;white-space:nowrap;}'
+'.fwpmore:hover{text-decoration:underline;}'
+'.fwpac{font-size:10px;color:#9ca3af;text-decoration:none;white-space:nowrap;}'
+'.fwpac:hover{color:#374151;}'
+'.fwpsh{display:flex;align-items:center;gap:4px;background:#fff;border:1.5px solid #e5e7eb;border-radius:8px;padding:5px 10px;font-size:11px;color:#6b7280;cursor:pointer;font-family:inherit;font-weight:600;white-space:nowrap;transition:all .15s;flex-shrink:0;}'
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

/* ── Offline puzzle data (3 tabs) ── */
var C=[
{t:"Riddles",s:"riddles",p:[
{d:"easy",q:"I speak without a mouth and hear without ears. I have no body but come alive with wind. What am I?",h:"Think of sounds bouncing back in a valley.",a:"echo"},
{d:"easy",q:"The more you take, the more you leave behind. What am I?",h:"Think about walking on a sandy beach.",a:"footsteps"},
{d:"easy",q:"I am tall when young and short when old. What am I?",h:"Think about what burns down over time.",a:"candle"},
{d:"easy",q:"What has one eye but cannot see?",h:"Think about sewing.",a:"needle"},
{d:"easy",q:"What has hands but cannot clap?",h:"You look at it to know the time.",a:"clock"},
{d:"easy",q:"What is full of holes but still holds water?",h:"You use it in the shower.",a:"sponge"},
{d:"easy",q:"What has a head and a tail but no body?",h:"Think about a coin.",a:"coin"},
{d:"easy",q:"I have no wings but I fly, no eyes but I cry. What am I?",h:"Think about weather.",a:"cloud"},
{d:"medium",q:"I have cities but no houses, mountains but no trees, water but no fish. What am I?",h:"You can fold me and put me in your pocket.",a:"map"},
{d:"medium",q:"I am always in front of you but can never be seen. What am I?",h:"Think about what lies ahead in time.",a:"future"},
{d:"medium",q:"The more you remove from me, the bigger I get. What am I?",h:"Think about digging in the ground.",a:"hole"},
{d:"medium",q:"I can travel around the world without moving. What am I?",h:"Think about sending letters.",a:"stamp"},
{d:"hard",q:"I can be cracked, made, told and played. What am I?",h:"Comedians do this every night.",a:"joke"},
{d:"hard",q:"What has a bottom at the top?",h:"Think about clothing worn on your legs.",a:"legs"},
{d:"hard",q:"What can travel around the world while staying in a corner?",h:"Think about postage.",a:"stamp"},
{d:"hard",q:"I bind it and it walks. I loose it and it stops. What am I?",h:"Think about a sandal.",a:"sandal"}
]},
{t:"Maths",s:"maths-puzzles",p:[
{d:"easy",q:"A farmer has 17 sheep. All but 9 run away. How many are left?",h:"Read all but 9 very carefully.",a:"9"},
{d:"easy",q:"What is half of 2 plus 2?",h:"Follow the correct order of operations.",a:"3"},
{d:"easy",q:"If you have 3 apples and take away 2, how many apples do YOU have?",h:"Focus on the word YOU.",a:"2"},
{d:"easy",q:"How many times can you subtract 10 from 100?",h:"After the first time the number is no longer 100.",a:"once"},
{d:"easy",q:"What comes next: 1, 2, 4, 8, 16, __?",h:"Each number is doubled.",a:"32"},
{d:"easy",q:"If you throw a red stone into the blue sea, what does it become?",h:"Think about what happens physically.",a:"wet"},
{d:"easy",q:"How many sides does a circle have?",h:"Think carefully. It is not zero.",a:"one curved side"},
{d:"easy",q:"What is 1000+20+1000+30+1000+1040?",h:"Add carefully step by step.",a:"4090"},
{d:"medium",q:"I am an odd number. Take away one letter and I become even. What number am I?",h:"Think about the word not the digit.",a:"seven"},
{d:"medium",q:"A bat and ball cost Rs 110 together. The bat costs Rs 100 more than the ball. Cost of the ball?",h:"Do not say Rs 10. Set up a proper equation.",a:"5"},
{d:"medium",q:"Two ropes each burn in 60 minutes unevenly. How do you measure exactly 45 minutes?",h:"Light both ends of one rope and one end of the other.",a:"45 minutes"},
{d:"medium",q:"If there are 3 apples and you take away 2, how many do you have?",h:"YOU took 2.",a:"2"},
{d:"hard",q:"A clock loses 3 minutes every hour. Set at noon, when will it next show the correct time?",h:"It must lose exactly 12 hours.",a:"240 days"},
{d:"hard",q:"8 identical balls, one slightly heavier. Using a balance only twice, find the heavy one.",h:"Divide into groups of 3, 3, and 2.",a:"two weighings"},
{d:"hard",q:"What 3 positive numbers give the same result when multiplied and when added?",h:"Try simple numbers like 1, 2, 3.",a:"1 2 3"},
{d:"hard",q:"You have two hourglasses: 4-min and 7-min. How do you measure exactly 9 minutes?",h:"Start both, flip strategically.",a:"flip strategically"}
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
{d:"medium",q:"A woman had two sons at the same hour on the same day. Yet they were not twins. How?",h:"Think bigger than two.",a:"triplets"},
{d:"hard",q:"What word in English is always spelled incorrectly?",h:"Read the question very literally.",a:"incorrectly"},
{d:"hard",q:"A woman shoots her husband then holds him underwater. They go to dinner later. How?",h:"What profession shoots people harmlessly?",a:"photographer"},
{d:"hard",q:"A man outside in the rain without an umbrella did not get wet. How?",h:"Think about hair.",a:"he was bald"},
{d:"hard",q:"What has a head and a tail but no body? It is not alive but you find it in your pocket.",h:"You flip it to make a decision.",a:"coin"}
]}
];

/* ── Helpers ── */
function _td(){var d=new Date();return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();}
function _sh(a,s){var r=a.slice(),x=(s||1)&0x7fffffff,i,j,t;for(i=r.length-1;i>0;i--){x=(x*1664525+1013904223)&0x7fffffff;j=x%(i+1);t=r[i];r[i]=r[j];r[j]=t;}return r;}
function _rnd(a){/* true random shuffle using Math.random */var r=a.slice(),i,j,t;for(i=r.length-1;i>0;i--){j=Math.floor(Math.random()*(i+1));t=r[i];r[i]=r[j];r[j]=t;}return r;}
function _ds(){var d=new Date();return d.getFullYear()*10000+(d.getMonth()+1)*100+d.getDate();}
function _pk(c,s){var e=_sh(c.p.filter(function(x){return x.d==='easy';}),s),m=_sh(c.p.filter(function(x){return x.d==='medium';}),s+7),h=_sh(c.p.filter(function(x){return x.d==='hard';}),s+13);return[e[0],e[1],e[2],m[0],h[0]];}
function _nr(s){return s.trim().toLowerCase().replace(/[^a-z0-9\s]/g,'').replace(/\s+/g,' ');}
function _fz(r,a){var x=_nr(r),c=_nr(a);if(x===c)return true;var cw=c.split(' '),rw=x.split(' '),h=cw.filter(function(w){return w.length>3&&rw.indexOf(w)!==-1;});return h.length>=Math.max(1,Math.floor(cw.length*0.6));}

/* extract first image src from html string */
function _img(html){
  if(!html)return null;
  var m=html.match(/src=["']([^"']+\.(jpg|jpeg|png|gif|webp)[^"']*)/i);
  return m?m[1].replace(/\/s\d+\//,'/s600/'):null;/* upgrade to s600 for better quality */
}

/* ── Widget instance factory ── */
function _boot(tid,_SK,_TK){
  var el=document.getElementById(tid);if(!el)return;
  var ds=_ds(),td=_td();
  /* use only 3 offline categories */
  var ac=_sh(C,ds);/* rotate which 3 appear first each day */
  var st;try{var _r=JSON.parse(localStorage.getItem(_SK)||'null');st=_r&&_r.date===td?_r:null;}catch(e){st=null;}
  if(!st)st={date:td,tab:0,puzz:0,ans:{},rev:{}};
  var sk=1;
  try{
    var _s=JSON.parse(localStorage.getItem(_TK)||'null');
    var _yd=new Date();_yd.setDate(_yd.getDate()-1);
    var _ys=_yd.getFullYear()+'-'+(_yd.getMonth()+1)+'-'+_yd.getDate();
    if(_s){if(_s.last===td)sk=_s.count;else if(_s.last===_ys){sk=_s.count+1;localStorage.setItem(_TK,JSON.stringify({last:td,count:sk}));}else{sk=1;localStorage.setItem(_TK,JSON.stringify({last:td,count:1}));}}
    else{localStorage.setItem(_TK,JSON.stringify({last:td,count:1}));}
  }catch(e){}

  function sv(){try{localStorage.setItem(_SK,JSON.stringify(st));}catch(e){}}
  function k(t,p){return t+'_'+p;}
  var cp=[],ho=false;
  var px='v6_'+tid.replace(/[^a-z0-9]/gi,'_');
  function g(id){return document.getElementById(px+'_'+id);}

  /* Explore state */
  var expLabel=LABELS[0],expPosts=[],expIdx=0,expLoading=false;
  var expCache={};/* label -> posts array, session cache */

  /* ── Build HTML ── */
  el.innerHTML=
    '<div class="fwpw"><div class="fwpc">'
    /* head */
    +'<div class="fwph">'
      +'<div class="fwphl">'
        +'<img class="fwplogo" src="'+LG+'" alt="FWP" onerror="this.style.display=\'none\'"/>'
        +'<div class="fwptxt"><div class="fwpbrand">Fun With Puzzles</div><div class="fwptitle">Today\'s Challenges</div></div>'
      +'</div>'
      +'<div class="fwpsk">\uD83D\uDD25 <span class="fwpskn" id="'+px+'_sk">1</span>\u00a0day</div>'
    +'</div>'
    /* date bar */
    +'<div class="fwpbar"><span class="fwpbd" id="'+px+'_date"></span><span class="fwpbt">\u2728 New every day</span></div>'
    +'<div class="fwppr"><div class="fwppf" id="'+px+'_prog"></div></div>'
    /* tabs — 3 offline + Explore */
    +'<div class="fwptabs" id="'+px+'_tabs" role="tablist"></div>'
    /* offline body */
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
    /* EXPLORE body */
    +'<div class="fwpexp" id="'+px+'_exp">'
      +'<div class="fwpexp-top">'
        +'<div class="fwpexp-row">'
          +'<select class="fwpexp-sel" id="'+px+'_expsel"></select>'
          +'<button class="fwpexp-refresh" id="'+px+'_expref">\u21BB Refresh</button>'
        +'</div>'
      +'</div>'
      +'<div class="fwpexp-nav">'
        +'<span class="fwpexp-ctr" id="'+px+'_expctr"></span>'
        +'<div class="fwpexp-navs">'
          +'<button class="fwpexp-navbtn" id="'+px+'_expprev">\u2039</button>'
          +'<button class="fwpexp-navbtn" id="'+px+'_expnext">\u203a</button>'
        +'</div>'
      +'</div>'
      +'<div id="'+px+'_expcard"></div>'
      +'<div class="fwpexp-dots" id="'+px+'_expdots"></div>'
    +'</div>'
    /* footer */
    +'<div class="fwpfoot"><div class="fwpfl">'
      +'<a class="fwpmore" id="'+px+'_more" href="'+B+'/p/index.html" target="_blank" rel="noopener">More puzzles</a>'
      +'<a class="fwpac" href="'+B+'/p/index.html" target="_blank" rel="noopener">All categories</a>'
    +'</div><button class="fwpsh" id="'+px+'_sh">\u2191 Share</button></div>'
    +'<div class="fwpadd">'
      +'<button class="fwpabtn" id="'+px+'_abtn">\u2795 Add this widget to your website \u2014 free!</button>'
      +'<div class="fwpebox" id="'+px+'_ebox"><p>Copy these 2 lines and paste into any webpage. Widget loads automatically, all links point to funwithpuzzles.com, and future updates apply everywhere instantly.</p>'
      +'<code class="fwpec" id="'+px+'_ec"></code>'
      +'<button class="fwpcb" id="'+px+'_cb">Copy code</button></div>'
    +'</div>'
    +'<div class="fwpattr">Powered by <a href="'+B+'" target="_blank" rel="noopener">funwithpuzzles.com</a></div>'
    +'</div></div>';

  /* populate explore dropdown */
  var sel=g('expsel');
  LABELS.forEach(function(l){var o=document.createElement('option');o.value=l;o.textContent=l;sel.appendChild(o);});

  g('ec').textContent=EC;
  g('date').textContent=new Date().toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short',year:'numeric'});
  g('sk').textContent=sk;

  /* ── Offline render ── */
  function rend(){
    var p=cp[st.puzz],kk=k(st.tab,st.puzz),ans=st.ans[kk],rev=st.rev[kk];
    g('q').textContent=p.q;g('hbox').textContent=p.h;g('hbox').style.display='none';g('hbtn').textContent='\uD83D\uDCA1 Show hint';ho=false;
    var di=g('diff');di.className='fwpbdg '+p.d;di.textContent=p.d==='easy'?'\uD83D\uDFE2 Easy':p.d==='medium'?'\uD83D\uDFE1 Medium':'\uD83D\uDD34 Hard';
    g('ctr').textContent='Puzzle '+(st.puzz+1)+' of '+cp.length;
    var mo=g('more');mo.href=B+'/p/'+ac[st.tab].s+'.html';mo.textContent='More '+ac[st.tab].t+' puzzles';
    var inp=g('inp'),res=g('res'),rv=g('rev');
    if(ans!==undefined){
      inp.value=ans;inp.disabled=true;var ok=_fz(ans,p.a);
      if(ok){res.className='fwpres ok';res.textContent='\u2713 Correct! Well done.';rv.style.display='none';}
      else{res.className='fwpres no';res.textContent='\u2717 Not quite. Try again or reveal the answer.';rv.style.display='block';rv.textContent=rev?'Answer: '+p.a:'\uD83D\uDC41 Show answer';}
    }else if(rev){inp.value='';inp.disabled=false;res.className='fwpres no';res.textContent='Answer: '+p.a;rv.style.display='none';}
    else{inp.value='';inp.disabled=false;res.className='fwpres';res.textContent='';rv.style.display='none';}
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
    var tot=cp.length*4,dn=0;
    for(var t=0;t<3;t++){var ps=_pk(ac[t],ds*31+t);for(var pi=0;pi<ps.length;pi++){var kk=k(t,pi);if(st.ans[kk]!==undefined||st.rev[kk])dn++;}}
    g('ban').style.display=(dn>=tot)?'block':'none';
  }

  function _prog(){
    var tot=cp.length*3,dn=0;
    for(var t=0;t<3;t++){var ps=_pk(ac[t],ds*31+t);for(var pi=0;pi<ps.length;pi++){var kk=k(t,pi);if(st.ans[kk]!==undefined||st.rev[kk])dn++;}}
    g('prog').style.width=Math.round((dn/tot)*100)+'%';
  }

  function _sw(n){
    /* n = 0,1,2 = offline tabs; n = 3 = explore */
    st.tab=n;st.puzz=0;sv();
    document.querySelectorAll('#'+px+'_tabs .fwptab').forEach(function(b,i){
      b.className='fwptab'+(i===3?' explore':'')+(i===n?' on':'');
    });
    if(n===3){
      g('offline').style.display='none';
      g('exp').style.display='block';
      g('more').textContent='More puzzles';
      g('more').href=B+'/p/index.html';
      /* lazy load — only fetch when Explore tab first clicked */
      if(expPosts.length===0&&!expLoading)_expFetch(expLabel,false);
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

  /* ── EXPLORE functions ── */
  function _expSkel(){
    return '<div class="fwpexp-skel">'
      +'<div class="fwpexp-skel-img"></div>'
      +'<div class="fwpexp-skel-body">'
        +'<div class="fwpexp-skel-line w60" style="margin-bottom:10px"></div>'
        +'<div class="fwpexp-skel-line w90"></div>'
        +'<div class="fwpexp-skel-line w80"></div>'
        +'<div class="fwpexp-skel-line w70" style="margin-bottom:12px"></div>'
        +'<div class="fwpexp-skel-btn"></div>'
      +'</div>'
    +'</div>';
  }

  function _expRender(){
    if(expPosts.length===0){
      g('expcard').innerHTML='<div class="fwpexp-err"><p>\uD83D\uDE15 No puzzles found for this category.</p><a href="'+B+'" target="_blank" rel="noopener">Browse all puzzles \u2192</a></div>';
      g('expctr').textContent='';
      g('expdots').innerHTML='';
      return;
    }
    var p=expPosts[expIdx];
    var imgUrl=p.img||null;
    g('expctr').textContent='Puzzle '+(expIdx+1)+' of '+expPosts.length;

    var imgHtml=imgUrl
      ?'<img class="fwpexp-img" src="'+imgUrl+'" alt="'+p.title.replace(/"/g,'&quot;')+'" loading="lazy" onerror="this.parentNode.innerHTML=\'<div class=fwpexp-imgph><img src='+LG+' /></div>\'">'
      :'<div class="fwpexp-imgph"><img src="'+LG+'"/></div>';

    g('expcard').innerHTML=
      '<a class="fwpexp-card" href="'+p.url+'" target="_blank" rel="noopener">'
        +'<div class="fwpexp-imgwrap">'+imgHtml+'</div>'
        +'<div class="fwpexp-body">'
          +'<div class="fwpexp-cat">\uD83E\uDDE9 '+expLabel+'</div>'
          +'<div class="fwpexp-title">'+p.title+'</div>'
          +'<div class="fwpexp-btn">Solve this puzzle \u2192 <span>\uD83D\uDCA1</span></div>'
        +'</div>'
      +'</a>';

    /* dots */
    var de=g('expdots');de.innerHTML='';
    expPosts.forEach(function(_,i){
      var d=document.createElement('button');d.className='fwpexp-dot'+(i===expIdx?' on':'');
      d.setAttribute('aria-label','Post '+(i+1));
      (function(n){d.onclick=function(){expIdx=n;_expRender();};}(i));
      de.appendChild(d);
    });
  }

  function _expFetch(label,forceRefresh){
    if(expLoading)return;
    /* use session cache unless force refresh */
    if(!forceRefresh&&expCache[label]){
      expPosts=_rnd(expCache[label]).slice(0,5);
      expIdx=0;
      _expRender();
      return;
    }
    expLoading=true;
    g('expref').disabled=true;
    g('expref').textContent='\u23F3 Loading...';
    g('expcard').innerHTML=_expSkel();
    g('expctr').textContent='Fetching puzzles...';
    g('expdots').innerHTML='';

    var labelEnc=encodeURIComponent(label);
    var url=B+'/feeds/posts/default/-/'+labelEnc+'?alt=json&max-results=150&orderby=updated';
    var script=document.createElement('script');
    var cbName='fwpjp_'+px+'_'+Date.now();
    window[cbName]=function(data){
      expLoading=false;
      g('expref').disabled=false;
      g('expref').textContent='\u21BB Refresh';
      try{document.head.removeChild(script);}catch(e){}
      delete window[cbName];
      var entries=(data&&data.feed&&data.feed.entry)||[];
      var posts=entries.map(function(e){
        var title=(e.title&&e.title.$t)||'Untitled';
        var url='';
        if(e.link){for(var i=0;i<e.link.length;i++){if(e.link[i].rel==='alternate'){url=e.link[i].href;break;}}}
        var content=(e.content&&e.content.$t)||(e.summary&&e.summary.$t)||'';
        var img=_img(content);
        return{title:title,url:url,img:img};
      }).filter(function(p){return p.url;});
      if(posts.length===0){expPosts=[];expCache[label]=[];_expRender();return;}
      expCache[label]=posts;
      expPosts=_rnd(posts).slice(0,5);
      expIdx=0;
      _expRender();
    };
    /* JSONP callback */
    url+='&callback='+cbName;
    script.src=url;
    script.onerror=function(){
      expLoading=false;
      g('expref').disabled=false;
      g('expref').textContent='\u21BB Refresh';
      try{document.head.removeChild(script);}catch(e){}
      delete window[cbName];
      g('expcard').innerHTML='<div class="fwpexp-err"><p>\uD83D\uDE15 Could not load puzzles. Please check your connection.</p><a href="'+B+'/-/'+encodeURIComponent(label)+'" target="_blank" rel="noopener">Browse '+label+' on the website \u2192</a></div>';
      g('expctr').textContent='';
      g('expdots').innerHTML='';
    };
    document.head.appendChild(script);
  }

  /* ── Build tabs ── */
  var te=g('tabs');
  ac.forEach(function(cat,i){
    var btn=document.createElement('button');
    btn.className='fwptab'+(i===0?' on':'');
    btn.textContent=cat.t;
    btn.setAttribute('role','tab');
    (function(n){btn.onclick=function(){_sw(n);};}(i));
    te.appendChild(btn);
  });
  /* Explore tab */
  var expBtn=document.createElement('button');
  expBtn.className='fwptab explore';
  expBtn.textContent='\uD83D\uDD0D Explore';
  expBtn.setAttribute('role','tab');
  expBtn.onclick=function(){_sw(3);};
  te.appendChild(expBtn);

  /* ── Wire offline events ── */
  g('prev').onclick=function(){st.puzz=(st.puzz-1+cp.length)%cp.length;sv();rend();};
  g('next').onclick=function(){st.puzz=(st.puzz+1)%cp.length;sv();rend();};
  g('hbtn').onclick=function(){ho=!ho;g('hbox').style.display=ho?'block':'none';this.textContent=ho?'\uD83D\uDE48 Hide hint':'\uD83D\uDCA1 Show hint';};
  g('chk').onclick=_dc;
  g('inp').onkeydown=function(e){if(e.key==='Enter')_dc();};
  g('rev').onclick=function(){
    var kk=k(st.tab,st.puzz),p=cp[st.puzz];
    if(st.rev[kk]){delete st.ans[kk];delete st.rev[kk];sv();g('inp').disabled=false;g('inp').value='';g('res').className='fwpres';g('res').textContent='';this.style.display='none';}
    else{st.rev[kk]=true;sv();g('res').className='fwpres no';g('res').textContent='Answer: '+p.a;this.style.display='none';_dots();_prog();}
  };
  g('sh').onclick=function(){
    var p=cp[st.puzz];
    var txt='Can you solve this?\n\n'+p.q+'\n\nMore at '+B,url=B+'/p/daily-challenge.html';
    if(navigator.share){navigator.share({title:"Fun With Puzzles \u2014 Today's Challenges",text:txt,url:url}).catch(function(){});}
    else{window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent(txt+'\n'+url),'_blank');}
  };

  /* ── Wire explore events ── */
  g('expsel').onchange=function(){
    expLabel=this.value;
    expPosts=[];expIdx=0;
    _expFetch(expLabel,false);
  };
  g('expref').onclick=function(){_expFetch(expLabel,true);};
  g('expprev').onclick=function(){if(expPosts.length===0)return;expIdx=(expIdx-1+expPosts.length)%expPosts.length;_expRender();};
  g('expnext').onclick=function(){if(expPosts.length===0)return;expIdx=(expIdx+1)%expPosts.length;_expRender();};

  /* add to site */
  var eo=false;
  g('abtn').onclick=function(){eo=!eo;g('ebox').style.display=eo?'block':'none';this.textContent=eo?'\u2212 Close':'\u2795 Add this widget to your website \u2014 free!';};
  g('cb').onclick=function(){
    var btn=this;
    function done(){btn.textContent='Copied!';btn.className='fwpcb copied';setTimeout(function(){btn.textContent='Copy code';btn.className='fwpcb';},2500);}
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(EC).then(done).catch(function(){});}
    else{var ta=document.createElement('textarea');ta.value=EC;ta.style.cssText='position:fixed;opacity:0;top:0;left:0;';document.body.appendChild(ta);ta.focus();ta.select();try{document.execCommand('copy');done();}catch(e){}document.body.removeChild(ta);}
  };

  /* ── Boot ── */
  cp=_pk(ac[0],ds*31);
  rend();
}

/* Auto-discover all fwp-daily-widget divs */
var _found=[];
document.querySelectorAll('[id^="fwp-daily-widget"]').forEach(function(el,i){_found.push(el.id);});
if(_found.length===0&&document.getElementById('fwp-daily-widget'))_found=['fwp-daily-widget'];
_found.forEach(function(id,i){_boot(id,SK+(i>0?String(i):''),TK+(i>0?String(i):''));});

})();
