import "../styles/global.scss";
import "reflect-metadata";
import '../components/TextEditor/textEditor.scss';
import '../components/TextStyleToolbar/TextEditor.scss'
import "../styles/global.scss";

const MyApp = ({Component, pageProps:{...pageProps}}) => {
    return (
        <div>
            <Component {...pageProps} />
        </div>
    );
};

export default MyApp;
