export const PenIcon = (props) => {
  const { w = 21, h = 21 } = props;
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5L2 22l1.5-5.5Z"
      />
    </svg>
  );
};

export const EraserIcon = (props) => {
  const { w = 21, h = 21 } = props;
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m7 21l-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21m9 0H7M5 11l9 9"
      />
    </svg>
  );
};
