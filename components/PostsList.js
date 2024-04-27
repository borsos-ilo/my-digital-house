import { useQuery, gql } from '@apollo/client';

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

const PostsList = ({selectedPostCategory}) => {
    const { loading, error, data } = useQuery(GET_POSTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const filteredPosts=data.posts.nodes.filter( post=>
        post.categories.nodes.some(categories=>categories.id === selectedPostCategory)
    )

    return (
        <div>
            {filteredPosts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
            ))}
        </div>
    );
};

export default PostsList;
