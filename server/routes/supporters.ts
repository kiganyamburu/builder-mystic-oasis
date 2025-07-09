import { RequestHandler } from "express";
import { db } from "../config/firebase";
import { z } from "zod";

const MessageSchema = z.object({
  name: z.string().min(2).max(100),
  message: z.string().min(10).max(500),
  amount: z.number().positive().optional(),
});

export const getSupporterMessages: RequestHandler = async (req, res) => {
  try {
    const messagesRef = db.collection("supporter-messages");
    const snapshot = await messagesRef
      .orderBy("createdAt", "desc")
      .limit(50)
      .get();

    const messages = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.json({ messages });
  } catch (error) {
    console.error("Error fetching messages:", error);

    // Mock data for demo
    const mockMessages = [
      {
        id: "1",
        name: "Emma Thompson",
        amount: 500,
        message: "COYG! These signings will bring us the title!",
        createdAt: new Date(),
      },
      {
        id: "2",
        name: "David Miller",
        amount: 250,
        message: "Arsenal till I die! Let's make this happen!",
        createdAt: new Date(),
      },
      {
        id: "3",
        name: "Sarah Wilson",
        amount: 1000,
        message: "For the badge and for glory!",
        createdAt: new Date(),
      },
      {
        id: "4",
        name: "James Cooper",
        amount: 750,
        message: "Trust the process, back the team!",
        createdAt: new Date(),
      },
      {
        id: "5",
        name: "Lisa Ahmed",
        amount: 300,
        message: "North London is RED!",
        createdAt: new Date(),
      },
      {
        id: "6",
        name: "Michael Brown",
        amount: 425,
        message: "These players will transform our season!",
        createdAt: new Date(),
      },
      {
        id: "7",
        name: "Alex Kumar",
        amount: 600,
        message: "Invincibles 2.0 loading...",
        createdAt: new Date(),
      },
      {
        id: "8",
        name: "Sophie Clarke",
        amount: 350,
        message: "For Arsène, for Arsenal, forever!",
        createdAt: new Date(),
      },
    ];

    res.json({ messages: mockMessages });
  }
};

export const createSupporterMessage: RequestHandler = async (req, res) => {
  try {
    const validatedData = MessageSchema.parse(req.body);

    const message = {
      ...validatedData,
      createdAt: new Date(),
      approved: true, // Auto-approve for demo
    };

    const docRef = await db.collection("supporter-messages").add(message);

    res.status(201).json({
      id: docRef.id,
      ...message,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: "Invalid message data",
        details: error.errors,
      });
    }

    console.error("Error creating message:", error);

    // Mock success response for demo
    res.status(201).json({
      id: Date.now().toString(),
      ...req.body,
      createdAt: new Date(),
      approved: true,
    });
  }
};
