import React from "react";
import { IAllTranslations, ITool } from "../interfaces";
import { useTranslation } from "react-i18next";
import styles from "./Tools.module.css";

const frameworks: ITool[] = [
  {
    slug: "react",
    name: "React",
  },
  {
    slug: "vue",
    name: "Vue",
  },
  {
    slug: "nest",
    name: "NestJS",
  },
];

const frontend: ITool[] = [
  {
    name: "SASS",
  },
  {
    name: "LESS",
  },
  {
    name: "SCSS",
  },
  {
    name: "Tailwind",
  },
  {
    name: "Bootstrap",
  },
  {
    name: "Material",
  },
];

const backend: ITool[] = [
  {
    name: "NodeJS",
  },
  {
    name: "Go",
  },
  {
    name: "GraphQl",
  },
  {
    name: "REST API",
  },
  {
    name: "MongoDB",
  },
  {
    name: "Postgreesql",
  },
  {
    name: "MySQL",
  },
];

const tests: ITool[] = [
  {
    name: "Cypress (e2e)",
  },
  {
    name: "Jest (unit test)",
  },
  {
    name: "Screenshot testing",
  },
];

const cms: ITool[] = [
  {
    name: "Wordpress",
  },
  {
    name: "Shopify",
  },
  {
    name: "Strapi",
  },
];

const other: ITool[] = [
  {
    name: "QuillJS",
  },
  {
    name: "RactiveJS",
  },
];

export const toolsTranslations: IAllTranslations = {
  en: {
    "Title": "Technical background",
    "SubTitle": "I work with all popular frameworks",
    "Description": "I really do tests for my code by Cypress (e2e) and Jest (unit tests). I also set up screenshot testing by Cypress for my projects at work. I worked with many different CMS like WordPress, Shopify and Strapi. I worked with RestAPI and GraphQL"
  },
  ru: {
    "Title": "Технический бэкграунд",
    "SubTitle": "Я работаю со всеми популярными фрэймворками",
    "Description": "Работаю с разными инструментами как на фронте, так и на бэке. SASS, LESS, SCSS, Tailwind, Bootstrap, Material. На бэке приемущественно работал с NodeJS и Go. GraphQL, REST API. MongoDB, Postgreesql, MySQL. Я постоянно делаю тесты для проектов с помощью Cypress (e2e) и Jest (unit test). Я также настраиваю скриншот тестирование. Работал с разными CMS, такими как, WordPress, Shopify и Strapi. Поработал с QuillJS и RactiveJS"
  }
}

export default function Tools({ subsectionTitle, description }) {
  const { t } = useTranslation('tools');
  const ToolsColumn: any = ({ children, title }: React.PropsWithChildren) => (
    <div className={styles.allToolsList}>
      <h4 className={styles.toolsListTitle}>{title}</h4>
      <ul className={styles.toolsList}>
        {children}
      </ul>
    </div>
  );
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{t('Title')}</h2>
      <div className={styles.content}>
        <h3 className={styles.subTitle}>{subsectionTitle}</h3>
        <div className={styles.favoriteTools}>
          {frameworks.map((framework: ITool, idx: number) => (
            <div className={styles.favoriteTool} key={idx}>
              <img
                className={styles.favoriteToolImage}
                key={idx}
                src={`/profile/frameworks/${framework.slug}.png`}
                alt={framework.slug}
              />
              <p className={styles.favoriteToolName}>{framework.name}</p>
            </div>
          ))}
        </div>
        <div className={styles.allTools}>
          <ToolsColumn title="Frontend">
            {frontend.map((item: ITool, idx: number) => <li key={idx} className={styles.toolItem}>{item.name}</li>)}
          </ToolsColumn>
          <ToolsColumn title="Backend">
            {backend.map((item: ITool) => <li className={styles.toolItem}>{item.name}</li>)}
          </ToolsColumn>
          <ToolsColumn title="Tests">
            {tests.map((item: ITool) => <li className={styles.toolItem}>{item.name}</li>)}
          </ToolsColumn>
          <ToolsColumn title="CMS">
            {cms.map((item: ITool) => <li className={styles.toolItem}>{item.name}</li>)}
          </ToolsColumn>
          <ToolsColumn title="Other">
            {other.map((item: ITool) => <li className={styles.toolItem}>{item.name}</li>)}
          </ToolsColumn>
        </div>
      </div>
      <p className={styles.description}>{description}</p>
    </section>
  );
}
