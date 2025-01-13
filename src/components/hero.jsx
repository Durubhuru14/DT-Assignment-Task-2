import "./hero.css"

export const Hero = () => {
    return (
        <section className="hero">
            <h1 className="hero-heading">
                <span>Technical Project Management</span>
                <button>Submit Task</button>
            </h1>
            <div className="hero-content">
                <h2 className="hero-content-heading">
                    Explore the world of management
                </h2>
                <p className="hero-content-text">
                    As a project manager, you play an important role in leading
                    a project through initiation, planning, execution,
                    monitoring, controlling and completion. How? Do you want to
                    manage each and every step of your life?
                </p>
            </div>
        </section>
    );
}