import { useRouter } from "next/router";
import React from "react";

export default function ClientsProjectPage() {
    const router = useRouter();
    console.log(`From a client ${JSON.stringify(router.query)}`);

    const loadProjectHandler = () => {
        router.push({
            pathname: "/clients/[id]/[clientProjectId]",
            query: {
                id: "max",
                clientProjectId: "A",
            },
        });
    };

    return (
        <div>
            <h1>The Projects of a given client</h1>
            <button onClick={loadProjectHandler}>Load a project a</button>
        </div>
    );
}
