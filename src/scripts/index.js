import flex from "./utils/flexible";
import "../styles/index.scss";
import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux"
import store from "./store"
import Layout from "./containers"
var app = document.getElementById("app");
render(
    (
        <Provider store={store}>
            <Layout/>
        </Provider>
    )
,app)