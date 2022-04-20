import React from "react";
import Link from "next/link";

export default function ClientsPage() {
    const clients = [
        { id: "sudu", name: "Sudu" },
        { id: "su", name: "Su" },
        { id: "du", name: "Du" },
    ];

    return (
        <div>
            <h1>ClientsPage</h1>
            <ul>
                {clients.map((client) => (
                    <li>
                        <Link
                            href={{
                                pathname: "/clients/[id]",
                                query: { id: client.id },
                            }}
                        >
                            {client.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
