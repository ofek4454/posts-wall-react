import Post from "../../models/post";
import classes from "./PostItem.module.css";

const PostItem: React.FC<{ post: Post }> = (props) => {
  return (
    <li className={classes.postItem}>
      <p className={classes.author}>{props.post.author}</p>
      <p className={classes.content}>{props.post.content}</p>
      <p>{props.post.timeStamp.toLocaleString()}</p>
    </li>
  );
};

export default PostItem;
