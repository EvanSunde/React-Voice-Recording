import React from 'react';
import AudioRecorder from './components/recording';
import sendToHumeAI from './components/localTest';
//import sendToHumeAI from './components/sendToHume';

const App = () => {
  const handleAudioRecording = async (audioBlobUrl) => {
    const result = await sendToHumeAI(audioBlobUrl);
    console.log(result);
  };

  return (
    <div>
      <AudioRecorder onRecordingComplete={handleAudioRecording} />
    </div>
  );
};

export default App;
