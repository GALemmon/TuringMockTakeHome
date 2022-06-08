import React from "react";

export const Article = ({article}) => {
  return (
    <>
      <h1>{article.title}</h1>
      <h2>{article.byline}</h2>
      <p>{article.abstract}</p>
    </>
  )
}