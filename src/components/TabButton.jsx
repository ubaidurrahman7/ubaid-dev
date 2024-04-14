export default function TabButton({ active, selectTab, children }) {
  const buttonClasses = active
    ? "text-white border-b border-purple-500"
    : "text-[#ADB7B3] ";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3  font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
}
