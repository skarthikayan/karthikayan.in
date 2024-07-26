function Skills({ list }) {
  return (
    <div className="mt-4 gap-2 flex flex-wrap">
      {list.map((item) => (
        <span
          key={item}
          className="px-2 py-1  rounded-3xl text-sm text-[#5eead4] bg-[#2dd4bf1a]"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default Skills;
