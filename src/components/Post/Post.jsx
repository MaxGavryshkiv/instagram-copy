import styles from "./Post.module.css";

const Post = ({ imgUrl, imgAlt, key, avatarUrl, ThreeDotIcon, SingleDot }) => {
  return (
    <div className={styles.post} key={key}>
      <ul className={styles.headMenu}>
        <li className={styles.headMenuItem}>
          <img
            className={styles.avatarImg}
            src={avatarUrl}
            alt="User's avatar"
          />
        </li>
        <li className={styles.headMenuItem}>
          <div className={styles.menuItemHead}>
            UserNickname
            <span className={styles.menuItemTime}>{SingleDot} PostingTime</span>
          </div>
          <div className={styles.menuItemBot}>LocationOfPhoto</div>
        </li>
        {/* <li className={styles.headMenuItem}>PostingTime</li>
        <li className={styles.headMenuItem}>LocationOfPhoto</li> */}
        <li className={styles.headMenuItem}>
          <button
            className={styles.postMenuBttn}
            onClick={() => {
              console.log("click");
            }}
          >
            {ThreeDotIcon}
            {/* <svg className={styles.postMenuSvg}>
              <use href="../../pictures/dots.svg#dots"></use>
            </svg> */}
          </button>
        </li>
      </ul>
      <img className={styles.img} src={imgUrl} alt={imgAlt} />
      <ul>
        <li>
          <button className={styles.bttn}>
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
