    // pages/index.tsx
    import { GetServerSideProps } from 'next';
    import PostList from '../components/PostList';
    import { Post } from '../types/types';

    interface HomePageProps {
    posts: Post[];
    }

    const HomePage: React.FC<HomePageProps> = ({ posts }) => {
    return (
        <div>
        <h1>Posts</h1>
        <PostList posts={posts} />
        </div>
    );
    };

    export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await res.json();

    return {
        props: {
        posts,
        },
    };
    };

    export default HomePage;
