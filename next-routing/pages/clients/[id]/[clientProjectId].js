import { useRouter } from "next/router";
import React from "react";

export default function SelectedClientProjectPage() {
    const router = useRouter();
    console.log(router.query);
    return (
        <div>The project page for a specific project for a selected client</div>
    );
}
