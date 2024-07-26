    // components/PostForm.tsx
    import React, { useState } from 'react';
    import { Post } from '../types/types';

    interface PostFormProps {
    onSubmit: (post: Omit<Post, 'id'>) => void;
    initialData?: Omit<Post, 'id'>;
    }

    const PostForm: React.FC<PostFormProps> = ({ onSubmit, initialData }) => {
    const [title, setTitle] = useState(initialData?.title || '');
    const [body, setBody] = useState(initialData?.body || '');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ title, body });
    };

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label>Title</label>
            <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
        </div>
        <div>
            <label>Body</label>
            <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            />
        </div>
        <button type="submit">Submit</button>
        </form>
    );
    };

    export default PostForm;
