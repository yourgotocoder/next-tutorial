import { useRouter } from "next/router";
import React from "react";

export default function ClientsProjectPage() {
    const router = useRouter();
    console.log(`From a client ${JSON.stringify(router.query)}`);

    return (
        <div>
            <h1>The Projects of a given client</h1>
        </div>
    );
}
