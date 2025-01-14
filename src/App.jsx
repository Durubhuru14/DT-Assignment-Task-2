import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { CardContainer } from "./components/card-container";
import { JourneyBoard } from "./components/journeyBoard";
import { NoticeBoard } from "./components/noticeBoard";
import { MoreOptions } from "./components/moreOptions";

import { fetchData } from "./helper/fetchData";

import { useEffect, useState } from "react";

import "./App.css";

function App() {
    const [data, setData] = useState(null);
    const [taskArr, setTaskArr] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAndSetData = async () => {
            const fetchedData = await fetchData();
            if (fetchedData) {
                setData(fetchedData);
                setTaskArr(fetchedData.tasks || []);
                setIsLoading(false);
            }
        };

        fetchAndSetData();
    }, []);
    if (isLoading) return; // Only execture after api is fetched successfull
    console.log(taskArr[0].assets);
    return (
        <>
            <Navbar />
            <JourneyBoard
                projectTitle={data.title}
                assetsArr={taskArr[0].assets}
            />
            <NoticeBoard />
            <MoreOptions />
            <main>
                <Hero taskArr={taskArr[0]} projectTitle={data.title} />
                <CardContainer assetsArr={taskArr[0].assets} />
            </main>
        </>
    );
}

export default App;
