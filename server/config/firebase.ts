import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// Initialize Firebase Admin (server-side)
if (!getApps().length) {
  const serviceAccount = {
    projectId: process.env.FIREBASE_PROJECT_ID || "arsenal-transfers-demo",
    clientEmail:
      process.env.FIREBASE_CLIENT_EMAIL ||
      "demo@arsenal-transfers-demo.iam.gserviceaccount.com",
    privateKey:
      process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n") || "demo-key",
  };

  try {
    initializeApp({
      credential: cert(serviceAccount),
      projectId: serviceAccount.projectId,
    });
  } catch (error) {
    // For demo purposes, we'll create a mock admin app
    console.warn("Firebase admin initialization failed, using demo mode");
  }
}

export const db = getFirestore();
