import { useState } from "react";
export const useNavBar = () => {
    const [hidden, setHidden] = useState("");
    const [flex, setFlex] = useState("flex");
    const [style, setStyle] = useState("hidden");
    const toggleNav = () => {
        setHidden(hidden === "hidden" ? "" : "hidden");
        setFlex(flex === "flex" ? "" : "flex");
        setStyle(`${flex} ${hidden}`);
    };
    return {
        style,
        toggleNav,
    };
};
