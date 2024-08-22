import express from "express";
import bodyParser from "bodyParser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get("https://api.openbrewerydb.org/v1/breweries/random");
        res.render("index.ejs", {
            name: result.data.name,
            city: result.data.city,
        });
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});
