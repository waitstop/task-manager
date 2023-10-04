import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import Link from "next/link";

const Header = () => {
    return (
        <header className={"flex justify-between items-center border-b-2 py-2 px-6"}>
            <nav className={"flex flex-row items-center justify-center gap-2"}>
                <Link href="#">Home</Link>
            </nav>
            <div className={"flex flex-row items-center justify-center gap-2"}>
                <ThemeSwitcher/>
                <div className={"rounded-full w-[32px] h-[32px] bg-blue-500"}/>
            </div>
        </header>
    );
};

export default Header;