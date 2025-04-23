import {useRoutes} from "react-router-dom";
import Layout from "../view/Layout.jsx";
import Home from "../view/home/Home.jsx";
import {lazy} from "react";
import {Center, Loader} from "@mantine/core";
import {Suspense} from "react";
import Test from "../view/test/Test.jsx";
import CanvasEffect from "../view/services/3serviceGrid/CanvasEffect.jsx";
//dynamic
const AboutUs = lazy(() => import("../view/aboutUs/AboutUs.jsx"));
const Services = lazy(() => import("../view/services/Services.jsx"));
const UseCases = lazy(() => import("../view/useCases/UseCases.jsx"));
const Testimonial = lazy(() => import("../view/testimonial/Testimonial.jsx"));
const ContactUs = lazy(() => import("../view/contactUs/ContactUs.jsx"));
const ItResume = lazy(() => import("../view/extra/ItResume.jsx"));
const FullstackResume = lazy(() => import("../view/extra/FullstackResume.jsx"));
// const Thanks = lazy(() => import("../view/thanks/Thanks.jsx"));

export default function Routes() {

    return useRoutes([{
        path: '/',
        element: <Layout/>,
        children: [{
            index: true,
            element: <Home/>,
        }, {
            path: '/services',
            element: <Suspense fallback={<Center h='100dvh'><Loader/></Center>}><Services/></Suspense>
        }, {
            path: '/about-us',
            element: <Suspense fallback={<Center h='100dvh'><Loader/></Center>}><AboutUs/></Suspense>
        }, {
            path: '/use-cases',
            element: <Suspense fallback={<Center h='100dvh'><Loader/></Center>}><UseCases/></Suspense>
        }, {
            path: '/testimonial',
            element: <Suspense fallback={<Center h='100dvh'><Loader/></Center>}><Testimonial/></Suspense>
        }, {
            path: '/contact-us',
            element: <Suspense fallback={<Center h='100dvh'><Loader/></Center>}><ContactUs/></Suspense>
        }, {
            path: '*',
            element: <Center h='100dvh'>No Page Matched</Center>
        }, /*{
            path: '/thanks',
            element: <Suspense fallback={<Center h='100vh'><Loader/></Center>}><Thanks/></Suspense>
        }/*{
            path: '/test',
            element: <Test/>
        }*/],
    },/*, {
        path: '/thanks',
        element: <Test/>,
        children: [{
            index: true,
            element: <CanvasEffect/>
        }]
    }*/{
        path: '/luis-castro-it-resume',
        element: <Suspense fallback={<Center h='100dvh'><Loader/></Center>}><ItResume/></Suspense>
    }, {
        path: '/luis-castro-fullstack-resume',
        element: <Suspense fallback={<Center h='100dvh'><Loader/></Center>}><FullstackResume/></Suspense>
    }])
}