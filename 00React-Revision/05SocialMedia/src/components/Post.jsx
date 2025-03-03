import React from 'react'

function Post({post}) {
    return (
    <div class="card" style={{width: "18rem"}}>
    <img src="https://images.pexels.com/photos/2176593/pexels-photo-2176593.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="Scenere"/>
    <div class="card-body">
        <h5 class="card-title">{post.title}</h5>
        <p class="card-text">{post.body}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
    );
};

export default Post;
