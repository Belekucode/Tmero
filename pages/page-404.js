import React from 'react';
import Layout from "../components/layout/Layout";
import Page404 from "../components/sections/Page404";

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <Page404 />
            </Layout>
        </>
    )
}
