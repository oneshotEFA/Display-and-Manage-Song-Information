import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchMusic, setSearchMusic] = useState("");

    return (
        <SearchContext.Provider value={{ searchMusic, setSearchMusic }}>
            {children}
        </SearchContext.Provider>
    );
};
