import { configureStore } from "@reduxjs/toolkit"
import appstate from "./slices/app_slice"

const store = configureStore({
    reducer: {
        appstate
    }
    }    
)

export type RootState = ReturnType<typeof store.getState>;

export type AppDispath = typeof store.dispatch;

export default store;