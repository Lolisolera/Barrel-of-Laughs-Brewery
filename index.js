import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get("https://api.openbrewerydb.org/v1/breweries/random");

        // Access the first object in the array
        const brewery = result.data[0];

        res.render("index.ejs", {
            name: brewery.name,
            city: brewery.city,
        });
    } catch (error) {
        console.error("Error fetching data from API:", error.message);
        res.status(500).send("Error fetching data from API");
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
