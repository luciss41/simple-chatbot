import Groq from "groq-sdk";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { reply: null });
});

app.post("/ask", async (req, res) => {
  const question = req.body.question;

  try {
    const response = await groq.chat.completions.create({
      model: "compound-beta-mini",
      messages: [{ role: "user", content: question }],
    });

    const answer = response.choices[0].message.content;
    res.render("index", { reply: answer });
  } catch (error) {
    console.log("ERROR:", error);
    res.render("index", { reply: "Gagal call Groq API." });
  }
});

app.listen(3001, () => console.log("Chatbot jalan di http://localhost:3001"));
