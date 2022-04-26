import Head from "next/head";

import "../styles/globals.css";
import Layout from "../components/layout/layout";
import Notification from "../components/UI/Notification";
import { NotificationContextProvider } from "../store/notification-context";

function MyApp({ Component, pageProps }) {
    return (
        <NotificationContextProvider>
            <Layout>
                <Head>
                    <title>Next Events</title>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                </Head>
                <Component {...pageProps} />
                <Notification
                    title="Test"
                    message="This is a test"
                    status="pending"
                />
            </Layout>
        </NotificationContextProvider>
    );
}

export default MyApp;
