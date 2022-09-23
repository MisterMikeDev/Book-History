import { useState, useEffect } from "react";
import axios from "axios";
import { Data } from "../Interfaces";
type Error = {
    Error: string
}
export const useApi = () => {
    const [response, setResponse] = useState<Data | Error | {}>({});
    const [isLoading, setIsLoading] = useState(true);
    const baseURL = "http://localhost:5001";
    useEffect(() => {
        async function query() {
            try {
                const { data } = await axios.get(baseURL);
                setResponse(data);
                return data;
            } catch (error) {
                setResponse({ Error: "baseURL not found." });
                return;
            }
        }
        query();
        setIsLoading(false);
    }, []);

    return { response, isLoading };
};
