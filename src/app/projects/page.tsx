// pages/projects.js

import styles from "../../styles/Projects.module.css";

export default function Projects() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>My Projects</h1>
      <ul className={styles.ulList}>
        <li className={styles.li}>
          <h2 className={styles.header2}>Data Pipeline Automation</h2>
          <p className={styles.paragraph}>
            Built an automated data pipeline using Apache Kafka and Spark to
            process real-time data streams.
          </p>
        </li>
        <li className={styles.li}>
          <h2 className={styles.header2}>Data Warehouse Optimization</h2>
          <p className={styles.paragraph}>
            Optimized ETL processes and data storage strategies in a large-scale
            data warehouse using SQL and Python.
          </p>
        </li>
        <li className={styles.li}>
          <h2 className={styles.header2}>Predictive Analytics System</h2>
          <p className={styles.paragraph}>
            Developed a predictive analytics platform leveraging machine
            learning models for business forecasting.
          </p>
        </li>
      </ul>
    </div>
  );
}
