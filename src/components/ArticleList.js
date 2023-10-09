import React from "react";

function ArticleList(props) {
<<<<<<< HEAD
  const editArticle = (article) => {
    props.editArticle(article);
  };

=======
>>>>>>> 5261948fe14951f34c8e08a869cc2c1d94f9bd4f
  return (
    <div>
      {props.articles &&
        props.articles.map((article) => {
          return (
            <div key={article.id}>
              <h2>{article.title}</h2>
              <p>{article.body}</p>
              <p>{article.date}</p>
<<<<<<< HEAD

              <div className="row">
                <div className="col-md-1">
                  <button
                    className="btn btn-primary"
                    onClick={() => editArticle(article)}
                  >
                    Get
                  </button>
                </div>

                <div className="col">
                  <button className="btn btn-danger">Delete</button>
                </div>
              </div>
=======
>>>>>>> 5261948fe14951f34c8e08a869cc2c1d94f9bd4f
            </div>
          );
        })}
    </div>
  );
}

export default ArticleList;
