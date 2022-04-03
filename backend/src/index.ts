import Express from "express";

const app = Express();
const port = process.env.PORT || 5000;

app.get("*", (req, res) => res.json({ message: "Hello World" }));

app.listen(port, () => console.log(`Server started on port ${port}`));
