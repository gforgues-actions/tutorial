import '@mantine/core/styles.css';
import {MantineProvider, createTheme, MantineColorsTuple} from '@mantine/core';
import {RouterProvider} from "react-router-dom";
import router from "./pages/Router.tsx";
import {Provider} from "react-redux";
import {store} from "./store";

function App() {

    //Base color: #5A788F
    const header: MantineColorsTuple = [
        '#eaf6fe',
        '#e0e8f0',
        '#c2cfd9',
        '#a1b4c2',
        '#869daf',
        '#748fa4',
        '#69889f',
        '#58758b',
        '#4b687e',
        '#3a5a71'
    ];

    const theme = createTheme({
        colors: {
            header,
        },

    });


    return (
        <MantineProvider theme={theme}>
            <Provider store={store}>
            <RouterProvider router={router} />
            </Provider>
        </MantineProvider>

    )
}

export default App
