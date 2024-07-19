import Link from "next/link";

export default function TopMenu() {
    return (
        <nav className="bg-orange-300 fixed p-4 top-0 w-full">
            <ul className="flex flex-col items-center md:flex-row md:space-x-4">
                <li><Link href="/">Punkt A</Link></li>
                <li><Link href="/">Punkt B</Link></li>
                <li><Link href="/">Punkt C</Link></li>
                <li><Link href="/">Punkt D</Link></li>
                <li><Link href="/">Punkt E</Link></li>
            </ul>
        </nav>
    );
}