import { configureStore } from "@reduxjs/toolkit";
import reducers from "./index"

export default function createConfigureStore(){
    return configureStore({
        reducer: reducers,

    });
}
