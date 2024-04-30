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

// transform returned props
const styling = {
    replace: (domNode: any) => {
        if (domNode instanceof Element && domNode.type==='tag') {
            switch(domNode.name) {
                case 'p': domNode.attribs.className = (domNode.attribs.className || '') + ' font-sofia text-left'; break;
                case 'h3': domNode.attribs.className = (domNode.attribs.className || '') + ' text-xl'; break;
                case 'ol': domNode.attribs.className = (domNode.attribs.className || '') + ' list-decimal text-left'; break;
            }
        }
    }
}

const PostPage: NextPage<PostPageProps> = ({ post }) => {
    const parsedContent = parse(post.content, styling)
    console.log(parsedContent)
    return (
        <div className='p-20'>
            <TopNav/>
            <article className='grid grid-cols-1  justify-center p-3 items-center text-center'>
                <h1 className='font-pd text-2xl hover:underline decoration-cyan-300'>{post.title}</h1>
                <div> {parsedContent} </div>
            </article>
        </div>
    );
};

export default PostPage;
