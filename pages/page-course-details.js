import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import CoursesDetails from "../components/sections/CoursesDetails";

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="Courses Details" />
                <CoursesDetails />
            </Layout>
        </>
    )
}
