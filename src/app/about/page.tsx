// pages/about.js

import styles from "../../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>About Me</h1>
      <p className={styles.paragraph}>
        Hello, I&apos;m <strong>Vinod Kumar</strong>. I&lsquo;m a Data Engineer
        with 10 years of experience. Over the years, I&apos;ve worked on
        building scalable data pipelines, improving data processing, and
        managing big data technologies like Hadoop, Spark, and Kafka.
      </p>
      <p className={styles.paragraph}>
        My expertise lies in transforming raw data into actionable insights. I
        love working with databases, automation tools, and processing large
        datasets.
      </p>
    </div>
  );
}
