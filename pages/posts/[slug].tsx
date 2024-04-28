import { GetServerSideProps, NextPage } from 'next';
import client from '@/lib/apolloClient';
import { GET_POST, PostData } from '@/lib/queries/GetPost';
import { ParsedUrlQuery } from 'querystring';

interface IParams extends ParsedUrlQuery {
    slug: string;
}

interface PostProps {
    title: string;
    content: string;
}

interface PostPageProps {
    post: PostProps;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    console.log("Slug Received:", params?.slug);  // Check the received slug
    if (!params || !params.slug) {
        return { notFound: true };
    }

    try {
        const { data } = await client.query({
            query: GET_POST,
            variables: { slug: params.slug }
        });
        console.log("GraphQL Data:", data);  // Check the received data
        if (!data || !data.postBy) {
            return { notFound: true };
        }

        return {
            props: {
                post: data.postBy,
            },
        };
    } catch (error) {
        console.error("Fetching Error:", error);  // Log any errors
        return { notFound: true };
    }
};

const PostPage: NextPage<PostPageProps> = ({ post }) => {
    return (
        <article>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
    );
};

export default PostPage;
