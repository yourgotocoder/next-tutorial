import React, { useEffect, useState } from "react";
import useSWR from "swr";

export default function LastSalesPage(props) {
    const [sales, setSales] = useState(props.sales);
    // const [isLoading, setIsLoading] = useState(false);

    const { data, error } = useSWR(
        "https://next-js-cou-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json",
        (url) => fetch(url).then((res) => res.json())
    );

    useEffect(() => {
        if (data) {
            const transformedSales = [];
            for (let key in data) {
                transformedSales.push({
                    id: key,
                    username: data[key].username,
                    volume: data[key].volume,
                });
            }
            setSales(transformedSales);
        }
    }, [data]);

    // useEffect(() => {
    //     setIsLoading(true);
    //     fetch(
    //         "https://next-js-cou-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json"
    //     )
    //         .then((response) => response.json())
    //         .then((data) => {
    //             const transformedSales = [];
    //             for (let key in data) {
    //                 transformedSales.push({
    //                     id: key,
    //                     username: data[key].username,
    //                     volume: data[key].volume,
    //                 });
    //             }
    //             setSales(transformedSales);
    //             setIsLoading(false);
    //         });
    // }, []);

    if (error) {
        return <p>Error</p>;
    }

    if (!data && !sales) {
        return <p>Loading...</p>;
    }

    if (!sales) {
        return <p>No data yet</p>;
    }

    return (
        <ul>
            {sales.map((sale) => (
                <li key={sale.id}>
                    {sale.username} - {sale.volume}
                </li>
            ))}
        </ul>
    );
}

export async function getStaticProps(context) {
    const response = await fetch(
        "https://next-js-cou-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json"
    );

    const data = await response.json();
    const transformedSales = [];

    for (let key in data) {
        transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
        });
    }
    return { props: { sales: transformedSales }, revalidate: 10 };
}
