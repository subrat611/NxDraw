import BoardMenu from "@/organisms/BoardMenu/BoardMenu";
import BoardMenuToolBox from "@/organisms/BoardMenuToolBox/BoardMenuToolBox";

import styles from "./HomeTemplate.module.css";

const HomeTemplate = () => {
  return (
    <div className="relative h-screen">
      <div className={`absolute top-3 left-[50%] ${styles.boardMenuContainer}`}>
        <BoardMenu />
      </div>
      <div
        className={`absolute top-[20%] left-3 ${styles.boardMenuToolBoxContainer}`}
      >
        <BoardMenuToolBox />
      </div>
    </div>
  );
};

export default HomeTemplate;
