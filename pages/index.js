import React from "react";
import Link from "next/link";

const HomePage = (props) => {
    const { products } = props;

    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    <Link href={`/${product.id}`}>{product.title}</Link>
                </li>
            ))}
        </ul>
    );
};

export async function getStaticProps(context) {
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
