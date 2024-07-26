    import React from 'react';
    import { Post } from '../types/types';

    interface PostListProps {
    posts: Post[];
    }

    const PostList: React.FC<PostListProps> = ({ posts }) => {
    return (
        <div>
        {posts.map((post) => (
            <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            </div>
        ))}
        </div>
    );
    };

    export default PostList;
