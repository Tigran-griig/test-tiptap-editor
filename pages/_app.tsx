import "../styles/global.scss";
import "reflect-metadata";
import '../components/TextEditor/textEditor.scss';
import '../components/TextStyleToolbar/TextEditor.scss'
import "../styles/global.scss";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";



export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();
  return (
        <Component {...pageProps} />
  );
}
