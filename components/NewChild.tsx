import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useRouter } from "next/router";


export default function NewPage() {
    const router = useRouter();
    const queryParams = new URLSearchParams(router.asPath.split("?")[1]);

    const handleParams = () => {
        const currentStatus = 'abc';
        const urlRecordsPerpage = 'xyz'
        if (true) {
            router.push('/NewPage?orders=444', `/NewPage?orders=444`, { shallow: true })
            // router.push(`/orders?status=${currentStatus}&recordsPerpage=${urlRecordsPerpage}&startDate=${urlStartDate}&endDate=${urlEndDate}&search=${searchBar}`, undefined, { shallow: true })
        } else {
            router.push(`/orders?vcStatus==${currentStatus}&recordsPerpage=${urlRecordsPerpage}`, undefined, { shallow: true })
        }
    }
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <button onClick={handleParams}>this is newChild</button>
            </main>
        </>
    )
}