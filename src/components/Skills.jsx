function Skills() {
  const list = ["React.js", "Node.js", "Javascript", "React Native"];
  return (
    <section className="flex items-start justify-start flex-row gap-4 mb-20">
      {list.map((item) => (
        <span className="px-2 py-1  rounded-3xl text-sm text-[#5eead4] bg-[#2dd4bf1a]">
          {item}
        </span>
      ))}
    </section>
  );
}

export default Skills;
