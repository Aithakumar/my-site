import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.name}>Vinod Kumar</h1>
        <p className={styles.profession}>
          Data Engineer | 10 Years of Experience
        </p>
        <div className={styles.links}>
          <Link href="/about" className={styles.link}>
            About Me
          </Link>
          <Link href="/projects" className={styles.link}>
            Projects
          </Link>
          <Link href="/projects" className={styles.link}>
            Contact
          </Link>
        </div>
      </header>
    </div>
  );
}
