import Head from 'next/head'
import Layout from '../../components/layout'
import Alert from '../../components/alert' 

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First post</h1>
            <Alert type="success" alt="b">
                Alert with type="success"
            </Alert>
            <Alert type="error" alt="b">
                Alert with type="error"
            </Alert>
        </Layout>
    )
}