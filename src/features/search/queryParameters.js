import { useHistory, useLocation } from "react-router-dom";

export const useQueryParameters = (key) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get(key);
};

export const useReplaceQueryParameters = () => {
    const location = useLocation();
    const history = useHistory();
    const replaceQueryParameters = ({ key, value }) => {
        const searchParams = new URLSearchParams(location.search);
        if (value === "") {
            searchParams.delete(key);
        } else {
            searchParams.set(key, value);
        }
        history.push(`${location.pathname}?${searchParams.toString()}`);
    };
    return replaceQueryParameters;
};