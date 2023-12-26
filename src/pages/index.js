import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import {Inter} from 'next/font/google'
import Banner from "@/components/banner/Banner";
import Navbar from "@/components/navbar/Navbar";
import CardSection from "@/components/card-section/Card-section";
import {GetPopularVideos, GetVideos} from "../../lib/videos";

const inter = Inter({subsets: ['latin']})


/**
 * Get videos from the database and pass them to the component as props for server side rendering of the page content.
 * @returns {Promise<{props: {disneyVideos: [], adventureVideos: [], actionVideos: []}}>}
 */
export const getServerSideProps = async () => {
    const disneyVideos = await GetVideos('disney');
    const actionVideos = await GetVideos('action');
    const popularVideos = await GetPopularVideos();

    return {
        props: {disneyVideos, popularVideos, actionVideos}
    }
};


export default function Home({disneyVideos, actionVideos, popularVideos}) {

    return (
        <>
        <Head>
            <title>Netflix Clone</title>
            <meta name="description" content="Generated by create next app"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <div className={styles.main}>
            <h2>Netflix</h2>
            <Navbar username='elliottpolite@gmail.com'/>
            <Banner
                title="NETFLIX ORIGINAL SERIES"
                subtitle="Stranger Things"
                imgUrl="/static/genericImage.jpg"
            />
            <CardSection title={'Popular'} videos={popularVideos} size='large'/>
            <CardSection title={'Action'} videos={actionVideos} size='medium'/>
            <CardSection title={'Disney'} videos={disneyVideos} size='small'/>
        </div>
</>
)
}
