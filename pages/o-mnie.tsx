import { GetServerSideProps, NextPage } from 'next';
import client from '@/lib/apolloClient';
import { GET_PAGE } from '@/lib/queries/GetPage';

type PageProps = {
    uri: string;
    content: string;
    title:string;
}

type PagePageProps = {
    page: PageProps
}

export async function getStaticProps() {
    const res = await client.query({
        query: GET_PAGE,
        variables: { uri: 'o-mnie' }
    });

    // Assuming `res.data.pageBy` is the correct path to your data based on your query structure
    return {
        props: {
            page: res.data.pageBy,  // Make sure this path matches your actual data structure
        },
        revalidate: 10  // Optional: enable ISR (Incremental Static Regeneration) with revalidation period
    }
}

// TODO: Finish rendering page
// I have a feeling I should do it differently than [slug]
const Page: NextPage<PagePageProps> = ({ page }) => {
    return (
        <div>
            <h1>{page.title}</h1>
            <p dangerouslySetInnerHTML={{__html: page.content}}></p>
        </div>
    );
};

export default Page;
