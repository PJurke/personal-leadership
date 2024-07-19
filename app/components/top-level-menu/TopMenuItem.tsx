import Link from "next/link";

interface TopMenuItemProps {
    href: string;
    label: string;
}

export default function TopMenuItem({ href, label }: TopMenuItemProps) {
    return (
        <li>
            <Link href={href}>
                {label}
            </Link>
        </li>
    );
}