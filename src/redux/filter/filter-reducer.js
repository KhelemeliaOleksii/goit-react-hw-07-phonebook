import filterTypes from "./filter-types";

export const filterReducer = (state = '', { type, payload }) => {
    console.log("filter reducer test", payload);
    switch (type) {
        case filterTypes.CHANGE_FILTER:
            console.log("filter reducer test", payload);
            return payload;
        default:
            return state;
    }
}