import React from "react";

export default function UserProfilePage() {
    return <h1>Sudu</h1>;
}

export async function getServerSideProps(context) {
    const { prams, req, res } = context;

    return {
        props: {},
    };
}
