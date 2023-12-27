import { configureStore } from "@reduxjs/toolkit";

import { coordinatesApi } from "../services/coordinates";

export const store = configureStore({
    reducer: {
        [coordinatesApi.reducerPath]: coordinatesApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat( coordinatesApi.middleware)
});