// lib
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// components
import {
  EraserIcon,
  IconBuddyDownloadIcon,
  PenIcon,
  UploadImageIcon,
} from "@/atoms/Icons";

// redux
import { setIsDownload, setSelectedMenuTool } from "@/redux/slices/menuSlice";

const BoardMenu = () => {
  const [selectedTool, setSelectedTool] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSelectedMenuTool({ data: selectedTool }));
  }, [dispatch, selectedTool]);

  const handleDownloadImage = () => {
    dispatch(setIsDownload({ data: true }));
  };

  return (
    <div className="drop-shadow-md bg-zinc-900 border border-gray-600 rounded-md flex py-2 w-[90vw] max-w-[300px] justify-around items-center">
      <div
        className={`cursor-pointer p-2 rounded ${
          selectedTool === "pen" ? "bg-emerald-500" : "hover:bg-green-100/20"
        }`}
        onClick={() => setSelectedTool("pen")}
      >
        <PenIcon />
      </div>
      <div
        className={`cursor-pointer p-2 rounded ${
          selectedTool === "eraser" ? "bg-emerald-500" : "hover:bg-green-100/20"
        }`}
        onClick={() => setSelectedTool("eraser")}
      >
        <EraserIcon />
      </div>
      <div
        className={`cursor-pointer p-2 rounded ${
          selectedTool === "uploadimage"
            ? "bg-emerald-500"
            : "hover:bg-green-100/20"
        }`}
        onClick={() => setSelectedTool("uploadimage")}
      >
        <UploadImageIcon />
      </div>
      <div
        className="cursor-pointer p-2 rounded hover:bg-gray-100/20"
        onClick={() => handleDownloadImage("downloadimage")}
      >
        <IconBuddyDownloadIcon />
      </div>
    </div>
  );
};

export default BoardMenu;
