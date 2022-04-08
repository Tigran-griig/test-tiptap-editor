import {ReactElement, ReactNode} from "react";
import "../styles/global.scss";
import "reflect-metadata";
import '../components/TextEditor/textEditor.scss';
import '../components/TextStyleToolbar/TextEditor.scss'
import "../styles/global.scss";
import "styles/globals.css";

import {NextPage} from "next";
import {AppProps} from "next/app";


type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

const MyApp = ({Component, pageProps}: AppPropsWithLayout) => {
    const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

    return (
        {getLayout(<Component {...pageProps} />)}
);
};

export default MyApp;
