const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const doc = new PDFDocument({
  size: "A4",
  margins: { top: 90, bottom: 90, left: 80, right: 80 },
  bufferPages: true,
  autoFirstPage: true,
  info: {
    Title: "Founding Letter to Investors | VARL",
    Author: "Taha Vacid & Haktan Köksal",
    Subject: "Founding Letter to Investors",
    Creator: "VARL Inc.",
  },
});

const output = path.join(__dirname, "..", "public", "founding-letter.pdf");
const stream = fs.createWriteStream(output);
doc.pipe(stream);

const PAGE_WIDTH = 595.28;
const CONTENT_WIDTH = PAGE_WIDTH - 160;
const LEFT = 80;

const C = {
  black: "#111111",
  gray: "#666666",
  light: "#999999",
  line: "#dddddd",
};

function para(text, opts = {}) {
  doc
    .fontSize(opts.size || 10.5)
    .fillColor(opts.color || C.gray)
    .font(opts.font || "Helvetica");
  doc.text(text, { width: CONTENT_WIDTH, lineGap: 4 });
  doc.moveDown(opts.gap !== undefined ? opts.gap : 0.8);
}

function heading(text) {
  doc.moveDown(0.6);
  doc.fontSize(13).fillColor(C.black).font("Helvetica-Bold");
  doc.text(text, { width: CONTENT_WIDTH });
  doc.moveDown(0.6);
}

function separator() {
  const y = doc.y;
  doc.moveTo(LEFT, y).lineTo(LEFT + 80, y).strokeColor(C.line).lineWidth(0.5).stroke();
  doc.moveDown(1.5);
}

// === PAGE 1: TITLE ===

doc.y = 120;
doc.fontSize(28).fillColor(C.black).font("Helvetica-Bold");
doc.text("Founding Letter", LEFT, doc.y, { width: CONTENT_WIDTH });
doc.text("to Investors", { width: CONTENT_WIDTH });
doc.moveDown(0.8);

doc.fontSize(10).fillColor(C.light).font("Helvetica");
doc.text("February 2026", { width: CONTENT_WIDTH });
doc.moveDown(0.3);
doc.text("From the Founders of VARL", { width: CONTENT_WIDTH });
doc.moveDown(2);

separator();

para(
  "This letter is not a pitch. It is not a prospectus. It is not a summary of projected returns. This is a statement of what we believe, what we intend to build, and the principles that will govern every decision we make with the capital entrusted to us.",
  { size: 11, color: C.black }
);

para(
  "If at any point in the future our actions diverge from what is written here, this letter should be used to hold us accountable."
);

heading("Why We Started");

para(
  "We started VARL because we could not reconcile two facts. First: biology has never been more understood. We can sequence a human genome in hours. We can image individual proteins at atomic resolution. We can read the transcriptional state of a single cell. The knowledge exists."
);

para(
  "Second: people are still dying from diseases that this knowledge should have solved by now. A child is born with a condition that was visible in her DNA before she took her first breath, and no one caught it. A farmer watches his soil die and has no idea why. A doctor prescribes the same drug to two patients and watches it save one and fail the other."
);

para(
  "The gap between what science knows and what medicine delivers is not a gap of knowledge. It is a gap of tools. The instruments we use to translate biological understanding into treatments, cures, and interventions are relics of a slower era. Drug development takes 15 years. 86% of candidates fail. $2.6 billion is spent per approved compound. The system works, but it works far too slowly, far too expensively, and far too imprecisely for a world that cannot afford to wait."
);

para("VARL exists to close that gap. Not incrementally. Fundamentally.");

heading("What We Are Building");

para(
  "We are building a computational biology platform capable of simulating living systems at molecular resolution. At its core is a digital twin engine: a system that constructs virtual representations of biological environments, from individual cells to entire organ systems, and runs thousands of therapeutic scenarios in parallel."
);

para(
  "A drug candidate that would take a traditional pharmaceutical company 15 years and $2.6 billion to develop, our platform is designed to discover, simulate, and validate in under three years at a fraction of the cost. Not by cutting corners. By eliminating the inefficiencies that make the current system so slow: physical experimentation where computation would suffice, population-level guessing where individual-level precision is possible, linear pipelines where parallel simulation is achievable."
);

para(
  "The same platform applies to food and agriculture. We model soil microbiomes, simulate crop performance under climate stress, design varieties computationally, and predict supply chain failures before they happen. Health and food are not separate problems. They are two expressions of the same challenge: understanding biological systems well enough to intervene with precision."
);

heading("How We Will Generate Returns");

para(
  "VARL is a pharmaceutical company. Our primary revenue comes from developing treatments and bringing them to patients. We are not a software company that licenses AI tools. The platform is the engine. The drugs are the product."
);

para(
  "Our cost structure is fundamentally different from traditional pharma. When you can simulate millions of molecular candidates against digital twin models before synthesizing a single compound, the economics of drug development change. Our target cost per approved treatment is under $150 million, compared to the industry average of $2.6 billion. This cost advantage allows us to do something no major pharmaceutical company currently does: price treatments for universal access."
);

para(
  "We do not believe in extractive pharmaceutical pricing. We negotiate directly with national health systems, governments, and international health organizations to ensure that every treatment we develop reaches every patient who needs it, not just those in wealthy markets. When your development cost is 95% lower than your competitors, you do not need monopoly pricing to generate returns. You need volume, velocity, and a platform that gets better with every drug it develops."
);

para(
  "Our API, a controlled research infrastructure, is licensed exclusively to qualified institutions under strict access agreements. It generates licensing revenue while accelerating discovery across the entire field. Agricultural solutions provide additional diversification. Together, these create a revenue model that compounds: each new treatment makes the platform smarter, each smart iteration makes the next treatment faster and cheaper."
);

