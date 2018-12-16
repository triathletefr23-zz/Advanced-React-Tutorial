import React from 'react';

import Article from './Article';

const ArticleList = ({ articles, articleActions }) => {
    return (
      <div>
        {Object.values(articles).map(article => (
          <Article
              actions={articleActions}
              article={article}
              key={article.id}
          />
        ))}
      </div>
    );
};

export default ArticleList;