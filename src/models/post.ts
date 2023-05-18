class Post {
  author: string;
  content: string;
  id: string;
  timeStamp: Date;

  constructor(author: string, content: string) {
    this.author = author;
    this.content = content;
    this.id = new Date().toISOString();
    this.timeStamp = new Date();
  }
}

export default Post;