heading("Our Principles on Capital");

para(
  "We are not building VARL to optimize for quarterly earnings. We are building it to last decades and to produce compounding scientific and economic value over that horizon. The following principles are non-negotiable:"
);

para("1. Science governs capital allocation, not the reverse. If a promising research direction requires patience, we will be patient. If a commercially attractive shortcut compromises scientific integrity, we will not take it.");

para("2. We will never price a treatment to maximize margin at the expense of access. Our cost structure makes this unnecessary. Our ethics make it unacceptable.");

para("3. We will publish negative results. We will share failures openly. Science that hides inconvenient truths is not science at all.");

para("4. We will not dilute our mission to accommodate short-term financial pressure. Investors who require us to compromise on the integrity of our work are investors we do not need.");

para("5. Every piece of data entrusted to us (patient data, genomic data, agricultural data) will be treated with the gravity it deserves. A single failure in data handling can compromise lives. We do not take this lightly.");

heading("What We Expect From Our Investors");

para(
  "We expect alignment. Not just financial alignment, but philosophical alignment. You must believe, as we do, that biological systems can be understood, that disease is solvable, and that this work must serve humanity rather than exploit it."
);

para(
  "We expect patience. The value VARL creates will be measured in decades, not quarters. The first years will be defined by infrastructure, research, and validation. The returns will come, but they will come on the timeline that the science demands, not the timeline that markets prefer."
);

para(
  "We expect trust. Trust that when we make a decision that prioritizes long-term scientific value over short-term financial return, we are acting in the best interest of everyone who has placed their confidence in us."
);

para(
  "In return, we offer radical transparency. Every model parameter, every simulation result, every strategic decision will be documented and available to our investors. There are no black boxes. There are no hidden agendas. What you see is what we are building."
);

heading("The Stakes");

para(
  "We want to be honest about the scale of what we are attempting. We are not building a better pharmaceutical company. We are attempting to replace a system that has defined how humanity treats disease for over a century. The probability of failure is real. The technical challenges are immense. The institutional resistance will be significant.",
  { color: C.black }
);

para(
  "But the cost of not trying is measured in human lives. Every year that the current system persists, 10 million people die from cancer. 55 million live with dementia. 295 million go hungry. 7,000 rare diseases remain without a single approved treatment. These are not abstract statistics. These are people in hospital rooms, in farming villages, in families, waiting for someone to build something better."
);

para(
  "That is what we are doing. And if we are even partially successful, the impact, both human and financial, will be extraordinary."
);

// Closing
doc.moveDown(1.5);
separator();

doc.fontSize(10.5).fillColor(C.black).font("Helvetica");
doc.text("With conviction,", { width: CONTENT_WIDTH });
doc.moveDown(1.5);

doc.fontSize(11).font("Helvetica-Bold");
doc.text("Taha Vacid", { width: CONTENT_WIDTH });
doc.moveDown(0.1);
doc.fontSize(9).font("Helvetica").fillColor(C.light);
doc.text("Co-Founder", { width: CONTENT_WIDTH });
doc.moveDown(1);

doc.fontSize(11).font("Helvetica-Bold").fillColor(C.black);
doc.text("Haktan Köksal", { width: CONTENT_WIDTH });
doc.moveDown(0.1);
doc.fontSize(9).font("Helvetica").fillColor(C.light);
doc.text("Co-Founder", { width: CONTENT_WIDTH });
doc.moveDown(2);

doc.fontSize(8).fillColor(C.light).font("Helvetica");
doc.text("VARL Inc. / Vacid Advanced Research Labs", { width: CONTENT_WIDTH });
doc.moveDown(0.15);
doc.text("Istanbul, Türkiye", { width: CONTENT_WIDTH });
doc.moveDown(0.15);
doc.text("varl.net  ·  ir@varl.net", { width: CONTENT_WIDTH });

// Add headers and footers to all pages at once
const range = doc.bufferedPageRange();
const contentPages = range.count;

for (let i = 0; i < contentPages; i++) {
  doc.switchToPage(i);

  // Zero out margins so pdfkit won't auto-paginate when placing text outside content area
  doc.page.margins = { top: 0, bottom: 0, left: 0, right: 0 };

  // Header
  doc.fontSize(9).fillColor(C.light).font("Helvetica");
  doc.text("VARL", LEFT, 50, { lineBreak: false });
  const headerRight = "Founding Letter to Investors";
  const hrw = doc.widthOfString(headerRight);
  doc.text(headerRight, PAGE_WIDTH - LEFT - hrw, 50, { lineBreak: false });
  doc.moveTo(LEFT, 68).lineTo(PAGE_WIDTH - LEFT, 68).strokeColor(C.line).lineWidth(0.5).stroke();

  // Footer
  doc.moveTo(LEFT, 770).lineTo(PAGE_WIDTH - LEFT, 770).strokeColor(C.line).lineWidth(0.5).stroke();
  doc.fontSize(8).fillColor(C.light).font("Helvetica");
  doc.text("Confidential", LEFT, 778, { lineBreak: false });
  const pn = `${i + 1}`;
  const pnw = doc.widthOfString(pn);
  doc.text(pn, PAGE_WIDTH - LEFT - pnw, 778, { lineBreak: false });
}

// Trim any ghost pages that pdfkit may have created during header/footer placement
if (doc._pageBuffer.length > contentPages) {
  doc._pageBuffer.length = contentPages;
}

doc.end();

stream.on("finish", () => {
  console.log(`PDF generated: ${output}`);
  console.log(`Pages: ${range.count}`);
  const stats = fs.statSync(output);
  console.log(`File size: ${(stats.size / 1024).toFixed(1)} KB`);
});
