import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
    return currPostList;
};

const PostListProvider = ({children}) => {
    const [postList, dispatchPostList] = useReducer( postListReducer, DEFAULT_POST_LIST );

    const addPost = () => {

    }

    const deletePost = () => {

    }

    return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
        {children}
    </PostList.Provider>
    );
};

const DEFAULT_POST_LIST = [
    {
        id: '1',
        title: 'Going to Mumbai',
        body: 'Hiee Friends i am going to mumbai for my vacation. Hope to enjoy a lot Peace out',
        reactions: 2,
        userId: 'user-9',
        tags: ['vacation', 'mumbai', 'enjoying'],

    },
    {
        id: '2',
        title: 'Pass ho gye bhai',
        body: '5 saal k masti k baad v ho gye pass hard to believe',
        reactions: 15,
        userId: 'user-12',
        tags: ['Graduating', 'unbelievable'],

    },
];

export default PostListProvider;