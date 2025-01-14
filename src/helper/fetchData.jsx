/* eslint-disable react-refresh/only-export-components */
import axios from "axios";

const API = "./data.json";

// Fetch data function
export const fetchData = async () => {
    try {
        const response = await axios.get(API);
        return response.data; // Return fetched data
    } catch (error) {
        console.log("Error fetching data", error);
        return null; // Return null if error occurs
    }
};