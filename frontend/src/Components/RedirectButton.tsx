import { Link } from "react-router-dom";

type Props = {
    toggleNav: () => void;
    className?: string;
    path: string;
    label: string;
    typeBtn: keyof { anchor: string; link: string };
};

export default function RedirectButton({
    label,
    toggleNav,
    path,
    className,
    typeBtn,
}: Props) {
    switch (typeBtn) {
        case "anchor":
            return (
                <a onClick={toggleNav} className={className} href={path}>
                    {label}
                </a>
            );
        case "link":
            return (
                <Link onClick={toggleNav} className={className} to={path}>
                    {label}
                </Link>
            );
    }
}
