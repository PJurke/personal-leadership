import Link from "next/link";

interface TopMenuItemProps {
    href: string;
    label: string;
}

export default function TopMenuItem({ href, label }: TopMenuItemProps) {
    return (
        <li>
            <Link className="text-white" href={href}>
                {label}
            </Link>
        </li>
    );
}