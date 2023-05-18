import Post from "../../models/post";
import PostItem from "../PostItem/PostItem";
import classes from "./PostsList.module.css";

const PostsList: React.FC<{ posts: Post[] }> = (props) => {
  if (props.posts.length === 0)
    return (
      <>
        <h1>no posts to show!</h1>
        <h3>Be the first to add one!</h3>
      </>
    );

  return (
    <ul className={classes.posts}>
      {props.posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostsList;
