import React from 'react';
import Layout from "../components/layout/Layout";
import SliderTwo from "../components/sections/SliderTwo";
import AboutFour from '../components/sections/AboutFour';
import AboutThree from '../components/sections/AboutThree';
import CategoryTwo from '../components/sections/CategoryTwo';
import ClientOne from '../components/sections/ClientOne';
import CourseTwo from '../components/sections/CourseTwo';
import EventOne from '../components/sections/EventOne';
import FaqOne from '../components/sections/FaqOne';
import FeatureTwo from '../components/sections/FeatureTwo';
import FunFactOne from '../components/sections/FunFactOne';
import GalleryOne from '../components/sections/GalleryOne';
import NewsTwo from '../components/sections/NewsTwo';
import PricingOne from '../components/sections/PricingOne';
import SignupTwo from '../components/sections/SignupTwo';
import VideoOne from '../components/sections/VideoOne';

export default function Home2() {

    return (
        <>
            <Layout HeaderStyle="two">
                <SliderTwo />
                <CategoryTwo />
                <AboutThree />
                <FunFactOne />
                <CourseTwo />
                <ClientOne />
                <FaqOne />
                <VideoOne />
                <SignupTwo />
                <PricingOne />
                <GalleryOne />
                <FeatureTwo />
                <AboutFour />
                <EventOne />
                <NewsTwo />
            </Layout>
        </>
    )
}
