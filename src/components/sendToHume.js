import axios from 'axios';

const sendToHumeAI = async (audioBlobUrl) => {
  try {
    const response = await axios.post(process.env.React_APP_HUME_AI_API_URL, {
      audio: audioBlobUrl,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default sendToHumeAI;
