import './LangSwitcher.css';
import React, { useState } from "react";

export default function LangSwitcher(props) {
  const [language, setLanguage] = useState("id");

  function handleLangChange(e) {
    const lang = e.target.value;
    setLanguage(lang);
    props.i18n.changeLanguage(lang);
  }

  return (
    <select className="lang__switcher" onChange={handleLangChange} value={language}>
      <option className="lang__option" value="en" selected>En</option>
      <option value="ru">Ru</option>
    </select>
  )
}
