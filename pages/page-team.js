import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import TeamInner from '../components/sections/TeamInner';

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="Team Grid" />
                <TeamInner />
            </Layout>
        </>
    )
}
