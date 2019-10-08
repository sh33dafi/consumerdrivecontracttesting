"use strict";

const getTodos = require("../../src/todo.service").getTodos;

describe("Todo service", () => {
    const url = "http://localhost";

    const EXPECTED_BODY = [
        {
            id: '1',
            description: 'Give talk @vues.js antwerp'
        }
    ];

    describe("When doing a call to fetch todos", () => {
        beforeEach(() => {
            const interaction = {
                state: "I have a list of todos",
                uponReceiving: "A request to retrieve all todos",
                withRequest: {
                    method: "GET",
                    path: "/todos"
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                    },
                    body: EXPECTED_BODY,
                },
            };
            return provider.addInteraction(interaction)
        });

        it("should fetch the list of todos", () => {
            return getTodos({
                url,
                port,
            })
                .then(response => {
                    expect(response.headers["content-type"]).toEqual("application/json; charset=utf-8");
                    expect(response.data).toEqual(EXPECTED_BODY);
                    expect(response.status).toEqual(200);
                })
                .then(() => provider.verify())
        })
    })
});
