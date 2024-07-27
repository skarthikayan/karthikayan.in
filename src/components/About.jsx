function About() {
  return (
    <section
      id="about"
      className="flex items-start justify-start flex-col gap-4 mb-20 p-4"
    >
      <div className="lg:hidden w-[calc(100vw-1rem)] px-6 py-4 sticky top-0 backdrop-blur -mx-7">
        <h2 className="font-bold">ABOUT</h2>
      </div>
      <p className="text-left">
        As a Senior Software Engineer with over 7.8 years of hands-on experience
        in React.js and Node.js, I’m passionate about pushing the boundaries of
        technology. I thrive on solving complex problems and continuously seek
        out new challenges to expand my skill set.
      </p>
      <p className="text-left">
        In my downtime, you can find me immersed in video games or a game of
        chess. I also love winding down with a good movie or binge-worthy
        series. This blend of interests keeps me both mentally sharp and
        creatively inspired.
      </p>
      <p className="text-left">
        I'm eager to take on roles that let me leverage my expertise and passion
        for cutting-edge technologies to drive innovation and deliver impactful
        solutions.
      </p>
    </section>
  );
}

export default About;
