import React from "react";

export default function ProductDetailPage(props) {
    const { loadedProduct } = props;

    if (!loadedProduct) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <h1>{loadedProduct.title}</h1>
            <p>{loadedProduct.description}</p>
        </>
    );
}

export async function getStaticProps(context) {
    const { params } = context;
    const productId = params.pid;
    const fs = await import("fs/promises");
    const path = await import("path");

    const filepath = path.join(process.cwd(), "data", "dummy-backend.json");

    const jsonData = await fs.readFile(filepath);
    const data = JSON.parse(jsonData);
    const product = data.products.find((product) => product.id === productId);

    return {
        props: {
            loadedProduct: product,
        },
    };
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { pid: "p1" } }],
        fallback: true,
    };
}
