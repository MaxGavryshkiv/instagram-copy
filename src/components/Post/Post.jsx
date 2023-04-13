import styles from "./Post.module.css";

const Post = (key) => {
  return (
    <div className={styles.post} key={key}>
      <ul>
        <li>Avatar</li>
        <li>UserNickname</li>
        <li>PlaceOfPhoto</li>
        <li>vertical tree dot menu</li>
      </ul>
      <img src="" alt="" />
      <ul>
        <li>
          <button>
            <svg className={styles.svg}>
              <use href="../../pictures/symbol-defs.svg#icon-like"></use>
            </svg>
          </button>
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div>liked by Somebody and</div>
      <div>
        post caption Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Adipisci enim cupiditate soluta ab harum, et commodi veniam fugit sint
        repellat quia quaerat magnam consequuntur ipsum, deserunt quas dolorem
        alias totam.
      </div>
      <p>відкрити коментарі</p>
    </div>
  );
};

export default Post;
