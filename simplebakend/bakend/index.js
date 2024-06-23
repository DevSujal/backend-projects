import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("server started");
});

app.get("/api/jokes", (req, res) => {
  const jokes =[
    {
      "id": 1,
      "title": "Why don't scientists trust atoms?",
      "joke": "Because they make up everything!"
    },
    {
      "id": 2,
      "title": "Eyebrows too high",
      "joke": "I told my wife she was drawing her eyebrows too high. She looked surprised."
    },
    {
      "id": 3,
      "title": "Scarecrow Award",
      "joke": "Why did the scarecrow win an award? Because he was outstanding in his field!"
    },
    {
      "id": 4,
      "title": "Parallel lines",
      "joke": "Parallel lines have so much in common. It's a shame they'll never meet."
    },
    {
      "id": 5,
      "title": "Mathematician's Fear",
      "joke": "Did you hear about the mathematician who’s afraid of negative numbers? He’ll stop at nothing to avoid them!"
    }
  ]
  res.send(jokes[Math.round(Math.random()*5)])
});

app.listen(port, (req, res) => {
  console.log(`Server is running on http ${port}`);
});
