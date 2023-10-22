// lib
import { useEffect, useLayoutEffect, useRef } from "react";
import { useSelector } from "react-redux";

const CanvasBoard = () => {
  const canvasRef = useRef(null);
  const isDraw = useRef(false);
  const menuState = useSelector((state) => state.menu);
  const { activeStrokeColor, eraserSize } = useSelector(
    (state) => state.menuToolbox
  );

  // before browser paint
  useLayoutEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const canvasCtx = canvas.getContext("2d");

    // setting height and width
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const handleMouseDown = (e) => {
      isDraw.current = true;
      canvasCtx.beginPath();
      canvasCtx.moveTo(e.clientX, e.clientY);
    };

    const handleMouseMove = (e) => {
      if (!isDraw.current) return;

      canvasCtx.lineTo(e.clientX, e.clientY);
      canvasCtx.stroke();
    };

    const handleMouseUp = (e) => {
      isDraw.current = false;
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    const { selectedMenuTool } = menuState;
    const canvas = canvasRef.current;
    const canvasCtx = canvas.getContext("2d");

    if (selectedMenuTool === "pen") {
      canvas.style.cursor = "url('pen.svg'), auto";
      return;
    }

    if (selectedMenuTool === "eraser") {
      canvas.style.cursor = "url('eraser.svg'), auto";
      return;
    }

    canvas.style.cursor = "default";
  }, [menuState]);

  // setting canvas property
  useEffect(() => {
    if (!canvasRef.current) return;

    const { selectedMenuTool } = menuState;
    const canvas = canvasRef.current;
    const canvasCtx = canvas.getContext("2d");

    // extracting the color value from ###-pos (#fff-0)
    const selectedColor = activeStrokeColor.split("-")[0];

    const canvasConfig = () => {
      canvasCtx.strokeStyle = selectedColor;
      canvasCtx.lineWidth = 5;
    };

    if (selectedMenuTool === "pen") {
      canvasConfig();
    } else {
      canvasCtx.strokeStyle = "#000";
      canvasCtx.lineWidth = Number(eraserSize);
    }
  }, [activeStrokeColor, eraserSize, menuState]);

  return <canvas ref={canvasRef}></canvas>;
};

export default CanvasBoard;
