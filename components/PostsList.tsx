import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { GET_POSTS, PostData } from '@/lib/queries/GetPosts';
import Link from 'next/link';



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

    if (filteredPosts?.length!==0) {
    return (
        <div className={`grid grid-cols-3 gap-4`}>
            {filteredPosts?.map((post) => (
                <div className='hover:border-l-2 pl-5 rounded-sm border-cyan-500 p-2 hover:bg-gray-100/50' key={post.id}>
                    <h2 className='font-arapey text-left text-2xl hover:underline decoration-cyan-300'>
                        <Link href={`/posts/${post.slug}`}>
                            {post.title}
                        </Link>
                    </h2>
                    <div className='font-hs' dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                </div>
            ))}
        </div>
    );
    } else {
        return (
            <div>
                <h2 className='text-2xl font-arapey font-medium'>Tu jeszcze nic nie ma, ale kiedyś będzie :) </h2>
            </div>
        )
    }
};

export default PostsList;