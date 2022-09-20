import React, { useState } from "react";
import styles from "./LangSwitcher.module.css";

export default function LangSwitcher(props) {
  const languages: string[] = ['en', 'ru'];
  const [language, setLanguage] = useState("id");

  function handleLangChange(e: React.SyntheticEvent) {
    const lang: string = (e.target as HTMLInputElement).value;
    setLanguage(lang);
    props.i18n.changeLanguage(lang);
  }

  return (
    <select className={styles.select} onChange={handleLangChange} value={language}>
      {languages.map((lang: string, idx: number) => <option key={idx} value={lang}>{lang}</option>)}
    </select>
  )
}
