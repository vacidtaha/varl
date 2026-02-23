import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JobList from "@/components/JobList";

export const metadata: Metadata = { title: "Careers" };

const standardPerks = [
  { title: "Your children's entire education", text: "Kindergarten through university, any country, fully covered." },
  { title: "Live and work anywhere", text: "Full legal employment setup in any country you choose." },
  { title: "Annual family vacation", text: "Any destination, any hotel, flights included. For you and your family, every year." },
  { title: "6 months parental leave", text: "Full pay, both parents, no conditions." },
  { title: "Company vehicle", text: "Premium brand of your choice. Fuel, insurance, maintenance included." },
  { title: "Worldwide comprehensive health insurance", text: "Full coverage for you and your family, valid in every country." },
  { title: "Annual check-up at leading hospitals", text: "Full screening every year at the top hospitals in your country of residence." },
  { title: "Language training", text: "Any language, private tutor, unlimited hours." },
  { title: "Donation matching", text: "Every personal donation you make, VARL matches 2x." },
  { title: "Concert, theater & cultural events", text: "Premium tickets to any event, anywhere in the world." },
  { title: "VARL as your investor", text: "If you start your own company, VARL guarantees seed investment." },
  { title: "Fertility & IVF coverage", text: "All fertility treatments fully covered. No limits, no conditions." },
  { title: "Family priority hiring", text: "Your family members get priority consideration for VARL positions." },
  { title: "Second citizenship support", text: "Legal fees and full process covered for residency or citizenship in any country." },
  { title: "Turkish Airlines Elite Plus", text: "Permanent Elite Plus status. Global lounge access, upgrades, priority boarding." },
  { title: "Personal security", text: "Private security detail for travel to high-risk regions." },
  { title: "Full legal support", text: "Personal lawyer for contracts, property, immigration, and family matters." },
  { title: "Lifetime benefits", text: "Health insurance, check-ups, and education support continue after you leave VARL." },
];

const jobs = [
  {
    title: "Senior Research Scientist",
    desc: "Lead disease modeling research and validate computational predictions against clinical outcomes.",
    team: "Health",
    location: "Istanbul",
    type: "Full-time",
    salary: "$310,000 – $450,000",
    equity: "0.25% – 0.60%",
    pto: "65 days/year",
    detail: {
      intro: "You will lead the research that decides whether someone gets diagnosed in time or not. This is not theoretical work. Every model you build ends up in a real hospital, affecting real patients, in real time.",
      expectations: [
        "No fixed working hours. Availability based on project needs, including evenings, weekends, and holidays.",
        "Full ownership of research programs from design through clinical validation.",
        "Willingness to travel internationally on short notice for hospital partnerships and field deployments.",
        "Consistent output at the highest scientific standard. All work must be defensible at peer-review level.",
        "Direct accountability for patient-facing outcomes. Zero tolerance for approximation.",
        "Fluency in cross-functional collaboration with engineering, clinical, and operations teams.",
      ],
      perks: standardPerks,
    },
  },
  {
    title: "Machine Learning Engineer",
    desc: "Design and scale the AI infrastructure behind our biological simulation platform.",
    team: "Platform",
    location: "Istanbul",
    type: "Full-time",
    salary: "$340,000 – $480,000",
    equity: "0.30% – 0.70%",
    pto: "65 days/year",
    detail: {
      intro: "You will build the intelligence layer that everything else at VARL runs on. The models you train will process more biological data in a single day than most companies see in a decade. If you have ever wanted your code to actually save lives, this is where that happens.",
      expectations: [
        "No fixed schedule. Deployment cycles and production incidents dictate availability, not office hours.",
        "Full system ownership. You build it, you scale it, you are on call when it breaks.",
        "Ability to operate under extreme time pressure with zero compromise on code quality.",
        "Willingness to travel for on-site integration with hospital systems and government platforms.",
        "Continuous self-directed learning. The stack evolves fast and so must you.",
        "Performance measured by impact on clinical outcomes, not lines of code or hours logged.",
      ],
      perks: standardPerks,
    },
  },
  {
    title: "Computational Biologist",
    desc: "Build digital twin models of living systems at molecular resolution.",
    team: "Science",
    location: "Istanbul",
    type: "Full-time",
    salary: "$290,000 – $420,000",
    equity: "0.20% – 0.50%",
    pto: "65 days/year",
    detail: {
      intro: "You will build complete simulations of the human body — not approximations, not abstractions, but systems accurate enough that a doctor can use them to make a decision about a real patient. This is the hardest problem in biology and we are closer to solving it than anyone else on the planet.",
      expectations: [
        "No fixed working hours. Research timelines and simulation cycles determine your schedule.",
        "Publication-ready output. All models must meet peer-review standards before deployment.",
        "Full accountability for simulation accuracy. Models are validated against real patient data.",
        "Willingness to present and defend work at international scientific conferences.",
        "Cross-functional collaboration with ML engineering, clinical research, and platform teams.",
        "Rapid iteration under pressure. Timelines are driven by patient need, not convenience.",
      ],
      perks: standardPerks,
    },
  },
  {
    title: "Agricultural Data Scientist",
    desc: "Develop predictive models for crop resilience, soil health, and food system optimization.",
    team: "Food",
    location: "Istanbul",
    type: "Full-time",
    salary: "$280,000 – $400,000",
    equity: "0.15% – 0.45%",
    pto: "65 days/year",
    detail: {
      intro: "Nearly 300 million people will go to bed hungry tonight. You will build the models that change that number. Your work will predict droughts before they happen, optimize food distribution across entire countries, and make sure resources get to the people who need them most.",
      expectations: [
        "No fixed working hours. Crisis response and seasonal agricultural cycles require immediate availability.",
        "Frequent international travel to field sites, government partners, and deployment regions.",
        "Full ownership of predictive models from development through national-scale deployment.",
        "Ability to work in both office and field environments, often within the same week.",
        "Direct accountability for model accuracy. Outputs inform food distribution for millions.",
        "Fluency in working with satellite data, climate systems, and ground-level sensor networks.",
      ],
      perks: standardPerks,
    },
  },
  {
    title: "Product Designer",
    desc: "Shape how researchers, clinicians, and partners interact with our platform every day.",
    team: "Design",
    location: "Istanbul",
    type: "Full-time",
    salary: "$270,000 – $390,000",
    equity: "0.15% – 0.40%",
    pto: "65 days/year",
    detail: {
      intro: "The technology we build is only as good as the experience of using it. A doctor in Lagos and a researcher in Stockholm both need to understand what our platform is telling them — instantly, clearly, without a manual. You will design the layer between the most complex science on Earth and the humans who depend on it.",
      expectations: [
        "No fixed working hours. Global user base requires availability across time zones as needed.",
        "Regular international travel for user research at hospitals, field sites, and government offices.",
        "Pixel-level attention to detail. Interfaces serve clinical decision-making where errors have consequences.",
        "Full ownership of design system, user flows, and interaction patterns across all products.",
        "Rapid prototyping and iteration based on direct user feedback from clinicians and researchers.",
        "Ability to translate complex scientific workflows into clear, intuitive interfaces without documentation dependency.",
      ],
      perks: standardPerks,
    },
  },
];

