import "../styles/global.scss";
import "reflect-metadata";
import '../components/TextEditor/textEditor.scss';
import '../components/TextStyleToolbar/TextEditor.scss'
import "../styles/global.scss";
import type { AppProps } from "next/app";



export default function MyApp({
  Component,
  pageProps,
}: AppProps) {

  return (
      <>
        <Component {...pageProps} />
      </>
  );
}
