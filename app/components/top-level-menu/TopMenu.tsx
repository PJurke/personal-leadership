import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {

    const links = [
        { label: "Punkt A", href: "/" },
        { label: "Punkt B", href: "/" },
        { label: "Punkt C", href: "/" },
        { label: "Punkt D", href: "/" },
        { label: "Punkt E", href: "/" },
    ];

    return (
        <nav className="bg-gray-700 fixed p-4 top-0 w-full">
            <ul className="flex flex-col items-center justify-center md:flex-row md:space-x-16">
                {links.map((item, index) => 
                    <TopMenuItem key={index} href={item.href} label={item.label} />
                )}
            </ul>
        </nav>
    );
}