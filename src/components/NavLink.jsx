import Link from "next/link";

export default function NavLink({ href, title }) {
  return (
    <Link
      href={href}
      className="text-white hover:text-gray-400 transition duration-300"
    >
      {title}
    </Link>
  );
}
