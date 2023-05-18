import { useState } from "react";
import NewPost from "./components/NewPost/NewPost";
import PostsList from "./components/PostsList/PostsList";
import Post from "./models/post";
import Modal from "./components/UI/Modal/Modal";
import MainHeader from "./components/UI/MainHeader/MainHeader";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  const addPost = (post: Post) => {
    setPosts((oldPosts) => [post, ...oldPosts]);
  };

  const closeModal = () => setShowModal(false);
  return (
    <>
      <header>
        <MainHeader openModal={() => setShowModal(true)} />
      </header>
      <main>
        <Modal close={closeModal} show={showModal}>
          <NewPost onAddPost={addPost} closeModal={closeModal} />
        </Modal>

        <PostsList posts={posts} />
      </main>
    </>
  );
}

export default App;
