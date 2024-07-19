import Link from "next/link";

export default function Footer() {

    const links = [
        { label: "Element A", href: "/"},
        { label: "Element B", href: "/"},
        { label: "Element C", href: "/"},
    ];

    return (
        <footer className="bg-gray-700 flex justify-center p-4 space-x-16 text-white">
            {links.map((item, index) => 
                <Link key={index} href={item.href}>{item.label}</Link>
            )}
        </footer>
    );
}