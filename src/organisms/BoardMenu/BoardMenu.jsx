import { EraserIcon, PenIcon } from "@/atoms/Icons";

const BoardMenu = () => {
  return (
    <div className="drop-shadow-md bg-zinc-00 border-2 border-gray-600 rounded-md flex py-2 w-[90vw] max-w-[300px] justify-around items-center">
      <div className="cursor-pointer bg-emerald-400 p-2 rounded">
        <PenIcon />
      </div>
      <span className="cursor-pointer p-2 rounded">
        <EraserIcon />
      </span>
    </div>
  );
};

export default BoardMenu;
