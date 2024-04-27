import { useQuery, gql } from '@apollo/client';

const GET_POSTS = gql`
query GetPosts {
    posts {
        nodes {
            id
            title
            content
        }
    }
}
`;

const PostsList = () => {
    const { loading, error, data } = useQuery(GET_POSTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            {data.posts.nodes.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
            ))}
        </div>
    );
};

export default PostsList;
