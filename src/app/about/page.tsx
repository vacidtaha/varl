"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Sticky Nav Strip */}
      <div className="sticky top-0 z-40 flex w-full items-center bg-white/60 backdrop-blur-xl dark:bg-neutral-900/60" style={{ height: "70px" }}>
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-8">
          <h3 className="text-lg tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 600 }}>
            About
          </h3>
          <div className="flex items-center gap-8">
            <Link href="/investors" className="text-sm text-gray-400 transition-colors hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" style={{ fontWeight: 400 }}>
              Investors
            </Link>
            <Link href="/partnerships" className="text-sm text-gray-400 transition-colors hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" style={{ fontWeight: 400 }}>
              Partnerships
            </Link>
          </div>
        </div>
      </div>

      <main className="flex-1">

        {/* Opening */}
        <section className="mx-auto max-w-3xl px-8 pb-24 pt-32">
          <FadeIn>
            <h1 className="text-6xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
              Vacid Advanced<br />Research Labs
            </h1>
          </FadeIn>
        </section>

        {/* Story */}
        <section className="mx-auto max-w-3xl px-8 pb-32">
          <FadeIn>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
              VARL started because two people could not stop thinking about the same thing. Someone gets diagnosed too late for a disease that was sending signals for years. A treatment fails because it was never designed for that specific person in the first place. A mother hears the words &ldquo;there is nothing more we can do&rdquo; when the truth is, nobody tried hard enough.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
              None of it had to be this way. The knowledge was there. What was missing was someone who would actually sit down, build the tools, and close the gap between what we know and what we do about it. That is what VARL is. And if you feel the same way reading this, there is a place for you here.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
              We work in health because people are still dying from things that are solvable. Every day, someone loses a person they love to a condition that could have been caught earlier, treated better, or prevented entirely. We do not accept that. We never will.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
              We work in food because eight billion people live on this planet and nearly 300 million of them go to bed hungry tonight. In 2026, that should not be possible. The population keeps growing, the resources keep shrinking, and the current approach is not working fast enough.
            </p>
          </FadeIn>
          <FadeIn delay={0.25}>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
              And we are not stopping there. Energy, technology, water, anything that directly affects whether a living thing on this planet gets to survive and live well. Wherever the distance between what is possible and what people actually have is widest, that is where we will be.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
              We are not interested in building the next big company. We are interested in the child who gets the right treatment on the first try. The family that eats tonight. The mother who gets a phone call with good news instead of bad. That is why VARL exists. Because people needed someone who would actually try.
            </p>
          </FadeIn>
        </section>

        {/* Founders */}
        <section className="mx-auto max-w-3xl px-8 pb-32">
          <FadeIn>
            <span className="text-sm tracking-widest text-gray-400" style={{ fontWeight: 500 }}>FOUNDERS</span>
            <h2 className="mt-4 text-4xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
              Taha Vacid &amp; Haktan Köksal
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-10 text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
              VARL was founded by Taha Vacid and Haktan Köksal.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
              But two people do not change anything alone. The reason VARL works is because there are people all over the world who feel the same thing we felt. A researcher who reads about a preventable death and cannot sleep that night. An engineer who turns down a comfortable job because the problem here is more important than the paycheck there. A doctor on another continent who writes to us because something we built made a difference for someone they care about. A student who has never met us but already knows this is what they want to do with their life.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
              These people are not employees or supporters. They are the reason this exists at all. VARL is only as real as the number of people who look at the world and decide it is not good enough yet. Every single one of them makes this harder to stop and easier to believe in.
            </p>
          </FadeIn>
        </section>

        {/* Closing */}
        <FadeIn>
          <div className="mx-auto max-w-4xl px-8 pb-32 text-center">
            <p className="text-3xl leading-snug tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 400 }}>
              If anything we have done has helped a single living thing, then what a privilege that is.
            </p>
          </div>
        </FadeIn>

      </main>

      <Footer />
    </div>
  );
}
