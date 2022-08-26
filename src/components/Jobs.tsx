import { useTranslation } from "react-i18next";
import { IJob } from "../interfaces";

export default function Jobs () {
  const { t } = useTranslation('common');
  const jobs: IJob[] = [
    {
      title: "F&B",
      year: "2014",
      position: "Front-end developer at small startup",
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
      position: "Lead front-end developer",
      color: "var(--2color)",
    },
    {
      title: "Dream Team Mobile",
      year: "2022 - now",
      position: "Fullstack developer",
      color: "var(--3color)",
    },
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
    <>
      <h2 className="job__section-title">{t("Commercial work experience")}</h2>
      <section className="jobs">
        {jobs.map((job, idx: number) => (
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
    </>
  )
}
