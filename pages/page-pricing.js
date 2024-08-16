import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import PricingInner from "../components/sections/PricingInner";

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="Pricing" />
                <PricingInner />
            </Layout>
        </>
    )
}
