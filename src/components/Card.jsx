import { useState } from "react";

const Card = () => {
  const [like, setLike] = useState(0);
  const [modal, setModal] = useState(false);
  const [commentArea, setCommentArea] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  return (
    <div>
      <div className="card">
        <div className="firstArea">
          <div className="profileContainer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt=""
            />
          </div>
          <p>Abhinav</p>
        </div>
        <div className="imageArea">
          <img
            src="https://i.pinimg.com/736x/d5/0b/d2/d50bd25b9cc865495b31a97e7a1eed18.jpg"
            alt=""
          />
        </div>

        <div className="thirdArea">
          <button
            onClick={() => {
              setLike((prev) => (prev += 1));
            }}
            style={{ color: "white" }}
          >
            <i className="fa-solid fa-heart" style={{ color: "red" }}></i>{" "}
            {like > 0 && like}
          </button>

          <button
            onClick={() => {
              commentArea === true
                ? setCommentArea(false)
                : setCommentArea(true);
            }}
          >
            <i className="fa-solid fa-comment" style={{ color: "white" }}></i>
          </button>

          <button
            onClick={() => {
              modal === false ? setModal(true) : setModal(false);
            }}
          >
            <i className="fa-solid fa-bars" style={{ color: "white" }}></i>
          </button>
        </div>
      </div>

      {commentArea === true && (
        <div style={{ width: "100%", marginTop: "5px"}}>
          <input style={{borderRadius:"5px",border:"none"}} type="text" onChange={(e) => setComment(e.target.value)} />
          <button
            style={{marginLeft:"6px", border:"none", borderRadius : "5px"}}
            onClick={() => {
              setComments((prev) => [...prev, comment], setCommentArea(false));
            }}
          >
            add
          </button>
        </div>
      )}

      {modal === true && (
        <div
          className="hide-scrollbar"
          style={{
            color: "black",
            marginTop: "5px",
            maxHeight: "20vh",
            overflowY: "scroll",
            gap: "5px",
          }}
        >
          {comments.map((data, i) => (
            <li
              key={i}
              style={{
                padding: "5px 10px",
                marginTop: "2px",
                background: "white",
                borderRadius: "5px",
              }}
            >
              {data}
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
