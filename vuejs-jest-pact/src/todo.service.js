"use strict";

const axios = require("axios");

exports.getTodos = endpoint => {
    const url = endpoint.url;
    const port = endpoint.port;

    return axios.request({
        method: "GET",
        baseURL: `${url}:${port}`,
        url: "/todos",
        headers: { Accept: "application/json" },
    })
}
