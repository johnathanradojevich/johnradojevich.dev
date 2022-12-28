"use client";

import { useScrollDirection } from "./hooks/useScrollDirection";

export default function Home() {
  const scrollDirection = useScrollDirection();
  return (
    <main className="mt-14">
      <div className="px-6 max-w-3xl mx-auto">
        <div className="xl:max-w-xl">
          <h1 className="text-2xl xl:text-4xl">
            <span className=" text-3xl xl:text-5xl">Hello</span>, I&apos;m John.
            <br></br>
            Software Engineer & UI/UX Designer based in Milwaukee.
            {scrollDirection}
          </h1>
          <div className="text-md xl:text-lg text-gray mt-4 tracking-wider leading-7">
            <p>
              I&apos;m a detail-oriented, responsible, and committed engineer,
              with a get-it-done, on-time, and high-quality product spirit. I
              have 3 years of experience defining, designing, implementing,
              testing, and delivering complex web applications using a variety
              of programming languages and technologies.
            </p>
            <p>
              I have a distinctive and strategic creative process that allows me
              to pinpoint the holistic scope of a product and evolve it by
              adding features, innovations and values that meet both user needs
              and business objectives. I craft beautiful user interfaces that
              are both functional and minimal.
            </p>
            <p>
              With my knowledge in both development and design, I prove a
              valuable resource to any team.
            </p>
            <p>
              I&apos;m currently a graduate student at the University of
              Oklahoma, where I&apos;m pursuing a Master&apos; of Science in
              Computer Science. I intend to focus on applying machine learning
              and data mining to physics-based weather analytics and modeling,
              particularly in the prediction of high-impact weather events.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
