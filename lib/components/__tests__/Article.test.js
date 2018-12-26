import React from 'react';
import shallow from '../../../enzyme/setup';
import toJson from 'enzyme-to-json';
import Article from '../Article';

describe('Article', () => {
    const testProps = {
        article: {
            authorId: 123,
            date: "Mon Jul 11 2016 00:00:00 GMT+0000 (UTC)",
            title: "testArticle",
            body: "testtesttesttesttesttesttesttest"
        }
    }

    const author = {
        id: 123,
        firstName: "fn",
        lastName: "ln",
        website: "site.com"
    }

    const testContext = {
        store: {
            lookupAuthor: jest.fn().mockReturnValueOnce(author)
        }
    }

    it("renders correctly to snapshot", () => {
        const wrapper = shallow(
            <Article {...testProps}/>, { context: testContext });
       
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("have correct props", () => {
        const wrapper = shallow(
            <Article {...testProps}/>, { context: testContext });

        expect(wrapper.getElement().props.article).toBe(testProps.article);
        expect(wrapper.getElement().props.author).toBe(testProps.author);
    });

    it("have a store with a function", () => {
        const wrapper = shallow(
            <Article {...testProps}/>, { context: testContext });
        
        expect(wrapper.getElement().props.store.lookupAuthor).toBeCalledWith(author.id);
    });
});
