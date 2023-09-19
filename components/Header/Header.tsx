import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";

const Header = () => {
    return (
        <header className={"flex justify-between items-center border-b-2 py-2 px-6"}>
            <nav className={"flex flex-row items-center justify-center gap-2"}>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </nav>
            <div className={"flex flex-row items-center justify-center gap-2"}>
                <ThemeSwitcher/>
                <div className={"rounded-full w-[32px] h-[32px] bg-blue-500"}/>
            </div>
        </header>
    );
};

export default Header;