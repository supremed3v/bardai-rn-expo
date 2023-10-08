import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { DiscussServiceClient } from "@google-ai/generativelanguage";
import { GoogleAuth } from "google-auth-library";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

const MODEL_NAME = "models/chat-bison-001";

const client = new DiscussServiceClient({
  authClient: new GoogleAuth().fromAPIKey(process.env.BARD_API_KEY),
});

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Hello World",
  });
});

app.post("/generate", async (req, res) => {
  const { userMessage } = req.body;
  let messages = [];

  // Check if a user message is provided
  if (!userMessage) {
    return res.status(400).json({ error: "User message is required" });
  }

  // Add the user's query to the conversation history
  messages.push({ role: "user", content: userMessage });

  try {
    // Send the entire conversation history to the AI model
    const result = await client.generateMessage({
      model: MODEL_NAME,
      prompt: { messages },
    });

    // Extract and send the model's response
    const palmResponse = result[0].candidates[0].content;
    res.json({ message: palmResponse });
  } catch (error) {
    console.error("Error generating message:", error);
    res.status(500).json({ error: "Failed to generate message" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
