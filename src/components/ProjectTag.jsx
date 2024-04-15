export default function ProjectTag({ name, onClick, isSelected }) {
  const buttonStyles = isSelected
    ? "text-white border-purple-500 "
    : "text-[#ADB7BE] border-slate-600 hover:border-white ";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-1 text-lg cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
}