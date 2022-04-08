import Router from "next/router";
import { v4 as uuidv4 } from "uuid";

import {NextPage} from "next";

const page: NextPage = () => <p>not found</p>;

page.getInitialProps = async ({ res }) => {
    const uuid = uuidv4();
    if (res) {
        res.writeHead(302, {
            Location: `/rooms/${uuid}`,
        });
        res.end();
        return {};
    }
    Router.push(`/rooms/${uuid}`);
    return {};
};

export default page;
