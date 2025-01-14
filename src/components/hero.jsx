/* eslint-disable react/prop-types */
import "./styles/hero.css"

export const Hero = ({taskArr, projectTitle}) => {
    return (
        <section className="hero">
            <h1 className="hero-heading">
                <span>{projectTitle}</span>
                <button>Submit Task</button>
            </h1>
            <div className="hero-content">
                <h2 className="hero-content-heading">{taskArr.task_title}</h2>
                <p className="hero-content-text">{taskArr.task_description}</p>
            </div>
        </section>
    );
}