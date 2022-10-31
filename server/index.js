import express from "express";
import authRoutes from "./routes/auth.js"

const app = express();

app.use("/api/users", authRoutes)

app.listen(8800, () => {
    console.log("api says hi")
})