export default function CareersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black">
      <Header />

      {/* Slogan */}
      <div className="flex w-full items-center justify-center py-20">
        <p className="text-center text-5xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
          Do the work of your life.<br />
          <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">Literally.</span>
        </p>
      </div>

      {/* Hero Image */}
      <div className="mx-auto w-full max-w-6xl px-8">
        <img
          src="/c1.jpg"
          alt="VARL Team"
          className="h-[560px] w-full rounded-3xl object-cover"
        />
      </div>

      <main className="flex-1">

        {/* Intro */}
        <section className="mx-auto max-w-3xl px-8 py-32 text-center">
          <p className="text-2xl leading-relaxed tracking-tight text-gray-700 dark:text-gray-200" style={{ fontWeight: 400 }}>
            We are not looking for people who want a good job. We are looking for people who have never been able to explain what they actually want to do with their life because it did not exist yet. It exists now.
          </p>
        </section>

        {/* Who belongs */}
        <section className="mx-auto max-w-3xl px-8 pb-32">
          <h2 className="text-5xl tracking-tight" style={{ fontWeight: 500 }}>
            <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">Who We Look For</span>
          </h2>
          <p className="mt-10 text-lg leading-relaxed text-gray-500 dark:text-gray-400" style={{ fontWeight: 400 }}>
            The ones who never fit. The ones who got called &ldquo;too intense&rdquo; or &ldquo;too obsessive&rdquo; or &ldquo;too ambitious for this place.&rdquo; The ones who left a perfectly good job because they could not stop thinking about a problem nobody else seemed to care about. The ones who stay up until 4 a.m. not because someone told them to, but because they cannot stop until it works.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-gray-500 dark:text-gray-400" style={{ fontWeight: 400 }}>
            We do not care what you studied. We do not care where you worked before. We care about what happens when you are in a room where every option looks impossible and the deadline is real. If you have spent your whole life waiting for the place that matches what is inside your head, this might be it.
          </p>
        </section>

        {/* Open Positions */}
        <section className="mx-auto max-w-5xl px-8 pb-10">
          <h2 className="text-5xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
            Open Positions
          </h2>
          <p className="mt-4 text-base text-gray-500 dark:text-gray-400" style={{ fontWeight: 400 }}>
            {jobs.length} roles across {new Set(jobs.map(j => j.team)).size} teams
          </p>
        </section>

        {/* Job List */}
        <section className="mx-auto max-w-5xl px-8 pb-32">
          <JobList jobs={jobs} />

          <p className="mt-10 text-sm text-gray-400 dark:text-gray-500">
            Don&apos;t see your role? Write to{" "}
            <a href="mailto:careers@varl.com" className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              careers@varl.com
            </a>
            . The best people at VARL came for positions that didn&apos;t exist yet.
          </p>
        </section>

        {/* Closing */}
        <div className="mx-auto max-w-4xl px-8 pb-32 text-center">
          <p className="text-3xl leading-snug tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 400 }}>
            Fifty years from now, someone will write the story<br />
            of how all of this started. The question is<br />
            <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">whether you will be in it.</span>
          </p>
        </div>

      </main>

      <Footer className="bg-white dark:bg-black" />
    </div>
  );
}
