// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  const { inputText } = req.body;

  try {
    const response = await openai.createImage({
      prompt: inputText,
      n: 1,
      size: '512x512',
    });

    const imageUrl = response.data.data[0].url;

    res.status(200).json({
      success: true,
      imageUrl,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      data: 'The image could not be generated 🧐 🤌 Are you trying to be naughty?',
    });
  }
}
