import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { GET_POSTS, PostData } from '@/lib/queries/GetPosts';


type PostListProps = {
    category: (string | null);
    className?: string;
}

// Component
const PostsList: React.FC<PostListProps> = ({ category, className }) => {
    const { loading, error, data } = useQuery<PostData>(GET_POSTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const filteredPosts = category ? data?.posts.nodes.filter(post => 
        post.categories.nodes.some(cat => cat.id === category)
    ) : data?.posts.nodes;

    return (
        <div className={`grid grid-cols-3 gap-4 border`}>
            {filteredPosts?.map((post) => (
                <div key={post.id}>
                    <h2 className='font-pd text-2xl'>{post.title}</h2>
                    <div className='font-sofia' dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                </div>
            ))}
        </div>
    );
};

export default PostsList;