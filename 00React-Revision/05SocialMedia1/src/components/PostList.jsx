import { useContext, useEffect, useState } from 'react';
import Post from './Post';
import { PostListData } from '../store/Post-list-store';
import WelcomMessage from './WelcomMessage';
import LoadingSpinner from './LoadingSpinner';

const PostList = () => {
    const {postList, addInitialPosts} = useContext(PostListData);
    const [fetching, setFetching] = useState(false);

    useEffect(() => {
        setFetching(true);
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data => {
            addInitialPosts(data.posts);
            setFetching(false);
        });
    }, []);

    return (
        <>
        {fetching && <LoadingSpinner />}
        {!fetching && postList.length === 0 && <WelcomMessage />}
        {!fetching && postList.map((post) => (<Post key={post.id} post={post} />))}
        </>
    );
};

export default PostList;
