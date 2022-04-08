import "@/styles/global.scss";
import "reflect-metadata";
import '../components/TextEditor/textEditor.scss';
import '../components/TextStyleToolbar/TextEditor.scss'
import "@/styles/global.scss";
import "@credasinc/ctip-ui/components/design-system.scss";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import "@credasinc/ctip-ui/components/design-system.scss";


export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();

  return (
        <Component {...pageProps} />
  );
}
