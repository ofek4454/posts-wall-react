import { MdPostAdd, MdMessage } from "react-icons/md";

import classes from "./MainHeader.module.css";

const MainHeader: React.FC<{ openModal: () => void }> = (props) => {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        Posts Wall
      </h1>
      <p>
        <button className={classes.button} onClick={props.openModal}>
          <MdPostAdd size={18} />
          Add New Post
        </button>
      </p>
    </header>
  );
};

export default MainHeader;
