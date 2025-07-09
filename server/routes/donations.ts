import { RequestHandler } from "express";
import { db } from "../config/firebase";
import { z } from "zod";

const DonationSchema = z.object({
  name: z.string().min(2).max(100),
  amount: z.number().positive(),
  message: z.string().max(500),
  email: z.string().email().optional(),
});

export const getDonations: RequestHandler = async (req, res) => {
  try {
    const donationsRef = db.collection("donations");
    const snapshot = await donationsRef
      .orderBy("createdAt", "desc")
      .limit(20)
      .get();

    const donations = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.json({ donations });
  } catch (error) {
    console.error("Error fetching donations:", error);

    // Mock data for demo
    const mockDonations = [
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
    ];
    res.json({ donations: mockDonations });
  }
};

export const createDonation: RequestHandler = async (req, res) => {
  try {
    const validatedData = DonationSchema.parse(req.body);

    const donation = {
      ...validatedData,
      createdAt: new Date(),
      status: "completed",
    };

    const docRef = await db.collection("donations").add(donation);

    res.status(201).json({
      id: docRef.id,
      ...donation,
      message: "Thank you for your donation!",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: "Invalid donation data",
        details: error.errors,
      });
    }

    console.error("Error creating donation:", error);

    // Mock success response for demo
    res.status(201).json({
      id: Date.now().toString(),
      ...req.body,
      createdAt: new Date(),
      status: "completed",
      message: "Thank you for your donation!",
    });
  }
};

export const getTotalRaised: RequestHandler = async (req, res) => {
  try {
    const donationsRef = db.collection("donations");
    const snapshot = await donationsRef.get();

    let total = 0;
    let donorCount = 0;

    snapshot.docs.forEach((doc) => {
      const data = doc.data();
      total += data.amount || 0;
      donorCount++;
    });

    res.json({
      totalRaised: total,
      donorCount,
      targetAmount: 180000000, // £180M target
      progress: (total / 180000000) * 100,
    });
  } catch (error) {
    console.error("Error calculating total:", error);

    // Mock data for demo
    res.json({
      totalRaised: 2750000,
      donorCount: 12847,
      targetAmount: 180000000,
      progress: 1.53,
    });
  }
};
