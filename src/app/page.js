import Navbar from "@/Components/Navbar";
import NavbarContainer from "@/Components/NavbarContainer";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <nav>
                <NavbarContainer>
                    <Navbar />
                </NavbarContainer>
            </nav>
            <main></main>
            <footer></footer>
        </>
    );
}
