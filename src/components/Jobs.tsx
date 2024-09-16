import { useTranslation } from "react-i18next";
import * as d3 from "d3";
import {select, selectAll} from "d3";
import { IJob } from "../interfaces";
import styles from "./Jobs.module.css";

export default function Jobs () {
  const { t } = useTranslation('common');
  const jobs: IJob[] = [
    {
      title: "F&B",
      year: "2014",
      position: "Front-end developer",
      color: "var(--4color)",
    },
    {
      title: "RG.RU",
      year: "2015",
      position: "Lead front-end developer",
      color: "var(--1color)",
    },
    {
      title: "Fornex Hosting",
      year: "2021",
      position: "Lead front-end",
      color: "var(--2color)",
    },
    {
      title: "Dream Team Mobile",
      year: "2022 - 2023",
      position: "Fullstack developer",
      color: "var(--3color)",
    },
    {
      title: "Merlin Clone",
      year: "2023",
      position: "Lead front-end",
      color: "var(--4color)",
    },
    {
      title: "Wild Show Biz (UpWork)",
      year: "2024",
      position: "Full-stack developer",
      color: "var(--1color)",
    }
  ];
  const Job: React.FC = (props: IJob) => (
    <>
      <div
        className={`line line_${props.idx}`}
        style={{ backgroundColor: props.color }}
      >
        {props.year}
      </div>
      <div
        className={`job job_${props.idx}`}
        style={{ borderColor: props.color }}
      >
        <div className="job__title" style={{ color: props.color }}>
          {props.title}
        </div>
        <p className="job__position">{props.position}</p>
      </div>
    </>
  );
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{t("Commercial work experience")}</h2>
      <section className="jobs">
        {jobs.map((job: IJob, idx: number) => (
          <Job
            key={idx}
            idx={idx}
            title={job.title}
            year={job.year}
            position={job.position}
            color={job.color}
          />
        ))}
      </section>
    </section>
  )
}
