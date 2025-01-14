import "./styles/noticeBoard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const NoticeBoard = () => {
    return (
        <section className="notice-board">
            <h2 className="notice-board-heading">
                <FontAwesomeIcon icon={faXmark} className="x_mark" />
                <span>Notice Board</span>
            </h2>
            <div className="notice-board-body"></div>
        </section>
    );
}