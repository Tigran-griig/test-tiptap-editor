import { NextPage } from "next";
import Link from "next/link";
import { useRef, useCallback } from "react";
import { Refreshable } from "../../utils/refreshable";

const Page: NextPage = () => {
    const ref = useRef<Refreshable>();

    const handleRefresh = useCallback(
        () => ref.current && ref.current.refresh(),
        [ref.current]
    );

    return (
        <section>
            <p>
                hello world! to create a new room, visit{" "}
                <Link href="/rooms/new">
                    <a>this link</a>
                </Link>
                .
            </p>

            <p>existing rooms are listed below:</p>
            <button disabled={!!ref.current} onClick={handleRefresh}>
                refresh
            </button>
        </section>
    );
};

export default Page;
