import { GetServerSideProps, NextPage } from 'next';
import client from '@/lib/apolloClient';
import { GET_POST, PostData } from '@/lib/queries/GetPost';
import parse, {domToReact, Element} from 'html-react-parser';
import { ParsedUrlQuery } from 'querystring';
import TopNav from '@/components/TopNav';

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
        // make query
        const { data } = await client.query({
            query: GET_POST,
            variables: { slug: params.slug }
        });
        console.log("GraphQL Data:", data);  // Check the received data
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
            <article className='grid grid-cols-1  justify-center lg:mx-40 md:mx-20 sm:mx-10 my-10 items-center text-center'>
                <h1 className='font-pd text-6xl mb-10 hover:underline decoration-cyan-300'>{post.title}</h1>
                <div className='post-content text-left' dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
        </div>
    );
};

export default PostPage;
