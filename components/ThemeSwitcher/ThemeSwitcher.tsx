"use client"


import variables from "@/app/variables.module.scss";
import {useEffect, useState} from "react";
import {motion} from "framer-motion"
import type {Theme} from "./ThemeSwitcher.d"
import {Moon, Sun} from "lucide-react";


const ThemeSwitcher = () => {
    const [theme, setTheme] = useState<Theme>('light')

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedTheme = localStorage.getItem('theme') as Theme
            if (storedTheme) setTheme(storedTheme)
        }
    }, [])

    useEffect(() => {
        if (typeof window === 'undefined') return
        localStorage.setItem("theme", theme)
        document.documentElement.setAttribute("data-theme", theme)
    }, [theme])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTheme(e.target.checked ? "dark" : "light")
    }
    return (
        <div>
            <label htmlFor={"theme-switcher"}>
                <motion.div key={theme}
                            className={"overflow-hidden"}
                            initial={theme === "dark" ? {rotate: -135} : {y: 50, opacity: 0}}
                            animate={theme === "dark" ? {rotate: 0} : {y: 0, opacity: 1}}
                >
                    {theme === "light" ?
                        <Moon className={"h-auto w-10"} strokeWidth={1.25} stroke={`rgb(${variables.text})`}/> :
                        <Sun className={"h-auto w-10"} strokeWidth={1.25} stroke={`rgb(${variables.text})`}/>
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