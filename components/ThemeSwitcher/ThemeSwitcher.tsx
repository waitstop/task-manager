"use client"


import variables from "@/app/variables.module.scss";
import {ChangeEvent, useEffect, useState} from "react";
import {motion} from "framer-motion"
import MoonIcon from "@/public/icons/moon.svg";
import SunIcon from "@/public/icons/sun.svg";

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        if (typeof window === "undefined") return "light";
        if (localStorage.getItem("theme")) {
            return localStorage.getItem("theme") === "dark" ? "dark" : "light"
        }
        if (!window.matchMedia) return "light";
        return (window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
    })
    useEffect(() => {
        if (typeof window === "undefined") return
        localStorage.setItem("theme", theme)
        document.documentElement.setAttribute("data-theme", theme)
    }, [theme])
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTheme(e.target.checked ? "dark" : "light")
    }
    return (
        <div>
            <label htmlFor={"theme-switcher"}>
                <motion.div key={theme}
                            className={"overflow-hidden"}
                            initial={theme === "dark" ? {rotate: -135}:{y: 50, opacity: 0}}
                            animate={theme === "dark" ? {rotate: 0}:{y: 0, opacity: 1}}
                >
                    {theme === "light" ?
                        <MoonIcon className={"h-auto w-10"} stroke={`rgb(${variables.text})`}/> :
                        <SunIcon className={"h-auto w-10"} stroke={`rgb(${variables.text})`}/>
                    }
                </motion.div>
            </label>
            <input id={"theme-switcher"}
                   className={"hidden"}
                   type={"checkbox"}
                   checked={theme === "dark"}
                   onChange={handleChange}/>
        </div>
    );
};

export default ThemeSwitcher;