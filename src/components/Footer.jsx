import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer
      className="footer border border-[#33353F] border-l-transparent 
                border-r-transparent text-white"
    >
      <div className="container p-12 flex justify-between">
        <Image src="/images/header-logo.png" width={70} height={25} />
        <p className="text-slate-800">&copy;Ubaid, All rights reserved.</p>
      </div>
    </footer>
  );
}
