import React from 'react';
import Layout from "../components/layout/Layout";
import SliderOne from "../components/sections/SliderOne";
import AboutOne from '../components/sections/AboutOne';
import AboutTwo from '../components/sections/AboutTwo';
import CategoryOne from '../components/sections/CategoryOne';
import ClientOne from '../components/sections/ClientOne';
import CountdownOne from '../components/sections/CountdownOne';
import CourseOne from '../components/sections/CourseOne';
import CtaOne from '../components/sections/CtaOne';
import FeatureOne from '../components/sections/FeatureOne';
import NewsOne from '../components/sections/NewsOne';
import SignupOne from '../components/sections/SignupOne';
import TeamOne from '../components/sections/TeamOne';
import TestimonialOne from '../components/sections/TestimonialOne';

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <SliderOne />
                <AboutOne />
                <CourseOne />
                <FeatureOne />
                <CategoryOne />
                <SignupOne />
                <TeamOne />
                <CtaOne />
                <TestimonialOne />
                <AboutTwo />
                <CountdownOne />
                <NewsOne />
                {/* <ClientOne /> */}
            </Layout>
        </>
    )
}
