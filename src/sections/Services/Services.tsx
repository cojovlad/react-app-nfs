import styles from './Services.module.css';

const Services = () => {
    return (
        <main className={styles.container}>
            <aside className={styles.sidebar}>
                <h2>Firm Name</h2>
                <p>Location: [Your Location]</p>
                <p>Google Reviews: ★★★★☆</p>
                <p>Contact: 123-456-7890</p>
                {/* Add more info as needed */}
            </aside>
            <section className={styles.content}>
                <h1>Welcome to Our Firm</h1>
                <p>Scroll down to learn more!</p>
                {/* Add more sections/content here */}
            </section>
        </main>
    );
};

export default Services;