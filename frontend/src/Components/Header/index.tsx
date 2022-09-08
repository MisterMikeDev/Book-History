import { Link } from "react-router-dom";
export default function Header() {
    return (
        <header className="NavBar">
            <section>
                <h1>Book History</h1>
            </section>
            <nav>
                <Link to="#">1</Link>
                <Link to="#">2</Link>
                <Link to="#">3</Link>
                <Link to="#">4</Link>
            </nav>
        </header>
    );
}
