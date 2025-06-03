import cors from 'cors';
import express from 'express';

export const serverSetup = (app) => {
  app.use(express.json()); // Make sure POST requests work

  app.use(cors({
    origin: [
      'https://coverlettergp.netlify.app',
      'http://localhost:3000',
      'https://localhost:3000'
    ],
    credentials: true
  }));

  // DEBUG LOGS
  console.log('✅ serverSetup is running');

  // DEBUG TEST ROUTE
  app.get("/cors-test", (req, res) => {
    res.send("✅ CORS is working and serverSetup is connected");
  });

  console.log('✅ CORS configured');
};
