const sendToHumeAI = async (audioBlobUrl) => {
    try {
      const link = document.createElement('a');
  
      link.href = audioBlobUrl;
      link.download = 'audio.webm';
  
      document.body.appendChild(link);
  
      link.click();
  
      document.body.removeChild(link);
    } catch (error) {
      console.error(error);
    }
  };
  
  export default sendToHumeAI;
  