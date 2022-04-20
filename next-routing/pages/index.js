import React from "react";
import Link from "next/link";

export default function HomePage() {
    return (
        <div>
            <h1>Home</h1>
            <ul>
                <li>
                    <Link href="/clients">Client</Link>
                </li>
                <li>
                    <Link href="/portfolio">Portfolio</Link>
                </li>
            </ul>
        </div>
    );
}
