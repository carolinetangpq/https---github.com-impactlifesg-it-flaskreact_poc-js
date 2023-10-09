import React, { useState } from "react";
import APIService from "../components/APIService";

function Form(props) {
  const [title, setTitle] = useState(props.article.title);
  const [body, setBody] = useState(props.article.body);
  const updateArticle = () => {
    APIService.updateArticle(props.article.id, { title, body })
      .then((resp) => props.updatedData(resp))
      .catch((error) => console.log(error));
  };
  return (
    //<div>{props.article && props.article.title}</div>
    <div>
      {props.article ? (
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            value={title}
            //value={props.article.title}
            placeholder="Please enter Title"
            onChange={(e) => {
              console.log("Input value changed:", e.target.value);
              setTitle(e.target.value);
            }}
          />

          <label htmlFor="body" className="form-label">
            Description
          </label>
          <textarea
            rows="4"
            //value={body}
            value={body}
            className="form-control"
            placeholder="Please enter Description"
            onChange={(e) => setBody(e.target.value)}
          />

          <button onClick={updateArticle} className="btn btn-success mt-3">
            Update
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Form;
