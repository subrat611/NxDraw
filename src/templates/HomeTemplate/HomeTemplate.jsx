import BoardMenu from "@/organisms/BoardMenu/BoardMenu";
import styles from "./HomeTemplate.module.css";

const HomeTemplate = () => {
  return (
    <div className="relative">
      <div className={`absolute top-3 left-[50%] ${styles.boardMenuContainer}`}>
        <BoardMenu />
      </div>
    </div>
  );
};

export default HomeTemplate;
