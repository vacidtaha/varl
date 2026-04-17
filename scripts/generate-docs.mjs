import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "docs");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const doc = new PDFDocument({ size: "A4", margin: 60 });
const outPath = path.join(outDir, "varl-technical-docs.pdf");
doc.pipe(fs.createWriteStream(outPath));

const C = {
  black: "#000000",
  dark: "#1a1a1a",
  gray: "#555555",
  light: "#888888",
  line: "#d0d0d0",
  accent: "#0066cc",
};

const LEFT = 60;
const RIGHT = 535;
const BOTTOM = 780;

function heading(text, size = 18) {
  checkPage(60);
  doc.moveDown(1.2);
  doc.fontSize(size).font("Helvetica-Bold").fillColor(C.black).text(text);
  doc.moveDown(0.3);
  const y = doc.y;
  doc.moveTo(LEFT, y).lineTo(RIGHT, y).strokeColor(C.line).lineWidth(0.5).stroke();
  doc.moveDown(0.6);
}

function subheading(text) {
  checkPage(40);
  doc.moveDown(0.6);
  doc.fontSize(12).font("Helvetica-Bold").fillColor(C.dark).text(text);
  doc.moveDown(0.3);
}

function body(text) {
  doc.fontSize(10).font("Helvetica").fillColor(C.gray).text(text, { lineGap: 4 });
}

function mono(text) {
  doc.fontSize(9).font("Courier").fillColor(C.dark).text(text, { lineGap: 3 });
}

function row(label, value) {
  checkPage(25);
  doc.fontSize(10).font("Helvetica-Bold").fillColor(C.dark).text(label, LEFT, doc.y, { width: 170, continued: false });
  const savedY = doc.y;
  doc.fontSize(10).font("Courier").fillColor(C.gray).text(value, LEFT + 180, savedY - 14, { width: 290 });
  doc.moveDown(0.15);
}

function spacer(n = 0.4) {
  doc.moveDown(n);
}

function checkPage(needed = 100) {
  if (doc.y + needed > BOTTOM) {
    doc.addPage();
  }
}

// ─── KAPAK ───────────────────────────────────────────────────────────────────

doc.fontSize(11).font("Helvetica").fillColor(C.light).text("GIZLI", { align: "right" });
doc.moveDown(6);
doc.fontSize(36).font("Helvetica-Bold").fillColor(C.black).text("VARL", { align: "center" });
doc.moveDown(0.3);
doc.fontSize(14).font("Helvetica").fillColor(C.gray).text("Teknik Dokumantasyon", { align: "center" });
doc.moveDown(0.8);
doc.fontSize(10).font("Helvetica").fillColor(C.light).text("Vacid Advanced Research Labs", { align: "center" });
doc.moveDown(0.3);
doc.fontSize(10).fillColor(C.light).text("varl.net", { align: "center" });
doc.moveDown(6);
const lineY = doc.y;
doc.moveTo(LEFT, lineY).lineTo(RIGHT, lineY).strokeColor(C.line).lineWidth(0.5).stroke();
doc.moveDown(0.6);
doc.fontSize(9).font("Helvetica").fillColor(C.light).text(`Tarih: ${new Date().toISOString().split("T")[0]}`, { align: "center" });
doc.moveDown(0.3);
doc.fontSize(9).fillColor(C.light).text("Bu belge hassas bilgiler icerir. Paylasmayiniz.", { align: "center" });

// ─── 1. PROJE GENEL BAKIS ───────────────────────────────────────────────────

doc.addPage();

heading("1. Proje Genel Bakis");

subheading("Genel Bilgiler");
row("Proje Adi", "varlnet");
row("Versiyon", "1.0.0");
row("Domain", "varl.net");
row("GitHub", "git@github.com:vacidtaha/varl.git");
row("Lisans", "Ozel (Private)");

subheading("Teknoloji Yigini");
row("Framework", "Next.js 16.2 (App Router)");
row("React", "19.2");
row("TypeScript", "6.0");
row("CSS", "Tailwind CSS 4.2");
row("PostCSS", "@tailwindcss/postcss");
row("Paket Yoneticisi", "npm (legacy-peer-deps)");

subheading("Bagimliliklar");
const deps = [
  ["next", "^16.2.1"],
  ["react / react-dom", "^19.2.4"],
  ["3dmol", "^2.5.4"],
  ["lucide-react", "^1.7.0"],
  ["react-icons", "^5.6.0"],
  ["react-simple-maps", "^3.0.0"],
  ["recharts", "^3.8.1"],
  ["resend", "^6.10.0"],
];
for (const [name, ver] of deps) row(name, ver);

