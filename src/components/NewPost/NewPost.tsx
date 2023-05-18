import { useState } from "react";
import Post from "../../models/post";
import classes from "./NewPost.module.css";

const NewPost: React.FC<{
  onAddPost: (post: Post) => void;
  closeModal: () => void;
}> = (props) => {
  const [text, setText] = useState<string>("");
  const [name, setName] = useState<string>("");

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (text.trim().length === 0 || name.trim().length === 0) return;

    props.onAddPost(new Post(name, text));
    setText("");
    setName("");
    props.closeModal();
  };

  const onTextChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const onNameChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          value={text}
          onChange={onTextChanged}
        />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          value={name}
          onChange={onNameChanged}
        />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={props.closeModal}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
};

export default NewPost;
