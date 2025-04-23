import '@mantine/core/styles.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@mantine/carousel/styles.css';
import '@mantine/dates/styles.css';
import './index.scss'
import {theme} from './theme/index.jsx'
import {MantineProvider} from "@mantine/core";
import {BrowserRouter} from "react-router-dom";
import {ModalsProvider} from "@mantine/modals";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <MantineProvider
                theme={theme}
            >
                <ModalsProvider>
                    <App/>
                </ModalsProvider>
            </MantineProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
