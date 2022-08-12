import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function LangSwitcher() {
    
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState("id");

    function handleLangChange(e) {
        const lang = e.target.value;
        console.log(lang);
        setLanguage(lang);
        i18n.changeLanguage(lang);
    }

    return (
        <select onChange={handleLangChange} value={language}>
            <option value="en" selected>En</option>
            <option value="ru">Ru</option>
            <option value="es">Es</option>
            <option value="ar">Ar</option>
            <option value="Tr">Tr</option>
        </select>
    )
}