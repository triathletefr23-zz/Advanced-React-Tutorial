import StateApi from "../StateApi";
import { data } from '../../testData';

const store = new StateApi(data);

describe('StateApi', () => {
    it('exposes articles as an object', () => {
        const articles = store.getState().articles;
        const articleId = data.articles[0].id;
        const articleTitle = data.articles[0].title;

        // expect(articles).toHaveProperty(articleId);
        expect(articles[articleId].title).toBe(articleTitle);
    });

    it('exposes authors as an object', () => {
        const authors = store.getState().authors;
        const authorId = data.authors[0].id;
        const firstname = data.authors[0].firstname;

        // expect(authors).toHaveProperty(authorId);
        expect(authors[authorId].firstname).toBe(firstname);
    });
})


