import { GetServerSideProps, NextPage } from 'next';
import client from '@/lib/apolloClient';
import { GET_POST, PostData } from '@/lib/queries/GetPost';
import TopNav from '@/components/TopNav';

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
        // make query
        const { data } = await client.query({
            query: GET_POST,
            variables: { slug: params.slug }
        });
        if (!data || !data.postBy) {
            return { notFound: true };
        }
        // I think this is where I should parse the data
        return {
            // why this syntax? I need to learn more about getServerSideProps, maybe it's baked there
            // I guess what getServerSideProps returns is... props (duh) and this is the way to return them
            props: {
                //post details
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
        <div>
            <TopNav/>
            <article className='grid grid-cols-1 lg:mx-72 md:mx-36 sm:mx-16 border my-10'>
                <h1 className='text-center text-6xl mb-10  hover:underline decoration-cyan-300 font-vollkorn font-semibold'>{post.title}</h1>
                <div className='post-content text-left' dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
        </div>
    );
};

export default PostPage;
