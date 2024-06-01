import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

export default function ProjectCard({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const truncatedDescription = description.slice(0, 30);

  return (
    <div className="rounded-xl overflow-hidden shadow-sm shadow-slate-800 hover:shadow-md hover:shadow-white">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div
          className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden
                 group-hover:flex group-hover:bg-opacity-50 transition-all duration-500 items-center justify-center"
        >
          {gitUrl ? (
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group h-10 w-10 mr-2 border-2 rounded-full group/link border-[#ADB7BE] hover:border-white hover:text-white flex items-center justify-center"
            >
              <CodeBracketIcon className="h-6 w-6 text-[#ADB7BE] group-hover/link:text-white" />
              <span className="absolute bottom-1 mb-[-40px] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded-lg px-2 py-1 opacity-0 group-hover/link:opacity-80 transition-opacity duration-500">
                Github
              </span>
            </Link>
          ) : (
            <div className="relative group h-10 w-10 mr-2 border-2 rounded-full group/link border-[#ADB7BE] opacity-50 flex items-center justify-center cursor-not-allowed">
              <CodeBracketIcon className="h-6 w-6 text-[#ADB7BE]" />
              <span className="absolute bottom-1 mb-[-40px] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded-lg px-2 py-1 opacity-0 transition-opacity duration-500">
                Github
              </span>
            </div>
          )}
          {previewUrl ? (
            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 border-2 relative rounded-full border-[#ADB7BE] hover:border-white hover:text-white group/link"
            >
              <EyeIcon className="h-6 w-6 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
              <span className="absolute bottom-1 mb-[-40px] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded-lg px-2 py-1 opacity-0 group-hover/link:opacity-80 transition-opacity duration-500">
                Preview
              </span>
            </Link>
          ) : (
            <div className="h-10 w-10 border-2 relative rounded-full border-[#ADB7BE] opacity-50 cursor-not-allowed">
              <EyeIcon className="h-6 w-6 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              <span className="absolute bottom-1 mb-[-40px] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded-lg px-2 py-1 opacity-0 transition-opacity duration-500">
                Preview
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ABDB7BE]">
          {showFullDescription ? description : truncatedDescription}
          {description.length > 100 && (
            <span
              className="text-blue-500 cursor-pointer"
              onClick={toggleDescription}
            >
              {showFullDescription ? " Show less" : " ...see more"}
            </span>
          )}
        </p>
      </div>
    </div>
  );
}
