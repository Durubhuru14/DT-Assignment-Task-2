import "./styles/moreOptions.css";
import questionMark from "../assets/question-mark.svg";
import meeting from "../assets/meeting.svg";
import schedule from "../assets/schedule.svg";

export const MoreOptions = () => {
    return (
        <section className="more-options">
            <div className="question-mark">
                <img src={questionMark} alt="question mark svg" />
            </div>
            <div className="meeting">
                <img src={meeting} alt="meeting svg" />
            </div>
            <div className="schedule">
                <img src={schedule} alt="schedule svg" />
            </div>
        </section>
    );
};
