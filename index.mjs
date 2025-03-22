import express from "express";
import cors from "cors";
// import e from "express";
import appRouter from "./routes/routes.mjs";

const app = express();
// const cors = cors();

// Adding cors
app.use(cors());
app.use(express.json());

const PORT = 3000 || process.env.PORT;

app.get("/", (request, response) => {
  response.send({
    message: "greetings",
    name: "ayal asher",
    role: "Software engineer",
  });
});

app.use("/backend", appRouter);

app.listen(PORT, () => {
  console.log(`App is running on PORT: ${PORT}`);
});
