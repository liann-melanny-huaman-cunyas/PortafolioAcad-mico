    // pages/posts/[id].tsx
    import { GetServerSideProps } from 'next';
    import { useRouter } from 'next/router';
    import PostForm from '../../components/PostForm';
    import { Post } from '../../types/types';

    interface EditPostPageProps {
    post: Post;
    }

    const EditPostPage: React.FC<EditPostPageProps> = ({ post }) => {
    const router = useRouter();

    const handleSubmit = async (updatedPost: Omit<Post, 'id'>) => {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPost),
        });

        router.push('/');
    };

    return (
        <div>
        <h1>Edit Post</h1>
        <PostForm onSubmit={handleSubmit} initialData={post} />
        </div>
    );
    };

    export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params!;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post: Post = await res.json();

    return {
        props: {
        post,
        },
    };
    };

    export default EditPostPage;
