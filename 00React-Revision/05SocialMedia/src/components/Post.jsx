import React, { useContext } from 'react'
import { MdAutoDelete } from "react-icons/md";
import { PostListData } from '../store/Post-list-store';


function Post({post}) {
    const {deletePost} = useContext(PostListData);
    return (
    <div className="card post-card" style={{width: "30rem"}}>
    <img src="https://images.pexels.com/photos/2176593/pexels-photo-2176593.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="Scenere"/>
    <div className="card-body">
        <h5 className="card-title">{post.title}
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        onClick={() => deletePost(post.id)}>
        <MdAutoDelete />
        </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (<span key={tag} className="badge text-bg-primary hashtag">{tag}</span>))}
        <div className="alert alert-danger reactions" role="alert">
            This Post has been Reacted by {post.reactions} people.
        </div>
        
    </div>
    </div>
    );
};

export default Post;
