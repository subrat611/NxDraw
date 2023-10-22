// lib
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import { PlusIcon } from "@/atoms/Icons";

// redux & actions
import {
  setActiveStrokeColor,
  setEraserSize,
} from "@/redux/slices/menuToolboxSlice";

const BoardMenuToolBox = () => {
  const { strokeColors, activeStrokeColor, eraserSize } = useSelector(
    (state) => state.menuToolbox
  );
  const dispatch = useDispatch();

  const handleEraserSize = (e) => {
    dispatch(setEraserSize({ data: e.target.value }));
  };

  const handleSelectedColor = (color, pos) => {
    dispatch(setActiveStrokeColor({ data: `${color}-${pos}` }));
  };

  return (
    <div className="drop-shadow-md bg-zinc-900 rounded-md py-2 px-3 max-w-fit">
      <p className="text-slate-300 text-sm">Stroke</p>
      <div className="my-3 flex items-center">
        {strokeColors.map((color, i) => (
          <div
            className={`${
              activeStrokeColor === `${color}-${i}`
                ? "border-2 border-sky-400"
                : "border-2 border-transparent"
            } rounded-full p-px mr-1`}
            key={i}
            onClick={() => handleSelectedColor(color, i)}
          >
            <div
              className={`h-[20px] w-[20px] rounded-full hover:cursor-pointer`}
              style={{ backgroundColor: color }}
            ></div>
          </div>
        ))}
        <div className="text-amber-50 h-[20px] w-[20px] rounded-full hover:cursor-pointer mx-1 flex justify-center items-center">
          <PlusIcon w={24} h={24} />
        </div>
      </div>

      <p className="text-slate-300 text-sm">Eraser size</p>
      <div className="my-2 flex items-center">
        <div className="flex items-center">
          <input
            type="range"
            min={10}
            max={50}
            step={1}
            value={eraserSize}
            onChange={handleEraserSize}
          />
          <span className="ml-2">{eraserSize}px</span>
        </div>
      </div>
    </div>
  );
};

export default BoardMenuToolBox;
