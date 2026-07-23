// PK Makes — landing page interactions

// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

// Close the mobile menu after tapping a link
nav.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Guard placeholder links (shop / donate / socials not wired yet)
document.querySelectorAll('a[data-link]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    if (!href || href === "#") {
      e.preventDefault();
      console.info(`[PK Makes] "${a.dataset.link}" link not set yet.`);
    }
  });
});

// Language switching (English / Thai)
const translations = {
  en: {
    "meta.title": "PK Makes — Free 3D-Printing Design Tools",
    "meta.description":
      "Free 3D-printing design tools by PK Makes. Customize parametric frames, boxes, kumiko lattices and PVC fittings in your browser, export STL, and print at home.",
    "a11y.menu": "Menu",
    "nav.tools": "Tools",
    "nav.tutorials": "Tutorials",
    "nav.shop": "Shop",
    "nav.donate": "☕ Donate",
    "hero.eyebrow": "Free · Browser-based · No signup",
    "hero.line1": "Design it in your browser.",
    "hero.line2": "Print it at home.",
    "hero.lede":
      "Free 3D-printing design tools — customize parametric models with a few sliders, export a ready-to-print STL, and make it real on your own printer.",
    "hero.ctaPrimary": "Explore the tools",
    "hero.ctaGhost": "See how it works",
    "hero.note": "Made for beginners — if you can move a slider, you can design a part.",
    "tools.heading": "The tools",
    "tools.sub": "Each one runs free in your browser. Pick a type, tweak it, download the STL.",
    "common.live": "Live",
    "common.comingSoon": "Coming soon",
    "common.tryFree": "Try it free →",
    "tool.pvc.desc":
      "Couplings, elbows, tees, reducers and caps — sized to real pipe ODs with a perfect socket fit. 3D-printable and support-friendly.",
    "tool.chalak.desc":
      "Design custom 3D-printable labels and tags — pick a shape, add English or Thai text, and export a ready-to-print STL.",
    "tool.frame.desc":
      "Custom picture frames sized to any photo, with snap-fit joints so large frames print in pieces on a small bed.",
    "tool.kumiko.desc":
      "Traditional Japanese kumiko patterns as printable lattice panels — 30+ designs in frames you can hang, backlight or inset.",
    "tool.box.desc":
      "Parametric boxes with real lids — screw-on, hinged, snap or slide — plus heat-set insert bosses. Round or rectangular.",
    "tool.tray.desc":
      "Custom-sized organizer trays with dividers and compartments — desk trays, drawer inserts and parts bins sized exactly to what you're storing.",
    "how.heading": "Why it's easy",
    "how.sub": "No CAD skills, no software to install, no account to make.",
    "feature1.title": "Customize in your browser",
    "feature1.desc": "Move a few sliders and watch the 3D model update live. That's the whole workflow.",
    "feature2.title": "Export a clean STL",
    "feature2.desc": "One click gives you a watertight, print-ready file in millimetres.",
    "feature3.title": "Print at home",
    "feature3.desc": "Designed to print well on desktop FDM printers — support-friendly by default.",
    "feature4.title": "Free, no signup",
    "feature4.desc": "Every tool is free to use. No login, no watermark, no catch.",
    "tutorials.heading": "Tutorials",
    "tutorials.sub": 'Visual guides that walk you from "never done this" to a printed part.',
    "tutorial.pvc.caption": "PVC Fitting Generator — full walkthrough",
    "tutorial.chalak.caption": "Chalak 3D Label Studio — full walkthrough",
    "tutorial.placeholder.text": "More guides coming",
    "tutorial.placeholder.caption": "Frame, Kumiko & Box tutorials — coming soon",
    "shop.heading": "Don't have a printer?",
    "shop.desc": "Get ready-made prints and models from the shop — no printer required.",
    "shop.cta": "Visit the shop →",
    "footer.tagline": "Free 3D-printing design tools. Customize in your browser, print at home.",
    "footer.toolsHeading": "Tools",
    "footer.frameSoon": "Frame (soon)",
    "footer.kumikoSoon": "Kumiko (soon)",
    "footer.boxSoon": "Box (soon)",
    "footer.traySoon": "Tray (soon)",
    "footer.moreHeading": "More",
    "footer.donateLink": "Donate ☕",
    "footer.connectHeading": "Connect",
    "footer.contact": "Contact",
  },
  th: {
    "meta.title": "PK Makes — เครื่องมือออกแบบงานพิมพ์ 3 มิติ ฟรี",
    "meta.description":
      "เครื่องมือออกแบบงานพิมพ์ 3 มิติฟรีจาก PK Makes ปรับแต่งโมเดลพารามิเตอร์อย่างกรอบ กล่อง ลายคุมิโกะ และข้อต่อ PVC ในเบราว์เซอร์ของคุณ ส่งออกไฟล์ STL แล้วพิมพ์ที่บ้านได้เลย",
    "a11y.menu": "เมนู",
    "nav.tools": "เครื่องมือ",
    "nav.tutorials": "บทเรียน",
    "nav.shop": "ร้านค้า",
    "nav.donate": "☕ บริจาค",
    "hero.eyebrow": "ฟรี · ใช้งานผ่านเบราว์เซอร์ · ไม่ต้องสมัคร",
    "hero.line1": "ออกแบบในเบราว์เซอร์ของคุณ",
    "hero.line2": "พิมพ์ที่บ้านได้เลย",
    "hero.lede":
      "เครื่องมือออกแบบงานพิมพ์ 3 มิติฟรี — ปรับแต่งโมเดลพารามิเตอร์ด้วยสไลเดอร์ไม่กี่ตัว ส่งออกไฟล์ STL พร้อมพิมพ์ และสร้างชิ้นงานจริงด้วยเครื่องพิมพ์ของคุณเอง",
    "hero.ctaPrimary": "ดูเครื่องมือทั้งหมด",
    "hero.ctaGhost": "ดูวิธีใช้งาน",
    "hero.note": "ออกแบบมาสำหรับผู้เริ่มต้น — ถ้าคุณเลื่อนสไลเดอร์เป็น ก็ออกแบบชิ้นงานได้",
    "tools.heading": "เครื่องมือ",
    "tools.sub": "ทุกเครื่องมือใช้งานฟรีผ่านเบราว์เซอร์ เลือกประเภท ปรับแต่ง แล้วดาวน์โหลดไฟล์ STL",
    "common.live": "ใช้งานได้แล้ว",
    "common.comingSoon": "เร็ว ๆ นี้",
    "common.tryFree": "ลองใช้ฟรี →",
    "tool.pvc.desc":
      "ข้อต่อ ข้องอ สามทาง ข้อลด และฝาปิด — พอดีกับขนาดท่อจริง ใส่ปลอกได้แน่นสนิท พิมพ์ 3 มิติได้ง่าย ไม่ต้องใช้ซัพพอร์ตมาก",
    "tool.chalak.desc":
      "ออกแบบป้ายและฉลากสำหรับพิมพ์ 3 มิติ — เลือกรูปทรง ใส่ข้อความภาษาไทยหรืออังกฤษ แล้วส่งออกไฟล์ STL พร้อมพิมพ์",
    "tool.frame.desc":
      "กรอบรูปที่ปรับขนาดตามรูปถ่ายของคุณ พร้อมข้อต่อแบบสแนปฟิตสำหรับกรอบใหญ่ที่ต้องพิมพ์แยกชิ้นบนแท่นพิมพ์ขนาดเล็ก",
    "tool.kumiko.desc":
      "ลวดลายคุมิโกะแบบญี่ปุ่นดั้งเดิม เป็นแผ่นลายฉลุพิมพ์ได้ — มากกว่า 30 ลาย ใส่กรอบแขวนผนัง ใช้กับไฟแบ็คไลท์ หรือฝังลงในชิ้นงานได้",
    "tool.box.desc":
      "กล่องพารามิเตอร์พร้อมฝาปิดจริง — แบบขันเกลียว บานพับ สแนป หรือแบบเลื่อน พร้อมรูใส่นัตความร้อน ทั้งทรงกลมและทรงเหลี่ยม",
    "tool.tray.desc":
      "ถาดจัดระเบียบขนาดตามสั่ง พร้อมช่องแบ่งและแผงกั้น — ถาดใส่ของบนโต๊ะ ถาดใส่ในลิ้นชัก และกล่องแยกชิ้นส่วน ปรับขนาดให้พอดีกับของที่จะเก็บ",
    "how.heading": "ทำไมถึงใช้ง่าย",
    "how.sub": "ไม่ต้องมีทักษะ CAD ไม่ต้องติดตั้งซอฟต์แวร์ ไม่ต้องสมัครสมาชิก",
    "feature1.title": "ปรับแต่งในเบราว์เซอร์",
    "feature1.desc": "เลื่อนสไลเดอร์ไม่กี่ตัวแล้วดูโมเดล 3 มิติอัปเดตแบบเรียลไทม์ แค่นี้ก็จบขั้นตอน",
    "feature2.title": "ส่งออกไฟล์ STL คุณภาพดี",
    "feature2.desc": "คลิกเดียวได้ไฟล์ที่กันน้ำสนิทและพร้อมพิมพ์ หน่วยเป็นมิลลิเมตร",
    "feature3.title": "พิมพ์ที่บ้านได้เลย",
    "feature3.desc": "ออกแบบมาให้พิมพ์ได้ดีบนเครื่องพิมพ์ FDM ตั้งโต๊ะ — เป็นมิตรกับซัพพอร์ตโดยค่าเริ่มต้น",
    "feature4.title": "ฟรี ไม่ต้องสมัคร",
    "feature4.desc": "ทุกเครื่องมือใช้งานได้ฟรี ไม่ต้องล็อกอิน ไม่มีลายน้ำ ไม่มีเงื่อนไขแอบแฝง",
    "tutorials.heading": "บทเรียน",
    "tutorials.sub": 'คู่มือภาพที่พาคุณจาก "ไม่เคยทำมาก่อน" ไปจนถึงชิ้นงานพิมพ์เสร็จ',
    "tutorial.pvc.caption": "PVC Fitting Generator — คู่มือฉบับเต็ม",
    "tutorial.chalak.caption": "Chalak 3D Label Studio — คู่มือฉบับเต็ม",
    "tutorial.placeholder.text": "กำลังจะมีคู่มือเพิ่มเติม",
    "tutorial.placeholder.caption": "คู่มือ Frame, Kumiko และ Box — เร็ว ๆ นี้",
    "shop.heading": "ไม่มีเครื่องพิมพ์ใช่ไหม?",
    "shop.desc": "สั่งซื้อชิ้นงานพิมพ์สำเร็จและโมเดลจากร้านค้าได้เลย ไม่ต้องมีเครื่องพิมพ์",
    "shop.cta": "ไปที่ร้านค้า →",
    "footer.tagline": "เครื่องมือออกแบบงานพิมพ์ 3 มิติฟรี ปรับแต่งในเบราว์เซอร์ พิมพ์ที่บ้าน",
    "footer.toolsHeading": "เครื่องมือ",
    "footer.frameSoon": "Frame (เร็ว ๆ นี้)",
    "footer.kumikoSoon": "Kumiko (เร็ว ๆ นี้)",
    "footer.boxSoon": "Box (เร็ว ๆ นี้)",
    "footer.traySoon": "Tray (เร็ว ๆ นี้)",
    "footer.moreHeading": "เพิ่มเติม",
    "footer.donateLink": "บริจาค ☕",
    "footer.connectHeading": "ติดต่อ",
    "footer.contact": "ติดต่อเรา",
  },
};

const langButtons = document.querySelectorAll(".lang-btn");
const metaDescription = document.querySelector('meta[name="description"]');

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.setAttribute("lang", lang);
  document.title = dict["meta.title"];
  if (metaDescription) metaDescription.setAttribute("content", dict["meta.description"]);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const text = dict[el.dataset.i18n];
    if (text !== undefined) el.textContent = text;
  });

  menuToggle.setAttribute("aria-label", dict["a11y.menu"]);

  langButtons.forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.setLang === lang));
  });

  localStorage.setItem("pk-lang", lang);
}

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.dataset.setLang));
});

const savedLang = localStorage.getItem("pk-lang");
const browserLang = navigator.language && navigator.language.toLowerCase().startsWith("th") ? "th" : "en";
applyLanguage(savedLang === "en" || savedLang === "th" ? savedLang : browserLang);
