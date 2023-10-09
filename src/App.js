import "./App.css";
import { useState, useEffect } from "react";
import ArticleList from "./components/ArticleList";
<<<<<<< HEAD
import Form from "./components/Form";

function App() {
  const [articles, setArticles] = useState([]);
  const [editedArticle, setEditedArticle] = useState(null);

  const updatedData = (article) => {
    const new_article = articles.map((my_article) => {
      if (my_article.id === article.id) {
        return article;
      } else {
        return my_article;
      }
    });
    setArticles(new_article);
  };

=======

function App() {
  const [articles, setArticles] = useState([]);
>>>>>>> 5261948fe14951f34c8e08a869cc2c1d94f9bd4f
  useEffect(() => {
    fetch("http://127.0.0.1:5000/get", {
      method: "GET",
      headers: {
        "Content-Type": "applications/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setArticles(resp))
      .catch((error) => console.log(error));
<<<<<<< HEAD
  });

  const editArticle = (article) => {
    setEditedArticle(article);
    console.log("It is working in this article: " + article.id);
    console.log("My body: " + article.body);
  };
=======
  }, []);
>>>>>>> 5261948fe14951f34c8e08a869cc2c1d94f9bd4f

  return (
    <div className="App">
      <h1>Add, Delete, Update</h1>
<<<<<<< HEAD
      <ArticleList articles={articles} editArticle={editArticle} />
      {/* <Form article={editedArticle} /> */}
      {editedArticle ? (
        <Form article={editedArticle} updatedData={updatedData} />
      ) : null}
=======

      <ArticleList articles={articles} />

      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
            <p>{article.date}</p>
          </div>
        );
      })}
>>>>>>> 5261948fe14951f34c8e08a869cc2c1d94f9bd4f
    </div>
  );
}

export default App;
