    // pages/posts/index.tsx
    import { useRouter } from 'next/router';
    import PostForm from '../../components/PostForm';
    import { Post } from '../../types/types';

    const CreatePostPage: React.FC = () => {
    const router = useRouter();

    const handleSubmit = async (post: Omit<Post, 'id'>) => {
        await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
        });

        router.push('/');
    };

    return (
        <div>
        <h1>Create Post</h1>
        <PostForm onSubmit={handleSubmit} />
        </div>
    );
    };

    export default CreatePostPage;
