export interface Donation {
  id: string;
  name: string;
  amount: number;
  message: string;
  email?: string;
  createdAt: Date;
  status: "pending" | "completed" | "failed";
}

export interface SupporterMessage {
  id: string;
  name: string;
  message: string;
  amount?: number;
  createdAt: Date;
  approved: boolean;
}

export interface FundraisingStats {
  totalRaised: number;
  donorCount: number;
  targetAmount: number;
  progress: number;
}

export interface CreateDonationRequest {
  name: string;
  amount: number;
  message: string;
  email?: string;
}

export interface CreateMessageRequest {
  name: string;
  message: string;
  amount?: number;
}

export interface DonationResponse {
  donations: Donation[];
}

export interface SupporterMessagesResponse {
  messages: SupporterMessage[];
}
