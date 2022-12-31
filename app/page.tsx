import Banner from "../public/banner.svg";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-t from-white to-[#9e9e9e]">
        <div className="text-gray mx-auto max-w-3xl px-6 pt-32 text-4xl text-neutral-500 xl:text-7xl">
          <h2 className="font-oak text-lg xl:text-3xl">Welcome, I&apos;m</h2>
          <h1 className="text-black">John Radojevich.</h1>
          <h3 className="leading-none">I build things for the web.</h3>
        </div>
      </div>
      <Banner />
      <div className="mx-auto max-w-3xl px-6 xl:text-xl">
        <h2 className="text-3xl xl:text-4xl">
          Hello, I&apos;m John, Software Engineer & UI/UX Designer based in
          Milwaukee.
        </h2>
        <p className="leading-2 tracking-wider text-neutral-500">
          I have 3 years of experience defining, designing, implementing,
          testing, and delivering complex web applications using a variety of
          programming langauges and technologies.
        </p>
        <p className="tracking-wider text-neutral-500">
          I have a distinctive and strategic creative processs that allows me to
          pinpoint the holistic scope of a product and evolve it by adding
          features, innovations, and values that meet both user needs and
          business objectives. I thrive when I&apos;m able to craft user
          interfaces that make products simple, and enjoyable.
        </p>
        <p className="tracking-wider text-neutral-500">
          I&apos;m currently a graduate student at the University of Oklahoma,
          where I&apos;m pursuing a Master&apos;s of Sciecne in Computer
          Science. I intend to focus on applying machine learning and data
          mining to physics-based weather analytics and modeling, particularly
          in the prediction of high-impact weather events.
        </p>
      </div>
    </>
  );
}
