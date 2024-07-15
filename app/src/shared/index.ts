import { Configuration, OpenAIApi } from "openai-edge";

const configuration = new Configuration({
  apiKey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MGE2ZTgxLTRiMDMtNGQxNC1hMGQxLWI3N2RkZjlkMDY2ZiIsImlzRGV2ZWxvcGVyIjp0cnVlLCJpYXQiOjE3MjA1Mjk0NDgsImV4cCI6MjAzNjEwNTQ0OH0.Dm8QJpXfX2ChWcYZ5c0SLNzGpmEmh1dYPAMW3wz4v5M",
  basePath: "https://bothub.chat/api/v2/openai/v1",
});
const openai = new OpenAIApi(configuration);

const newCompletion = async (
  messages: { role: "assistant" | "user"; content: string }[]
) => {
  const completion = await openai.createChatCompletion({
    messages,
    model: "gemini-pro",
  });
  try {
    const message = (await completion.json()).choices[0].message
      .content as string;
    console.log(message);
    return message;
  } catch (error) {
    console.log(error);
  }
};

export default newCompletion;
