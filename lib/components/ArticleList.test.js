import React from 'react';
import renderer from 'react-test-renderer';
import ArticleList from './ArticleList';

describe('ArticleList', () => {

    const testProps = {
        articles: {
            a: { id: 'a' },
            b: { id: 'b' },
        },
        articleActions: {
            lookupAuthor: jest.fn(() => ({})),
        },
    };

    it('renders correctly to snapshot', () => {
        const treeObj = renderer.create(
            <ArticleList {...testProps} />
        ).toJSON();

        expect(treeObj).toMatchSnapshot();
    });

    it('renders correctly', () => {
        const treeObj = renderer.create(
            <ArticleList {...testProps} />
        ).toJSON();

        expect(treeObj.children.length).toBe(2);
        expect(treeObj).toMatchSnapshot();
    });

});