"use client";

import { VscLibrary } from "react-icons/vsc";
import { AiOutlinePlus, AiOutlineArrowRight } from "react-icons/ai";

const Library = () => {
  const onClick = () => {
    // TODO: Upload
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <VscLibrary className="text-neutral-400" size={26} />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>
        <div className="flex flex-row gap-4">
          <AiOutlinePlus
            onClick={onClick}
            size={20}
            className="text-neutral-400 cursor-pointer hover:text-white transition"
          />
          <AiOutlineArrowRight
            onClick={onClick}
            size={20}
            className="text-neutral-400 cursor-pointer hover:text-white transition"
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">List of Songs</div>
    </div>
  );
};

export default Library;
