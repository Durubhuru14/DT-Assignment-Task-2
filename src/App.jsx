import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { CardContainer } from "./components/card-container";
import "./App.css";
import { JourneyBoard } from "./components/journeyBoard";
import { NoticeBoard } from "./components/noticeBoard";
import { MoreOptions } from "./components/moreOptions";

function App() {
    return (
        <>
            <Navbar />
            <JourneyBoard />
            <NoticeBoard />
            <MoreOptions />
            <main>
                <Hero />
                <CardContainer />
            </main>
        </>
    );
}

export default App;
