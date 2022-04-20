import React from "react";
import { useRouter } from "next/router";

export default function ProjectPage() {
    const router = useRouter();
    console.log(router.pathname);
    console.log(router.query);
    return (
        <div>
            <h1>Project Page</h1>
            <p>Id: {router.query.id}</p>
        </div>
    );
}
