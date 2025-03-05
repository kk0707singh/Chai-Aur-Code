import React, { useContext, useRef } from 'react'
import { PostListData } from '../store/Post-list-store';

function CreatePost() {
    const { addPost } = useContext(PostListData)

    const userIdElement = useRef();
    const postTitleElement = useRef();
    const postBodyElement = useRef();
    const reactionsElement = useRef();
    const tagsElement = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const userId = userIdElement.current.value;
        const postTitle = postTitleElement.current.value;
        const postBody = postBodyElement.current.value;
        const reactions = reactionsElement.current.value;
        const tags = tagsElement.current.value.split(" ");


        userIdElement.current.value="";
        postTitleElement.current.value="";
        postBodyElement.current.value="";
        reactionsElement.current.value="";
        tagsElement.current.value="";

        addPost(userId, postTitle, postBody, reactions, tags);
    }


    return (
    <form className='create-post' onSubmit={handleSubmit}>

    <div className="mb-3">
        <label for="userId" className="form-label">Enter your UserId here</label>
        <input type="text" ref={userIdElement} className="form-control" id="userId" placeholder='Enter your user id...'/>
    </div>


    <div className="mb-3">
        <label for="title" className="form-label">Post Title</label>
        <input type="text" ref={postTitleElement} className="form-control" id="title" placeholder='How are you feeling today'/>
    </div>


    <div className="mb-3">
        <label for="body" className="form-label">Post Content</label>
        <textarea type="text"  rows="4" ref={postBodyElement} className="form-control" id="body" placeholder='Tell Us more about it....'/>
    </div>

    
    <div className="mb-3">
        <label for="reactions" className="form-label">Number of reactions</label>
        <input type="text" ref={reactionsElement} className="form-control" id="reactions" placeholder='Number of people reacted to this post'/>
    </div>


    <div className="mb-3">
        <label for="tags" className="form-label">Enter your Hashtag Here</label>
        <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder='Please enter tags using space'/>
    </div>

    


    <button type="submit" className="btn btn-primary">Post</button>
    </form>
    )
}

export default CreatePost
