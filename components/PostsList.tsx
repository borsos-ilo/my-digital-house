import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { GET_POSTS, PostData } from '@/lib/queries/GetPosts';


// Component
const PostsList: React.FC<{ category: string | null }> = ({ category }) => {
    const { loading, error, data } = useQuery<PostData>(GET_POSTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const filteredPosts = category ? data?.posts.nodes.filter(post => 
        post.categories.nodes.some(cat => cat.id === category)
    ) : data?.posts.nodes;

    return (
        <div>
            {filteredPosts?.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
            ))}
        </div>
    );
};

export default PostsList;