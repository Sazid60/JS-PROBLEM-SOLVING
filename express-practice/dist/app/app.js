import express from "express";
const app = express();
app.get("/", (req, res) => {
    res.send("Hello Dunia !");
});
app.get("/todos", (req, res) => {
    res.send("");
});
app.post("/todos/create-todos", (req, res) => {
    res.send("");
});
export default app;
//# sourceMappingURL=app.js.map