"use client"

import MoonIcon from "@/public/icons/moon.svg";
import SunIcon from "@/public/icons/sun.svg";
import variables from "@/app/variables.module.scss";
import {ChangeEvent, useEffect, useState} from "react";

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState<"light" | "dark">(()=>{
        if (typeof window === "undefined") return "light";
        if(localStorage.getItem("theme")){
            return localStorage.getItem("theme") === "dark" ? "dark" : "light"
        }
        if(!window.matchMedia) return "light";
        return (window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
    })
    useEffect(()=>{
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
                {theme === "dark" ?
                    <SunIcon stroke={`rgb(${variables.text})`}/> :
                    <MoonIcon stroke={`rgb(${variables.text})`}/>
                }
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