subheading("Gelistirme Bagimliliklari");
const devDeps = [
  ["@tailwindcss/postcss", "^4.2.2"],
  ["@types/node", "^25.5.0"],
  ["eslint", "^10.1.0"],
  ["eslint-config-next", "^16.2.1"],
  ["pdfkit", "^0.18.0"],
  ["tailwindcss", "^4.2.2"],
  ["typescript", "^6.0.2"],
];
for (const [name, ver] of devDeps) row(name, ver);

subheading("NPM Komutlari");
row("dev", "next dev");
row("build", "next build");
row("start", "next start");
row("lint", "eslint");

// ─── 2. SUNUCU / VPS ────────────────────────────────────────────────────────

doc.addPage();

heading("2. Sunucu / VPS");

subheading("AWS EC2 Sunucusu");
row("IP Adresi", "63.178.158.104");
row("Kullanici", "ubuntu");
row("Isletim Sistemi", "Ubuntu (AWS EC2)");
row("Proje Dizini", "~/varl");
row("Surec Yoneticisi", "PM2");
row("PM2 Uygulama Adi", "varl");

subheading("SSH Baglantisi");
body("Yerel anahtar dosyasi:");
spacer(0.2);
mono("  /Users/tahavacid/.ssh/aws/tahavacid_anahtar.pem");
spacer(0.4);
body("Baglanti komutu:");
spacer(0.2);
mono("  ssh -i /Users/tahavacid/.ssh/aws/tahavacid_anahtar.pem \\");
mono("      ubuntu@63.178.158.104");

// ─── 3. YAYINLAMA ───────────────────────────────────────────────────────────

heading("3. Yayinlama Adimlari");

body("Sunucuda son surumu yayinlamak icin asagidaki komutlari calistirin:");
spacer(0.3);
mono("  cd ~/varl");
mono("  git pull");
mono("  npm install --legacy-peer-deps");
mono("  npm run build");
mono("  pm2 restart varl");
spacer(0.4);
body("Izleme:");
spacer(0.2);
mono("  pm2 status");
mono("  pm2 logs varl");

subheading("Yerel Gelistirme");
mono("  git clone git@github.com:vacidtaha/varl.git");
mono("  cd varl");
mono("  npm install --legacy-peer-deps");
mono("  npm run dev");

// ─── 4. E-POSTA HESAPLARI ───────────────────────────────────────────────────

doc.addPage();

heading("4. E-posta Hesaplari (Google Workspace)");

body("Tum hesaplar Google Workspace uzerinden yonetilir. Yonetici: tahavacid@varl.net");
spacer(0.5);

const emails = [
  ["tahavacid@varl.net", "A22u36040!"],
  ["team@varl.net", "Undermine2-Overblown7-Slicer9-Neglector1-Mobile2"],
  ["ir@varl.net", "Wafer2-Equate4-Debatable9-Anytime9-Versus0"],
  ["contact@varl.net", "Hundredth3-Geiger6-Hangout7-Dynamite0-Mandarin6"],
  ["legal@varl.net", "Mystify7-Flaring4-Unzip8-Eclipse7-Submersed0"],
  ["api@varl.net", "Harmonica3-Doodle9-Designate1-Handsaw6-Icing8"],
  ["security@varl.net", "Parted0-Strongbox8-Harness7-Singer0-Lapped1"],
];

for (const [email, pass] of emails) {
  checkPage(40);
  doc.fontSize(11).font("Helvetica-Bold").fillColor(C.accent).text(email);
  doc.fontSize(9).font("Courier").fillColor(C.gray).text(pass);
  spacer(0.5);
}

subheading("Yonetim Paneli");
body("URL: admin.google.com");
body("Giris: tahavacid@varl.net");

// ─── 5. API VE ENTEGRASYONLAR ───────────────────────────────────────────────

heading("5. API Anahtarlari ve Entegrasyonlar");

subheading("Resend (E-posta Servisi)");
row("Hesap", "tahavacid@varl.net");
row("Ortam Degiskeni", "RESEND_API_KEY");
spacer(0.2);
body("Anahtar (.env.local dosyasinda):");
mono("  re_fZXoJUfD_8orsofgduz8h1iSRks6p4dHL");
spacer(0.2);
body("Kontrol paneli: resend.com");

subheading("Google Analytics 4");
row("Olcum Kimli gi", "G-49QCJ0VMF5");
body("CookieConsent bileseni uzerinden yuklenir. Panel: analytics.google.com");

subheading("Google Search Console");
row("Site", "https://varl.net");
body("tahavacid@varl.net ile giris yapilir. URL: search.google.com/search-console");

// ─── 6. PROJE YAPISI ────────────────────────────────────────────────────────

doc.addPage();

heading("6. Proje Yapisi");

