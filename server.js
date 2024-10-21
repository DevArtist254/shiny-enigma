const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: './config.env'});

const app = require("./app");


async function connectDB() {
    try {
        await mongoose.connect(process.env.DB);

        console.log("DB connected");
    } catch (error) {
        console.log("Did not connect");
    }
}

connectDB();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server has started ${port}....`);
})
