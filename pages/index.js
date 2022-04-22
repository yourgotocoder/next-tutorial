import React from "react";

const HomePage = (props) => {
    const { products } = props;

    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>{product.title}</li>
            ))}
        </ul>
    );
};

export async function getStaticProps(context) {
    console.log("Regenerating");

    const fs = await import("fs/promises");
    const path = await import("path");

    const filepath = path.join(process.cwd(), "data", "dummy-backend.json");

    const jsonData = await fs.readFile(filepath);
    const data = JSON.parse(jsonData);

    return {
        props: {
            products: data.products,
        },
        revalidate: 10,
        notFound: data.length === 0,
    };
}

export default HomePage;