subheading("Sayfalar (src/app/)");
const routes = [
  "/              Ana sayfa",
  "/health        Saglik ve ilac",
  "/food          Gida sistemleri",
  "/science       Bilim ve teknoloji",
  "/about         Hakkimizda",
  "/investors     Yatirimci iliskileri",
  "/partnerships  Ortakliklar",
  "/publications  Yayinlar",
  "/contact       Iletisim formu + e-postalar",
  "/api           API dokumantasyonu",
  "/api-access    API erisim talebi",
  "/latest        Haberler ve makaleler",
  "/latest/[slug] Makale sayfalari",
  "/apply         Is basvurusu",
  "/white-papers  Teknik raporlar",
  "/compliance    Uyumluluk politikasi",
  "/privacy       Gizlilik politikasi",
  "/terms         Kullanim sartlari",
  "/cookies       Cerez politikasi",
  "/disclaimer    Sorumluluk reddi",
  "/api-policy    API kullanim politikasi",
];
for (const r of routes) {
  checkPage(16);
  doc.fontSize(9).font("Courier").fillColor(C.gray).text(r);
}

subheading("API Rotalari");
mono("  POST /api/contact      Iletisim formu gonderi mi");
mono("  POST /api/api-access   API erisim talebi");

subheading("Bilesenler (src/components/)");
mono("  Header.tsx          Site baslik cubugu");
mono("  Footer.tsx          Site alt bilgi");
mono("  CookieConsent.tsx   Cerez banneri + GA4");
mono("  Dropdown.tsx        Acilir menu bileseni");
mono("  TextParticles.tsx   Partikul metin efekti");
mono("  charts/             Veri gorsellestirmeleri");

subheading("Yapilandirma Dosyalari");
row("next.config.ts", "Gorsel formatlari, paket optimizasyonu");
row("tsconfig.json", "ES2017, bundler, strict");
row("postcss.config.mjs", "@tailwindcss/postcss");
row(".env.local", "RESEND_API_KEY");

// ─── 7. SEO ─────────────────────────────────────────────────────────────────

heading("7. SEO Yapilandirmasi");

subheading("Site Haritasi (src/app/sitemap.ts)");
body("/sitemap.xml adresinde otomatik olusturulur. Temel URL: https://varl.net");
body("Tum acik rotalari ve dinamik /latest/[slug] sayfalarini icerir.");

subheading("Robots (src/app/robots.ts)");
mono("  Allow: /");
mono("  Disallow: /api/api-access, /api/contact");
mono("  Sitemap: https://varl.net/sitemap.xml");

subheading("Manifest (src/app/manifest.ts)");
mono("  name: VARL — Vacid Advanced Research Labs");
mono("  display: standalone");
mono("  theme: #000000 / bg: #ffffff");

subheading("Meta ve Open Graph");
body("Her rota layout.tsx veya page.tsx icinde metadata export eder.");
body("Canonical URL'ler SITE_URL sabiti kullanir. OG gorseli: /og-image.png");

// ─── 8. GITHUB ──────────────────────────────────────────────────────────────

doc.addPage();

heading("8. GitHub");

row("Depo", "vacidtaha/varl");
row("URL", "github.com/vacidtaha/varl");
row("SSH", "git@github.com:vacidtaha/varl.git");
row("Ana Dal", "main");
row("Gorunurluk", "Ozel (Private)");
row("Hesap", "vacidtaha");

subheading("Son Commitler");
const commits = [
  "1807b42 Iletisim e-postalari, mobil zoom duzeltmesi",
  "46506f4 Header logo boyutu geri alma",
  "565db9b Next.js 16.2 gorsel oran uyarilari duzeltmesi",
  "9119143 Tum bagimliliklar guncellendi, v1.0.0",
  "805fc16 Kod temizligi: kullanilmayan dosya/paket silindi",
];
for (const c of commits) {
  doc.fontSize(9).font("Courier").fillColor(C.gray).text(c);
}

// ─── 9. HIZLI REFERANS ─────────────────────────────────────────────────────

heading("9. Hizli Referans");

subheading("Sik Kullanilan Komutlar");
body("Sunucuya baglan:");
mono("  ssh -i ~/.ssh/aws/tahavacid_anahtar.pem ubuntu@63.178.158.104");
spacer(0.3);
body("Yayinla:");
mono("  cd ~/varl && git pull && npm install --legacy-peer-deps \\");
mono("    && npm run build && pm2 restart varl");
spacer(0.3);
body("Loglari gor:");
mono("  pm2 logs varl");
spacer(0.3);
body("Yerel gelistirme:");
mono("  cd ~/Desktop/varlnet && npm run dev");

subheading("Onemli Baglantilar");
row("Web Sitesi", "https://varl.net");
row("GitHub", "https://github.com/vacidtaha/varl");
row("Workspace Yonetimi", "https://admin.google.com");
row("Analitik", "https://analytics.google.com");
row("Search Console", "https://search.google.com/search-console");
row("Resend", "https://resend.com");

doc.end();
console.log(`PDF olusturuldu: ${outPath}`);
