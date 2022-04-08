import Head from "next/head";
import LayoutDefault from "../components/Layout";

export default function Home() {
  return (
    <LayoutDefault>
      <Head>
        <title>Center for Trauma Informed Practices Outreach</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div>
            <div className="flex items-center">
              <span className="ml-[7px]">
              </span>
            </div>
        </div>
    </LayoutDefault>
  );
}
