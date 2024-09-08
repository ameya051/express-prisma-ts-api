import express from "express";

import authorRouter from "./routes/author.route";
import bookRouter from "./routes/book.route";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use("/authors", authorRouter);
app.use("/books", bookRouter);

app.get("/ping", (req, res) => {
    res.json({ message: "pong" }).status(200);
});

app.listen(port, () => {
    console.log(`Server up and running on port: ${port}`);
});