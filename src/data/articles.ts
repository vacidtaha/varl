export interface Article {
  slug: string;
  date: string;
  month: string;
  year: string;
  category: string;
  topic: string;
  type: string;
  title: string;
  desc: string;
  img: string;
}

export const articles: Article[] = [
  { slug: "regenerative-agriculture-framework", date: "February 10, 2026", month: "February 2026", year: "2026", category: "Food", topic: "Agriculture", type: "Article", title: "VARL Publishes New Framework for Regenerative Agriculture", desc: "A systems-level approach to soil biology and crop resilience, powered by molecular simulation.", img: "/latest-1.webp" },
  { slug: "biological-camouflage-drug-delivery", date: "February 3, 2026", month: "February 2026", year: "2026", category: "Health", topic: "Biology", type: "Article", title: "How Biological Camouflage Inspires New Drug Delivery Systems", desc: "Nature's stealth mechanisms are guiding VARL's next-gen targeted therapies.", img: "/latest-2.webp" },
  { slug: "protein-engineering-lab", date: "January 28, 2026", month: "January 2026", year: "2026", category: "Research", topic: "Biology", type: "Report", title: "Precision at the Molecular Level: Inside VARL's Protein Engineering Lab", desc: "Where craftsmanship meets computation to redesign biological structures.", img: "/latest-3.webp" },
  { slug: "digital-twin-health-trajectories", date: "January 15, 2026", month: "January 2026", year: "2026", category: "Health", topic: "AI", type: "Case Study", title: "Digital Twin Technology Maps Individual Health Trajectories", desc: "Personalized simulations that predict disease before symptoms appear.", img: "/latest-4.webp" },
  { slug: "novel-biomarkers-early-detection", date: "January 6, 2026", month: "January 2026", year: "2026", category: "Health", topic: "Biology", type: "Press Release", title: "VARL Identifies Novel Biomarkers for Early Disease Detection", desc: "AI-driven analysis reveals signals invisible to traditional diagnostics.", img: "/latest-5.webp" },
  { slug: "ai-plant-stress-prediction", date: "December 20, 2025", month: "December 2025", year: "2025", category: "Food", topic: "AI", type: "Article", title: "AI Models Predict Plant Stress Before It Happens", desc: "Lab-grown resilience testing for smarter crops.", img: "/latest-6.webp" },
  { slug: "tomato-genome-nutritional-potential", date: "December 11, 2025", month: "December 2025", year: "2025", category: "Food", topic: "Agriculture", type: "Report", title: "Decoding the Tomato Genome to Unlock Nutritional Potential", desc: "How AI maps flavor, nutrition, and yield at once.", img: "/latest-7.webp" },
  { slug: "lipid-nanoparticles-cellular-repair", date: "November 29, 2025", month: "November 2025", year: "2025", category: "Health", topic: "Biology", type: "Article", title: "Lipid Nanoparticles: VARL's Next-Gen Cellular Repair Mechanism", desc: "Targeted delivery at the molecular frontier.", img: "/latest-8.webp" },
];
