import { Configuration, OpenAIApi } from "openai-edge";

const configuration = new Configuration({
  apiKey: "<API ключ>",
  basePath: "https://bothub.chat/api/v2/openai/v1",
});
const openai = new OpenAIApi(configuration);

(async () => {
  const completion = await openai.createChatCompletion({
    messages: [
      { role: "user", content: "Привет! Как дела?" },
      {
        role: "assistant",
        content: "Супер!",
      },
      { role: "user", content: "Создай мне небольшой туду лист на React!" },
    ],
    model: "gemini-pro",
  });
  const message = (await completion.json()).choices[0].message
    .content as string;

  console.log(message);
})();
("--isolatedModules");
