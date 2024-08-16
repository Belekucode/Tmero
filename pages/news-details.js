import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import BlogDetails from "../components/sections/BlogDetails";

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="Blog Details" />
                <BlogDetails />
            </Layout>
        </>
    )
}
