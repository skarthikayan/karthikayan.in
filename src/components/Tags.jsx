function Skills({ list }) {
  return (
    <div className="mt-4 gap-2 flex flex-wrap">
      {list.map((item) => (
        <span
          key={item}
          className="px-3 py-1  rounded-3xl text-sm text-textTags bg-tags"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default Skills;
