import styles from "./landing.module.scss";

export default function Landing () {
    return (
        <section className={styles.landing}>
            <h6>Start your AI journey with us</h6>
            <h1>Your Go-To Consultancy For</h1>
            <h1 className={styles.ai}>AI Solutions</h1>

            <div className={styles.action}>
                <button className={styles.call}>Book a call</button>
                <button className={styles.case}>See Case Studies</button>
            </div>
        </section>
    )
}