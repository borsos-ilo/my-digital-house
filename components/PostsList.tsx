import { useQuery, gql } from '@apollo/client';
import React from 'react';

// GraphQL query
const GET_POSTS = gql`
query GetPosts {
    posts {
        nodes {
            id
            title
            content
            categories {
                nodes {
                    id
                    name
                }
            }
        }
    }
}
`;

// TypeScript interfaces
interface Category {
    id: string;
    name: string;
}

interface Post {
    id: string;
    title: string;
    content: string;
    categories: {
        nodes: Category[];
    };
}

interface PostData {
    posts: {
        nodes: Post[];
    };
}



// Component
const PostsList: React.FC = () => {
    const { loading, error, data } = useQuery<PostData>(GET_POSTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;


    return (
        <div>
            {data?.posts.nodes.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
            ))}
        </div>
    );
};

export default PostsList;