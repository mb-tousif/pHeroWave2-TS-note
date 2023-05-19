import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import ConnectMongoDB from './Utilities/mongoDB';
import router from './Users/user.routers';
dotenv.config();

const port = process.env.PORT || 2023;
const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
    res.send("<h1 style='text-align: center; padding: 20px; color:green; margin-top: 4rem'>🐘 This is 🐩 API</h1>");
});

ConnectMongoDB();

app.use("/api/v1", router)

app.all("*", (req, res) => {
    res.send(
      "<h1 style='text-align: center; padding: 20px; color:red; margin-top: 4rem'>🚦 Requested Route Not Found 💥</h1>"
    );
});

app.listen(port, () => {
    console.log(`Server running on PORT: 🚀 ${port}`);
})
