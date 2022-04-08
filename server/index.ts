import next from "next";
import {Hocuspocus} from "@hocuspocus/server";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

(async () => {
    try {
        await app.prepare();

        const server = new Hocuspocus({
            port: 1234,
        });
        server.listen();
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();