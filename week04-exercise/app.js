import express from "express";
const app = express();
const port = 3000;

const users = [
    {
        firstname: "Pritesh",
        lastname: "Patel"
    },
    {
        firstname: "Bruno",
        lastname: "Ramirez"
    },
    {
        firstname: "Patrick",
        lastname: "Star"
    },
    {
        firstname: "Spongebob",
        lastname: "Squarepants"
    },
]

app.get("/", (req, res) => {
    res.send("Hello Express JS");
});

app.get("/user", (req, res) => {
    // Fully dynamic.
    res.json(users.filter((x) => {
        if (Object.keys(req.query).length === 0) return true;
        const keys = Object.keys(req.query);
        return keys.some((k) =>
            x[k].toString().toLowerCase() === req.query[k].toString().toLowerCase()
        );
    }));

    // Sad and static.
    // res.json(users.filter((x) => {
    //     if (!Object.keys(req.query).some((x) => x === "firstname")) return false;
    //     return x.firstname.toLowerCase() === req.query["firstname"];
    // }));
});

app.post("/user/:firstname", (req, res) => {
    if (!req.params.firstname) {
        req.json([]);
        return;
    }
    res.json(users.filter((x) =>
        x.firstname.toLowerCase() === req.params.firstname.toLowerCase()
    ));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});