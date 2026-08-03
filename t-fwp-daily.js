/* FWP Daily Challenge Widget f1.1.2 | funwithpuzzles.com */
(function(){
'use strict';
var B='https://www.funwithpuzzles.com';
var LG='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYDi4jf-HGfN5sLOhCuMHA1VaBiuRCIS6rKVxp8buhYkncs5IdKzHWN6gQoH35k95LKE76A6Xl35xk4Bwv-L6S3EGhJ-ulrutR1BGoEz5qNRoRD9s9_R0JPOiw5WOK3CUeeCxERYjaBlA/s64/apple-touch-icon.png';
var SK='fwpv6s',TK='fwpv6t';
var EC='<div id="fwp-daily-widget"><\/div>\n<script src="https://cdn.jsdelivr.net/gh/funwithpuzzles/fwp-widgets@latest/fwp-daily.js"><\/scr'+'ipt>';

/* Controls whether the "Add this widget to your website" promo section
   renders at the bottom of the widget. Set to false to hide it entirely. */
var SHOW_ADD_TO_SITE = true;

/* Controls the "Get the app" promo badges near the bottom of the widget.
   Each store has its own on/off flag so you can launch Android and iOS on
   different dates. Drop the real store URLs in once the apps are live \u2014
   until then these are inert placeholders. */
var SHOW_GOOGLE_PLAY_PROMO = false;
var SHOW_APPLE_APP_PROMO = false;
var GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.funwithpuzzles.dailychallenges';
var APPLE_APP_URL   = 'PUT_APPLE_APP_STORE_URL_HERE';   /* e.g. https://apps.apple.com/app/id0000000000 */

/* Categories to hide from the offline tabs \u2014 e.g. while you're improving a
   category's puzzles. Add the exact category title (the "t" value on that
   category in the C array further down, e.g. "Riddles", "Matchstick", "GK")
   and it will never be picked as one of the day's 3 offline tabs. Safe to
   edit freely; it only affects which categories are eligible, not the data
   itself, and it has no effect on the Explore tab (which pulls from the
   live website, not this offline dataset). */
var BLOCKED_CATEGORIES=[];

/* Labels that exist on the live site for housekeeping/administrative posts
   rather than actual puzzles (event announcements, video posts, index
   pages, championship recaps, etc). Posts carrying ONLY these labels won't
   have a relevant puzzle image, so they're filtered out of the Explore
   tab's Random Puzzles feed (which otherwise pulls from every label on the
   site). Edit this list freely to match your site's label names exactly. */
var EXCLUDED_RANDOM_LABELS=[
  'Puzzle and Sudoku Events','Brain Teasers Videos','Administrative Posts',
  'Conceptis Puzzles','Images','Puzzle Index Pages','Sudoku Championships',
  'Puzzle Championships','Puzzle Sites','Puzzle Tutorials','Logic Puzzles Printable'
];

/* \u2500\u2500 Explore labels: display name, exact Blogger label, hub page URL \u2500\u2500
   All label names verified from lebel-hubpage-mapping.txt
   Hub pages used for Browse More link and error fallback. */
var LABELS=[
  /* Difficulty */
  {d:'\ud83d\udfe2 Easy Puzzles',              l:'Brain Teasers for Kids',                     h:'p/easy-puzzles.html'},
  {d:'\ud83d\udfe1 Medium Puzzles',            l:'Brain Teasers for Teens',                    h:'p/intermediate-level-puzzles.html'},
  {d:'\ud83d\udd34 Hard Puzzles',              l:'Brain Teasers for Adults',                   h:'p/hard-puzzles.html'},
  /* Riddles */
  {d:'\ud83d\udca1 Riddles',                   l:'Brain Teasers and Riddles',                  h:'p/riddles.html'},
  {d:'\u2753 Tricky Riddles',            l:'Tricky Questions',                           h:'p/tricky-riddles.html'},
  {d:'\ud83e\udd14 What Am I',                 l:'What am I Riddles',                          h:'p/what-am-i-riddles.html'},
  {d:'\ud83d\ude04 Funny Riddles',             l:'Funny Riddles',                              h:'p/funny-riddles.html'},
  {d:'\ud83d\udd75\ufe0f Mystery Riddles',          l:'Mystery Riddles',                            h:'p/mystery-riddles.html'},
  {d:'\ud83d\udcdd English Riddles',           l:'English Puzzles and Riddles',                h:'p/english-word-riddles.html'},
  /* Logic */
  {d:'\ud83d\udd10 Crack the Code',            l:'Crack the Code Puzzles',                     h:'p/crack-code-puzzles.html'},
  {d:'\ud83e\udde0 Lateral Thinking',          l:'Lateral Thinking Puzzles',                   h:'p/lateral-thinking-puzzles.html'},
  {d:'\u2696\ufe0f Logical Equations',         l:'Logical Equations Puzzles',                  h:'p/logical-equations-puzzles.html'},
  {d:'\ud83d\udd0d Logical Reasoning',         l:'Logical Reasoning Questions and Puzzles',    h:'p/logical-reasoning-puzzles.html'},
  {d:'\ud83d\udcbc Interview Questions',        l:'Interview Questions',                        h:'p/interview-questions.html'},
  /* Maths */
  {d:'\u2795 Maths Puzzles',             l:'Maths Puzzles',                              h:'p/maths-puzzles.html'},
  {d:'\ud83d\udd22 Missing Numbers',           l:'Missing Number Puzzles',                     h:'p/missing-number-puzzles.html'},
  {d:'\ud83d\udcc8 Number Series',             l:'Number Series Puzzles',                      h:'p/maths-reasoning-number-series-puzzles.html'},
  {d:'\ud83d\udd25 Matchstick Puzzles',        l:'Matchstick Puzzles',                         h:'p/matchstick-maths-puzzles.html'},
  {d:'\ud83d\udd3a Triangle Puzzles',          l:'Triangle Puzzles',                           h:'p/triangle-maths-logic-puzzles.html'},
  {d:'\ud83d\udd3c Pyramid Puzzles',           l:'Pyramid Puzzles',                            h:'p/pyramid-maths-puzzles.html'},
  {d:'\u2b55 Circle Reasoning',          l:'Circle Reasoning Puzzles',                   h:'p/circle-reasoning-puzzles.html'},
  {d:'\ud83d\udd37 Square Puzzles',            l:'Square Reasoning Puzzles',                   h:'p/square-reasoning-puzzles.html'},
  {d:'\ud83e\uddee Maths Riddles',             l:'Maths Riddles',                              h:'p/maths-riddles.html'},
  /* Picture Puzzles */
  {d:'\ud83d\uddbc\ufe0f Picture Puzzles',           l:'Brain Teasers: Picture Puzzles',             h:'p/picture-puzzles.html'},
  {d:'\ud83d\udc41\ufe0f Find the Mistake',          l:'Find the Mistake Puzzles',                   h:'p/find-mistake-puzzles.html'},
  {d:'\ud83e\udde9 Odd One Out',               l:'Odd One Out Puzzles',                        h:'p/odd-one-out-picture-puzzles.html'},
  {d:'\ud83d\udd0e Spot the Difference',       l:'Spot the Difference Puzzles',                h:'p/spot-differences-picture-puzzles.html'},
  {d:'\ud83c\udf00 Optical Illusions',         l:'Optical Illusions',                          h:'p/optical-illusions.html'},
  {d:'\ud83d\udd37 Count Shapes',              l:'Count the Shapes Puzzles',                   h:'p/count-shapes-puzzles.html'},
  {d:'\ud83d\udd24 Hidden Letters',            l:'Hidden Letter Puzzles',                      h:'p/hidden-letter-puzzles.html'},
  {d:'\ud83d\udc3e Hidden Animals',            l:'Hidden Animal Puzzles',                      h:'p/hidden-animal-puzzles.html'},
  {d:'\ud83d\udd22 Eye Test / Numbers',        l:'Eye Test Puzzles',                           h:'p/hidden-number-picture-puzzles.html'},
  {d:'\ud83d\udd0d Find the Pair',             l:'Find the Pair Puzzles',                      h:'p/find-pair-picture-puzzles.html'},
  {d:'\ud83c\udd70\ufe0f Can You Read This',         l:'Can you Read this',                          h:'p/can-you-read-this.html'},
  {d:'\ud83c\udf11 Shadow Riddles',            l:'Shadow Riddles',                             h:'p/shadow-picture-riddles.html'},
  {d:'\ud83e\udde0 Visual Puzzles',            l:'Brain Teasers: Picture Puzzles',              h:'p/visual-puzzles-test-your-observation.html'},
  /* Chess */
  {d:'\u265f\ufe0f Chess Puzzles',             l:'Chess Puzzles',                              h:'p/fun-chess-puzzles.html'},
  {d:'\u265f\ufe0f Easy Chess',                l:'Easy Chess Puzzles',                         h:'p/easy-chess-puzzles.html'},
  {d:'\u265f\ufe0f Medium Chess',              l:'Medium Level Chess Puzzles',                 h:'p/medium-level-chess-puzzles.html'},
  {d:'\u265f\ufe0f Hard Chess',                l:'Hard Chess Puzzles',                         h:'p/hard-chess-puzzles.html'},
  /* Sudoku */
  {d:'\ud83d\udd22 Sudoku',                    l:'Sudoku',                                     h:'p/sudoku.html'},
  {d:'\ud83d\udd22 Sudoku Variants',           l:'Sudoku Variants',                            h:'p/sudoku-puzzles.html'},
  {d:'\ud83d\udd22 Killer Sudoku',             l:'Killer Sudoku',                              h:'2017/01/killer-sudoku-puzzles-index.html'},
  {d:'\ud83d\udd22 Diagonal Sudoku',           l:'Diagonal Sudoku',                            h:'2015/10/diagonal-sudoku-puzzles.html'},
  {d:'\ud83d\udd22 Thermo Sudoku',             l:'Thermo Sudoku',                              h:'2017/01/thermometer-sudoku-puzzles-index.html'},
  /* Other */
  {d:'\ud83d\uddbc\ufe0f Rebus Puzzles',             l:'Rebus Puzzles',                              h:'p/rebus-riddles.html'},
  {d:'\ud83d\ude0e Emoji Puzzles',             l:'Emoji Puzzles',                              h:'p/emoji-puzzles.html'},
  {d:'\ud83c\udf0d GK Puzzles',               l:'GK Puzzles',                                 h:'p/general-knowledge-quizzes-and-riddles.html'},
  {d:'\ud83d\udcd0 Spatial Reasoning',         l:'Spatial Reasoning Puzzles',                  h:'p/spatial-reasoning-puzzles.html'},
  {d:'\ud83d\udca7 Water Tank',                l:'Water Tank Puzzles',                         h:'p/water-tank-puzzles.html'},
  {d:'\u2699\ufe0f Gear Puzzles',              l:'Gear Puzzles',                               h:'p/gear-puzzles.html'},
  {d:'\u26a1 Quick Puzzles',             l:'Quick Puzzles',                              h:'p/quick-puzzles-brain-teasers-and-riddles.html'},
  {d:'\ud83e\udde9 Jigsaw Puzzles',            l:'Jigsaw Puzzles',                             h:'p/jigsaw-puzzles.html'},
  {d:'\ud83d\udc40 Stereograms',               l:'Stereograms',                                h:'p/stereogram-puzzles.html'},
  {d:'\ud83c\udd70\ufe0f Missing Vowels',            l:'Missing Vowels Quiz',                        h:'p/missing-vowels-quiz-puzzles.html'},
  {d:'\ud83d\udcca Non-Verbal Reasoning',      l:'Non Verbal Reasoning',                       h:'p/non-verbal-reasoning-puzzles.html'},
  {d:'\ud83e\udde0 Mental Ability',            l:'Mental Ability Questions',                   h:'p/mental-ability-questions-brain-test.html'},
  {d:'\ud83c\udd7f\ufe0f Parking Puzzles',           l:'Parking Puzzles',                            h:'p/parking-pattern-puzzles.html'},
  {d:'\ud83d\udd22 Number Logic',              l:'Number Logic Puzzles',                       h:'p/number-logic-puzzles.html'},
  {d:'\ud83c\udfc6 Best Puzzles',              l:'Best Brain Teasers',                         h:'p/popular-puzzles.html'}
];

/* \u2500\u2500 CSS \u2500\u2500 */
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
+'.fwptabs{display:flex;padding:9px 10px 0;background:#f4f5ff;border-bottom:2px solid #0A0AFF;gap:4px;}'
+'.fwptab{flex:1 1 0;min-width:0;padding:6px 6px;font-size:10.5px;font-weight:700;color:#6b7280;background:#fff;border:1.5px solid #d1d5db;border-bottom:2px solid #d1d5db;border-radius:7px 7px 0 0;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center;font-family:inherit;transition:all .15s;margin-bottom:-2px;position:relative;}'
+'.fwptab.on{color:#0A0AFF;border-color:#0A0AFF;border-bottom-color:#f4f5ff;background:#f4f5ff;z-index:1;}'
+'.fwptab:hover:not(.on){color:#374151;border-color:#a5b4fc;background:#eef1ff;}'
+'.fwptab.exptab{color:#7c3aed;}'
+'.fwptab.exptab.on{color:#7c3aed;border-color:#7c3aed;border-bottom-color:#f4f5ff;}'
+'.fwptab.exptab:hover:not(.on){color:#6d28d9;border-color:#c4b5fd;background:#f5f3ff;}'
+'@media (max-width:360px){.fwptab{font-size:9px;padding:6px 3px;letter-spacing:-.2px;}}'
/* offline body */
+'.fwpbody{padding:13px 14px;touch-action:pan-y;}'
+'.fwptop{display:flex;align-items:center;justify-content:space-between;margin-bottom:11px;}'
+'.fwpctr{font-size:10px;color:#9ca3af;font-weight:500;}'
+'.fwpnavs{display:flex;gap:8px;}'
+'.fwpnav{width:34px;height:34px;border-radius:50%;border:none;background:#0A0AFF;color:#fff;font-size:20px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;transition:all .15s;padding:0;font-family:inherit;box-shadow:0 2px 6px rgba(10,10,255,.35);}'
+'.fwpnav:hover{background:#2222ff;transform:scale(1.08);}'
+'.fwpnav:active{transform:scale(.94);}'
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
/* multiple-choice answers */
+'.fwpmcq{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:11px;align-items:stretch;}'
+'@media (max-width:400px){.fwpmcq{grid-template-columns:1fr;}}'
+'.fwpmcqbtn{text-align:left;padding:10px 12px;border:1.5px solid #e5e7eb;border-radius:9px;background:#fff;font-size:12px;line-height:1.4;color:#111827;cursor:pointer;font-family:inherit;transition:all .15s;white-space:normal;word-break:break-word;overflow-wrap:anywhere;height:auto;}'
+'.fwpmcqbtn:hover:not(:disabled){border-color:#0A0AFF;background:#eef1ff;}'
+'.fwpmcqbtn:disabled{cursor:default;}'
+'.fwpmcqbtn.correct{background:#EAF3DE;border-color:#16a34a;color:#166534;font-weight:700;}'
+'.fwpmcqbtn.wrong{background:#FCEBEB;border-color:#dc2626;color:#991b1b;}'
+'.fwpres{font-size:12px;padding:8px 11px;border-radius:8px;line-height:1.5;margin-top:9px;display:none;word-break:break-word;}'
+'.fwpres.ok{background:#EAF3DE;color:#166534;display:block;}'
+'.fwpres.no{background:#FCEBEB;color:#991b1b;display:block;}'
+'.fwprev{margin-top:9px;background:#fff;border:1.5px solid #e5e7eb;border-radius:8px;padding:7px 11px;font-size:11px;color:#6b7280;cursor:pointer;font-family:inherit;display:none;width:100%;text-align:left;transition:background .15s;}'
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
/* \u2500\u2500 EXPLORE TAB \u2500\u2500 */
+'.fwpexp{display:none;padding:13px 14px;}'
+'.fwpexp-toprow{display:flex;align-items:center;gap:7px;margin-bottom:11px;}'
+'.fwpexp-sel{flex:1;min-width:0;height:36px;border:1.5px solid #d1d5db;border-radius:8px;padding:0 10px;font-size:11.5px;color:#374151;background:#fff;outline:none;font-family:inherit;cursor:pointer;transition:border-color .15s;}'
+'.fwpexp-sel:focus{border-color:#7c3aed;box-shadow:0 0 0 3px rgba(124,58,237,.1);}'
+'.fwpexp-ref{height:36px;padding:0 11px;background:#7c3aed;color:#fff;border:none;border-radius:8px;font-size:11.5px;font-weight:700;cursor:pointer;font-family:inherit;white-space:nowrap;transition:background .15s;flex-shrink:0;}'
+'.fwpexp-ref:hover{background:#6d28d9;}'
+'.fwpexp-ref:disabled{background:#a78bfa;cursor:not-allowed;}'
/* nav row \u2014 fixed height prevents layout shift */
+'.fwpexp-nav{display:flex;align-items:center;justify-content:space-between;margin-bottom:9px;min-height:34px;}'
+'.fwpexp-ctr{font-size:10px;color:#9ca3af;font-weight:500;}'
+'.fwpexp-navs{display:flex;gap:8px;}'
+'.fwpexp-nb{width:34px;height:34px;border-radius:50%;border:none;background:#7c3aed;color:#fff;font-size:20px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;transition:all .15s;padding:0;font-family:inherit;box-shadow:0 2px 6px rgba(124,58,237,.35);}'
+'.fwpexp-nb:hover{background:#6d28d9;transform:scale(1.08);}'
+'.fwpexp-nb:active{transform:scale(.94);}'
/* card container \u2014 FIXED HEIGHT prevents layout shift */
+'.fwpw .fwpexp-wrap{position:relative;touch-action:pan-y;}'
/* card */
+'.fwpw .fwpexp-card{border-radius:10px;overflow:hidden;border:1.5px solid #e5e7eb;cursor:pointer;transition:box-shadow .2s,transform .2s;text-decoration:none;display:block;background:#fff;}'
+'.fwpw .fwpexp-card:hover{box-shadow:0 4px 20px rgba(0,0,0,.12);transform:translateY(-2px);}'
/* IMAGE FIX (v3 \u2014 no cropping, minimal layout shift):
   - width:100%, height:auto lets each image render at its own natural aspect
     ratio, so the whole picture is always visible (nothing gets cropped).
   - When the source <img> tag includes width/height attributes (Blogger's
     native uploader usually adds these), _imgWithDims() reads them and the
     card sets an inline CSS aspect-ratio on the wrapper BEFORE the image
     starts downloading \u2014 so the box is already the correct height up front
     instead of jumping once the image loads. Falls back to min-height:220px
     when dimensions aren't available (some shift in that case only).
   - max-height:420px caps how tall the card can grow for unusually tall/
     portrait images \u2014 in that rare case the image renders slightly narrower
     than full width (via object-fit:contain, centred) rather than forcing the
     card to a huge height. Typical wide/landscape puzzle images render at
     full width with no cap kicking in at all.
   - background:#f8f9ff shows briefly behind the image while it loads */
+'.fwpw .fwpexp-imgwrap{width:100% !important;max-width:none !important;max-height:420px;position:relative;background:#f8f9ff;overflow:hidden;text-align:center;line-height:0;}'
+'.fwpw .fwpexp-img{display:block !important;position:static !important;width:100% !important;height:auto !important;max-width:100% !important;max-height:420px !important;object-fit:contain !important;object-position:center;margin:0 auto !important;transition:transform .3s;}'
+'.fwpw .fwpexp-card:hover .fwpexp-img{transform:scale(1.02);}'
+'.fwpw .fwpexp-imgph{position:static !important;width:100% !important;height:220px !important;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#e0e7ff,#f5f3ff);}'
+'.fwpw .fwpexp-imgph img{width:52px;height:52px;opacity:.35;object-fit:contain;}'
/* card body */
+'.fwpexp-cbody{padding:11px 13px 13px;}'
+'.fwpexp-cat{display:inline-block;font-size:9.5px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;padding:2px 8px;border-radius:20px;background:#f5f3ff;color:#7c3aed;margin-bottom:7px;}'
+'.fwpexp-title{font-size:13px;font-weight:700;color:#111827;line-height:1.55;margin-bottom:10px;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;}'
+'.fwpexp-solve{display:flex;align-items:center;justify-content:space-between;background:#7c3aed;color:#fff;border-radius:8px;padding:9px 13px;font-size:12px;font-weight:700;}'
+'.fwpexp-solve span{font-size:15px;}'
/* skeleton \u2014 same structure as card so no layout shift */
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
+'.fwpfoot{border-top:1px solid #e5e7eb;padding:9px 14px;display:flex;align-items:center;justify-content:space-between;background:#f8f9ff;gap:8px;flex-wrap:nowrap;position:relative;}'
+'.fwpfl{display:flex;gap:10px;align-items:center;flex:1 1 auto;min-width:0;overflow:hidden;}'
+'.fwpmore{font-size:11px;font-weight:700;color:#0A0AFF;text-decoration:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:0 1 auto;}'
+'.fwpmore:hover{text-decoration:underline;}'
+'.fwpac{font-size:10px;color:#9ca3af;text-decoration:none;white-space:nowrap;flex:0 0 auto;}'
+'.fwpac:hover{color:#374151;}'
+'.fwpsh{display:flex;align-items:center;gap:4px;background:#fff;border:1.5px solid #e5e7eb;border-radius:8px;padding:5px 10px;font-size:11px;color:#6b7280;cursor:pointer;font-family:inherit;font-weight:600;white-space:nowrap;transition:all .15s;flex-shrink:0;flex:0 0 auto;}'
+'.fwpsh:hover{background:#eef2ff;color:#0A0AFF;border-color:#0A0AFF;}'
/* share menu popup */
+'.fwpsharemenu{position:absolute;bottom:46px;right:14px;background:#fff;border:1.5px solid #e5e7eb;border-radius:10px;box-shadow:0 8px 24px rgba(0,0,0,.16);padding:6px;display:none;flex-direction:column;gap:2px;z-index:20;min-width:170px;}'
+'.fwpsharemenu button{background:none;border:none;text-align:left;padding:7px 9px;font-size:12px;color:#111827;cursor:pointer;border-radius:6px;font-family:inherit;display:flex;align-items:center;gap:9px;width:100%;}'
+'.fwpsharemenu button svg{flex-shrink:0;}'
+'.fwpsharemenu button span{font-weight:600;}'
+'.fwpsharemenu button:hover{background:#f4f5ff;}'
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
/* app store promo badges */
+'.fwpapps{border-top:2px dashed #c7d2fe;padding:12px 14px;background:#f8f9ff;text-align:center;}'
+'.fwpapps-label{font-size:11px;font-weight:700;color:#374151;margin-bottom:9px;}'
+'.fwpapps-row{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;}'
+'.fwpapp-badge{display:flex;align-items:center;gap:7px;background:#111827;color:#fff;border-radius:8px;padding:7px 13px;text-decoration:none;transition:opacity .15s,transform .15s;}'
+'.fwpapp-badge:hover{opacity:.85;transform:translateY(-1px);}'
+'.fwpapp-ic{font-size:19px;line-height:1;}'
+'.fwpapp-txt{display:flex;flex-direction:column;line-height:1.2;text-align:left;}'
+'.fwpapp-txt small{font-size:8px;color:#d1d5db;text-transform:uppercase;letter-spacing:.4px;}'
+'.fwpapp-txt b{font-size:12.5px;font-weight:700;color:#fff;}'
+'.fwpattr{font-size:10px;color:#9ca3af;text-align:center;padding:5px 0 8px;}'
+'.fwpattr a{color:#0A0AFF;text-decoration:none;}'
+'.fwpattr a:hover{text-decoration:underline;}';
  document.head.appendChild(_cs);
}

/* \u2500\u2500 One-time network warm-up: open the connections early so the first
   Explore fetch and its images don't pay full DNS+TLS setup cost \u2500\u2500 */
if(!document.getElementById('fwpv6preconnect')){
  var _pc1=document.createElement('link');_pc1.id='fwpv6preconnect';_pc1.rel='preconnect';_pc1.href=B;
  document.head.appendChild(_pc1);
  var _pc2=document.createElement('link');_pc2.rel='preconnect';_pc2.href='https://blogger.googleusercontent.com';_pc2.crossOrigin='anonymous';
  document.head.appendChild(_pc2);
}

/* \u2500\u2500 Offline puzzle data pool: 28 categories, 3 shown at random each day \u2500\u2500 */
var C=[
{t:"Riddles",s:"riddles",p:[
{d:"easy",q:"I speak without a mouth and hear without ears. I have no body but come alive with wind. What am I?",h:"Think of sounds bouncing back in a valley.",a:"echo",c:["shadow","whisper","silence"]},
{d:"easy",q:"The more you take, the more you leave behind. What am I?",h:"Think about walking on a sandy beach.",a:"footsteps",c:["shadow","reflection","echo"]},
{d:"easy",q:"I am tall when young and short when old. What am I?",h:"Think about what burns down over time.",a:"candle",c:["match","lamp","torch"]},
{d:"easy",q:"What has one eye but cannot see?",h:"Think about sewing.",a:"needle",c:["nail","pin","hook"]},
{d:"easy",q:"What has hands but cannot clap?",h:"You look at it to know the time.",a:"clock",c:["watch","calendar","compass"]},
{d:"easy",q:"What is full of holes but still holds water?",h:"You use it in the shower.",a:"sponge",c:["towel","net","sieve"]},
{d:"easy",q:"What has a head and a tail but no body?",h:"Think coins.",a:"coin",c:["dice","key","button"]},
{d:"easy",q:"I have no wings but I fly, no eyes but I cry. What am I?",h:"Think about weather.",a:"cloud",c:["fog","smoke","mist"]},
{d:"easy",q:"What has legs but cannot walk?",h:"You sit on it.",a:"table",c:["chair","stool","bench"]},
{d:"medium",q:"I have cities but no houses, mountains but no trees, water but no fish. What am I?",h:"You can fold me and put me in your pocket.",a:"map",c:["globe","atlas","photo"]},
{d:"medium",q:"I am always in front of you but can never be seen. What am I?",h:"Think about what lies ahead in time.",a:"future",c:["past","dream","tomorrow"]},
{d:"medium",q:"The more you remove from me, the bigger I get. What am I?",h:"Think about digging in the ground.",a:"hole",c:["tunnel","pit","gap"]},
{d:"medium",q:"I have a thousand needles but I do not sew. What am I?",h:"Think about a prickly plant.",a:"cactus",c:["hedgehog","porcupine","thistle"]},
{d:"medium",q:"I go up but never come down. What am I?",h:"Think about getting older.",a:"age",c:["height","weight","time"]},
{d:"hard",q:"I can be cracked, made, told and played. What am I?",h:"Comedians do this every night on stage.",a:"joke",c:["story","secret","rumour"]},
{d:"hard",q:"What has a bottom at the top?",h:"Think about clothing worn on your legs.",a:"legs",c:["trousers","boots","shoes"]},
{d:"hard",q:"I bind it and it walks. I loose it and it stops. What am I?",h:"Think about a sandal.",a:"sandal",c:["shoelace","belt","rope"]},
{d:"hard",q:"What can travel around the world while staying in a corner?",h:"Think about postage.",a:"stamp",c:["coin","letter","postcard"]}
]},
{t:"Tricky",s:"tricky-riddles",p:[
{d:"easy",q:"What goes up but never comes down?",h:"Think about getting older.",a:"age",c:["height","weight","time"]},
{d:"easy",q:"A rooster laid an egg on the roof. Which side did it roll down?",h:"Roosters do not lay eggs.",a:"neither",c:["left side","right side","straight down"]},
{d:"easy",q:"How many months have 28 days?",h:"Do not just say one.",a:"all of them",c:["only february","only april","only 4 months"]},
{d:"easy",q:"What can you catch but not throw?",h:"You might get this when someone near you is sick.",a:"cold",c:["flu","fever","sunburn"]},
{d:"easy",q:"What gets wetter as it dries?",h:"You use it after a shower.",a:"towel",c:["sponge","umbrella","raincoat"]},
{d:"easy",q:"What has many keys but cannot open a single lock?",h:"You use it to type text.",a:"keyboard",c:["map","calendar","piano"]},
{d:"easy",q:"You see me once in a minute, twice in a moment, but not in a thousand years. What am I?",h:"Look at the letters.",a:"letter m",c:["letter e","letter s","letter t"]},
{d:"easy",q:"What question can you never answer yes to?",h:"Think about being awake.",a:"are you asleep",c:["are you awake","are you hungry","are you here"]},
{d:"medium",q:"Before Mt Everest was discovered, what was the tallest mountain on Earth?",h:"Discovery does not change geography.",a:"everest",c:["k2","kilimanjaro","no mountain existed"]},
{d:"medium",q:"I am not alive but I grow. I need air but have no lungs. Water kills me. What am I?",h:"You see me in a fireplace.",a:"fire",c:["smoke","ice","rust"]},
{d:"medium",q:"A man shaves many times a day yet still has a beard. How?",h:"Think about who shaves other people for a living.",a:"barber",c:["actor","doctor","tailor"]},
{d:"medium",q:"A woman had two sons at the same hour on the same day in the same year. Yet they were not twins. How?",h:"Think bigger than two.",a:"triplets",c:["twins","cousins","quadruplets"]},
{d:"hard",q:"What word in English is always spelled incorrectly?",h:"Read the question very literally.",a:"incorrectly",c:["correctly","wrongly","misspelled"]},
{d:"hard",q:"A woman shoots her husband then holds him underwater. They go to dinner an hour later. How?",h:"What profession shoots people harmlessly?",a:"photographer",c:["doctor","hunter","lifeguard"]},
{d:"hard",q:"What has a head and a tail but no body? It is not alive but you find it in your pocket.",h:"You flip it to make a decision.",a:"coin",c:["dice","button","key"]},
{d:"hard",q:"A man who was outside in the rain without an umbrella or hat did not get a single hair wet. How?",h:"Think about hair.",a:"he was bald",c:["he wore a hat","he used an umbrella","he stayed indoors"]}
]},
{t:"What Am I",s:"what-am-i-riddles",p:[
{d:"easy",q:"I have keys but no locks, space but no room. You can enter but not go inside. What am I?",h:"You use me to type.",a:"keyboard",c:["map","calendar","piano"]},
{d:"easy",q:"I run but have no legs. What am I?",h:"Think about flowing water.",a:"river",c:["road","wind","time"]},
{d:"easy",q:"I have a neck but no head. What am I?",h:"You pour drinks from me.",a:"bottle",c:["jug","vase","cup"]},
{d:"easy",q:"I fly without wings. What am I?",h:"Think about what passes every second.",a:"time",c:["wind","sound","light"]},
{d:"easy",q:"I have teeth but cannot bite. What am I?",h:"You use me to tidy your hair.",a:"comb",c:["saw","fork","zipper"]},
{d:"easy",q:"I have hands but cannot clap. I have a face but no eyes. What am I?",h:"You look at it to know the time.",a:"clock",c:["watch","calendar","mirror"]},
{d:"easy",q:"I have a spine but no bones. What am I?",h:"You read me.",a:"book",c:["cactus","ladder","fence"]},
{d:"easy",q:"I have a tongue but cannot talk. What am I?",h:"Think about footwear.",a:"shoe",c:["glove","hat","bell"]},
{d:"medium",q:"I can travel around the world without moving from my place. What am I?",h:"Think about sending letters.",a:"stamp",c:["coin","map","photo"]},
{d:"medium",q:"I have branches but no fruit, trunk or leaves. What am I?",h:"You go here to borrow books or save money.",a:"bank",c:["tree","forest","library"]},
{d:"medium",q:"I am taken from a mine and shut in a wooden case. Used by everyone but never touched. What am I?",h:"Think about writing tools.",a:"pencil lead",c:["chalk","crayon","ink"]},
{d:"medium",q:"I get shorter as I get older. What am I?",h:"Think about what burns down over time.",a:"candle",c:["match","lamp","torch"]},
{d:"medium",q:"I have an eye but cannot see. I have a body but no legs. What am I?",h:"Think about severe weather.",a:"needle or hurricane",c:["storm","tornado","cyclone"]},
{d:"hard",q:"The person who makes me does not need me. The buyer does not use me. The user does not know. What am I?",h:"Think about a final resting place.",a:"coffin",c:["safe","chest","urn"]},
{d:"hard",q:"You see me once in June, twice in November, not at all in May. What am I?",h:"Look at the letters of each month name.",a:"letter n",c:["letter m","letter j","letter u"]},
{d:"hard",q:"I am always hungry and must always be fed. The finger I touch will soon turn red. What am I?",h:"Think about heat.",a:"fire",c:["ice","smoke","wind"]}
]},
{t:"Funny",s:"funny-riddles",p:[
{d:"easy",q:"Why do bicycles fall over?",h:"Think about how many wheels it has.",a:"two tired",c:["out of gas","too rusty","flat broke"]},
{d:"easy",q:"What do you call a fish without eyes?",h:"Say it out loud and remove the letter i.",a:"fsh",c:["fysh","fis","fih"]},
{d:"easy",q:"Why can a leopard never hide?",h:"Think about its coat pattern.",a:"always spotted",c:["always striped","always camouflaged","always hiding"]},
{d:"easy",q:"What do you call a sleeping dinosaur?",h:"It makes a loud rumbling sound.",a:"dino-snore",c:["dino-nap","dino-doze","rex-snore"]},
{d:"easy",q:"What do you call cheese that is not yours?",h:"It belongs to someone else.",a:"nacho cheese",c:["not-cho cheese","fake cheese","cheddar cheese"]},
{d:"easy",q:"Why did the scarecrow win an award?",h:"Think about what makes a field special.",a:"outstanding in his field",c:["scared of birds","made of straw","great at farming"]},
{d:"easy",q:"What do you call a fake noodle?",h:"It is an impasta!",a:"impasta",c:["fake-aroni","noodle-fake","cheat-lini"]},
{d:"easy",q:"Why did the math book look so sad?",h:"Think about what is inside it.",a:"too many problems",c:["too many pages","too heavy to carry","full of numbers"]},
{d:"medium",q:"What did the ocean say to the beach?",h:"Think of a wavy greeting.",a:"nothing it just waved",c:["hello ocean","see you later","have a splashy day"]},
{d:"medium",q:"Why do scientists not trust atoms?",h:"They are guilty of something.",a:"they make up everything",c:["they are too small","they never sit still","they split too easily"]},
{d:"medium",q:"What did one wall say to the other?",h:"Think about a corner.",a:"i will meet you at the corner",c:["nice bricks today","see you at the ceiling","watch out for cracks"]},
{d:"medium",q:"Why did the bicycle not win the race?",h:"Think about what it was.",a:"two tired",c:["ran out of road","lost its chain","flat tyres"]},
{d:"medium",q:"What is a vampire's favourite fruit?",h:"Think about the neck.",a:"a blood orange",c:["a neck-tarine","a bite-sized apple","a scream-berry"]},
{d:"hard",q:"I have 4 legs in the morning, 2 at noon, and 3 in the evening. What am I?",h:"This is the riddle of the Sphinx.",a:"human",c:["dog","spider","the sphinx"]},
{d:"hard",q:"What word becomes shorter when you add two letters to it?",h:"Think of the word meaning not long.",a:"short",c:["small","tiny","brief"]},
{d:"hard",q:"What runs but never walks, has a mouth but never talks, has a head but never weeps?",h:"Think about flowing water.",a:"river",c:["road","clock","wind"]}
]},
{t:"Mystery",s:"mystery-riddles",p:[
{d:"easy",q:"How far can a dog run into the woods?",h:"Think about the halfway point.",a:"halfway",c:["all the way","not at all","a mile"]},
{d:"easy",q:"What is always coming but never arrives?",h:"Think about time.",a:"tomorrow",c:["yesterday","today","next year"]},
{d:"easy",q:"If you drop me I will crack, but smile at me and I will smile back. What am I?",h:"You look at this every morning.",a:"mirror",c:["window","photo","screen"]},
{d:"easy",q:"A father has 5 sons, each son has one sister. How many children are there?",h:"They all share the same sister.",a:"6"},
{d:"easy",q:"A man is 20 years old but has only had 5 birthdays. How?",h:"Think about when his birthday falls.",a:"born on february 29",c:["born on new year's day","born on a leap second","he lied about his age"]},
{d:"easy",q:"What has 13 hearts but no other organs?",h:"You use it to play card games.",a:"deck of cards",c:["calendar","chess set","dice set"]},
{d:"easy",q:"What is always the last thing to make you smile?",h:"Think about a photo.",a:"your cheeks",c:["your eyes","your teeth","your ears"]},
{d:"easy",q:"A rooster lays an egg on top of a barn. Which way does it roll?",h:"Think about whether a rooster can lay eggs.",a:"roosters dont lay eggs",c:["it rolls left","it rolls right","it stays put"]},
{d:"medium",q:"A man pushes his car to a hotel and declares bankruptcy. Why?",h:"Think about a popular board game.",a:"monopoly",c:["chess","checkers","scrabble"]},
{d:"medium",q:"A man is found dead by a cassette. Police press play, hear a gunshot and know it is murder. Why?",h:"Think about what the recording reveals.",a:"someone rewound it",c:["it was a recording","the tape was broken","it was slowed down"]},
{d:"medium",q:"A woman lives on the 20th floor. On sunny days she takes the lift to the 10th and walks up. On rainy days all the way. Why?",h:"Think about what she carries on rainy days.",a:"umbrella",c:["raincoat","boots","hat"]},
{d:"medium",q:"How can a man go 25 days without sleep?",h:"He does not need to sleep during the day.",a:"he sleeps at night",c:["he takes long naps","he never gets tired","he sleeps standing up"]},
{d:"hard",q:"A man found dead in a field next to an unopened package. No marks, no one around. How did he die?",h:"Think about what the package was supposed to do.",a:"parachute failed to open",c:["he was pushed","he had a heart attack","he was struck by lightning"]},
{d:"hard",q:"A woman asks a hardware store for a number. Clerk says 75 paise per digit. She pays Rs 1.50. What did she buy?",h:"Think about house numbers.",a:"house number with 2 digits",c:["a phone number","a street sign","a padlock code"]},
{d:"hard",q:"3 doors: freedom behind one, lions behind others. Which do you pick?",h:"Think about lions unfed for 3 years.",a:"any they would be dead",c:["the middle door","the first door","the last door"]},
{d:"hard",q:"A man walks into a bar and asks the bartender for a glass of water. The bartender pulls out a gun. The man says thank you and leaves. Why?",h:"Think about what cures hiccups.",a:"hiccups",c:["a dry throat","a bad joke","he was thirsty"]}
]},
{t:"Maths",s:"maths-puzzles",p:[
{d:"easy",q:"A farmer has 17 sheep. All but 9 run away. How many are left?",h:"Read all but 9 very carefully.",a:"9"},
{d:"easy",q:"What is half of 2 plus 2?",h:"Follow the correct order of operations.",a:"3"},
{d:"easy",q:"If you have 3 apples and take away 2, how many apples do YOU have?",h:"Focus on the word YOU.",a:"2"},
{d:"easy",q:"How many times can you subtract 10 from 100?",h:"After the first time the number is no longer 100.",a:"once",c:["ten times","nine times","twice"]},
{d:"easy",q:"What comes next: 1, 2, 4, 8, 16, __?",h:"Each number is doubled.",a:"32"},
{d:"easy",q:"If you throw a red stone into the blue sea, what does it become?",h:"Think about what happens physically.",a:"wet",c:["heavier","invisible","purple"]},
{d:"easy",q:"How many sides does a circle have?",h:"Think carefully \u2014 it is not zero.",a:"one curved side",c:["zero sides","infinite sides","two sides"]},
{d:"easy",q:"What is 1000 plus 20 plus 1000 plus 30 plus 1000 plus 1040?",h:"Add carefully step by step.",a:"4090"},
{d:"medium",q:"I am an odd number. Take away one letter and I become even. What number am I?",h:"Think about the word not the digit.",a:"seven",c:["nine","three","five"]},
{d:"medium",q:"A bat and ball cost Rs 110 together. The bat costs Rs 100 more than the ball. What is the cost of the ball?",h:"Do not just say Rs 10. Set up a proper equation.",a:"5"},
{d:"medium",q:"Two ropes each burn in 60 minutes unevenly. How do you measure exactly 45 minutes?",h:"Light both ends of one rope and one end of the other.",a:"45 minutes"},
{d:"medium",q:"If there are 3 apples and you take away 2, how many apples do you have?",h:"YOU took 2.",a:"2"},
{d:"hard",q:"A clock loses 3 minutes every hour. Set at noon, when will it next show the correct time?",h:"It must lose exactly 12 hours.",a:"240 days"},
{d:"hard",q:"8 identical balls, one slightly heavier. Using a balance only twice, find the heavy one.",h:"Divide into groups of 3, 3, and 2.",a:"two weighings",c:["three weighings","one weighing","four weighings"]},
{d:"hard",q:"What 3 positive numbers give the same result when multiplied and when added?",h:"Try simple numbers like 1, 2, 3.",a:"1 2 3"},
{d:"hard",q:"You have two hourglasses \u2014 a 4-minute and a 7-minute. How do you measure exactly 9 minutes?",h:"Start both, flip the 4 when done, then flip again.",a:"flip strategically",c:["flip both together","wait 11 minutes","flip only the 7"]}
]},
{t:"Missing #",s:"missing-number-puzzles",p:[
{d:"easy",q:"2, 4, 6, 8, __ \u2014 What comes next?",h:"Each number increases by the same amount.",a:"10"},
{d:"easy",q:"1, 1, 2, 3, 5, 8, __ \u2014 What comes next?",h:"Each number is the sum of the two before it.",a:"13"},
{d:"easy",q:"10, 20, 30, 40, __ \u2014 What comes next?",h:"Count in tens.",a:"50"},
{d:"easy",q:"5, 10, 20, 40, __ \u2014 What comes next?",h:"Each number is doubled.",a:"80"},
{d:"easy",q:"100, 90, 80, 70, __ \u2014 What comes next?",h:"Counting backwards by tens.",a:"60"},
{d:"easy",q:"1, 4, 9, 16, 25, __ \u2014 What comes next?",h:"Think about perfect squares.",a:"36"},
{d:"easy",q:"3, 9, 27, 81, __ \u2014 What comes next?",h:"Each number is multiplied by 3.",a:"243"},
{d:"easy",q:"2, 4, 8, 16, __ \u2014 What comes next?",h:"Each number doubles.",a:"32"},
{d:"medium",q:"3, 6, 12, 24, __ \u2014 What comes next?",h:"Each number is multiplied by the same value.",a:"48"},
{d:"medium",q:"Grid:\n2  4  8\n3  9  27\n4  16  ?\nWhat replaces the ?",h:"Look at the pattern across each row.",a:"64"},
{d:"medium",q:"7, 14, 21, 28, __ \u2014 What comes next?",h:"Multiples of 7.",a:"35"},
{d:"medium",q:"1, 3, 6, 10, 15, __ \u2014 What comes next?",h:"These are triangle numbers.",a:"21"},
{d:"hard",q:"1, 2, 6, 24, 120, __ \u2014 What comes next?",h:"Each term equals previous term multiplied by its position.",a:"720"},
{d:"hard",q:"Find the missing number:\n6  13  25\n11 23  45\n16 33  __",h:"Look at the relationship across each row.",a:"65"},
{d:"hard",q:"What is the sum of the first 100 natural numbers?",h:"Use the formula n x (n+1) divided by 2.",a:"5050"},
{d:"hard",q:"What comes next: 0, 1, 1, 2, 3, 5, 8, 13, 21, __?",h:"Each number is the sum of the two before it.",a:"34"}
]},
{t:"Series",s:"maths-reasoning-number-series-puzzles",p:[
{d:"easy",q:"2, 6, 18, 54, __ \u2014 What comes next?",h:"Each number is multiplied by 3.",a:"162"},
{d:"easy",q:"3, 6, 9, 12, 15, __ \u2014 What comes next?",h:"Multiples of 3.",a:"18"},
{d:"easy",q:"1, 3, 5, 7, 9, __ \u2014 What comes next?",h:"These are odd numbers in order.",a:"11"},
{d:"easy",q:"2, 3, 5, 7, 11, 13, __ \u2014 What comes next?",h:"These are all prime numbers.",a:"17"},
{d:"easy",q:"4, 8, 12, 16, __ \u2014 What comes next?",h:"Multiples of 4.",a:"20"},
{d:"easy",q:"100, 95, 85, 70, 50, __ \u2014 What comes next?",h:"Look at how much is subtracted each time.",a:"25"},
{d:"easy",q:"1, 2, 4, 8, 16, __ \u2014 What comes next?",h:"Powers of 2.",a:"32"},
{d:"easy",q:"5, 10, 15, 20, 25, __ \u2014 What comes next?",h:"Multiples of 5.",a:"30"},
{d:"medium",q:"1, 2, 4, 7, 11, 16, __ \u2014 What comes next?",h:"The difference between terms increases by 1 each time.",a:"22"},
{d:"medium",q:"1, 8, 27, 64, 125, __ \u2014 What comes next?",h:"Think about perfect cubes.",a:"216"},
{d:"medium",q:"2, 5, 10, 17, 26, __ \u2014 What comes next?",h:"Look at the differences: 3, 5, 7, 9 ...",a:"37"},
{d:"medium",q:"0, 1, 4, 9, 16, __ \u2014 What comes next?",h:"These are perfect squares starting from 0.",a:"25"},
{d:"hard",q:"3, 5, 11, 29, 83, __ \u2014 What comes next?",h:"Each term equals previous term x 3 minus 4.",a:"245"},
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
{d:"hard",q:"All Bloops are Razzles. All Razzles are Lazzles. Are all Bloops definitely Lazzles?",h:"If A implies B and B implies C ...",a:"yes",c:["no","maybe","not necessarily"]},
{d:"hard",q:"If the day before yesterday was Thursday, what day is the day after tomorrow?",h:"Map out the days carefully.",a:"monday",c:["sunday","tuesday","saturday"]},
{d:"hard",q:"In a group of 23 people, roughly what is the chance two share a birthday?",h:"This is the famous birthday problem.",a:"about 50 percent",c:["about 10 percent","about 90 percent","about 25 percent"]},
{d:"hard",q:"Three friends split a Rs 300 bill. They each pay Rs 100. The waiter returns Rs 50. They each get Rs 10 back. Where did the missing Rs 10 go?",h:"There is no missing Rs 10. Recount carefully.",a:"there is no missing rupee",c:["the waiter kept it","the maths is wrong","they were shortchanged"]}
]},
{t:"Crack Code",s:"crack-code-puzzles",p:[
{d:"easy",q:"If A=1, B=2, C=3 ... what word does 8-5-12-12-15 spell?",h:"Convert each number to its letter.",a:"hello",c:["world","hallo","hero"]},
{d:"easy",q:"ROT13: What does CHMMYR decode to?",h:"Each letter shifts 13 places forward.",a:"puzzle",c:["riddle","secret","cipher"]},
{d:"easy",q:"If 1=A, 2=B, 3=C ... what does 6-21-14 spell?",h:"F=6, U=21, N=14.",a:"fun",c:["fan","fin","sun"]},
{d:"easy",q:"What letter is the mirror of E in the alphabet A-Z?",h:"A=Z, B=Y, C=X ...",a:"v",c:["u","w","y"]},
{d:"easy",q:"In the code BSBOC each letter is one ahead of the real letter. What word does it spell?",h:"Shift each letter one place back in the alphabet.",a:"brain",c:["brave","train","drain"]},
{d:"easy",q:"What number comes next: 2, 4, 6, 8, __?",h:"Even numbers in sequence.",a:"10"},
{d:"easy",q:"Decode: 20-5-19-20. A=1, B=2 ...",h:"Convert each number to a letter.",a:"test",c:["rest","best","text"]},
{d:"easy",q:"If ZAP = 26-1-16, what does CAT equal?",h:"A=1, B=2, C=3 ...",a:"3-1-20"},
{d:"medium",q:"682: one digit right place. 614: one digit wrong place. 206: two digits wrong places. What is the code?",h:"Start with 682 to find which position is correct.",a:"042"},
{d:"medium",q:"In a 4-digit lock using digits 1-4 with no repeats, how many codes are possible?",h:"4 x 3 x 2 x 1.",a:"24"},
{d:"medium",q:"Caesar cipher shift 3: decode SXCCOH",h:"Shift each letter back 3 places.",a:"puzzle",c:["riddle","secret","cipher"]},
{d:"medium",q:"What pattern: 1, 11, 121, 1331, 14641?",h:"Think about Pascal triangle.",a:"powers of 11",c:["pascal's rows","binomial sums","fibonacci steps"]},
{d:"hard",q:"A says B is lying. B says C is lying. C says A and B are both lying. Who tells the truth?",h:"Test each possibility. Only one is consistent.",a:"c",c:["a","b","none of them"]},
{d:"hard",q:"What is the next number: 1, 11, 21, 1211, 111221, __?",h:"Read each number aloud to describe the previous.",a:"312211"},
{d:"hard",q:"Using digits 1, 2, 3, 4 each exactly once with + - x, make 10.",h:"Try 1+2+3+4.",a:"1+2+3+4"},
{d:"hard",q:"A book has 500 pages. How many times does the digit 1 appear?",h:"Count pages: 1, 10-19, 100-199 ...",a:"200"}
]},
{t:"Chess",s:"fun-chess-puzzles",p:[
{d:"easy",q:"Which chess piece can jump over other pieces?",h:"It moves in an L-shape.",a:"knight",c:["bishop","rook","pawn"]},
{d:"easy",q:"What is it called when a king is under attack and cannot escape?",h:"Check + ___.",a:"checkmate",c:["stalemate","check","castling"]},
{d:"easy",q:"How many squares are on a standard chessboard?",h:"8 x 8.",a:"64"},
{d:"easy",q:"Which chess piece can only move diagonally?",h:"Associated with a religious leader.",a:"bishop",c:["rook","knight","queen"]},
{d:"easy",q:"What is the most powerful piece in chess?",h:"Can move in any direction any number of squares.",a:"queen",c:["king","rook","bishop"]},
{d:"easy",q:"How many pawns does each player start with?",h:"They fill the entire second row.",a:"8"},
{d:"easy",q:"What colour square does the white queen start on?",h:"The queen always starts on her own colour.",a:"white",c:["black","either colour","depends on the set"]},
{d:"easy",q:"How many pieces does each player start with?",h:"Count all pieces on one side.",a:"16"},
{d:"medium",q:"A pawn reaches the last rank. Which piece can it NOT promote to?",h:"One piece is excluded from promotion.",a:"king",c:["queen","rook","bishop"]},
{d:"medium",q:"Which special move allows the king and rook to switch sides?",h:"Only move where two pieces move at once.",a:"castling",c:["en passant","promotion","stalemate"]},
{d:"medium",q:"A player has no legal moves but their king is NOT in check. What is this called?",h:"The game ends immediately as a draw.",a:"stalemate",c:["checkmate","draw by repetition","resignation"]},
{d:"medium",q:"Which chess piece is worth roughly 3 pawns?",h:"It moves in an L-shape or along diagonals.",a:"knight or bishop",c:["rook","pawn","king"]},
{d:"hard",q:"What opening starts: 1.e4 e5 2.Nf3 Nc6 3.Bc4?",h:"Named after a city in Italy.",a:"italian game",c:["spanish game","french defence","sicilian defence"]},
{d:"hard",q:"What is en passant?",h:"A pawn captures another that just moved two squares.",a:"special pawn capture",c:["a type of castling","a pawn promotion","a forced checkmate"]},
{d:"hard",q:"How many possible games exist after each player makes 2 moves?",h:"Each side has 20 first moves and 20 second moves.",a:"400"},
{d:"hard",q:"How many possible first moves does white have in chess?",h:"Pawns and knights can move.",a:"20"}
]},
{t:"Sudoku",s:"fun-with-sudoku",p:[
{d:"easy",q:"How many 3x3 boxes are in a standard 9x9 Sudoku?",h:"Rows of boxes multiplied by columns of boxes.",a:"9"},
{d:"easy",q:"In Sudoku, which digit can appear more than once in the same row?",h:"Trick question. Re-read the core rule.",a:"none",c:["1-3","only even numbers","only odd numbers"]},
{d:"easy",q:"How many cells are in a standard Sudoku grid?",h:"9 x 9.",a:"81"},
{d:"easy",q:"Digits 1-9 must appear exactly once in each what?",h:"Three things: row, column, and ...",a:"row column and box",c:["only row","only column","only diagonal"]},
{d:"easy",q:"What is the most common Mini Sudoku grid size?",h:"Think half of 9, rounded.",a:"6x6"},
{d:"easy",q:"What does it mean for a Sudoku to have a unique solution?",h:"There is only one correct way to fill the grid.",a:"only one solution exists",c:["multiple solutions exist","no solution exists","any digit works"]},
{d:"easy",q:"In a 9x9 Sudoku, how many rows are there?",h:"Count them.",a:"9"},
{d:"easy",q:"How many numbers appear in each row of a completed Sudoku?",h:"Each digit 1 through 9 appears once.",a:"9"},
{d:"medium",q:"In Consecutive Sudoku, what extra rule applies between adjacent cells?",h:"It involves the difference between neighbouring values.",a:"must be consecutive",c:["must be even","must be prime","must sum to 10"]},
{d:"medium",q:"In Killer Sudoku, digits in a cage must sum to a target AND follow which rule?",h:"Same rule as every row and column.",a:"no repeat",c:["must be consecutive","must be even","must be prime"]},
{d:"medium",q:"What is a Thermo Sudoku?",h:"Think about temperature increasing along a path.",a:"digits increase along thermometer shape",c:["digits must be even","digits must be prime","digits must repeat"]},
{d:"medium",q:"What is the Naked Single technique in Sudoku?",h:"Only one digit can go in a cell.",a:"only one possible digit for a cell",c:["two possible digits remain","the cell can be left blank","any digit is allowed"]},
{d:"hard",q:"What is the minimum number of clues a valid Sudoku needs for a unique solution?",h:"Research by McGuire et al. 2012.",a:"17"},
{d:"hard",q:"How many valid completed Sudoku grids exist approximately?",h:"The answer is in the billions of billions.",a:"6.7 sextillion"},
{d:"hard",q:"In a Diagonal Sudoku, how many extra constraints are added?",h:"Count the two main diagonals.",a:"2"},
{d:"hard",q:"What technique uses the fact that a digit must appear in one row or column of a box?",h:"It eliminates that digit from the rest of the row or column.",a:"pointing pairs",c:["naked pairs","hidden singles","x-wing"]}
]},
{t:"Lateral",s:"lateral-thinking-puzzles",p:[
{d:"easy",q:"A man lives on the 10th floor. He takes the lift down each morning but walks up from the 6th floor. Why?",h:"Think about a physical limitation.",a:"he is too short to reach floor 10 button",c:["the lift is broken above floor 6","he enjoys the exercise","he lives on floor 6 too"]},
{d:"easy",q:"How can a man go 8 days without sleep?",h:"He does not need to.",a:"he sleeps at night",c:["he never needs sleep","he naps at work","he sleeps standing up"]},
{d:"easy",q:"An electric train heads north. Which way does the smoke blow?",h:"Electric trains produce no smoke.",a:"no smoke",c:["smoke blows north","smoke blows south","smoke blows sideways"]},
{d:"easy",q:"A woman had two sons born same time same day. Not twins. How?",h:"Think about more than two.",a:"they are triplets",c:["they are twins","they have different fathers","one was adopted"]},
{d:"easy",q:"A man walks into a bar and asks for water. The bartender pulls a gun. The man says thanks and leaves. Why?",h:"Why would someone urgently need water?",a:"hiccups",c:["he was thirsty","he wanted ice","he was testing the bartender"]},
{d:"easy",q:"A rooster laid an egg on a roof peak. Which way does it roll?",h:"Roosters do not lay eggs.",a:"roosters dont lay eggs",c:["it rolls left","it rolls right","it stays on the roof"]},
{d:"easy",q:"How do you make the number 7 even?",h:"Think about removing a letter.",a:"remove the s",c:["add a zero","flip it upside down","cross out the top"]},
{d:"easy",q:"A girl fell off a 20-foot ladder but was not hurt. How?",h:"Think about which rung she was on.",a:"she fell from the first rung",c:["she landed on a mattress","she wasn't on the ladder","the ladder was padded"]},
{d:"medium",q:"A woman shoots her husband then holds him underwater. They go to dinner an hour later. How?",h:"What profession shoots people harmlessly?",a:"photographer",c:["doctor","hunter","lifeguard"]},
{d:"medium",q:"A man dead in a field, unopened package beside him, no marks, no one around. How?",h:"What was the package supposed to do?",a:"parachute failed",c:["he had a heart attack","he was pushed","lightning struck him"]},
{d:"medium",q:"You are in a boat on a lake. You drop an anchor overboard. Does the lake level rise or fall?",h:"Think about weight displacement.",a:"falls",c:["rises","stays the same","overflows"]},
{d:"medium",q:"A man is pushing his car. He stops at a hotel and says he is broke. What is he doing?",h:"Think about a board game.",a:"playing monopoly",c:["playing chess","out of fuel","waiting for a tow"]},
{d:"hard",q:"3 switches outside control 3 bulbs in a windowless room. Enter only once. How do you identify each?",h:"Switches do more than light bulbs. Think heat.",a:"turn one on wait turn off turn another on then enter",c:["flip all switches at once","enter and guess randomly","turn them on one at a time while inside"]},
{d:"hard",q:"5 pirates divide 100 coins by majority vote. What does the most senior propose?",h:"Work backwards from 2 pirates.",a:"96 0 1 0 3"},
{d:"hard",q:"A house has 4 sides all facing south. A bear walks by. What colour is the bear?",h:"Think about where all 4 sides can face south.",a:"white",c:["black","brown","it could be any colour"]},
{d:"hard",q:"How can you throw a ball so it goes a short distance, comes to a complete stop, and returns to you without bouncing or hitting anything?",h:"Think about throwing direction.",a:"throw it straight up",c:["throw it against a wall","throw it at an angle","roll it instead"]}
]},
{t:"Matchstick",s:"matchstick-maths-puzzles",p:[
{d:"easy",q:"How many matchsticks are needed to form one triangle?",h:"Each side of the triangle takes one matchstick.",a:"3"},
{d:"easy",q:"How many matchsticks are needed to form one square?",h:"Each side of the square takes one matchstick.",a:"4"},
{d:"easy",q:"How many matchsticks are needed to form one hexagon?",h:"A hexagon has six equal sides.",a:"6"},
{d:"easy",q:"How many matchsticks are needed to write the digit 7 on a digital display?",h:"The digit 7 lights up the top segment and the two segments on the right.",a:"3"},
{d:"easy",q:"How many matchsticks are needed to write the digit 4 on a digital display?",h:"The digit 4 uses two verticals and one horizontal, with no top segment.",a:"4"},
{d:"easy",q:"How many matchsticks are needed to write the digit 1 on a digital display?",h:"The digit 1 only lights up the two segments on the right.",a:"2"},
{d:"easy",q:"How many matchsticks are needed to write the digit 0 on a digital display?",h:"The digit 0 lights up every segment except the middle one.",a:"6"},
{d:"easy",q:"Using exactly 4 matchsticks with no overlaps, how many complete squares can you form?",h:"Think about how many sticks a single square actually needs.",a:"1"},
{d:"medium",q:"How many matchsticks are needed to write the digit 8 on a digital display?",h:"The digit 8 lights up every one of the seven segments.",a:"7"},
{d:"medium",q:"Six equal matchsticks are arranged into triangles, without breaking any and without any sticks left over. What is the maximum number of triangles you can form?",h:"Think in three dimensions, not flat on the table.",a:"4"},
{d:"medium",q:"How many squares of ANY size can you count in a 3x3 grid made of matchsticks?",h:"Count the 1x1 squares, then the 2x2 squares, then the 3x3 square.",a:"14"},
{d:"medium",q:"A row of 5 squares is built from matchsticks, each square sharing one side with the next. How many matchsticks are used in total?",h:"Each new square after the first only needs 3 extra matchsticks since it shares a side.",a:"16"},
{d:"hard",q:"How many squares of ALL sizes can you count in a 4x4 grid made of matchsticks?",h:"Count 1x1, 2x2, 3x3 and 4x4 squares separately, then add them up.",a:"30"},
{d:"hard",q:"A row of 10 squares is built from matchsticks, each sharing one side with the next. How many matchsticks are used in total?",h:"Use the pattern: each shared square after the first adds 3 sticks.",a:"31"},
{d:"hard",q:"A 3x3 grid of 9 small squares is built entirely from matchsticks. How many matchsticks are used in total?",h:"There are 4 horizontal lines and 4 vertical lines, each 3 sticks long.",a:"24"},
{d:"hard",q:"A large triangle is divided into 4 smaller equal triangles, all built from matchsticks. How many matchsticks are used in total for the whole figure?",h:"It's the same shape as the classic 4-triangle picture puzzle, just built from matchsticks.",a:"9"}
]},
{t:"Rebus",s:"rebus-riddles",p:[
{d:"easy",q:"What phrase does HE + ART represent?",h:"Read the letters and their position.",a:"heart",c:["heartbeat","sweetheart","art gallery"]},
{d:"easy",q:"HIJKLMNO \u2014 What one word does this represent?",h:"These letters span H to O.",a:"water",c:["alphabet","letters","ocean"]},
{d:"easy",q:"What does BAN + ANA represent?",h:"Put the sounds together.",a:"banana",c:["bandana","banjo","banana split"]},
{d:"easy",q:"What does EZ represent?",h:"Say the letters aloud.",a:"easy",c:["breezy","peasy","zesty"]},
{d:"easy",q:"What phrase does HEAD over HEELS represent?",h:"One word is above another.",a:"head over heels",c:["heels over head","upside down","top to bottom"]},
{d:"easy",q:"What word is hidden inside: PRAISECTION?",h:"Look for a smaller word inside.",a:"raise",c:["praise","erase","phrase"]},
{d:"easy",q:"What does GR + 8 represent?",h:"Say each part aloud.",a:"great",c:["grate","gr8t","greater"]},
{d:"easy",q:"What does B4 represent?",h:"Say it aloud as a number and letter.",a:"before",c:["b-four","forever","before hand"]},
{d:"medium",q:"What does this represent?\nSTAND\nI I I I",h:"What are the I's doing relative to STAND?",a:"i understand",c:["i stand alone","standing tall","i under stand"]},
{d:"medium",q:"ONCE\n----\nTIME\nWhat does this represent?",h:"Think about position.",a:"once upon a time",c:["time after time","once in a while","time and again"]},
{d:"medium",q:"What phrase is shown by TIMING TIM ING?",h:"One word is inside another.",a:"perfect timing",c:["timing is everything","split second","right on time"]},
{d:"medium",q:"What does this mean: DEATH LIFE?",h:"Think about what comes between the two words.",a:"life after death",c:["death before life","life and death","fear of death"]},
{d:"hard",q:"What does MAN / BOARD represent?",h:"Think about position.",a:"man overboard",c:["board the man","overworked man","man on board"]},
{d:"hard",q:"What does NE14 10S mean?",h:"Say each part aloud.",a:"anyone for tennis",c:["any tennis players","tennis anyone","ten tennis players"]},
{d:"hard",q:"TIMING TIM ING \u2014 what is the hidden phrase?",h:"The word TIM is inside TIMING.",a:"split second timing",c:["perfect timing","timing is everything","dead on time"]},
{d:"hard",q:"What does ROADS represent?",h:"Think about crossroads.",a:"crossroads",c:["road trip","cross country","dirt roads"]}
]},
{t:"GK",s:"general-knowledge-quizzes-and-riddles",p:[
{d:"easy",q:"Which planet has the most moons?",h:"The largest planet in our solar system.",a:"jupiter",c:["saturn","neptune","uranus"]},
{d:"easy",q:"What is the only country that is also a continent?",h:"Southern Hemisphere, has kangaroos.",a:"australia",c:["greenland","antarctica","new zealand"]},
{d:"easy",q:"Which element has the chemical symbol Fe?",h:"A common metal used in construction.",a:"iron",c:["tin","zinc","lead"]},
{d:"easy",q:"What is the capital of Japan?",h:"One of the most populated cities in the world.",a:"tokyo",c:["osaka","kyoto","seoul"]},
{d:"easy",q:"How many sides does a hexagon have?",h:"Think about the prefix hex.",a:"6"},
{d:"easy",q:"What is the largest ocean on Earth?",h:"It covers more than one third of Earth.",a:"pacific",c:["atlantic","indian","arctic"]},
{d:"easy",q:"What is the boiling point of water in Celsius?",h:"Think about cooking pasta.",a:"100"},
{d:"easy",q:"How many continents are there on Earth?",h:"Think: Africa, Asia, Europe, Americas, etc.",a:"7"},
{d:"medium",q:"What is the shortest war in history, lasting only 38-45 minutes?",h:"Between Britain and a Sultanate in East Africa, 1896.",a:"zanzibar",c:["gibraltar","malta","cyprus"]},
{d:"medium",q:"Which element has the highest melting point of all elements?",h:"Used in light bulb filaments.",a:"tungsten",c:["titanium","platinum","iridium"]},
{d:"medium",q:"What is the speed of light in a vacuum, approximately?",h:"About 300 million metres per second.",a:"300000 km per second"},
{d:"medium",q:"What is the largest desert in the world?",h:"It is not the Sahara.",a:"antarctica",c:["sahara","gobi","arabian"]},
{d:"hard",q:"I am a country, language and nationality all sharing one name. Capital is Amsterdam. What am I?",h:"Famous for tulips, windmills, and cycling.",a:"netherlands",c:["denmark","belgium","luxembourg"]},
{d:"hard",q:"What is the only number in English with the same number of letters as its value?",h:"Count the letters in the word.",a:"four",c:["one","three","six"]},
{d:"hard",q:"Which country has the most natural lakes?",h:"It has over 60 percent of the world total.",a:"canada",c:["russia","finland","brazil"]},
{d:"hard",q:"What is the only planet that rotates clockwise when viewed from above?",h:"It spins backwards compared to most planets.",a:"venus",c:["mercury","mars","uranus"]}
]},
{t:"Odd One",s:"odd-one-out-picture-puzzles",p:[
{d:"easy",q:"Odd one out:\nApple, Banana, Carrot, Mango",h:"Three are fruits. One is not.",a:"carrot",c:["apple","banana","mango"]},
{d:"easy",q:"Odd one out:\nRed, Blue, Green, Yellow, Circle",h:"Four are colours. One is a shape.",a:"circle",c:["red","blue","yellow"]},
{d:"easy",q:"Odd one out:\nDog, Cat, Eagle, Rabbit",h:"Three are mammals. One is a bird.",a:"eagle",c:["dog","cat","rabbit"]},
{d:"easy",q:"Odd one out:\nSpain, France, India, Italy",h:"Three are European. One is not.",a:"india",c:["spain","france","italy"]},
{d:"easy",q:"Odd one out:\nSwimming, Running, Tennis, Cycling",h:"Three do not need a partner. One does.",a:"tennis",c:["swimming","running","cycling"]},
{d:"easy",q:"Odd one out:\nSon, Moon, Star, Earth",h:"Three are in space. One is a family member.",a:"son",c:["moon","star","earth"]},
{d:"easy",q:"Odd one out:\nRose, Lotus, Tulip, Oak",h:"Three are flowers. One is not.",a:"oak",c:["rose","lotus","tulip"]},
{d:"easy",q:"Odd one out:\nCow, Horse, Hen, Tiger",h:"Three are domestic. One is wild.",a:"tiger",c:["cow","horse","hen"]},
{d:"medium",q:"Odd one out:\nPiano, Guitar, Violin, Trumpet, Flute",h:"Four need air or strings. One is different.",a:"piano",c:["guitar","violin","trumpet"]},
{d:"medium",q:"Odd one out:\n3, 5, 7, 9, 11",h:"All are odd but look at which are prime.",a:"9"},
{d:"medium",q:"Odd one out:\nNile, Amazon, Thames, Sahara",h:"Three are rivers. One is not.",a:"sahara",c:["nile","amazon","thames"]},
{d:"medium",q:"Odd one out:\n2, 3, 5, 7, 9, 11",h:"One is not prime.",a:"9"},
{d:"hard",q:"Odd one out:\nMercury, Venus, Earth, Pluto, Mars",h:"Think about their official planetary status.",a:"pluto",c:["mercury","venus","mars"]},
{d:"hard",q:"Odd one out:\n121, 144, 169, 196, 225, 250",h:"Five are perfect squares. One is not.",a:"250"},
{d:"hard",q:"Odd one out:\nNovember, April, June, September, February",h:"Think about the number of days in each month.",a:"february",c:["april","june","september"]},
{d:"hard",q:"Odd one out:\nCow, Buffalo, Camel, Horse, Calf",h:"Think about the stage of life.",a:"calf",c:["cow","buffalo","camel"]}
]},
{t:"Mistake",s:"find-mistake-puzzles",p:[
{d:"easy",q:"Spot the mistake:\n1, 2, 3, 4, 5, 6, 8, 9, 10",h:"Count the numbers carefully.",a:"7 is missing"},
{d:"easy",q:"Spot the mistake:\nMonday, Tuesday, Wednesday, Thursday, Friday, Sunday",h:"Check all the days of the week.",a:"saturday is missing",c:["sunday is missing","wednesday is missing","friday is missing"]},
{d:"easy",q:"What is wrong with: She have three cats.",h:"Subject-verb agreement.",a:"have should be has",c:["cats should be cat","she should be her","three should be tree"]},
{d:"easy",q:"Spot the mistake:\nJanuary, February, March, April, May, July",h:"Check all the months.",a:"june is missing",c:["march is missing","april is missing","july is missing"]},
{d:"easy",q:"Which sentence has a mistake?\nA. The cat sat on the mat.\nB. She go to school every day.\nC. I am happy.",h:"Look at the verb agreement.",a:"B",c:["a","c","none of them"]},
{d:"easy",q:"Spot the error:\n2, 4, 6, 8, 10, 12, 15, 16",h:"Even numbers increase by 2 each time.",a:"15 should be 14"},
{d:"easy",q:"Spot the mistake:\nA, B, C, D, E, F, H, I",h:"Check the alphabet carefully.",a:"G is missing",c:["d is missing","f is missing","h is missing"]},
{d:"easy",q:"What is wrong: The earth revolve around the sun.",h:"Subject-verb agreement with a singular subject.",a:"revolve should be revolves",c:["earth should be Earth","around should be round","sun should be Sun"]},
{d:"medium",q:"Find the deliberate mistake:\n2, 4, 8, 16, 36, 64",h:"Each number should double.",a:"36 should be 32"},
{d:"medium",q:"Which is wrong?\nWater boils at 100C.\nIce melts at 0C.\nSun rises in East.\nMoon is a planet.",h:"The moon is NOT a planet.",a:"moon is not a planet",c:["water boils at a different temp","ice melts at a different temp","sun rises in the west"]},
{d:"medium",q:"Find the error: There our three mistakes in this sentance.",h:"There are actually 3 errors.",a:"our should be are sentance should be sentence",c:["there should be their","three should be tree","mistakes should be mistake"]},
{d:"medium",q:"What is wrong: A triangle has 4 sides.",h:"Basic geometry.",a:"a triangle has 3 sides not 4",c:["a triangle has 5 sides not 4","a square has 3 sides not 4","a triangle has no sides"]},
{d:"hard",q:"Spot the mistake:\n6x8=48\n7x8=54\n8x8=64\n9x8=72",h:"Check each multiplication.",a:"7x8 should be 56 not 54"},
{d:"hard",q:"What is wrong with a triangle of sides 3, 4, and 8?",h:"Triangle inequality: sum of two sides must exceed third.",a:"not a valid triangle",c:["it's a right triangle","it's an equilateral triangle","it's a scalene triangle"]},
{d:"hard",q:"Find the mistake: All prime numbers are odd. Therefore 2 is not prime.",h:"2 is the only even prime number.",a:"2 is prime"},
{d:"hard",q:"Spot the mistake:\n5! = 120\n4! = 24\n3! = 6\n2! = 1",h:"Check factorial of 2.",a:"2! should be 2 not 1"}
]},
{t:"English",s:"english-word-riddles",p:[
{d:"easy",q:"Which word in the dictionary is always spelled incorrectly?",h:"Read the question very literally.",a:"incorrectly",c:["correctly","wrongly","misspelled"]},
{d:"easy",q:"What 5-letter word becomes shorter when you add 2 letters?",h:"Think of the word meaning not long.",a:"short",c:["small","tiny","brief"]},
{d:"easy",q:"What starts with E, ends with E, but only has one letter?",h:"It carries letters.",a:"envelope",c:["alphabet","dictionary","postcard"]},
{d:"easy",q:"Find the hidden animal in: I visited my friend in SPARTA.",h:"Look inside the word SPARTA.",a:"rat",c:["cat","bat","ant"]},
{d:"easy",q:"What word has three consecutive double letters?",h:"Think about keeping books.",a:"bookkeeper",c:["accountant","librarian","typewriter"]},
{d:"easy",q:"What is a word that reads the same forwards and backwards?",h:"These are called palindromes.",a:"racecar",c:["rowboat","kayak","canoe"]},
{d:"easy",q:"What comes once in a minute, twice in a moment, but never in a thousand years?",h:"Think about the letter not the concept.",a:"letter m",c:["letter e","letter s","letter t"]},
{d:"easy",q:"Rearrange SILENT to make another common English word.",h:"It uses the same 6 letters.",a:"listen",c:["silent","enlist","tinsel"]},
{d:"medium",q:"What 8-letter word contains only one vowel?",h:"Think about building material.",a:"strength",c:["length","width","depth"]},
{d:"medium",q:"Which word contains all 5 vowels in order: a, e, i, o, u?",h:"A word meaning moderate in habits.",a:"abstemious",c:["facetious","education","auditorium"]},
{d:"medium",q:"What is the longest common English word typed using only the top keyboard row?",h:"QWERTY row: Q W E R T Y U I O P.",a:"typewriter",c:["keyboard","monitor","printer"]},
{d:"medium",q:"What 7-letter word has hundreds of letters in it?",h:"Think about what holds many letters.",a:"mailbox or postbox",c:["envelope","postcard","stamp album"]},
{d:"hard",q:"What is the next letter: O, T, T, F, F, S, S, E, __?",h:"First letters of numbers: one, two, three ...",a:"n",c:["m","t","e"]},
{d:"hard",q:"What English word can have 4 of its 5 letters removed and still sound the same?",h:"Think about the word queue.",a:"queue",c:["quay","cue","clue"]},
{d:"hard",q:"What word contains the letters of CINEMA in order but not consecutively?",h:"C-I-N-E-M-A spread through a longer word.",a:"ceremonial",c:["commercial","memorial","centennial"]},
{d:"hard",q:"What is the only word in English that ends in -mt?",h:"Think about something that was not allowed to happen.",a:"dreamt",c:["dreamed","learnt","dreampt"]}
]},
{t:"Quick",s:"quick-puzzles-brain-teasers-and-riddles",p:[
{d:"easy",q:"David's mother has 4 children: April, May, June, and who?",h:"Re-read the question. Who is mentioned first?",a:"david",c:["april","may","june"]},
{d:"easy",q:"What has 13 hearts but no other organs?",h:"You use it to play card games.",a:"deck of cards",c:["calendar","chess set","dice set"]},
{d:"easy",q:"If you throw a red stone into the blue sea, what does it become?",h:"Think about what happens physically.",a:"wet",c:["heavier","invisible","purple"]},
{d:"easy",q:"What can you hold in your right hand but not in your left?",h:"Think about which hand is which.",a:"your left hand",c:["your right hand","your other hand","both hands"]},
{d:"easy",q:"What goes up when rain comes down?",h:"Think about what you use in the rain.",a:"umbrella",c:["raincoat","boots","hat"]},
{d:"easy",q:"I have a tail and a head but no body. What am I?",h:"You flip me to make a decision.",a:"coin",c:["dice","button","key"]},
{d:"easy",q:"How many seconds are in a year?",h:"Think literally about the word second.",a:"12 the 2nd of each month"},
{d:"easy",q:"A rooster lays an egg at the very top of a slanted roof. Which side does it roll off?",h:"Can a rooster lay eggs?",a:"roosters dont lay eggs",c:["it rolls left","it rolls right","it stays put"]},
{d:"medium",q:"A man drives from A to B at 60 km/h and returns at 40 km/h. What is his average speed?",h:"Do not just average the speeds. Use total distance over total time.",a:"48 km/h"},
{d:"medium",q:"A snail is at the bottom of a 10m well. Each day it climbs 3m but slides back 2m at night. How many days to escape?",h:"On the last day it reaches the top before sliding.",a:"8 days"},
{d:"medium",q:"100 people in a room. 99 percent have blue eyes. How many must leave so 98 percent have blue eyes?",h:"This is a tricky percentage puzzle.",a:"50"},
{d:"medium",q:"If a doctor gives you 3 pills and tells you to take one every 30 minutes, how long until they are all gone?",h:"Count carefully from when you take the first.",a:"1 hour"},
{d:"hard",q:"You have a candle, a match, and a gas lamp. Which do you light first?",h:"You need one thing before you can light anything.",a:"the match",c:["the candle","the gas lamp","all at once"]},
{d:"hard",q:"If 5 cats catch 5 mice in 5 minutes, how many cats catch 100 mice in 100 minutes?",h:"Work out the rate per cat.",a:"5"},
{d:"hard",q:"What is the next number: 1, 11, 21, 1211, 111221, __?",h:"Read each number aloud to describe the previous one.",a:"312211"},
{d:"hard",q:"A clock shows 3:15. What is the exact angle between the hour and minute hands?",h:"The hour hand moves too. It is not at exactly 3.",a:"7.5 degrees"}
]},
{t:"Kids",s:"easy-puzzles",p:[
{d:"easy",q:"What has a face and two hands but no arms or legs?",h:"You look at it to know the time.",a:"clock",c:["watch","calendar","mirror"]},
{d:"easy",q:"What is black when you buy it, red when you use it, grey when you throw it away?",h:"You use it to write on a board.",a:"charcoal",c:["chalk","crayon","pencil lead"]},
{d:"easy",q:"What animal has a trunk but never packs for a holiday?",h:"The largest land animal.",a:"elephant",c:["giraffe","rhino","hippo"]},
{d:"easy",q:"What gets bigger the more you take away from it?",h:"Think about digging.",a:"hole",c:["tunnel","pit","gap"]},
{d:"easy",q:"I have a tail and a head but no body. What am I?",h:"You flip me to make a decision.",a:"coin",c:["dice","button","key"]},
{d:"easy",q:"What stays in a corner but travels all over the world?",h:"You put me on an envelope.",a:"stamp",c:["coin","map","photo"]},
{d:"easy",q:"What has 4 legs in the morning and 4 legs all day?",h:"A simple one \u2014 not the Sphinx riddle.",a:"table",c:["chair","stool","bench"]},
{d:"easy",q:"What has a lot of keys but cannot open any door?",h:"You use it to play music.",a:"piano",c:["guitar","keyboard","organ"]},
{d:"medium",q:"How many months have 28 days?",h:"Do not just say one.",a:"all of them",c:["only february","only april","only 4 months"]},
{d:"medium",q:"What goes up when rain comes down?",h:"Think about what you use in the rain.",a:"umbrella",c:["raincoat","boots","hat"]},
{d:"medium",q:"A man has 10 horses and 9 stables. One horse in each stable \u2014 possible?",h:"Re-read: does it say one horse PER stable?",a:"no 10 horses only 9 stables",c:["yes with room to spare","only if two share","no it's impossible either way"]},
{d:"medium",q:"What can you keep after giving it to someone?",h:"Think about something intangible.",a:"your word",c:["your money","your time","your name"]},
{d:"hard",q:"The word CANDY can be spelled using just 2 letters. How?",h:"C and Y \u2014 CandY.",a:"C and Y",c:["c and d","a and y","c and n"]},
{d:"hard",q:"What is the next letter: O, T, T, F, F, S, S, E, __?",h:"First letters of: one, two, three ...",a:"N",c:["m","t","e"]},
{d:"hard",q:"A farmer has 5 haystacks in one field and 4 in another. He combines them. How many haystacks?",h:"What happens when you combine haystacks?",a:"1"},
{d:"hard",q:"What is special about the number 8,549,176,320?",h:"Think about what it contains.",a:"contains all digits 0-9 each once",c:["is a perfect square","is divisible by 9","is a palindrome"]}
]},
{t:"Pyramid",s:"pyramid-maths-puzzles",p:[
{d:"easy",q:"In a number pyramid each block = sum of two blocks below.\nWhat goes on top?\n?\n3  4",h:"Add the two bottom numbers.",a:"7"},
{d:"easy",q:"Fill the pyramid:\n?\n5  6",h:"Add the two bottom blocks.",a:"11"},
{d:"easy",q:"In a pyramid:\n10\n?  3\nWhat is the missing number?",h:"Top = sum of two below.",a:"7"},
{d:"easy",q:"Pyramid: top is 15, one base is 7. What is the other base?",h:"Top = sum of two below.",a:"8"},
{d:"easy",q:"Bottom row of pyramid: 2, 3. What is the top?",h:"Add the two bottom numbers.",a:"5"},
{d:"easy",q:"Bottom row: 1, 4. Top = ?",h:"Add the two bottom numbers.",a:"5"},
{d:"easy",q:"Top = 20. Bottom left = 8. Bottom right = ?",h:"Top = sum of two below.",a:"12"},
{d:"easy",q:"3-row pyramid. Bottom row: 4, 5, 6. Middle row: 9, ?. Top: ?",h:"Each block is the sum of the two blocks below it.",a:"11 and 20"},
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
{d:"easy",q:"What 3D shape has a circular base and comes to a point?",h:"Think about a party hat.",a:"cone",c:["cylinder","pyramid","sphere"]},
{d:"easy",q:"How many vertices does a cube have?",h:"Count the corners.",a:"8"},
{d:"easy",q:"A shape has 4 equal sides and 4 right angles. What is it?",h:"All sides equal, all angles right angles.",a:"square",c:["rectangle","rhombus","trapezoid"]},
{d:"easy",q:"How many faces does a triangular prism have?",h:"Two triangles and three rectangles.",a:"5"},
{d:"easy",q:"What is the shape of a football panel?",h:"Two types of polygon are used.",a:"pentagon and hexagon",c:["triangle and square","hexagon and octagon","circle and square"]},
{d:"medium",q:"A cube painted red on all faces is cut into 27 small cubes. How many have exactly 2 red faces?",h:"Think about edge cubes not corner cubes.",a:"12"},
{d:"medium",q:"A cylinder has how many faces, edges, and vertices?",h:"Think carefully about curved surfaces.",a:"3 faces 2 edges 0 vertices"},
{d:"medium",q:"If a cube is cut into 64 small cubes, how many have NO painted faces?",h:"Think about the inner cubes.",a:"8"},
{d:"medium",q:"How many small cubes have exactly 3 painted faces when a cube is cut into 27?",h:"Think about corner cubes.",a:"8"},
{d:"hard",q:"How many different nets does a cube have?",h:"A net is an unfolded version.",a:"11"},
{d:"hard",q:"A solid has 6 faces, 12 edges, and 8 vertices. What solid is this?",h:"Use Euler formula: F + V - E = 2.",a:"cube",c:["cuboid","prism","pyramid"]},
{d:"hard",q:"How many cubes in a 3x3x3 cube have at least one face painted on the outside?",h:"Total cubes minus inner cubes.",a:"26"},
{d:"hard",q:"A cube has its corner cut off. How many faces does the new solid have?",h:"The cut adds a new triangular face.",a:"7"}
]},
{t:"Interview",s:"interview-questions",p:[
{d:"easy",q:"Why are manholes round and not square?",h:"Think about what happens if you drop a square cover.",a:"cannot fall in",c:["easier to manufacture","cheaper to make","roll more easily"]},
{d:"easy",q:"How many golf balls can fit in a school bus?",h:"Estimate volume of both then divide.",a:"about 500000",c:["about 5000","about 50000","about 5 million"]},
{d:"easy",q:"How do you weigh an elephant without a scale?",h:"Think about water displacement.",a:"use a boat and mark the waterline",c:["guess based on its size","use a giant scale","measure its footprints"]},
{d:"easy",q:"A 4x4x4 cube painted outside is cut into 1x1x1 cubes. How many have no paint?",h:"Think about the inner cubes.",a:"8"},
{d:"easy",q:"You have 3L and 5L jugs. How do you measure exactly 4L?",h:"Fill 5, pour into 3, dump, repeat.",a:"fill 5 pour into 3 leaving 2 fill 3 from 5 gives 4",c:["fill 3 twice","fill 5 and pour out 1","pour both together"]},
{d:"easy",q:"How many times do the hands of a clock overlap in 12 hours?",h:"They overlap approximately every 65.45 minutes.",a:"11"},
{d:"easy",q:"How many windows are in your city?",h:"Estimate population then multiply by windows per person.",a:"estimate based on population",c:["count every window by hand","ask the city council","impossible to know"]},
{d:"easy",q:"How would you move Mount Fuji?",h:"Think creatively \u2014 this is a judgement test.",a:"move the reference point or tunnel through it",c:["physically push it","melt it down","ship it piece by piece"]},
{d:"medium",q:"8 identical balls, one slightly heavier. Using a balance only twice, find the heavy one.",h:"Divide into groups of 3, 3, and 2.",a:"two weighings",c:["three weighings","one weighing","four weighings"]},
{d:"medium",q:"How many piano tuners are in a city of 1 million people?",h:"Estimate pianos per person and tunings per year.",a:"about 200",c:["about 20","about 2000","about 20000"]},
{d:"medium",q:"3 switches control 3 bulbs in a windowless room. Enter only once. How identify each?",h:"Think about heat from a bulb.",a:"leave one on wait turn off turn another on then enter check heat",c:["flip all switches at once","enter and guess randomly","turn them on one at a time while inside"]},
{d:"medium",q:"You have 100 lockers all open. You toggle every 2nd, then every 3rd, etc. Which are open at the end?",h:"Only lockers with an odd number of factors stay open.",a:"perfect square numbered lockers",c:["even numbered lockers","odd numbered lockers","prime numbered lockers"]},
{d:"hard",q:"How many times do the hands of a clock overlap in 24 hours?",h:"They overlap approximately every 65.45 minutes.",a:"22"},
{d:"hard",q:"5 pirates divide 100 coins by majority vote. What does the most senior propose?",h:"Work backwards from 2 pirates.",a:"96 0 1 0 3"},
{d:"hard",q:"If 5 cats catch 5 mice in 5 minutes, how many cats catch 100 mice in 100 minutes?",h:"Work out the rate per cat.",a:"5"},
{d:"hard",q:"You are shrunk to penny-height and put in a blender. What do you do?",h:"Think about the physics and your tiny weight.",a:"jump out as blades spin slowly at first",c:["hold onto the blade","hide under the base","stay perfectly still"]}
]},
{t:"Water Tank",s:"water-tank-puzzles",p:[
{d:"easy",q:"A tap fills a tank in 6 hours. How long will it take to fill half the tank?",h:"Half the tank takes half the time.",a:"3 hours"},
{d:"easy",q:"A tank holds 100 litres. If 20 litres are removed, how many litres remain?",h:"Subtract 20 from 100.",a:"80 litres"},
{d:"easy",q:"A tap fills water at 10 litres per minute. How long will it take to fill 50 litres?",h:"Divide the total by the rate.",a:"5 minutes"},
{d:"easy",q:"One tap fills a tank in 4 hours. If 2 identical taps are opened together, how long will they take?",h:"Two taps work twice as fast.",a:"2 hours"},
{d:"easy",q:"A tank is already half full. Filling the other half takes 3 hours. How long would it take to fill the tank from empty at the same rate?",h:"Double the time for the other half.",a:"6 hours"},
{d:"easy",q:"A bucket holds 5 litres. How many buckets are needed to fill a 40-litre tank?",h:"Divide 40 by 5.",a:"8"},
{d:"easy",q:"A full tank drains completely through an outlet in 5 hours. How long will it take to drain just half the tank?",h:"Half the tank takes half the time.",a:"2.5 hours"},
{d:"easy",q:"A tap fills a tank in 12 hours. What fraction of the tank does it fill in 1 hour?",h:"One hour out of the total time needed.",a:"1/12"},
{d:"medium",q:"Pipe A fills a tank in 6 hours, Pipe B fills it in 3 hours. If both are opened together, how long will it take to fill the tank?",h:"Add their hourly rates: 1/6 + 1/3.",a:"2 hours"},
{d:"medium",q:"A tank is filled by pipe A in 4 hours and emptied by pipe B in 6 hours. If both pipes are open together, how long will it take to fill the tank?",h:"Net rate = 1/4 minus 1/6.",a:"12 hours"},
{d:"medium",q:"Three taps fill a tank in 4, 6, and 12 hours respectively. Working together, how long will they take?",h:"Add all three hourly rates.",a:"2 hours"},
{d:"medium",q:"Tap A alone fills a tank in 10 hours, tap B alone in 15 hours. Working together, how long will they take?",h:"Add their hourly rates: 1/10 + 1/15.",a:"6 hours"},
{d:"hard",q:"Pipe A fills a tank in 6 hours. Pipe B can empty a full tank in 9 hours. If both are opened together on an empty tank, how long until it is full?",h:"Net rate = 1/6 minus 1/9.",a:"18 hours"},
{d:"hard",q:"Pipes A and B fill a tank in 12 and 15 hours. Pipe C empties it in 20 hours. If all three are opened together, how long will it take to fill the tank?",h:"Add the fill rates and subtract the drain rate.",a:"10 hours"},
{d:"hard",q:"A tank can be filled by pipe A in 10 hours and drained by pipe B in 15 hours. If both are opened together on an empty tank, how long until it is full?",h:"Net rate = 1/10 minus 1/15.",a:"30 hours"},
{d:"hard",q:"Pipe A alone fills a tank in 8 hours. Because of a leak at the bottom, it actually takes 2 hours longer. How long would the leak alone take to empty a full tank?",h:"Find the combined rate with the leak, then subtract from pipe A's rate.",a:"40 hours"}
]},
{t:"Number Logic",s:"number-logic-puzzles",p:[
{d:"easy",q:"The sum of two numbers is 15 and their difference is 5. What are the two numbers?",h:"Add the sum and difference, then halve for the larger number.",a:"10 and 5"},
{d:"easy",q:"A number decreased by 5 equals 20. What is the number?",h:"Add 5 to 20.",a:"25"},
{d:"easy",q:"Twice a number is 18. What is the number?",h:"Divide 18 by 2.",a:"9"},
{d:"easy",q:"The sum of a number and 7 is 20. What is the number?",h:"Subtract 7 from 20.",a:"13"},
{d:"easy",q:"A number is 3 more than double 6. What is the number?",h:"Double 6 first, then add 3.",a:"15"},
{d:"easy",q:"If you add 10 to a number and get 30, what was the number?",h:"Subtract 10 from 30.",a:"20"},
{d:"easy",q:"A number multiplied by itself gives 49. What is the number?",h:"Think about square roots.",a:"7"},
{d:"easy",q:"Half of a number is 12. What is the number?",h:"Multiply 12 by 2.",a:"24"},
{d:"medium",q:"Sam is twice as old as his son. In 20 years, Sam will be 1.5 times as old as his son. How old is Sam now?",h:"Let the son's age be x, Sam's age be 2x, then set up the equation for 20 years later.",a:"40"},
{d:"medium",q:"The sum of three consecutive numbers is 72. What are the numbers?",h:"Divide 72 by 3 to find the middle number.",a:"23 24 25"},
{d:"medium",q:"A number is such that adding 9 to it gives the same result as doubling it. What is the number?",h:"Set up: x + 9 = 2x.",a:"9"},
{d:"medium",q:"The digits of a two-digit number add up to 9. The number itself is 9 times its units digit. What is the number?",h:"Try two-digit numbers whose digits sum to 9 and check the condition.",a:"45"},
{d:"hard",q:"The sum of the ages of a father and son is 60. Six years ago, the father was 5 times as old as the son. Find their current ages.",h:"Set up two equations using their current ages and their ages 6 years ago.",a:"father 46 son 14",c:["father 40 son 20","father 45 son 15","father 50 son 10"]},
{d:"hard",q:"A two-digit number is 4 times the sum of its digits. If 27 is added to the number, its digits reverse. Find the number.",h:"Let the number be 10t+u, then use both conditions to solve for t and u.",a:"36"},
{d:"hard",q:"Two numbers are in the ratio 3:5. If 10 is subtracted from each, the new ratio becomes 1:3. Find the numbers.",h:"Let the numbers be 3x and 5x, then solve using the new ratio.",a:"15 and 25"},
{d:"hard",q:"A clock shows 4:20. What is the angle between the hour and minute hands?",h:"The hour hand moves too \u2014 it is not exactly on the 4.",a:"10 degrees"}
]},
{t:"Missing Vowels",s:"missing-vowels-quiz-puzzles",p:[
{d:"easy",q:"Fill in the vowels to find the word: PPL (a common fruit)",h:"Think of a fruit that's often red or green.",a:"apple",c:["apples","apply","ample"]},
{d:"easy",q:"Fill in the vowels: BLL (a round toy used in many sports)",h:"You throw, kick or bounce this.",a:"ball",c:["bell","bull","bowl"]},
{d:"easy",q:"Fill in the vowels: HRT (it beats in your chest)",h:"Keeps you alive, pumps blood.",a:"heart",c:["heard","hoard","herd"]},
{d:"easy",q:"Fill in the vowels: DG (man's best friend)",h:"A common pet that barks.",a:"dog",c:["dig","dug","dag"]},
{d:"easy",q:"Fill in the vowels: CT (says meow)",h:"A common household pet.",a:"cat",c:["cot","cut","cit"]},
{d:"easy",q:"Fill in the vowels: HS (where you live)",h:"A building with rooms.",a:"house",c:["horse","hose","hoose"]},
{d:"easy",q:"Fill in the vowels: SN (shines in the sky during the day)",h:"You need sunglasses to look at it.",a:"sun",c:["son","sin","sane"]},
{d:"easy",q:"Fill in the vowels: MN (visible at night in the sky)",h:"It has phases like full and crescent.",a:"moon",c:["main","mine","moan"]},
{d:"medium",q:"Fill in the vowels: CMPTR (you're likely using one to read this)",h:"An electronic device for processing data.",a:"computer",c:["commuter","computed","compute"]},
{d:"medium",q:"Fill in the vowels: LPHNT (has a long trunk)",h:"The largest land animal.",a:"elephant",c:["elegant","element","eloquent"]},
{d:"medium",q:"Fill in the vowels: BRTHDY (you celebrate it every year)",h:"The anniversary of the day you were born.",a:"birthday",c:["birthdays","birthdate","birthright"]},
{d:"medium",q:"Fill in the vowels: MNTN (a tall natural landform)",h:"Higher than a hill.",a:"mountain",c:["mounting","fountain","mountains"]},
{d:"hard",q:"Fill in the vowels: PZZL (you are solving one right now)",h:"A game or problem designed to test knowledge.",a:"puzzle",c:["puzzled","puzzler","muzzle"]},
{d:"hard",q:"Fill in the vowels: DCTNRY (contains definitions of words)",h:"You look up word meanings here.",a:"dictionary",c:["directory","dictation","dictionaries"]},
{d:"hard",q:"Fill in the vowels: NVRSTY (a place of higher education)",h:"Students earn degrees here.",a:"university",c:["universe","universal","diversity"]},
{d:"hard",q:"Fill in the vowels: RFRGRTR (keeps your food cold)",h:"A large kitchen appliance.",a:"refrigerator",c:["referigator","refrigerater","refrigator"]}
]},
{t:"Hidden Animals",s:"hidden-animal-puzzles",p:[
{d:"easy",q:"Find the hidden animal: The store sells CATALOGS of furniture.",h:"Look at the very start of the word catalog.",a:"cat",c:["dog","rat","cow"]},
{d:"easy",q:"Find the hidden animal: That belief is pure DOGMA with no evidence.",h:"Look at the start of the word dogma.",a:"dog",c:["cat","hen","fox"]},
{d:"easy",q:"Find the hidden animal: She wore a COWL over her head to stay warm.",h:"A cowl is a hooded cloak \u2014 look at its first three letters.",a:"cow",c:["cat","dog","pig"]},
{d:"easy",q:"Find the hidden animal: She wore a PIGMENT-stained apron while painting.",h:"Look at the start of the word pigment.",a:"pig",c:["cow","hen","bat"]},
{d:"easy",q:"Find the hidden animal: This is a valuable ANTIQUE vase from the 1800s.",h:"Look at the start of the word antique.",a:"ant",c:["bat","owl","cod"]},
{d:"easy",q:"Find the hidden animal: HENCE, we must leave right now.",h:"Look at the start of the word hence.",a:"hen",c:["hog","cow","fox"]},
{d:"easy",q:"Find the hidden animal: Please replace the BATTERY in the remote.",h:"Look at the start of the word battery.",a:"bat",c:["cat","rat","ant"]},
{d:"easy",q:"Find the hidden animal: They danced the FOXTROT beautifully all night.",h:"The foxtrot is a classic ballroom dance \u2014 look at its start.",a:"fox",c:["dog","cow","hen"]},
{d:"medium",q:"Find the hidden animal: He grew a thick BEARD over the winter.",h:"Look right after the first letter of beard.",a:"bear",c:["boar","bull","deer"]},
{d:"medium",q:"Find the hidden animal: I love HORSERADISH sauce with my roast beef.",h:"Look at the first five letters of horseradish.",a:"horse",c:["mule","goat","deer"]},
{d:"medium",q:"Find the hidden animal: The senate will RATIFY the new treaty tomorrow.",h:"Look at the start of the word ratify.",a:"rat",c:["cat","bat","owl"]},
{d:"medium",q:"Find the hidden animal: The cat kept PROWLING around the garden at night.",h:"Look in the middle of the word prowling.",a:"owl",c:["crow","hawk","dove"]},
{d:"hard",q:"Find the hidden animal: We played SCRABBLE all evening with the family.",h:"Look right after the first two letters of scrabble.",a:"crab",c:["clam","crow","carp"]},
{d:"hard",q:"Find the hidden animal: She bought beautiful new JEWELRY for the party.",h:"Look right after the first letter of jewelry \u2014 it's a female sheep.",a:"ewe",c:["cow","ram","doe"]},
{d:"hard",q:"Find the hidden animal: I love eating fresh GRAPES in the summer.",h:"Look at the last three letters of grape.",a:"ape",c:["cat","fox","owl"]},
{d:"hard",q:"Find the hidden animal: Please DECODE this secret message for me.",h:"Look in the middle of the word decode \u2014 it's a type of fish.",a:"cod",c:["carp","eel","koi"]}
]},
{t:"Emoji",s:"emoji-puzzles",p:[
{d:"easy",q:"What phrase do these emoji spell out?\n\ud83c\udf27\ufe0f\u2614",h:"Think about weather and what you'd carry outside.",a:"rainy day",c:["sunny day","cloudy sky","stormy night"]},
{d:"easy",q:"What phrase do these emoji spell out?\n\ud83d\udd25\ud83d\ude92",h:"A vehicle that puts out fires.",a:"fire truck",c:["fire drill","fire alarm","forest fire"]},
{d:"easy",q:"What phrase do these emoji spell out?\n\ud83d\udc1d\ud83c\udf6f",h:"An insect that makes something sweet.",a:"honey bee",c:["bumble bee","worker bee","honeycomb"]},
{d:"easy",q:"What phrase do these emoji spell out?\n\u2600\ufe0f\ud83c\udf3b",h:"A flower that turns to follow the sun.",a:"sunflower",c:["daisy chain","sunrise","summer garden"]},
{d:"easy",q:"What phrase do these emoji spell out?\n\ud83c\udf82\ud83c\udf89",h:"A yearly celebration with cake.",a:"birthday party",c:["surprise party","dinner party","graduation party"]},
{d:"easy",q:"What phrase do these emoji spell out?\n\ud83d\udcda\ud83c\udf92",h:"Where you go on weekday mornings with books.",a:"school",c:["library","classroom","university"]},
{d:"easy",q:"What phrase do these emoji spell out?\n\ud83c\udf19\u2b50",h:"What you see in the sky after sunset.",a:"night sky",c:["shooting star","starry night","moonlight"]},
{d:"easy",q:"What phrase do these emoji spell out?\n\ud83c\udf4e\ud83d\udc68\u200d\ud83c\udfeb",h:"A classic gift for someone who teaches.",a:"teacher",c:["professor","classmate","principal"]},
{d:"medium",q:"What phrase do these emoji spell out?\n\u23f0\ud83d\udc26",h:"Think of a saying about catching a worm.",a:"early bird",c:["night owl","late bloomer","busy bee"]},
{d:"medium",q:"What phrase do these emoji spell out?\n\ud83e\uddca\ud83c\udfd4\ufe0f",h:"Mostly hidden below the ocean surface.",a:"iceberg",c:["glacier","snowball","ice cube"]},
{d:"medium",q:"What phrase do these emoji spell out?\n\ud83e\udd8b\ud83c\udf38",h:"A place full of flowers and flying insects.",a:"butterfly garden",c:["flower field","rose garden","spring meadow"]},
{d:"medium",q:"What phrase do these emoji spell out?\n\ud83d\udc22\ud83d\udc07",h:"A classic fable about a slow-and-steady race.",a:"tortoise and the hare",c:["fox and the grapes","boy who cried wolf","ant and the grasshopper"]},
{d:"hard",q:"What phrase do these emoji spell out?\n\ud83c\udfa3\ud83d\udc1f\ud83c\udf73",h:"Catching, then cooking, a meal from the water.",a:"fish fry",c:["seafood boil","fish market","catch of the day"]},
{d:"hard",q:"What phrase do these emoji spell out?\n\ud83c\udf2a\ufe0f\ud83c\udfe0\ud83d\udca8",h:"A severe, rotating windstorm.",a:"tornado",c:["hurricane","earthquake","thunderstorm"]},
{d:"hard",q:"What phrase do these emoji spell out?\n\ud83e\udde0\ud83d\udca1",h:"A sudden clever thought.",a:"bright idea",c:["deep thought","genius plan","light bulb moment"]},
{d:"hard",q:"What phrase do these emoji spell out?\n\ud83d\udd70\ufe0f\u23ea",h:"A phrase about reversing the clock.",a:"turn back time",c:["stop the clock","fast forward","rewind the past"]}
]},
{t:"Reasoning",s:"logical-reasoning-puzzles",p:[
{d:"easy",q:"If all cats are animals, and Tom is a cat, what can we conclude about Tom?",h:"Apply the general rule directly to Tom.",a:"tom is an animal",c:["tom is a dog","we cannot tell","tom is not an animal"]},
{d:"easy",q:"If it rains, the ground gets wet. The ground is wet. Does that prove it rained?",h:"Think about other ways the ground could get wet.",a:"no",c:["yes","maybe","only if it thundered too"]},
{d:"easy",q:"Every triangle has three sides. Shape X has three sides. Is shape X definitely a triangle?",h:"In this simple case, three straight sides is exactly the definition of a triangle.",a:"yes",c:["no","maybe","only if it's equilateral"]},
{d:"easy",q:"A is taller than B. B is taller than C. Who is the shortest of the three?",h:"Line them up from tallest to shortest.",a:"c",c:["a","b","cannot be determined"]},
{d:"easy",q:"If today is Wednesday, what day was it two days ago?",h:"Count backwards from Wednesday.",a:"monday",c:["tuesday","sunday","thursday"]},
{d:"medium",q:"All roses are flowers. Some flowers fade quickly. Can we conclude that all roses fade quickly?",h:"The second statement only talks about 'some' flowers, not all of them.",a:"no",c:["yes","maybe","only red roses"]},
{d:"medium",q:"Five friends sit in a row. Amy is to the left of Ben, who is to the left of Cara. Who is sitting in the middle?",h:"List the order from left to right: Amy, Ben, Cara.",a:"ben",c:["amy","cara","cannot be determined"]},
{d:"hard",q:"In a race, Priya finished before Raj but after Sam. Who finished first?",h:"Order them out: Sam, then Priya, then Raj.",a:"sam",c:["priya","raj","cannot be determined"]},
{d:"hard",q:"All Zibs are Zabs. No Zabs are Zops. Are any Zibs also Zops?",h:"If Zabs can never be Zops, and Zibs are always Zabs, follow the chain through.",a:"no",c:["yes","maybe","only some zibs"]},
{d:"easy",q:"If all birds can fly, and a sparrow is a bird, can a sparrow fly (based on the statement alone)?",h:"Just follow the rule given, even if it's not always true in real life.",a:"yes",c:["no","maybe","only some sparrows"]},
{d:"easy",q:"A is older than B. C is older than A. Who is the oldest of the three?",h:"Line them up from oldest to youngest.",a:"c",c:["a","b","cannot be determined"]},
{d:"easy",q:"If Monday comes before Tuesday, and Tuesday comes before Wednesday, does Monday come before Wednesday?",h:"This is a simple chain of order.",a:"yes",c:["no","maybe","only in some weeks"]},
{d:"medium",q:"No fish can walk. A shark is a fish. Can a shark walk?",h:"Apply the rule about fish directly to the shark.",a:"no",c:["yes","maybe","only baby sharks"]},
{d:"medium",q:"Three boxes are red, blue and green. The red box is heavier than the blue box. The green box is lighter than the blue box. Which box is the lightest?",h:"Order them: red heaviest, blue middle, green lightest.",a:"green",c:["red","blue","cannot be determined"]},
{d:"hard",q:"If some Toves are Borogoves, and all Borogoves are Slithy, can we be certain all Toves are Slithy?",h:"'Some' Toves being Borogoves doesn't cover every Tove.",a:"no",c:["yes","maybe","only slithy toves"]},
{d:"hard",q:"Four runners finish a race. Priya beats Sam. Raj beats Priya. Sam beats Tia. Who finishes last?",h:"Work out the order: Raj, Priya, Sam, Tia.",a:"tia",c:["sam","priya","raj"]}
]},
{t:"Triangle",s:"triangle-maths-logic-puzzles",p:[
{d:"easy",q:"How many sides does a triangle have?",h:"It's right there in the name.",a:"3"},
{d:"easy",q:"How many angles does a triangle have?",h:"One angle for each corner.",a:"3"},
{d:"easy",q:"What is the sum of the interior angles of any triangle, in degrees?",h:"This is always true no matter the triangle's shape.",a:"180"},
{d:"easy",q:"An equilateral triangle has how many equal sides?",h:"'Equilateral' means all sides match.",a:"3"},
{d:"easy",q:"A right triangle has one angle equal to how many degrees?",h:"That's the angle that gives it its name.",a:"90"},
{d:"medium",q:"A large triangle is divided into 4 smaller equal triangles. How many small triangles are there in total?",h:"Picture one triangle split evenly into 4 pieces.",a:"4"},
{d:"medium",q:"A triangle has sides of length 3, 4 and 5. What type of triangle is it, based on its angles?",h:"This is the most famous set of triangle side lengths in maths.",a:"right triangle",c:["scalene triangle","obtuse triangle","equilateral triangle"]},
{d:"hard",q:"A triangle's two angles measure 50 degrees and 60 degrees. What is the third angle, in degrees?",h:"All three angles must add up to 180.",a:"70"},
{d:"hard",q:"How many triangles of all sizes can you count in a large triangle divided into 9 smaller equal triangles (3 rows)?",h:"Count every size: the 9 smallest, then the medium ones, then the whole triangle.",a:"13"},
{d:"easy",q:"In an isosceles triangle, how many sides are equal in length?",h:"'Isosceles' means two sides match.",a:"2"},
{d:"easy",q:"A scalene triangle has how many equal sides?",h:"'Scalene' means every side is a different length.",a:"0"},
{d:"easy",q:"If two angles of a triangle are each 45 degrees, what is the third angle, in degrees?",h:"All three angles add up to 180.",a:"90"},
{d:"medium",q:"An equilateral triangle has three equal angles. How many degrees is each angle?",h:"Split 180 degrees evenly three ways.",a:"60"},
{d:"medium",q:"A triangle has a base of 10 and a height of 6. What is its area?",h:"Area of a triangle = half of base times height.",a:"30"},
{d:"hard",q:"A right triangle has legs of length 6 and 8. What is the length of its hypotenuse?",h:"Use the Pythagorean theorem: 6 squared plus 8 squared.",a:"10"},
{d:"hard",q:"How many small triangles, of the smallest size only, make up a large triangle divided into 9 equal smaller triangles (3 rows)?",h:"This is simply the count of the smallest pieces, not every size.",a:"9"}
]},
{t:"Circle",s:"circle-reasoning-puzzles",p:[
{d:"easy",q:"How many degrees are there in a full circle?",h:"This is the same for every circle, no matter the size.",a:"360"},
{d:"easy",q:"How many straight sides does a circle have?",h:"A circle is made entirely of one curve.",a:"0"},
{d:"easy",q:"What do you call the distance from the centre of a circle to its edge?",h:"It's half of the diameter.",a:"radius",c:["diameter","circumference","tangent"]},
{d:"easy",q:"What do you call the distance straight across a circle, passing through its centre?",h:"It's twice the radius.",a:"diameter",c:["radius","circumference","chord"]},
{d:"easy",q:"If the radius of a circle is 5, what is its diameter?",h:"Diameter is always double the radius.",a:"10"},
{d:"medium",q:"A circle is divided into 8 equal slices, like a pizza. How many degrees is each slice?",h:"Divide the full circle's degrees by the number of slices.",a:"45"},
{d:"medium",q:"What do you call a straight line that touches a circle at exactly one point?",h:"It grazes the circle without crossing into it.",a:"tangent",c:["radius","chord","secant"]},
{d:"hard",q:"If the diameter of a circle is 14, approximately what is its circumference (using pi = 22/7)?",h:"Circumference = pi times the diameter.",a:"44"},
{d:"hard",q:"Two circles overlap. At most how many points can they intersect at?",h:"Picture two overlapping rings \u2014 count where their edges cross.",a:"2"},
{d:"easy",q:"What do you call a straight line segment that joins two points on a circle's edge?",h:"If it passes through the centre, it becomes the diameter.",a:"chord",c:["radius","tangent","arc"]},
{d:"easy",q:"What do you call the outer boundary of a circle?",h:"It's the 'perimeter' of a circle, just with a different name.",a:"circumference",c:["diameter","radius","chord"]},
{d:"easy",q:"If a circle's diameter is 20, what is its radius?",h:"Radius is always half the diameter.",a:"10"},
{d:"medium",q:"A circle is divided into 6 equal slices. How many degrees is each slice?",h:"Divide 360 degrees by the number of slices.",a:"60"},
{d:"medium",q:"What do you call a part of a circle's boundary, like a curved section of its edge?",h:"Think of it as a curved slice of the circumference.",a:"arc",c:["chord","tangent","sector"]},
{d:"hard",q:"If the radius of a circle is 7, approximately what is its area (using pi = 22/7)?",h:"Area = pi times radius squared.",a:"154"},
{d:"hard",q:"A circle is inscribed exactly inside a square with a side length of 10. What is the circle's diameter?",h:"The circle touches all four sides, so its diameter equals the square's side.",a:"10"}
]},
{t:"Maths Riddles",s:"maths-riddles",p:[
{d:"easy",q:"I am a number. Double me and add 4, and you get 10. What number am I?",h:"Work backwards from 10: subtract 4, then halve.",a:"3"},
{d:"easy",q:"I am an even number between 10 and 20. My digits add up to 3. What number am I?",h:"Try the even numbers in that range one by one.",a:"12"},
{d:"easy",q:"Half of me is 8. What number am I?",h:"If half of me is 8, double it to find me.",a:"16"},
{d:"easy",q:"I am a number. If you square me, you get 25. What number am I?",h:"Think about which number times itself gives 25.",a:"5"},
{d:"easy",q:"I am the smallest prime number. What number am I?",h:"A prime number has exactly two factors: 1 and itself.",a:"2"},
{d:"medium",q:"I am a number. Add 5 to me, then double the result, and you get 30. What number am I?",h:"Work backwards: halve 30 first, then subtract 5.",a:"10"},
{d:"medium",q:"I am a three-digit number. All my digits are the same, and I am divisible by 3. What is the smallest number I could be?",h:"Try the smallest repeated-digit numbers, starting from 111.",a:"111"},
{d:"hard",q:"I am a number less than 100. I am divisible by both 6 and 9, and I am the largest such number below 100. What number am I?",h:"Find the lowest common multiple of 6 and 9, then find the largest multiple of it under 100.",a:"90"},
{d:"hard",q:"I am a number. If you multiply me by myself and then subtract me, you get 20. What number am I?",h:"Try small whole numbers: does 5 times 5 minus 5 work?",a:"5"},
{d:"easy",q:"I am a number. Triple me and you get 21. What number am I?",h:"Divide 21 by 3.",a:"7"},
{d:"easy",q:"I am a number. Take away 6 and I become 6. What number am I?",h:"Add 6 back to 6.",a:"12"},
{d:"easy",q:"I am the only even prime number. What number am I?",h:"Every other even number can be divided by 2 and something else.",a:"2"},
{d:"medium",q:"I am a number. If you add my digits together, you get 9, and I am a multiple of 9 less than 50. What number am I?",h:"Try multiples of 9 under 50: 9, 18, 27, 36, 45.",a:"45"},
{d:"medium",q:"I am a number. Half of me, plus 3, equals 10. What number am I?",h:"Work backwards: subtract 3 from 10, then double it.",a:"14"},
{d:"hard",q:"I am a two-digit number. I am one more than a multiple of 5, and one less than a multiple of 4. The smallest number I could be is?",h:"Try small two-digit numbers that fit both conditions.",a:"11"},
{d:"hard",q:"I am a number. My square is 12 more than 4 times myself. What number am I?",h:"Try small numbers: does 6 times 6 equal 12 more than 4 times 6?",a:"6"}
]},
{t:"Hidden Letters",s:"hidden-letter-puzzles",p:[
{d:"easy",q:"Find the hidden number: I need to buy a TENT before the trip.",h:"Look at the start of the word TENT.",a:"ten",c:["nine","two","six"]},
{d:"easy",q:"Find the hidden colour: The REDACTED report was confusing to read.",h:"Look at the start of the word REDACTED.",a:"red",c:["blue","green","pink"]},
{d:"easy",q:"Find the hidden colour: I bought a new BLUEPRINT for the house.",h:"Look at the start of the word BLUEPRINT.",a:"blue",c:["red","green","teal"]},
{d:"easy",q:"Find the hidden colour: She wore a TANGERINE dress to the party.",h:"Look at the start of the word TANGERINE.",a:"tan",c:["tangerine orange","orange","gold"]},
{d:"easy",q:"Find the hidden number: SEVENTY students attended the lecture.",h:"Look at the start of the word SEVENTY.",a:"seven",c:["six","eight","two"]},
{d:"medium",q:"Find the hidden body part: The HEARTBREAK hotel was fully booked.",h:"Look at the start of the word HEARTBREAK.",a:"heart",c:["head","hand","hip"]},
{d:"medium",q:"Find the hidden body part: I need to buy a new ARMCHAIR for the lounge.",h:"Look at the start of the word ARMCHAIR.",a:"arm",c:["leg","ear","eye"]},
{d:"hard",q:"Find the hidden body part: The SHINBONE was clearly visible in the X-ray.",h:"Look at the start of the word SHINBONE.",a:"shin",c:["chin","chest","cheek"]},
{d:"hard",q:"Find the hidden body part: The CHEEKY puppy stole a sock from the laundry.",h:"Look at the start of the word CHEEKY.",a:"cheek",c:["chest","chin","cheekbone"]},
{d:"easy",q:"Find the hidden colour: The GREENHOUSE was full of growing vegetables.",h:"Look at the start of the word GREENHOUSE.",a:"green",c:["blue","red","yellow"]},
{d:"easy",q:"Find the hidden number: The store had a SIXTY percent discount today.",h:"Look at the start of the word SIXTY.",a:"six",c:["five","nine","two"]},
{d:"easy",q:"Find the hidden colour: She painted the fence a bright WHITEWASH colour.",h:"Look at the start of the word WHITEWASH.",a:"white",c:["black","grey","cream"]},
{d:"medium",q:"Find the hidden body part: The HIPSTER cafe served excellent coffee.",h:"Look at the start of the word HIPSTER.",a:"hip",c:["leg","rib","toe"]},
{d:"medium",q:"Find the hidden body part: The EARLIEST train leaves at dawn.",h:"Look at the start of the word EARLIEST.",a:"ear",c:["eye","nose","chin"]},
{d:"hard",q:"Find the hidden body part: The company issued a SKINNY new logo design.",h:"Look at the start of the word SKINNY.",a:"skin",c:["shin","spine","scalp"]},
{d:"hard",q:"Find the hidden body part: The HIPPOPOTAMUS wallowed happily in the mud.",h:"Look at the start of the word HIPPOPOTAMUS.",a:"hip",c:["rib","jaw","gum"]}
]},
{t:"Mental Ability",s:"mental-ability-questions-brain-test",p:[
{d:"easy",q:"If A=1, B=2, C=3, what does D equal?",h:"Just keep counting up the alphabet.",a:"4"},
{d:"easy",q:"What comes next in the pattern: Monday, Wednesday, Friday, __?",h:"Each day skips one day ahead.",a:"sunday",c:["saturday","thursday","tuesday"]},
{d:"easy",q:"Which number is the odd one out: 2, 4, 6, 7, 8?",h:"Four of these numbers share something the fifth doesn't.",a:"7"},
{d:"easy",q:"If a dozen equals 12, how many is half a dozen?",h:"Split 12 into two equal halves.",a:"6"},
{d:"easy",q:"What is the next letter in the sequence: A, C, E, G, __?",h:"Each letter skips one letter ahead.",a:"i",c:["h","j","k"]},
{d:"medium",q:"A clock shows 3:00 exactly. What angle, in degrees, do the hour and minute hands make?",h:"At 3:00 the hands form a perfect right angle.",a:"90"},
{d:"medium",q:"If Monday is the 1st day of the week, which day is the 5th day?",h:"Count forward from Monday: 1 Mon, 2 Tue, 3 Wed...",a:"friday",c:["thursday","saturday","sunday"]},
{d:"hard",q:"A is the mother of B. B is the mother of C. What is A to C?",h:"Think about the family tree across three generations.",a:"grandmother",c:["aunt","sister","mother"]},
{d:"hard",q:"Look at this series: 2, 1, 1/2, 1/4, __. What number should come next?",h:"Each number is half of the one before it.",a:"1/8"},
{d:"easy",q:"Which shape has the most sides: a triangle, a square, or a pentagon?",h:"Compare 3, 4 and 5 sides.",a:"pentagon",c:["triangle","square","they're equal"]},
{d:"easy",q:"What comes next in the sequence: 1, 2, 4, 8, __?",h:"Each number is double the one before it.",a:"16"},
{d:"easy",q:"If 3 pencils cost 30 cents, how much do 6 pencils cost, in cents?",h:"Double both the pencils and the price.",a:"60"},
{d:"medium",q:"A is twice as old as B. If B is 8, how old is A?",h:"Multiply B's age by 2.",a:"16"},
{d:"medium",q:"Which word does not belong: apple, orange, carrot, banana?",h:"Three of these are fruits.",a:"carrot",c:["apple","orange","banana"]},
{d:"hard",q:"In a code, CAT is written as DBU (each letter shifted forward by 1). How is DOG written using the same code?",h:"Shift each letter of DOG forward by one place in the alphabet.",a:"eph",c:["dog","cnf","fqh"]},
{d:"hard",q:"If 5 machines make 5 toys in 5 minutes, how many minutes would it take 100 machines to make 100 toys?",h:"Work out how long ONE machine takes to make ONE toy first.",a:"5"}
]}
];

/* \u2500\u2500 Helpers \u2500\u2500 */
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
/* Display-only formatting: the answer/choice data is stored in lowercase for
   easy matching, but reads oddly on screen. Capitalises the first letter of
   the string and of any letter immediately following typical sentence-break
   punctuation, without touching the underlying data used for comparisons. */
function _cap(s){
  if(!s)return s;
  return s.replace(/(^|[.!?]\s+)([a-z])/g,function(m,pre,ch){return pre+ch.toUpperCase();});
}
function _fz(r,a){
  var x=_nr(r),c=_nr(a);
  if(x===c)return true;
  var cw=c.split(' '),rw=x.split(' ');
  var h=cw.filter(function(w){return w.length>3&&rw.indexOf(w)!==-1;});
  return h.length>=Math.max(1,Math.floor(cw.length*0.6));
}
/* Flat pool of every offline puzzle answer across all categories. Only used
   as a last-resort fallback in _mcq below, for the rare case a category is
   too small to supply 3 distractors on its own. */
var ALL_ANSWERS=(function(){
  var arr=[];
  C.forEach(function(cat){cat.p.forEach(function(pz){arr.push(pz.a);});});
  return arr;
}());
/* Generates plausible "near miss" wrong numbers for a purely-numeric answer
   (e.g. correct answer "9" -> candidates like 7, 8, 10, 11, 18, 4/5 ...).
   `decimals` (or null for integers) keeps the formatting consistent with
   the original answer, e.g. "7.5" -> "6.5", "8.5", not "6", "9". */
function _numDistractors(n,decimals){
  var deltas=[1,2,3,5,10,-1,-2,-3,-5,-10];
  var raw=[];
  deltas.forEach(function(d){var v=n+d;if(v>=0)raw.push(v);});
  raw.push(n*2);
  if(n!==0)raw.push(Math.max(0,n/2));
  var seen={},out=[];
  raw.forEach(function(v){
    var s=decimals!=null?v.toFixed(decimals):String(Math.round(v));
    if(s===String(decimals!=null?n.toFixed(decimals):Math.round(n)))return;
    if(seen[s])return;
    seen[s]=1;out.push(s);
  });
  return out;
}
/* Builds a 4-option multiple-choice set for a single puzzle. Options are
   sourced in priority order so each question gets choices written FOR that
   exact question wherever possible, instead of a shared pool:
     1) p.c \u2014 hand-authored wrong answers written specifically for this
        question (present on every non-purely-numeric puzzle). These are
        always used first and are what most puzzles rely on.
     2) If the correct answer starts with a number (optionally followed by
        a unit, e.g. "3 hours", "7.5 degrees"), generate plausible nearby
        numbers with the same suffix \u2014 created fresh for THIS question's
        actual value, not borrowed from anywhere else.
     3) Same-category puzzles' answers \u2014 only used as a safety net if a
        puzzle is somehow missing authored choices and isn't numeric.
     4) The full site-wide pool \u2014 final fallback, practically never reached.
   The seed keeps the same 4 options stable across re-renders of the same
   puzzle on the same day. */
function _mcq(p,catPool,seed){
  var normCorrect=_nr(p.a);
  var wrong=[],used={};
  used[normCorrect]=1;

  if(p.c&&p.c.length){
    _sh(p.c,seed).forEach(function(c){
      if(wrong.length>=3)return;
      var nc=_nr(c);
      if(used[nc])return;
      used[nc]=1;wrong.push(c);
    });
  }

  if(wrong.length<3){
    var m=p.a.trim().match(/^(\d+(?:\.\d+)?)(.*)$/);
    if(m){
      var n=parseFloat(m[1]);
      var decimals=m[1].indexOf('.')!==-1?m[1].split('.')[1].length:null;
      var suffix=m[2];
      _sh(_numDistractors(n,decimals),seed+2).forEach(function(c){
        if(wrong.length>=3)return;
        var full=c+suffix;
        var nc=_nr(full);
        if(used[nc])return;
        used[nc]=1;wrong.push(full);
      });
    }
  }

  if(wrong.length<3){
    var catAnswers=[];
    catPool.forEach(function(x){
      var na=_nr(x.a);
      if(used[na])return;
      used[na]=1;catAnswers.push(x.a);
    });
    _sh(catAnswers,seed+3).forEach(function(a){
      if(wrong.length>=3)return;
      wrong.push(a);
    });
  }

  if(wrong.length<3){
    var globalAnswers=[];
    ALL_ANSWERS.forEach(function(a){
      var na=_nr(a);
      if(used[na])return;
      used[na]=1;globalAnswers.push(a);
    });
    _sh(globalAnswers,seed+5).forEach(function(a){
      if(wrong.length>=3)return;
      wrong.push(a);
    });
  }

  return _sh([p.a].concat(wrong),seed+1);
}
/* Normalise ANY Blogger/Google-hosted image CDN URL to a large, UNCROPPED size.
   Google's image CDN encodes size (and sometimes a crop flag) in one of several
   places depending on when the post was made:
     - /s640-rw/photo.jpg              (old, slash-delimited)
     - /w400-h266-p-k-no-nu/photo.jpg  (newer, slash-delimited)
     - /s72-c/photo.jpg                (old thumbnail \u2014 "-c" means square-cropped)
     - photo.jpg=w72-h72-p-k-no-nu-mo  (newest, trailing \u2014 no slashes at all)
     - photo.jpg=s72-c                 (older trailing form)
   Every one of these gets rewritten to a plain "s1200" token with any "-c" crop
   flag dropped, so we always request the FULL uncropped image at a size large
   enough to fill the card at full width on retina screens. Previously the
   regex only handled the slash-delimited forms, so newer "=w..-h.." trailing
   URLs passed through untouched and rendered as tiny, often square-cropped
   thumbnails. */
function _normImgUrl(u){
  if(!u)return u;
  if(/\/(s\d+[^/]*|w\d+-h\d+[^/]*)\//.test(u)){
    return u.replace(/\/(s\d+[^/]*|w\d+-h\d+[^/]*)\//,'/s1200/');
  }
  if(/=w\d+-h\d+[^=]*$/.test(u)){
    return u.replace(/=w\d+-h\d+[^=]*$/,'=s1200');
  }
  if(/=s\d+(-c)?$/.test(u)){
    return u.replace(/=s\d+(-c)?$/,'=s1200');
  }
  return u;
}
/* extract image from blogger post html
   Handles ALL blogger CDN URL formats \u2014 see _normImgUrl above.
   Strategy: grab the full blogger CDN URL, then normalise its size separately. */
/* Extracts the post's embedded image, AND its width/height attributes if the
   source <img> tag includes them (Blogger's native uploader usually does).
   Knowing the real aspect ratio ahead of time lets the card reserve the
   correct height before the image even starts downloading, instead of only
   finding out once it loads \u2014 this is what keeps layout shift to a minimum. */
function _imgWithDims(html){
  if(!html)return null;
  var tag=null,url=null;
  var m=html.match(/<img[^>]*\bsrc=["'](https?:\/\/[^"']*blogger[^"']*googleusercontent[^"']*\/[^"'\/]+\/[^"']+)["'][^>]*>/i);
  if(m){tag=m[0];url=m[1];}
  else{
    var m2=html.match(/<img[^>]*\bsrc=["']([^"']+\.(?:jpg|jpeg|png|gif|webp|PNG|JPG)[^"']*)["'][^>]*>/i);
    if(m2){tag=m2[0];url=m2[1];}
  }
  if(!url)return null;
  var w=null,h=null;
  if(tag){
    var wm=tag.match(/\bwidth=["']?(\d+)/i);
    var hm=tag.match(/\bheight=["']?(\d+)/i);
    if(wm)w=parseInt(wm[1],10);
    if(hm)h=parseInt(hm[1],10);
  }
  return{url:_normImgUrl(url),w:(w&&h)?w:null,h:(w&&h)?h:null};
}
function _img(html){
  var r=_imgWithDims(html);
  return r?r.url:null;
}

/* \u2500\u2500 Widget factory \u2500\u2500 */
function _boot(tid,_SK,_TK){
  var el=document.getElementById(tid);if(!el)return;
  var ds=_ds(),td=_td();
  /* shuffle offline cats daily so the order rotates */
  /* Show only 3 offline tabs per day, picked from the full category pool (C).
     _sh(C,ds) shuffles the ENTIRE pool deterministically using today's date
     as the seed, so every visitor sees the same 3 categories today \u2014 and a
     different 3 tomorrow, since ds changes daily. Slicing to 3 keeps the
     tab bar to "3 tabs + Explore" no matter how large the pool grows. */
  var TABS_PER_DAY=3;
  var eligibleC=C.filter(function(cat){return BLOCKED_CATEGORIES.indexOf(cat.t)===-1;});
  var ac=_sh(eligibleC,ds).slice(0,TABS_PER_DAY);
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
  /* Shuffle the REAL categories' order daily; "Random Puzzles" (pulls from
     the whole site, no label filter) always stays first and is unaffected
     by the shuffle or by which 3 offline tabs are showing today. */
  var RANDOM_LABEL={d:'\uD83C\uDFB2 Random Puzzles',l:null,h:''};
  var shuffledLabels=_sh(LABELS.slice(),ds+99);
  var allExpOptions=[RANDOM_LABEL].concat(shuffledLabels);
  var expLabelObj=allExpOptions[0];
  var expPosts=[],expIdx=0,expLoading=false;
  var expCache={};
  var expTotals={}; /* label -> total post count in that category, so a repeat visit/refresh skips the count lookup */

  /* \u2500\u2500 Build HTML \u2500\u2500 */
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
        +'<div class="fwpnavs"><button class="fwpnav" id="'+px+'_prev" aria-label="Previous puzzle">\u2039</button><button class="fwpnav" id="'+px+'_next" aria-label="Next puzzle">\u203a</button></div>'
      +'</div>'
      +'<div class="fwpbdg easy" id="'+px+'_diff"></div>'
      +'<p class="fwpq" id="'+px+'_q"></p>'
      +'<button class="fwphbtn" id="'+px+'_hbtn">\uD83D\uDCA1 Show hint</button>'
      +'<div class="fwphbox" id="'+px+'_hbox"></div>'
      +'<div class="fwpmcq" id="'+px+'_mcq"></div>'
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
        +'<div class="fwpexp-navs"><button class="fwpexp-nb" id="'+px+'_expprev" aria-label="Previous post">\u2039</button><button class="fwpexp-nb" id="'+px+'_expnext" aria-label="Next post">\u203a</button></div>'
      +'</div>'
      +'<div class="fwpexp-wrap" id="'+px+'_expwrap"><div id="'+px+'_expcard"></div></div>'
      +'<div class="fwpexp-dots" id="'+px+'_expdots"></div>'
    +'</div>'
    /* footer */
    +'<div class="fwpfoot"><div class="fwpfl">'
      +'<a class="fwpmore" id="'+px+'_more" href="'+B+'/p/index.html" target="_blank" rel="noopener">More puzzles</a>'
      +'<a class="fwpac" href="'+B+'/p/index.html" target="_blank" rel="noopener">All categories</a>'
    +'</div><button class="fwpsh" id="'+px+'_sh">\u2191 Share</button>'
    +'<div class="fwpsharemenu" id="'+px+'_sharemenu"></div>'
    +'</div>'
    +(SHOW_ADD_TO_SITE?(
    '<div class="fwpadd">'
      +'<button class="fwpabtn" id="'+px+'_abtn">\u2795 Add this widget to your website \u2014 free!</button>'
      +'<div class="fwpebox" id="'+px+'_ebox"><p>Copy these 2 lines and paste into any webpage. Widget loads automatically, all links point to funwithpuzzles.com, and future updates apply everywhere.</p>'
        +'<code class="fwpec" id="'+px+'_ec"></code>'
        +'<button class="fwpcb" id="'+px+'_cb">Copy code</button>'
      +'</div>'
    +'</div>'):'')
    +((SHOW_GOOGLE_PLAY_PROMO||SHOW_APPLE_APP_PROMO)?(
    '<div class="fwpapps">'
      +'<div class="fwpapps-label">\uD83D\uDCF1 Get the Fun With Puzzles app</div>'
      +'<div class="fwpapps-row">'
        +(SHOW_GOOGLE_PLAY_PROMO?('<a class="fwpapp-badge" href="'+GOOGLE_PLAY_URL+'" target="_blank" rel="noopener"><span class="fwpapp-ic">\u25B6\uFE0F</span><span class="fwpapp-txt"><small>Get it on</small><b>Google Play</b></span></a>'):'')
        +(SHOW_APPLE_APP_PROMO?('<a class="fwpapp-badge" href="'+APPLE_APP_URL+'" target="_blank" rel="noopener"><span class="fwpapp-ic">\uD83C\uDF4E</span><span class="fwpapp-txt"><small>Download on the</small><b>App Store</b></span></a>'):'')
      +'</div>'
    +'</div>'):'')
    +'<div class="fwpattr">Powered by <a href="'+B+'" target="_blank" rel="noopener">funwithpuzzles.com</a></div>'
    +'</div></div>';

  /* populate dropdown \u2014 Random Puzzles first, then daily-shuffled categories */
  var sel=g('expsel');
  allExpOptions.forEach(function(lb,i){
    var o=document.createElement('option');
    o.value=i;
    o.textContent=lb.d;
    sel.appendChild(o);
  });

  if(SHOW_ADD_TO_SITE&&g('ec')){g('ec').textContent=EC;}
  g('date').textContent=new Date().toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short',year:'numeric'});
  g('sk').textContent=sk;

  /* \u2500\u2500 Offline render \u2500\u2500 */
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

    var res=g('res'),rv=g('rev'),mcqEl=g('mcq');
    var settled=(ans!==undefined)||rev;
    var seed=ds*131+st.tab*17+st.puzz*7+3;
    var choices=_mcq(p,ac[st.tab].p,seed);
    mcqEl.innerHTML='';
    choices.forEach(function(choice){
      var btn=document.createElement('button');
      btn.type='button';
      btn.className='fwpmcqbtn';
      btn.textContent=_cap(choice);
      var isCorrect=_nr(choice)===_nr(p.a);
      if(settled){
        btn.disabled=true;
        if(isCorrect)btn.className+=' correct';
        else if(ans!==undefined&&_nr(choice)===_nr(ans))btn.className+=' wrong';
      }else{
        btn.onclick=function(){st.ans[kk]=choice;sv();rend();};
      }
      mcqEl.appendChild(btn);
    });

    if(ans!==undefined){
      var ok=_fz(ans,p.a);
      res.className='fwpres '+(ok?'ok':'no');
      res.textContent=ok?'\u2713 Correct! Well done.':'\u2717 Not quite \u2014 the correct answer is highlighted above.';
      rv.style.display='none';
    }else if(rev){
      res.className='fwpres no';
      res.textContent='Answer revealed above.';
      rv.style.display='none';
    }else{
      res.className='fwpres';res.textContent='';
      rv.style.display='block';rv.textContent='\uD83D\uDC41 Show answer';
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

  function _moreLinkText(labelObj){
    return labelObj.l ? ('More '+labelObj.d+' puzzles') : 'More puzzles';
  }

  function _sw(n){
    st.tab=n;st.puzz=0;sv();
    document.querySelectorAll('#'+px+'_tabs .fwptab').forEach(function(b,i){
      b.className='fwptab'+(i===EXPLORE_IDX?' exptab':'')+(i===n?' on':'');
    });
    if(n===EXPLORE_IDX){
      g('offline').style.display='none';
      g('exp').style.display='block';
      g('more').textContent=_moreLinkText(expLabelObj);
      g('more').href=B+'/'+expLabelObj.h;
      /* posts may already be sitting in memory from the idle-time
         background prefetch done right after boot \u2014 render immediately
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

  /* \u2500\u2500 Explore render \u2500\u2500 */
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
    /* build card. When we know the image's real aspect ratio (from width/
       height attributes on the source <img> tag), set it inline via the
       CSS aspect-ratio property so the box is already the right height
       before the image starts downloading \u2014 this is what removes most of
       the layout shift. Falls back to the fixed min-height when unknown
       (some older/external posts don't include width/height attributes). */
    var wrapStyle=(p.aspect&&isFinite(p.aspect))?(' style="aspect-ratio:'+p.aspect.toFixed(4)+'"'):(' style="min-height:220px"');
    var imgHtml=p.img
      ?'<div class="fwpexp-imgwrap"'+wrapStyle+'><img class="fwpexp-img" src="'+p.img+'" alt="'+p.title.replace(/[<>"]/g,'')+'" onerror="this.parentNode.innerHTML=\'<div class=fwpexp-imgph><img src='+LG+' /></div>\'"/></div>'
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

  /* \u2500\u2500 Explore fetch via JSONP \u2500\u2500
     Two-step strategy instead of pulling the 150 newest posts every time:
       1) ask Blogger for just the total post count in the category (tiny reply)
       2) fetch a small window (up to 20 posts) starting at a UNIFORMLY RANDOM
          offset across the category's whole history, then sample 5 from it
     This makes every post \u2014 including the very oldest \u2014 equally likely to be
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
    /* Prefer the image embedded in the post content \u2014 it's the real, full
       picture at its natural aspect ratio. media$thumbnail is a fallback
       only, because Blogger pre-crops thumbnails to a square ("-c" flag),
       which is why images used to render tiny/off-centre inside the card. */
    var img=null,aspect=null;
    var contentImg=_imgWithDims(content);
    if(contentImg){
      img=contentImg.url;
      if(contentImg.w&&contentImg.h)aspect=contentImg.w/contentImg.h;
    }
    if(!img&&e.media$thumbnail&&e.media$thumbnail.url){
      img=_normImgUrl(e.media$thumbnail.url);
      /* NOT using the thumbnail's own width/height here \u2014 it's a square
         crop, so its aspect ratio does not represent the real picture. */
    }
    /* Blogger's JSON feed lists each post's labels under entry.category as
       [{term:"Label Name"}, ...]. Collected here so posts that only carry
       housekeeping labels (see EXCLUDED_RANDOM_LABELS near the top of the
       file) can be filtered out of Random Puzzles instead of showing a
       non-puzzle page with no relevant image. */
    var labels=[];
    if(e.category){
      for(var k=0;k<e.category.length;k++){
        if(e.category[k]&&e.category[k].term)labels.push(e.category[k].term);
      }
    }
    return{title:title,url:pUrl,img:img,aspect:aspect,labels:labels};
  }
  function _isExcludedPost(p){
    if(!p.labels||!p.labels.length)return false;
    for(var i=0;i<p.labels.length;i++){
      if(EXCLUDED_RANDOM_LABELS.indexOf(p.labels[i])!==-1)return true;
    }
    return false;
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

  /* Builds the Blogger feed URL for a category. When labelObj.l is null (the
     "Random Puzzles" entry), the /-/LABEL segment is omitted entirely so the
     feed returns posts from across the WHOLE site, not one category. */
  function _feedUrl(labelObj,params){
    var base=labelObj.l?(B+'/feeds/posts/default/-/'+encodeURIComponent(labelObj.l)):(B+'/feeds/posts/default');
    return base+'?alt=json'+params;
  }

  /* Fetches WANT_COUNT puzzles spread across the category's ENTIRE history,
     instead of picking them all from one random contiguous window (which
     kept giving 5 puzzles clustered close together in posting time, even
     though the window's position changed on every refresh). We split the
     full 1..total range into WANT_COUNT equal segments and fetch ONE random
     post from each segment, in parallel \u2014 so every refresh gives 5 puzzles
     spread from oldest to newest, each drawn independently at random within
     its own slice of the timeline. */
  var WANT_COUNT=5;
  function _expFetchStratified(labelObj,total,cacheKey){
    if(total<=WANT_COUNT){
      /* Small category: nothing to stratify, just grab everything available. */
      var url=_feedUrl(labelObj,'&max-results='+total);
      _jsonp(url,function(data){
        expLoading=false;
        var ref=g('expref');if(ref){ref.disabled=false;ref.textContent='\u21BB Refresh';}
        var entries=(data&&data.feed&&data.feed.entry)||[];
        var posts=entries.map(_expParseEntry).filter(function(p){return p.url&&!_isExcludedPost(p);});
        if(posts.length===0){expPosts=[];_expRender();return;}
        expCache[cacheKey]=posts;
        expPosts=_rnd(posts).slice(0,WANT_COUNT);
        expIdx=0;_expRender();_expPreload();
      },function(){
        _expFail(labelObj,'Timed out. The feed took too long to respond.');
      });
      return;
    }

    var segSize=Math.floor(total/WANT_COUNT);
    var starts=[];
    for(var i=0;i<WANT_COUNT;i++){
      var segStart=i*segSize+1;
      var segEnd=(i===WANT_COUNT-1)?total:((i+1)*segSize);
      var span=Math.max(1,segEnd-segStart+1);
      starts.push(segStart+Math.floor(Math.random()*span));
    }

    var results=new Array(WANT_COUNT).fill(null);
    var remaining=WANT_COUNT;
    function finalize(){
      expLoading=false;
      var ref=g('expref');if(ref){ref.disabled=false;ref.textContent='\u21BB Refresh';}
      var posts=results.filter(function(p){return p&&p.url&&!_isExcludedPost(p);});
      if(posts.length===0){
        _expFail(labelObj,'Could not load puzzles. Please check your connection.');
        return;
      }
      expCache[cacheKey]=posts;
      expPosts=posts;
      expIdx=0;_expRender();_expPreload();
    }
    starts.forEach(function(start,idx){
      var url=_feedUrl(labelObj,'&max-results=1&start-index='+start);
      _jsonp(url,function(data){
        remaining--;
        var entries=(data&&data.feed&&data.feed.entry)||[];
        var posts=entries.map(_expParseEntry).filter(function(p){return p.url&&!_isExcludedPost(p);});
        if(posts.length)results[idx]=posts[0];
        if(remaining===0)finalize();
      },function(){
        remaining--;
        if(remaining===0)finalize();
      });
    });
  }

  function _expFetchCount(labelObj,cacheKey){
    var url=_feedUrl(labelObj,'&max-results=1');
    _jsonp(url,function(data){
      var total=(data&&data.feed&&data.feed.openSearch$totalResults&&parseInt(data.feed.openSearch$totalResults.$t,10))||0;
      if(!total){expLoading=false;expPosts=[];_expRender();return;}
      expTotals[cacheKey]=total;
      _expFetchStratified(labelObj,total,cacheKey);
    },function(){
      _expFail(labelObj,'Could not load puzzles. Please check your connection.');
    });
  }

  function _expFetch(labelObj,forceRefresh){
    if(expLoading)return;
    var cacheKey=labelObj.l||'__random__'; /* the Random entry has no label string, so use a fixed key */
    if(!forceRefresh&&expCache[cacheKey]){
      expPosts=expCache[cacheKey];
      expIdx=0;_expRender();_expPreload();return;
    }
    expLoading=true;
    var ref=g('expref');if(ref){ref.disabled=true;ref.textContent='\u23F3 Loading...';}
    g('expcard').innerHTML=_expSkel();
    g('expctr').textContent='Fetching puzzles...';
    g('expdots').innerHTML='';

    if(expTotals[cacheKey]){_expFetchStratified(labelObj,expTotals[cacheKey],cacheKey);}
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

  /* \u2500\u2500 Build tabs \u2500\u2500 */
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

  /* \u2500\u2500 Wire offline events \u2500\u2500 */
  g('prev').onclick=function(){st.puzz=(st.puzz-1+cp.length)%cp.length;sv();rend();};
  g('next').onclick=function(){st.puzz=(st.puzz+1)%cp.length;sv();rend();};
  g('hbtn').onclick=function(){ho=!ho;g('hbox').style.display=ho?'block':'none';this.textContent=ho?'\uD83D\uDE48 Hide hint':'\uD83D\uDCA1 Show hint';};
  g('rev').onclick=function(){
    var kk=k(st.tab,st.puzz);
    st.rev[kk]=true;sv();
    rend();
  };

  /* \u2500\u2500 Swipe-to-navigate (touch devices) \u2500\u2500
     Generic helper: watches touchstart/touchend on `el` and calls
     `onPrev`/`onNext` when a predominantly-horizontal swipe of at least
     40px is detected within 600ms \u2014 used for both the offline puzzle body
     and the Explore card so users can flick left/right to move between
     puzzles instead of only tapping the arrow buttons. */
  function _addSwipe(el,onPrev,onNext){
    if(!el)return;
    var sx=0,sy=0,st0=0;
    el.addEventListener('touchstart',function(e){
      var t=e.changedTouches[0];
      sx=t.clientX;sy=t.clientY;st0=Date.now();
    },{passive:true});
    el.addEventListener('touchend',function(e){
      var t=e.changedTouches[0];
      var dx=t.clientX-sx,dy=t.clientY-sy,dt=Date.now()-st0;
      if(dt<600&&Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy)*1.5){
        if(dx<0)onNext();else onPrev();
      }
    },{passive:true});
  }
  _addSwipe(g('offline'),function(){g('prev').click();},function(){g('next').click();});
  _addSwipe(g('expwrap'),function(){g('expprev').click();},function(){g('expnext').click();});

  /* \u2500\u2500 Share menu (WhatsApp / X / Facebook / Telegram / Copy / native) \u2500\u2500 */
  var smEl=g('sharemenu');
  function _shareText(){
    if(st.tab===EXPLORE_IDX){
      var ep=expPosts[expIdx];
      return ep?ep.title:"Today's Challenges";
    }
    return cp[st.puzz]?cp[st.puzz].q:"Today's Challenges";
  }
  function _shareUrl(){
    if(st.tab===EXPLORE_IDX){
      var ep=expPosts[expIdx];
      if(ep&&ep.url)return ep.url;
    }
    return B+'/p/daily-challenge.html';
  }
  function _icon(bg,inner){
    return '<svg width="22" height="22" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="14" cy="14" r="14" fill="'+bg+'"/>'+inner+'</svg>';
  }
  var ICON_WHATSAPP=_icon('#25D366','<path transform="translate(6,6) scale(0.032)" fill="#fff" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>');
  var ICON_X=_icon('#000','<path transform="translate(5,5) scale(0.035)" fill="#fff" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>');
  var ICON_FACEBOOK=_icon('#1877F2','<path transform="translate(8,4) scale(0.033)" fill="#fff" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>');
  var ICON_TELEGRAM=_icon('#29B6F6','<path transform="translate(4,4) scale(0.039)" fill="#fff" d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"/>');
  var ICON_COPY=_icon('#6B7280','<g fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"><path d="M11 17l6-6"/><path d="M13 8.5l1.8-1.8a3.2 3.2 0 014.5 4.5L17.5 13"/><path d="M15 19.5l-1.8 1.8a3.2 3.2 0 01-4.5-4.5L10.5 15"/></g>');
  var ICON_SHARE=_icon('#6B7280','<g fill="#fff"><circle cx="9" cy="14" r="2.4"/><circle cx="19" cy="7" r="2.4"/><circle cx="19" cy="21" r="2.4"/></g><g stroke="#fff" stroke-width="1.6"><line x1="11" y1="13" x2="17" y2="8.3"/><line x1="11" y1="15" x2="17" y2="19.7"/></g>');
  var SHARE_PLATFORMS=[
    {id:'whatsapp',icon:ICON_WHATSAPP,label:'WhatsApp',open:function(txt,url){window.open('https://wa.me/?text='+encodeURIComponent(txt+'\n\n'+url),'_blank');}},
    {id:'twitter',icon:ICON_X,label:'X / Twitter',open:function(txt,url){window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent(txt)+'&url='+encodeURIComponent(url),'_blank');}},
    {id:'facebook',icon:ICON_FACEBOOK,label:'Facebook',open:function(txt,url){window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(url)+'&quote='+encodeURIComponent(txt),'_blank');}},
    {id:'telegram',icon:ICON_TELEGRAM,label:'Telegram',open:function(txt,url){window.open('https://t.me/share/url?url='+encodeURIComponent(url)+'&text='+encodeURIComponent(txt),'_blank');}},
    {id:'copy',icon:ICON_COPY,label:'Copy link',open:function(txt,url){
      var full=txt+'\n\n'+url;
      function done(){var b=smEl.querySelector('[data-p="copy"] span');if(b){var old=b.textContent;b.textContent='Copied!';setTimeout(function(){b.textContent=old;},1800);}}
      if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(full).then(done).catch(function(){});}
      else{var ta=document.createElement('textarea');ta.value=full;ta.style.cssText='position:fixed;opacity:0;top:0;left:0;';document.body.appendChild(ta);ta.focus();ta.select();try{document.execCommand('copy');done();}catch(e){}document.body.removeChild(ta);}
    }}
  ];
  function _buildShareMenu(){
    smEl.innerHTML='';
    SHARE_PLATFORMS.forEach(function(pl){
      var b=document.createElement('button');
      b.type='button';b.setAttribute('data-p',pl.id);
      b.innerHTML=pl.icon+'<span>'+pl.label+'</span>';
      b.onclick=function(e){
        e.stopPropagation();
        pl.open(_shareText(),_shareUrl());
        if(pl.id!=='copy')smEl.style.display='none';
      };
      smEl.appendChild(b);
    });
    if(navigator.share){
      var nb=document.createElement('button');
      nb.type='button';
      nb.innerHTML=ICON_SHARE+'<span>More apps...</span>';
      nb.onclick=function(e){
        e.stopPropagation();
        smEl.style.display='none';
        navigator.share({title:"Fun With Puzzles",text:_shareText(),url:_shareUrl()}).catch(function(){});
      };
      smEl.appendChild(nb);
    }
  }
  _buildShareMenu();
  g('sh').onclick=function(e){
    e.stopPropagation();
    smEl.style.display=(smEl.style.display==='flex')?'none':'flex';
  };
  smEl.addEventListener('click',function(e){e.stopPropagation();});
  document.addEventListener('click',function(){smEl.style.display='none';});

  /* \u2500\u2500 Wire explore events \u2500\u2500 */
  g('expsel').onchange=function(){
    expLabelObj=allExpOptions[parseInt(this.value,10)];
    expPosts=[];expIdx=0;
    g('more').textContent=_moreLinkText(expLabelObj);
    g('more').href=B+'/'+expLabelObj.h;
    _expFetch(expLabelObj,false);
  };
  g('expref').onclick=function(){_expFetch(expLabelObj,true);};
  g('expprev').onclick=function(){if(!expPosts.length)return;expIdx=(expIdx-1+expPosts.length)%expPosts.length;_expRender();};
  g('expnext').onclick=function(){if(!expPosts.length)return;expIdx=(expIdx+1)%expPosts.length;_expRender();};

  /* add-to-site */
  if(SHOW_ADD_TO_SITE){
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
  }

  /* \u2500\u2500 Boot \u2500\u2500 */
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
