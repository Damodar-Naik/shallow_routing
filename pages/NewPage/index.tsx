import Head from 'next/head'
import { useRouter } from "next/router";
import NewChild from '@/components/NewChild';


export default function NewPage() {
    const router = useRouter();

    const handleParams = () => {
        const currentStatus = 'abc';
        const urlRecordsPerpage = 'xyz'
        router.push(`/NewPage?status=${currentStatus}&recordsPerpage=${urlRecordsPerpage}`, undefined, { shallow: true })
    }
    return (
        <>
            <Head>
                <title>Create Next App</title>
            </Head>
            <div>
                this is new page
                
                <button onClick={handleParams}>this is newChild</button>
            </div>
        </>
    )
}
