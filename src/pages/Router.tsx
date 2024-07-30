import {createHashRouter, RouteObject} from "react-router-dom";
import MainLayout from "../layout/MainLayout.tsx";
import {MainBody} from "../components/MainBody/MainBody.tsx";
import ErrorPage from "./Error.tsx";
import AboutPage from "./About.tsx";
import EpisodesPage from "./Episodes.tsx";
import {episodesLoader} from "./EpisodesLoader.tsx";
import CollaborationsPage from "./Collaborations.tsx";
import ServicesPage from "./Services.tsx";

export const links = [
    {link: '/a-propos', label: 'Qui sommes-nous?'},
    {link: '/episodes', label: 'Épisodes'},
    {link: '/collaborations', label: 'Collaborations'},
    {link: '/services', label: 'Services'},
];

const routes: RouteObject[] = [
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorPage />,

        children: [
            {index: true, element: <MainBody/>},
            {
                path: 'a-propos',
                element: <AboutPage />
            },
            {
                path: 'episodes',
                element: <EpisodesPage />,
                loader: episodesLoader
            },
            {
                path: 'collaborations',
                element: <CollaborationsPage />
            },
            {
                path: 'services',
                element: <ServicesPage />
            }
        ]
    }]


const router = createHashRouter(routes);

export default router;

