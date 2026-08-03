(function () {
var FONT = 'https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap';
var CSS = "/* ============================================================\n   studio.MAO booking widget\n   Palette: paper white, ink black, amber accent\n   ============================================================ */\n#smao-booking{\n  --paper:#FFFFFF;\n  --ink:#111111;\n  --ink-60:#5F5F5F;\n  --ink-30:#9A9A9A;\n  --rule:#E4E4E4;\n  --wash:#F7F7F7;\n  --amber:#FFC500;\n  --amber-deep:#CC9E00;\n  --amber-wash:#FFF6D1;\n  --busy:#ECECEC;\n  --hatch:#D8D8D8;\n  --danger:#B4231C;\n  --r:10px;\n  --display:'Space Mono',ui-monospace,monospace;\n  --body:'Space Mono',ui-monospace,monospace;\n  --mono:'Space Mono',ui-monospace,monospace;\n}\n#smao-booking *{box-sizing:border-box}\n#smao-booking{margin:0}\n#smao-booking{\n  background:var(--paper); max-width:1120px; margin:0 auto; padding:4px 0 8px; text-align:left; color:var(--ink);\n  font-family:var(--body); font-size:13.5px; line-height:1.6;\n  -webkit-font-smoothing:antialiased;\n}\n#smao-booking a{color:inherit;text-decoration:underline;text-decoration-color:var(--amber-deep);text-decoration-thickness:1px;text-underline-offset:3px}\n#smao-booking a:hover{text-decoration-thickness:2px}\n#smao-booking .smx{max-width:1120px;margin:0 auto;padding:28px 20px 64px}\n\n/* --- masthead ------------------------------------------------ */\n#smao-booking .mast{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;flex-wrap:wrap;\n  border-bottom:2px solid var(--ink);padding-bottom:14px;margin-bottom:26px}\n#smao-booking .mast h1{font-family:var(--display);font-weight:700;font-size:clamp(22px,3.6vw,32px);\n  letter-spacing:-.02em;margin:0;line-height:1.05}\n#smao-booking .mast .sub{font-family:var(--mono);font-size:11.5px;color:var(--ink-60);margin:0}\n\n/* --- layout -------------------------------------------------- */\n#smao-booking .grid{display:grid;grid-template-columns:1fr;gap:32px}\n\n#smao-booking .eyebrow{font-family:var(--mono);font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;\n  color:var(--ink-30);margin:0 0 10px}\n\n/* --- calendar controls --------------------------------------- */\n#smao-booking .cal-bar{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:14px;flex-wrap:wrap}\n#smao-booking .nav{display:flex;align-items:center;gap:6px;flex-wrap:wrap}\n#smao-booking .switchers{display:flex;gap:8px;align-items:center;margin-left:auto;flex-wrap:wrap}\n#smao-booking .nav h2{font-family:var(--display);font-size:14.5px;font-weight:700;margin:0 6px;min-width:180px;letter-spacing:-.01em}\n#smao-booking .icon-btn{width:30px;height:30px;border:1px solid var(--rule);background:var(--paper);border-radius:8px;\n  cursor:pointer;color:var(--ink);font-size:15px;line-height:1;display:grid;place-items:center;transition:.15s}\n#smao-booking .icon-btn:hover{border-color:var(--ink);background:var(--wash)}\n#smao-booking .seg{display:inline-flex;border:1px solid var(--rule);border-radius:9px;overflow:hidden}\n#smao-booking .seg button{border:0;background:var(--paper);font-family:var(--mono);font-size:11px;letter-spacing:.08em;\n  text-transform:uppercase;padding:7px 13px;cursor:pointer;color:var(--ink-60);transition:.15s}\n#smao-booking .seg button+button{border-left:1px solid var(--rule)}\n#smao-booking .seg button[aria-pressed=\"true\"]{background:var(--ink);color:var(--paper)}\n#smao-booking .today-btn{font-family:var(--mono);font-size:11px;text-transform:uppercase;letter-spacing:.08em;\n  border:1px solid var(--rule);background:var(--paper);border-radius:8px;padding:7px 11px;cursor:pointer}\n#smao-booking .today-btn:hover{border-color:var(--ink)}\n\n/* --- month view ---------------------------------------------- */\n#smao-booking .dow{display:grid;grid-template-columns:repeat(7,1fr);gap:4px;margin-bottom:4px}\n#smao-booking .dow span{font-family:var(--mono);font-size:10px;letter-spacing:.1em;color:var(--ink-30);text-align:center;padding:4px 0}\n#smao-booking .month{display:grid;grid-template-columns:repeat(7,1fr);gap:4px}\n#smao-booking .day{aspect-ratio:1/.92;border:1px solid var(--rule);border-radius:var(--r);background:var(--paper);\n  padding:7px 8px;cursor:pointer;text-align:left;font:inherit;color:inherit;position:relative;\n  display:flex;flex-direction:column;justify-content:space-between;transition:.14s}\n#smao-booking .day:hover:not(:disabled){border-color:var(--ink);transform:translateY(-1px)}\n#smao-booking .day .n{font-family:var(--mono);font-size:13px;font-weight:400}\n#smao-booking .day .free{font-family:var(--mono);font-size:9.5px;color:var(--amber-deep);letter-spacing:.02em}\n#smao-booking .day.out{opacity:.32}\n#smao-booking .day:disabled{cursor:not-allowed;background:var(--wash);color:var(--ink-30)}\n#smao-booking .day:disabled .free{color:var(--ink-30)}\n#smao-booking .day.sel{border-color:var(--amber);box-shadow:inset 0 0 0 2px var(--amber);background:var(--amber-wash)}\n#smao-booking .day.today .n::after{content:\"\";display:block;height:2px;background:var(--ink);margin-top:2px}\n\n/* --- week / day grid ----------------------------------------- */\n#smao-booking .tgwrap{border:1px solid var(--rule);border-radius:var(--r);overflow:hidden}\n#smao-booking .tghead{display:grid;background:var(--wash);border-bottom:1px solid var(--rule)}\n#smao-booking .tghead div{padding:8px 4px;text-align:center;font-family:var(--mono);font-size:10.5px;color:var(--ink-60);\n  letter-spacing:.06em}\n#smao-booking .tghead div b{display:block;font-size:14px;color:var(--ink);font-weight:700;margin-top:2px}\n#smao-booking .tghead div.closed{color:var(--ink-30)}\n#smao-booking .tgbody{display:grid;background:var(--rule);gap:1px;padding:1px 0 0}\n#smao-booking .tgrow{display:grid;gap:1px}\n#smao-booking .tlabel{font-family:var(--mono);font-size:10.5px;color:var(--ink-30);padding:4px 8px;text-align:right;\n  white-space:nowrap;background:var(--paper);display:flex;align-items:flex-start;justify-content:flex-end}\n#smao-booking .slot{border:0;min-height:38px;cursor:pointer;background:var(--paper);\n  position:relative;transition:background .1s;font:inherit;padding:0;touch-action:pan-y;\n  -webkit-user-select:none;user-select:none}\n#smao-booking .slot:hover:not(:disabled){background:var(--amber-wash)}\n#smao-booking .slot:disabled{cursor:not-allowed;background:var(--busy);\n  background-image:repeating-linear-gradient(45deg,transparent,transparent 4px,var(--hatch) 4px,var(--hatch) 5px)}\n#smao-booking .slot.inrange,#smao-booking .slot.start{background:var(--amber)}\n#smao-booking .slot.closed{background:var(--wash);background-image:none;cursor:not-allowed}\n#smao-booking .dragging .slot{cursor:grabbing}\n\n/* --- key ----------------------------------------------------- */\n#smao-booking .key{display:flex;gap:16px;flex-wrap:wrap;margin-top:12px;font-family:var(--mono);font-size:10.5px;color:var(--ink-60)}\n#smao-booking .key i{width:12px;height:12px;border-radius:3px;display:inline-block;vertical-align:-2px;margin-right:5px;border:1px solid var(--rule)}\n#smao-booking .key .k-free{background:var(--paper)}\n#smao-booking .key .k-busy{background:var(--busy);background-image:repeating-linear-gradient(45deg,transparent,transparent 4px,var(--hatch) 4px,var(--hatch) 5px)}\n#smao-booking .key .k-sel{background:var(--amber);border-color:var(--amber)}\n#smao-booking .key .k-closed{background:var(--wash)}\n\n/* --- panel --------------------------------------------------- */\n#smao-booking .panel{border:1px solid var(--rule);border-radius:14px;padding:22px}\n#smao-booking .panel h3{font-family:var(--display);font-size:17px;margin:0 0 4px;letter-spacing:-.02em}\n#smao-booking .hint{font-size:12.5px;color:var(--ink-60);margin:0 0 16px}\n\n#smao-booking label{display:block;font-family:var(--mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;\n  color:var(--ink-60);margin:0 0 5px}\n#smao-booking input,#smao-booking select,#smao-booking textarea{width:100%;font-family:var(--body);font-size:13.5px;color:var(--ink);background:var(--paper);\n  border:1px solid var(--rule);border-radius:8px;padding:9px 11px;transition:.15s}\n#smao-booking input:focus,#smao-booking select:focus,#smao-booking textarea:focus{outline:0;border-color:var(--amber);box-shadow:0 0 0 3px var(--amber-wash)}\n#smao-booking input:disabled,#smao-booking select:disabled{background:var(--wash);color:var(--ink-30)}\n#smao-booking .field{margin-bottom:14px}\n#smao-booking .two{display:grid;grid-template-columns:1fr 1fr;gap:12px}\n#smao-booking .err{color:var(--danger);font-size:12px;margin-top:5px;display:none}\n#smao-booking .err.on{display:block}\n\n/* --- seating ------------------------------------------------- */\n#smao-booking .seats{display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:8px}\n#smao-booking .seat{border:1px solid var(--rule);border-radius:9px;padding:8px 6px 7px;cursor:pointer;background:var(--paper);\n  text-align:center;transition:.14s}\n#smao-booking .seat:hover{border-color:var(--ink)}\n#smao-booking .seat input{position:absolute;opacity:0;pointer-events:none}\n#smao-booking .seat svg{display:block;width:100%;height:46px}\n#smao-booking .seat span{font-family:var(--mono);font-size:9.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-60);\n  display:block;margin-top:5px}\n#smao-booking .seat .cap{font-size:9px;color:var(--ink-30);letter-spacing:.04em;margin-top:1px}\n#smao-booking .seat.on{border-color:var(--amber);background:var(--amber-wash);box-shadow:inset 0 0 0 1px var(--amber)}\n#smao-booking .seat.on span{color:var(--ink)}\n#smao-booking .seat.off{opacity:.35;cursor:not-allowed;background:var(--wash)}\n#smao-booking .seat.off:hover{border-color:var(--rule)}\n\n/* --- quote --------------------------------------------------- */\n#smao-booking .quote{border-top:2px solid var(--ink);margin-top:20px;padding-top:14px}\n#smao-booking .qline{display:flex;justify-content:space-between;gap:10px;font-family:var(--mono);font-size:12.5px;padding:4px 0;color:var(--ink-60)}\n#smao-booking .qline b{color:var(--ink);font-weight:400}\n#smao-booking .qline.sub{border-top:1px solid var(--rule);margin-top:6px;padding-top:9px}\n#smao-booking .qline.total{font-size:15px;color:var(--ink);padding-top:9px}\n#smao-booking .qline.total b{font-weight:700}\n#smao-booking .qnote{font-size:11.5px;color:var(--ink-30);margin-top:8px;line-height:1.45}\n#smao-booking .badge{display:inline-block;font-family:var(--mono);font-size:9.5px;letter-spacing:.08em;text-transform:uppercase;\n  background:var(--amber-wash);color:var(--amber-deep);border-radius:20px;padding:2px 8px;margin-left:6px}\n\n#smao-booking .cta{width:100%;margin-top:16px;background:var(--ink);color:var(--paper);border:0;border-radius:9px;\n  padding:14px;font-family:var(--display);font-size:13.5px;font-weight:700;letter-spacing:.02em;cursor:pointer;transition:.15s}\n#smao-booking .cta:hover:not(:disabled){background:var(--amber-deep)}\n#smao-booking .cta:disabled{background:var(--rule);color:var(--ink-30);cursor:not-allowed}\n\n/* --- states -------------------------------------------------- */\n#smao-booking .loading{font-family:var(--mono);font-size:11px;color:var(--ink-30);letter-spacing:.08em;text-transform:uppercase}\n#smao-booking .banner{border:1px solid #F3E3A6;border-left:3px solid var(--amber);background:#FFFCEF;\n  border-radius:8px;padding:10px 12px;font-size:11.5px;margin-bottom:18px;line-height:1.55;color:var(--ink-60)}\n\n#smao-booking .done{text-align:center;padding:34px 20px}\n#smao-booking .done .tick{width:52px;height:52px;border-radius:50%;background:var(--amber);display:grid;place-items:center;\n  margin:0 auto 16px;font-size:26px;color:var(--ink)}\n#smao-booking .done h3{font-size:19px;margin-bottom:8px}\n#smao-booking .done p{color:var(--ink-60);font-size:14px;max-width:400px;margin:0 auto 8px}\n#smao-booking .ref{font-family:var(--mono);font-size:13px;background:var(--wash);border:1px dashed var(--rule);\n  border-radius:8px;padding:9px 12px;display:inline-block;margin:12px 0}\n#smao-booking .paybox{border:1px solid #F3E3A6;background:#FFFCEF;border-radius:8px;padding:14px;margin:16px auto 4px;\n  max-width:420px;text-align:left;font-size:12.5px;line-height:1.7}\n#smao-booking .pay-status{font-family:var(--mono);font-size:11.5px;color:var(--ink-60);margin:10px 0 0;line-height:1.6}\n#smao-booking .pay-status.bad{color:var(--danger)}\n#smao-booking .policy-links{font-family:var(--mono);font-size:11px;color:var(--ink-30);margin-top:18px;\n  padding-top:14px;border-top:1px solid var(--rule);line-height:1.9}\n#smao-booking .policy-links a{color:var(--ink-60)}\n#smao-booking .paybox b{display:block;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--ink-60);margin-bottom:6px}\n#smao-booking :focus-visible{outline:2px solid var(--amber-deep);outline-offset:2px}\n@media(prefers-reduced-motion:reduce){#smao-booking *{transition:none!important;animation:none!important}}\n\n#smao-booking button,#smao-booking input,#smao-booking select,#smao-booking textarea{font-family:var(--body);letter-spacing:normal;text-transform:none}\n#smao-booking button{margin:0;box-shadow:none;text-shadow:none;min-width:0;line-height:1.4}\n#smao-booking h1,#smao-booking h2,#smao-booking h3{text-transform:none;color:var(--ink)}\n#smao-booking p{margin-top:0}";
var HTML = "<header class=\"mast\">\n    <h1>Book the Studio</h1>\n    <p class=\"sub\">3 hours minimum \u00b7 book 7 to 90 days ahead</p>\n  </header>\n\n  <div class=\"grid\">\n    <!-- ================= CALENDAR ================= -->\n    <section id=\"mao-cal-section\">\n      <p class=\"eyebrow\">1 \u2014 Pick your time \u00b7 drag down the grid to take more hours</p>\n      <div class=\"cal-bar\">\n        <div class=\"nav\">\n          <button class=\"icon-btn\" id=\"mao-prev\" aria-label=\"Previous\">\u2039</button>\n          <button class=\"icon-btn\" id=\"mao-next\" aria-label=\"Next\">\u203a</button>\n          <h2 id=\"mao-title\">\u2014</h2>\n        </div>\n        <div class=\"switchers\">\n          <button class=\"today-btn\" id=\"mao-today\">Earliest date</button>\n          <button class=\"today-btn\" id=\"mao-clear\" disabled>Clear selection</button>\n          <div class=\"seg\" role=\"group\" aria-label=\"Clock format\">\n            <button data-clock=\"24\" aria-pressed=\"true\">24h</button>\n            <button data-clock=\"12\" aria-pressed=\"false\">12h</button>\n          </div>\n          <div class=\"seg\" role=\"group\" aria-label=\"Calendar view\">\n            <button data-view=\"month\" aria-pressed=\"true\">Month</button>\n            <button data-view=\"week\" aria-pressed=\"false\">Week</button>\n            <button data-view=\"day\" aria-pressed=\"false\">Day</button>\n          </div>\n        </div>\n      </div>\n\n      <div id=\"mao-calendar\"><p class=\"loading\">Loading availability\u2026</p></div>\n\n      <div class=\"key\">\n        <span><i class=\"k-free\"></i>Available</span>\n        <span><i class=\"k-busy\"></i>Already booked</span>\n        <span><i class=\"k-sel\"></i>Your selection</span>\n        <span><i class=\"k-closed\"></i>Closed</span>\n      </div>\n    </section>\n\n    <!-- ================= FORM ================= -->\n    <aside class=\"panel\">\n      <div id=\"mao-formView\">\n        <p class=\"eyebrow\">2 \u2014 Your details</p>\n        <h3>Booking request</h3>\n        <p class=\"hint\">Pick a slot on the calendar, or set the date and time here.</p>\n\n        <div class=\"banner\">\n          Need more than one day, or something this form doesn't cover? Email\n          <a href=\"mailto:studiomao.lagos@gmail.com\">studiomao.lagos@gmail.com</a> or WhatsApp\n          <a href=\"https://wa.me/2348172026771\">0817 202 6771</a>.\n        </div>\n\n        <div class=\"two\">\n          <div class=\"field\">\n            <label for=\"mao-f-date\">Date</label>\n            <input type=\"date\" id=\"mao-f-date\">\n          </div>\n          <div class=\"field\">\n            <label for=\"mao-f-start\">Start</label>\n            <select id=\"mao-f-start\"><option value=\"\">\u2014</option></select>\n          </div>\n        </div>\n        <div class=\"field\">\n          <label for=\"mao-f-dur\">Duration</label>\n          <select id=\"mao-f-dur\"><option value=\"\">\u2014</option></select>\n          <p class=\"err\" id=\"mao-e-time\"></p>\n        </div>\n\n        <div class=\"field\">\n          <label for=\"mao-f-name\">Full name</label>\n          <input id=\"mao-f-name\" autocomplete=\"name\" placeholder=\"Ada Nwosu\">\n        </div>\n        <div class=\"two\">\n          <div class=\"field\">\n            <label for=\"mao-f-email\">Email</label>\n            <input id=\"mao-f-email\" type=\"email\" autocomplete=\"email\" placeholder=\"ada@company.com\">\n          </div>\n          <div class=\"field\">\n            <label for=\"mao-f-phone\">Phone</label>\n            <input id=\"mao-f-phone\" type=\"tel\" autocomplete=\"tel\" placeholder=\"0803 000 0000\">\n          </div>\n        </div>\n        <div class=\"field\">\n          <label for=\"mao-f-org\">Organisation <span style=\"text-transform:none;letter-spacing:0\">(optional)</span></label>\n          <input id=\"mao-f-org\" autocomplete=\"organization\" placeholder=\"Company or group name\">\n        </div>\n        <div class=\"field\">\n          <label for=\"mao-f-guests\">Expected guests</label>\n          <input id=\"mao-f-guests\" type=\"number\" min=\"1\" max=\"200\" placeholder=\"e.g. 30\">\n        </div>\n\n        <div class=\"field\">\n          <label>Seating arrangement</label>\n          <div class=\"seats\" id=\"mao-seats\"></div>\n          <p class=\"qnote\" id=\"mao-seat-note\"></p>\n        </div>\n\n        <div class=\"field\">\n          <label for=\"mao-f-notes\">Anything we should know <span style=\"text-transform:none;letter-spacing:0\">(optional)</span></label>\n          <textarea id=\"mao-f-notes\" rows=\"2\" placeholder=\"Projector, catering access, early setup\u2026\"></textarea>\n        </div>\n\n        <!-- quote -->\n        <div class=\"quote\" id=\"mao-quote\">\n          <div class=\"qline\"><span>Select a time to see the cost</span><b>\u2014</b></div>\n        </div>\n\n        <p class=\"err\" id=\"mao-e-form\"></p>\n        <button class=\"cta\" id=\"mao-submit\" disabled>Complete your Booking</button>\n        <p class=\"qnote\" id=\"mao-hold-note\"></p>\n      </div>\n\n      <!-- success -->\n      <div id=\"mao-doneView\" style=\"display:none\" class=\"done\">\n        <div class=\"tick\" id=\"mao-tick\">\u2713</div>\n        <h3 id=\"mao-done-title\">Thank you for booking</h3>\n        <p id=\"mao-done-msg\"></p>\n        <p class=\"qnote\" id=\"mao-done-hold\"></p>\n        <div class=\"ref\" id=\"mao-done-ref\"></div>\n        <p id=\"mao-done-sub\" style=\"font-size:13px\"></p>\n        <div id=\"mao-done-pay\"></div>\n        <button class=\"cta\" id=\"mao-pay-btn\" style=\"display:none\">Pay with Paystack</button>\n        <p class=\"pay-status\" id=\"mao-pay-status\"></p>\n        <button class=\"cta\" id=\"mao-again\" style=\"background:var(--paper);color:var(--ink);border:1px solid var(--rule)\">Make another booking</button>\n        <p class=\"policy-links\" id=\"mao-done-links\"></p>\n      </div>\n    </aside>\n  </div>";
function inject() {
if (!document.getElementById('smao-font')) {
var l = document.createElement('link');
l.id = 'smao-font'; l.rel = 'stylesheet'; l.href = FONT;
document.head.appendChild(l);
}
if (!document.getElementById('smao-css')) {
var s = document.createElement('style');
s.id = 'smao-css'; s.textContent = CSS;
document.head.appendChild(s);
}
}
function boot() {
var ROOT = document.getElementById('smao-booking');
if (!ROOT) {
ROOT = document.createElement('div');
ROOT.id = 'smao-booking';
document.body.appendChild(ROOT);
}
if (ROOT.getAttribute('data-smao-ready')) return;
ROOT.setAttribute('data-smao-ready', '1');
inject();
ROOT.innerHTML = HTML;
app(ROOT);
}
function app(ROOT) {
const CONFIG = {
API_URL: '',
DEMO: true,
CURRENCY: '₦',
SLOT_MINUTES: 60,
BUFFER_MINUTES: 60,
MIN_HOURS: 3,
MAX_HOURS: 8,
GRID_HOURS: [8, 18],
LEAD_DAYS_MIN: 7,
LEAD_DAYS_MAX: 90,
CLOCK: '24',
CONTACT: { email:'studiomao.lagos@gmail.com', whatsapp:'08172026771' },
HOLD_NOTE: 'Your booking will be confirmed only when your payment is complete. '
+ 'If your booking remains unpaid after 48 hours, it will be released, and you will need to rebook.',
LINKS: {
rules: 'https://studiomao.carrd.co/#rules',
policy: 'https://studiomao.carrd.co/#bookingpolicy',
faqs: 'https://studiomao.carrd.co/#faqs'
},
PAYMENT_DETAILS: 'Account name: MAO Creative Design Studio\nBank: Providus Bank\n'
+ 'Account number: 7900838582\n'
+ 'Use your booking reference as the transfer narration.',
HOURS: { 0:null, 1:[9,17], 2:[9,17], 3:[9,17], 4:[9,17], 5:[9,17], 6:[10,16] },
PRICING: {
hourlyRate: 25000,
discountFromHours: 4, discountPct: 0.05,
flatFromHours: 7, flatRate: 160000,
cautionBase: 10000, cautionPct: 0.10
},
SEATING: [
{ name:'Classroom',  cap:30 },
{ name:'Auditorium', cap:65 },
{ name:'Conference', cap:20 },
{ name:'U-shape',    cap:16 },
{ name:'Open',       cap:65 }
]
};
Object.assign(CONFIG, (window.SMAO_BOOKING || {}));
const S = {
view: 'month',
clock: CONFIG.CLOCK,
cursor: startOfDay(new Date()),
selDate: null,
selStart: null,
selHours: null,
busy: {},
seating: null,
loaded: new Set(),
sending: false
};
function startOfDay(d){ const x=new Date(d); x.setHours(0,0,0,0); return x; }
function addDays(d,n){ const x=new Date(d); x.setDate(x.getDate()+n); return x; }
function weekStart(d){ return addDays(startOfDay(d), -((d.getDay()+6)%7)); }
function iso(d){ return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); }
function parseISO(s){ const [y,m,d]=s.split('-').map(Number); return new Date(y,m-1,d); }
function hhmm(min){ return String(Math.floor(min/60)).padStart(2,'0')+':'+String(min%60).padStart(2,'0'); }
function fmtTime(min){
if(S.clock==='24') return hhmm(min);
const h=Math.floor(min/60), m=min%60, ap=h<12?'am':'pm';
return ((h%12)||12)+(m?':'+String(m).padStart(2,'0'):'')+ap;
}
function esc(s){ return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function money(n){ return CONFIG.CURRENCY + Math.round(n).toLocaleString('en-NG'); }
function hoursLabel(h){ return h===1?'1 hour':h+' hours'; }
function hoursFor(dateStr){ return CONFIG.HOURS[parseISO(dateStr).getDay()]; }
function isWeekend(dateStr){ const d=parseISO(dateStr).getDay(); return d===0||d===6; }
function windowStart(){ return addDays(startOfDay(new Date()), CONFIG.LEAD_DAYS_MIN); }
function firstOpenDay(){
const end = windowEnd();
for(let d=windowStart(); d<=end; d=addDays(d,1)){
const k=iso(d);
if(!S.loaded.has(k)) return null;
if(hoursFor(k) && freeHours(k)>=CONFIG.MIN_HOURS) return d;
}
return null;
}
function windowEnd(){ return addDays(startOfDay(new Date()), CONFIG.LEAD_DAYS_MAX); }
function bookable(dateStr){ const d=parseISO(dateStr); return d>=windowStart() && d<=windowEnd(); }
function busyFor(dateStr){ return S.busy[dateStr] || []; }
function blocked(dateStr){
const B = CONFIG.BUFFER_MINUTES;
return busyFor(dateStr).map(b => [b[0]-B, b[1]+B]);
}
function slotFree(dateStr, from, to){
const oh = hoursFor(dateStr); if(!oh) return false;
if(from < oh[0]*60 || to > oh[1]*60) return false;
return !blocked(dateStr).some(b => from < b[1] && to > b[0]);
}
function startTimes(dateStr){
const oh = hoursFor(dateStr); if(!oh || !bookable(dateStr)) return [];
const out=[], step=CONFIG.SLOT_MINUTES, min=CONFIG.MIN_HOURS*60;
for(let t=oh[0]*60; t+min<=oh[1]*60; t+=step){
if(slotFree(dateStr,t,t+min)) out.push(t);
}
return out;
}
function maxHours(dateStr, start){
const oh = hoursFor(dateStr); if(!oh) return 0;
let end = oh[1]*60;
blocked(dateStr).forEach(b => { if(b[0]>=start && b[0]<end) end=b[0]; });
return Math.max(0, Math.min(CONFIG.MAX_HOURS, Math.floor((end-start)/60)));
}
function freeHours(dateStr){
const oh=hoursFor(dateStr); if(!oh||!bookable(dateStr)) return 0;
let mins=0;
for(let t=oh[0]*60;t<oh[1]*60;t+=CONFIG.SLOT_MINUTES) if(slotFree(dateStr,t,t+CONFIG.SLOT_MINUTES)) mins+=CONFIG.SLOT_MINUTES;
return mins/60;
}
function quote(dateStr, hours){
const P=CONFIG.PRICING;
let base, flat=false, disc=0;
if(hours >= P.flatFromHours){ base=P.flatRate; flat=true; }
else {
base = hours * P.hourlyRate;
if(hours >= P.discountFromHours){ disc = base*P.discountPct; base -= disc; }
}
const total = base;
const caution = P.cautionBase + total*P.cautionPct;
return { base, flat, disc, total, caution, dueNow: total+caution };
}
let paystackLoading=null;
function loadPaystack(){
if(window.PaystackPop) return Promise.resolve(true);
if(paystackLoading) return paystackLoading;
paystackLoading=new Promise(resolve=>{
const s=document.createElement('script');
s.src='https://js.paystack.co/v2/inline.js';
s.onload=()=>resolve(!!window.PaystackPop);
s.onerror=()=>resolve(false);
document.head.appendChild(s);
});
return paystackLoading;
}
function jsonpOnce(params, timeoutMs){
return new Promise((resolve,reject)=>{
const cb='smcb_'+Math.random().toString(36).slice(2);
const s=document.createElement('script');
const t=setTimeout(()=>{cleanup();reject(new Error('Request timed out'))}, timeoutMs||20000);
function cleanup(){ clearTimeout(t); delete window[cb]; s.remove(); }
window[cb]=d=>{cleanup();resolve(d)};
s.onerror=()=>{cleanup();reject(new Error('Could not reach the booking service'))};
s.src = CONFIG.API_URL+'?callback='+cb+'&'+new URLSearchParams(params).toString()+'&t='+Date.now();
document.body.appendChild(s);
});
}
async function jsonp(params, tries){
const attempts = tries || 2;
let last;
for(let i=0;i<attempts;i++){
try { return await jsonpOnce(params); }
catch(e){ last=e; if(i<attempts-1) await new Promise(r=>setTimeout(r, 1200*(i+1))); }
}
throw last;
}
function demoBusy(dateStr){
const d=parseISO(dateStr), seed=(d.getDate()*31+d.getMonth()*7)%11, oh=hoursFor(dateStr);
if(!oh) return [];
const out=[];
if(seed%3===0) out.push([oh[0]*60, oh[0]*60+120]);
if(seed%4===1) out.push([13*60, 15*60]);
if(seed%5===2) out.push([oh[1]*60-120, oh[1]*60]);
if(seed===7) out.push([oh[0]*60, oh[1]*60]);
return out.sort((a,b)=>a[0]-b[0]);
}
function loadWindow(){
return loadRange(windowStart(), windowEnd());
}
const inFlight = new Map();
async function loadRange(from, to){
const keys=[]; for(let d=new Date(from); d<=to; d=addDays(d,1)) keys.push(iso(d));
keys.forEach(k=>{ if(!bookable(k) && !S.loaded.has(k)){ S.busy[k]=[]; S.loaded.add(k); } });
const need = keys.filter(k=>!S.loaded.has(k));
if(!need.length) return;
const tag = need[0]+'_'+need[need.length-1];
if(inFlight.has(tag)) return inFlight.get(tag);
const job = fetchRange(from, to, need).finally(()=>inFlight.delete(tag));
inFlight.set(tag, job);
return job;
}
async function fetchRange(from, to, need){
if(CONFIG.DEMO || !CONFIG.API_URL){
need.forEach(k=>{ S.busy[k]=demoBusy(k); S.loaded.add(k); });
return;
}
const lo = need[0], hi = need[need.length-1];
const res = await jsonp({ action:'availability', from:lo, to:hi });
if(!res.ok) throw new Error(res.error||'Availability unavailable');
need.forEach(k=>{ S.busy[k]=res.busy[k]||[]; S.loaded.add(k); });
if(res.config){ Object.assign(CONFIG.HOURS,res.config.hours||{}); Object.assign(CONFIG.PRICING,res.config.pricing||{}); }
}
const el = id => ROOT.querySelector('#mao-'+id);
const calEl = el('calendar');
async function render(){
const [from,to] = rangeFor();
el('title').textContent = titleFor();
if(missingIn(from,to)) calEl.innerHTML = '<p class="loading">Loading availability…</p>';
try { await loadRange(from,to); }
catch(e){ calEl.innerHTML = '<div class="banner">Availability didn\'t load: '+e.message+'. Refresh to try again.</div>'; return; }
if(S.view==='month') renderMonth(); else renderGrid(S.view==='week');
}
function missingIn(from,to){
for(let d=new Date(from); d<=to; d=addDays(d,1)){
const k=iso(d);
if(bookable(k) && !S.loaded.has(k)) return true;
}
return false;
}
function rangeFor(){
if(S.view==='month'){
const gs=weekStart(new Date(S.cursor.getFullYear(),S.cursor.getMonth(),1));
return [gs, addDays(gs,41)];
}
if(S.view==='week'){ const f=weekStart(S.cursor); return [f,addDays(f,6)]; }
return [S.cursor,S.cursor];
}
function titleFor(){
const o={month:{month:'long',year:'numeric'},day:{weekday:'long',day:'numeric',month:'long'}};
if(S.view==='month') return S.cursor.toLocaleDateString('en-GB',o.month);
if(S.view==='day')   return S.cursor.toLocaleDateString('en-GB',o.day);
const f=weekStart(S.cursor);
return f.toLocaleDateString('en-GB',{day:'numeric',month:'short'})+' — '+addDays(f,6).toLocaleDateString('en-GB',{day:'numeric',month:'short'});
}
function renderMonth(){
const first=new Date(S.cursor.getFullYear(),S.cursor.getMonth(),1);
const gridStart=weekStart(first);
let h='<div class="dow">'+['MON','TUE','WED','THU','FRI','SAT','SUN'].map(d=>`<span>${d}</span>`).join('')+'</div><div class="month">';
for(let i=0;i<42;i++){
const d=addDays(gridStart,i), k=iso(d);
const out=d.getMonth()!==S.cursor.getMonth();
const closed=!hoursFor(k), inWindow=bookable(k), free=freeHours(k);
const dis=closed||!inWindow||free<CONFIG.MIN_HOURS;
const cls=['day',out?'out':'',k===iso(new Date())?'today':'',k===S.selDate?'sel':''].join(' ');
const note = !inWindow ? '' : closed ? 'Closed' : free<CONFIG.MIN_HOURS ? 'Full' : free+'h free';
h+=`<button class="${cls}" data-date="${k}" ${dis?'disabled':''}><span class="n">${d.getDate()}</span><span class="free">${note}</span></button>`;
}
calEl.innerHTML=h+'</div>';
calEl.querySelectorAll('.day:not(:disabled)').forEach(b=>b.onclick=()=>{ S.cursor=parseISO(b.dataset.date); S.view='day'; syncSeg(); pickDate(b.dataset.date); render(); });
}
function renderGrid(week){
const days = week ? Array.from({length:7},(_,i)=>addDays(weekStart(S.cursor),i)) : [S.cursor];
const cols = `grid-template-columns:64px repeat(${days.length},1fr)`;
const open = CONFIG.GRID_HOURS[0], close = CONFIG.GRID_HOURS[1];
let h=`<div class="tgwrap"><div class="tghead" style="${cols}"><div></div>`;
days.forEach(d=>{ const oh=hoursFor(iso(d));
h+=`<div class="${oh?'':'closed'}">${d.toLocaleDateString('en-GB',{weekday:'short'})}<b>${d.getDate()}</b></div>`; });
h+='</div><div class="tgbody">';
for(let t=open*60;t<close*60;t+=CONFIG.SLOT_MINUTES){
h+=`<div class="tgrow" style="${cols}"><div class="tlabel">${fmtTime(t)}</div>`;
days.forEach(d=>{
const k=iso(d), oh=hoursFor(k);
const shut = !oh || t<oh[0]*60 || t+CONFIG.SLOT_MINUTES>oh[1]*60 || !bookable(k);
const free = !shut && slotFree(k,t,t+CONFIG.SLOT_MINUTES);
let cls='slot';
if(shut) cls+=' closed';
if(S.selDate===k && S.selStart!==null && S.selHours && t>=S.selStart && t<S.selStart+S.selHours*60)
cls += (t===S.selStart?' start':' inrange');
const label = shut ? 'Unavailable' : free ? 'Free' : 'Booked';
h+=`<button class="${cls}" data-date="${k}" data-t="${t}" ${(shut||!free)?'disabled':''}
aria-label="${k} ${fmtTime(t)} — ${label}"></button>`;
});
h+='</div>';
}
calEl.innerHTML=h+'</div></div>';
wireDrag();
}
function paintSlots(){
calEl.querySelectorAll('.slot').forEach(b=>{
const k=b.dataset.date, t=+b.dataset.t;
const on = S.selDate===k && S.selStart!==null && S.selHours && t>=S.selStart && t<S.selStart+S.selHours*60;
b.classList.toggle('start', !!on && t===S.selStart);
b.classList.toggle('inrange', !!on && t!==S.selStart);
});
}
function paintSelection(){ if(S.view!=='month') paintSlots(); else render(); }
function wireDrag(){
let dragging=false;
const grid=calEl.querySelector('.tgbody');
if(!grid) return;
function anchorAt(b){
if(!b || b.disabled) return false;
const k=b.dataset.date, t=+b.dataset.t;
const oh=hoursFor(k); if(!oh) return false;
const latest = oh[1]*60 - CONFIG.MIN_HOURS*60;
let start = Math.min(t, latest);
while(start >= oh[0]*60 && !slotFree(k, start, start+CONFIG.MIN_HOURS*60)) start -= 60;
if(start < oh[0]*60) return false;
pickDate(k); setStart(start); paintSlots();
return true;
}
function extendTo(b){
if(!b || b.dataset.date!==S.selDate) return;
const t=+b.dataset.t;
if(t < S.selStart) return;
const want=(t-S.selStart)/60+1;
const h=Math.max(CONFIG.MIN_HOURS, Math.min(want, maxHours(S.selDate,S.selStart)));
if(h!==S.selHours){ S.selHours=h; fillDurations(); paint(); paintSlots(); }
}
grid.addEventListener('pointerdown', e=>{
const b=e.target.closest('.slot');
if(!anchorAt(b)) return;
e.preventDefault();
dragging=true; grid.classList.add('dragging');
});
grid.addEventListener('pointermove', e=>{
if(!dragging) return;
const under=document.elementFromPoint(e.clientX,e.clientY);
extendTo(under && under.closest && under.closest('.slot'));
});
window.addEventListener('pointerup', ()=>{ dragging=false; grid.classList.remove('dragging'); });
window.addEventListener('pointercancel', ()=>{ dragging=false; grid.classList.remove('dragging'); });
}
function syncSeg(){ ROOT.querySelectorAll('.seg button[data-view]').forEach(b=>b.setAttribute('aria-pressed', String(b.dataset.view===S.view))); }
function pickDate(k){
S.selDate=k; el('f-date').value=k;
const opts=startTimes(k);
el('f-start').innerHTML='<option value="">—</option>'+opts.map(t=>`<option value="${t}">${fmtTime(t)}</option>`).join('');
if(!opts.includes(S.selStart)){ S.selStart=null; S.selHours=null; }
fillDurations(); paint();
}
function setStart(t){
S.selStart=t; el('f-start').value=t;
const max=maxHours(S.selDate,t);
if(!S.selHours || S.selHours>max) S.selHours=Math.min(CONFIG.MIN_HOURS,max);
fillDurations(); paint();
}
function fillDurations(){
const sel=el('f-dur');
if(S.selDate===null||S.selStart===null){ sel.innerHTML='<option value="">—</option>'; sel.disabled=true; return; }
sel.disabled=false;
const max=maxHours(S.selDate,S.selStart); let h='';
for(let x=CONFIG.MIN_HOURS;x<=max;x++) h+=`<option value="${x}">${hoursLabel(x)}</option>`;
sel.innerHTML = h || '<option value="">No duration available</option>';
if(S.selHours) sel.value=S.selHours; else if(sel.options.length){ sel.selectedIndex=0; S.selHours=+sel.value; }
}
function clearSelection(){
S.selDate=null; S.selStart=null; S.selHours=null;
el('f-date').value='';
el('f-start').innerHTML='<option value="">—</option>';
el('f-dur').innerHTML='<option value="">—</option>'; el('f-dur').disabled=true;
el('e-time').classList.remove('on');
paint(); render();
}
function resetForm(){
S.seating=null;
['f-name','f-email','f-phone','f-org','f-guests','f-notes'].forEach(id=>{ el(id).value=''; });
ROOT.querySelectorAll('.seat').forEach(l=>{
l.classList.remove('on','off');
const r=l.querySelector('input'); if(r) r.checked=false;
});
el('e-form').classList.remove('on');
syncSeats();
S.cursor=windowStart(); S.view='month'; syncSeg();
clearSelection();
}
function paint(){
const q=el('quote');
const chosen = !!(S.selDate&&S.selStart!==null&&S.selHours);
el('clear').disabled = !chosen;
if(!chosen){
q.innerHTML='<div class="qline"><span>Select a time to see the cost</span><b>—</b></div>';
el('submit').disabled=true; return;
}
const c=quote(S.selDate,S.selHours), P=CONFIG.PRICING;
const when=parseISO(S.selDate).toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short'});
q.innerHTML = `
<div class="qline"><span>${when}, ${fmtTime(S.selStart)}–${fmtTime(S.selStart+S.selHours*60)}</span><b>${hoursLabel(S.selHours)}</b></div>
<div class="qline"><span>${c.flat?'Full-day rate':'Space hire'}${c.disc?`<span class="badge">5% off</span>`:''}</span><b>${money(c.base)}</b></div>
<div class="qline sub total"><span>Booking total</span><b>${money(c.total)}</b></div>
<div class="qline"><span>Caution fee <span class="badge">refundable</span></span><b>${money(c.caution)}</b></div>
<div class="qline sub total"><span>Due now</span><b>${money(c.dueNow)}</b></div>
<p class="qnote">Caution fee is ${money(P.cautionBase)} plus 10% of the booking total, refunded within 5 working days of the event if the space is left as found.</p>`;
el('submit').disabled = S.sending;
}
const chair='<rect width="6" height="6" rx="1.5" fill="#111111"/>';
function seatSVG(kind){
const g=(x,y,w,h)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="none" stroke="#FFC500" stroke-width="2"/>`;
const c=(x,y)=>`<circle cx="${x}" cy="${y}" r="3.2" fill="#111111"/>`;
const stage=`<rect x="24" y="4" width="52" height="7" rx="2" fill="#111111"/>`;
let inner='';
if(kind==='Classroom'){ inner=stage;
for(let r=0;r<3;r++) for(let i=0;i<3;i++){ inner+=g(14+i*26,20+r*15,20,6)+c(24+i*26,32+r*15); } }
if(kind==='Auditorium'){ inner=stage;
for(let r=0;r<4;r++) for(let i=0;i<6;i++) inner+=c(16+i*14+(r%2?4:0),22+r*11); }
if(kind==='U-shape'){ inner=stage
+g(20,18,10,40)+g(70,18,10,40)+g(20,58,60,8);
[0,1,2].forEach(i=>{inner+=c(12,26+i*14)+c(88,26+i*14)});
[0,1,2].forEach(i=>{inner+=c(32+i*18,72)}); }
if(kind==='Conference'){ inner=g(26,24,48,26);
[0,1,2].forEach(i=>{inner+=c(36+i*14,17)+c(36+i*14,57)});
inner+=c(19,37)+c(81,37); }
if(kind==='Open'){ inner=`<rect x="10" y="8" width="80" height="60" rx="4" fill="none" stroke="#9A9A9A" stroke-width="2" stroke-dasharray="5 4"/>
<text x="50" y="43" text-anchor="middle" font-family="Space Mono,monospace" font-size="9" fill="#9A9A9A">your call</text>`; }
return `<svg viewBox="0 0 100 78" aria-hidden="true">${inner}</svg>`;
}
el('seats').innerHTML = CONFIG.SEATING.map(s=>
`<label class="seat" data-k="${s.name}" data-cap="${s.cap}">
<input type="radio" name="mao-seat" value="${s.name}">${seatSVG(s.name)}
<span>${s.name}</span><span class="cap">seats ${s.cap}</span>
</label>`).join('');
ROOT.querySelectorAll('.seat').forEach(l=>l.onclick=()=>{
if(l.classList.contains('off')) return;
S.seating=l.dataset.k;
ROOT.querySelectorAll('.seat').forEach(x=>x.classList.toggle('on',x===l));
});
const MAX_CAP = Math.max.apply(null, CONFIG.SEATING.map(s=>s.cap));
function syncSeats(){
const g = parseInt(el('f-guests').value, 10);
ROOT.querySelectorAll('.seat').forEach(l=>{
const off = g > 0 && g > +l.dataset.cap;
l.classList.toggle('off', off);
if(off && S.seating === l.dataset.k){ S.seating = null; l.classList.remove('on'); }
});
const note = el('seat-note');
if(g > MAX_CAP) note.textContent = 'The space holds ' + MAX_CAP + ' people at most. Drop the guest count to see layouts.';
else if(g > 0) note.textContent = '';
else note.textContent = 'Enter your guest count to see which layouts fit.';
}
el('f-guests').oninput = syncSeats;
ROOT.querySelectorAll('.seg button[data-view]').forEach(b=>b.onclick=()=>{ S.view=b.dataset.view; syncSeg(); render(); });
ROOT.querySelectorAll('.seg button[data-clock]').forEach(b=>b.onclick=()=>{
S.clock=b.dataset.clock;
ROOT.querySelectorAll('.seg button[data-clock]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));
const keepStart=S.selStart;
if(S.selDate){ pickDate(S.selDate); if(keepStart!==null) setStart(keepStart); }
render();
});
el('prev').onclick=()=>{ shift(-1); };
el('next').onclick=()=>{ shift(1); };
el('today').onclick=async ()=>{
const btn=el('today'); const label=btn.textContent;
btn.disabled=true; btn.textContent='Finding…';
try{
let found=firstOpenDay(), probe=windowStart();
while(!found && probe<=windowEnd()){
await loadRange(probe, addDays(probe,30));
found=firstOpenDay();
probe=addDays(probe,31);
}
if(found){ S.cursor=found; if(S.view==='month') S.view='month'; await render(); }
else { S.cursor=windowStart(); await render(); }
} finally { btn.disabled=false; btn.textContent=label; }
};
el('clear').onclick=clearSelection;
function shift(n){
if(S.view==='month') S.cursor=new Date(S.cursor.getFullYear(),S.cursor.getMonth()+n,1);
else S.cursor=addDays(S.cursor,S.view==='week'?7*n:n);
render();
}
el('f-date').onchange=async e=>{
const k=e.target.value; if(!k) return;
S.cursor=parseISO(k);
await loadRange(parseISO(k),parseISO(k));
const err=el('e-time');
if(!bookable(k)){
err.textContent='Bookings open '+CONFIG.LEAD_DAYS_MIN+' days ahead and run '+CONFIG.LEAD_DAYS_MAX+' days out. For anything sooner, email studiomao.lagos@gmail.com.';
err.classList.add('on'); return;
}
if(!hoursFor(k)){ err.textContent='We\'re closed that day. Mon–Fri 9–5, Sat 10–4.'; err.classList.add('on'); return; }
err.classList.remove('on'); pickDate(k); render();
};
el('f-start').onchange=e=>{ if(e.target.value){ setStart(+e.target.value); paintSelection(); } };
el('f-dur').onchange=e=>{ S.selHours=+e.target.value; paint(); paintSelection(); };
async function startPayment(res, email){
const pay=el('pay-btn'), status=el('pay-status');
status.textContent=''; status.className='pay-status';
if(!res.accessCode){ location.href=res.paymentUrl; return; }
pay.disabled=true; pay.textContent='Opening payment…';
const ready=await loadPaystack();
if(!ready){
if(res.paymentUrl){ location.href=res.paymentUrl; return; }
pay.disabled=false; pay.textContent='Pay with Paystack';
status.textContent='We couldn\'t open the payment window. Please use the link in your email, or pay by transfer.';
status.className='pay-status bad';
return;
}
pay.disabled=false; pay.textContent='Pay with Paystack';
try{
new window.PaystackPop().resumeTransaction(res.accessCode, {
onSuccess: ()=>settlePayment(res.reference, email),
onLoad:    ()=>{},
onCancel:  ()=>{
status.textContent='Payment cancelled. Your slot is still held — you can try again.';
status.className='pay-status';
},
onError:   e=>{
status.textContent='Payment failed: '+((e&&e.message)||'please try again')+'.';
status.className='pay-status bad';
}
});
}catch(e){
if(res.paymentUrl) location.href=res.paymentUrl;
}
}
async function settlePayment(reference, email){
const pay=el('pay-btn'), status=el('pay-status'), payBox=el('done-pay');
pay.disabled=true; pay.textContent='Confirming…';
status.textContent='Confirming your payment…'; status.className='pay-status';
const paidView=(msg)=>{
el('done-title').textContent='Payment received';
el('done-msg').textContent=msg;
el('done-hold').textContent='';
payBox.innerHTML='';
pay.style.display='none';
status.textContent=''; status.className='pay-status';
};
try{
const out = (CONFIG.DEMO || !CONFIG.API_URL)
? { ok:true }
: await jsonp({ action:'confirm', reference }, 3);
if(!out.ok) throw new Error(out.error||'not confirmed yet');
paidView(`Thank you — your booking is confirmed. A confirmation email is on its way to ${email}.`);
}catch(e){
paidView('Thank you — your payment went through. We\'re finishing up your confirmation, '
+ `and the email will reach ${email} shortly. Your reference is ${reference}.`);
el('done-hold').textContent='If the email hasn\'t arrived within an hour, send us your reference and we\'ll sort it out.';
console.warn('studio.MAO: confirm call failed —', e.message);
}
}
el('again').onclick=()=>{
el('doneView').style.display='none'; el('formView').style.display='block';
el('cal-section').style.display='';
el('done-title').textContent='Thank you for booking';
el('pay-status').textContent=''; el('pay-status').className='pay-status';
resetForm();
};
el('submit').onclick=async ()=>{
const err=el('e-form'); err.classList.remove('on');
const data={
date:S.selDate, start:S.selStart!==null?hhmm(S.selStart):'', hours:S.selHours,
name:el('f-name').value.trim(), email:el('f-email').value.trim(), phone:el('f-phone').value.trim(),
org:el('f-org').value.trim(), guests:el('f-guests').value, seating:S.seating, notes:el('f-notes').value.trim()
};
const missing=[];
if(!data.date||!data.start||!data.hours) missing.push('a time slot');
else if(!bookable(data.date)){ err.textContent='Bookings run from '+CONFIG.LEAD_DAYS_MIN+' to '+CONFIG.LEAD_DAYS_MAX+' days ahead. Email studiomao.lagos@gmail.com for anything outside that.'; err.classList.add('on'); return; }
if(!data.name) missing.push('your name');
if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) missing.push('a valid email');
if(data.phone.replace(/\D/g,'').length<7) missing.push('a phone number');
const g=parseInt(data.guests,10);
if(!g||g<1) missing.push('your expected guest count');
if(!data.seating) missing.push('a seating arrangement');
if(missing.length){ err.textContent='Still needed: '+missing.join(', ')+'.'; err.classList.add('on'); return; }
const cap=(CONFIG.SEATING.find(s=>s.name===data.seating)||{}).cap;
if(g>cap){ err.textContent=data.seating+' seating tops out at '+cap+' people. Pick another layout.'; err.classList.add('on'); return; }
S.sending=true; el('submit').disabled=true; el('submit').textContent='Sending…';
try{
let res;
if(CONFIG.DEMO || !CONFIG.API_URL){
await new Promise(r=>setTimeout(r,700));
res={ ok:true, reference:'MAO-'+Date.now().toString(36).toUpperCase().slice(-6), demo:true };
} else {
res=await jsonp(Object.assign({action:'book'},data));
}
if(!res.ok) throw new Error(res.error||'That slot was just taken. Pick another.');
const c=quote(data.date,data.hours);
el('done-ref').textContent = 'Reference: '+res.reference;
el('done-sub').textContent = `${parseISO(data.date).toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long'})}, ${fmtTime(S.selStart)}–${fmtTime(S.selStart+data.hours*60)} · ${money(c.dueNow)} due`;
el('done-hold').textContent = CONFIG.HOLD_NOTE;
const pay=el('pay-btn'), payBox=el('done-pay');
payBox.innerHTML='';
const details = res.paymentDetails || CONFIG.PAYMENT_DETAILS;
el('done-msg').textContent = `We've emailed your booking details to ${data.email}.`;
if(details) payBox.innerHTML = '<div class="paybox"><b>Pay by transfer</b>'+esc(details).replace(/\n/g,'<br>')+'</div>';
if(res.paymentUrl || res.accessCode){
pay.style.display='block';
pay.textContent='Pay with Paystack';
pay.disabled=false;
pay.onclick=()=>startPayment(res, data.email);
if(res.accessCode) loadPaystack();
} else {
pay.style.display='none';
}
el('formView').style.display='none'; el('doneView').style.display='block';
el('cal-section').style.display='none';
S.loaded.delete(data.date);
await loadRange(parseISO(data.date),parseISO(data.date));
resetForm();
}catch(e){
err.textContent=e.message; err.classList.add('on');
}finally{
S.sending=false; el('submit').disabled=false; el('submit').textContent='Complete your Booking';
}
};
el('f-date').min=iso(windowStart());
el('f-date').max=iso(windowEnd());
S.cursor=windowStart();
el('hold-note').textContent=CONFIG.HOLD_NOTE;
el('done-links').innerHTML = 'Before your visit, please read our '
+ `<a href="${CONFIG.LINKS.rules}" target="_blank" rel="noopener">studio rules</a>, `
+ `<a href="${CONFIG.LINKS.policy}" target="_blank" rel="noopener">booking policy</a> and `
+ `<a href="${CONFIG.LINKS.faqs}" target="_blank" rel="noopener">FAQs</a>.`;
syncSeg(); fillDurations(); syncSeats();
(async ()=>{
calEl.innerHTML = '<p class="loading">Loading availability…</p>';
try { await loadWindow(); }
catch(e){ console.warn('studio.MAO: could not preload availability —', e.message); }
await render();
})();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
else boot();
})();