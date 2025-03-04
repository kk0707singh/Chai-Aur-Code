import { createContext, useReducer } from "react";

export const PostListData = createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if(action.type === "DELETE_POST"){
        newPostList = currPostList.filter((post) => post.id !== action.payload.postId);
    } else if (action.type === "ADD_POST"){
        newPostList = [action.payload, ...currPostList]
    }
    return newPostList;
};

const PostListDataProvider = ({children}) => {
    const [postList, dispatchPostList] = useReducer( postListReducer, DEFAULT_POST_LIST );

    const addPost = (userId, postTitle, postBody, reactions, tags) => {
        dispatchPostList({
            type: "ADD_POST",
            payload: 
            {
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reactions: reactions,
                userId: userId,
                tags: tags,
        
            },
        });
    }

    const deletePost = (postId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postId,
            },
        });
    };

    return (
    <PostListData.Provider value={{ postList, addPost, deletePost }}>
        {children}
    </PostListData.Provider>
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

export default PostListDataProvider;
