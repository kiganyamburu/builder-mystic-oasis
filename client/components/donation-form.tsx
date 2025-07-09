import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Loader2 } from "lucide-react";
import { useDonation } from "@/hooks/use-donations";
import { useToast } from "@/hooks/use-toast";

interface DonationFormProps {
  trigger?: React.ReactNode;
}

export function DonationForm({ trigger }: DonationFormProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    message: "",
    email: "",
  });

  const { submitDonation, submitting } = useDonation();
  const { toast } = useToast();

  const predefinedAmounts = [25, 50, 100, 250, 500, 1000];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.amount || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    try {
      await submitDonation({
        name: formData.name,
        amount: parseFloat(formData.amount),
        message: formData.message,
        email: formData.email || undefined,
      });

      toast({
        title: "Thank You!",
        description: "Your donation has been submitted successfully! 🔴⚪",
      });

      setFormData({ name: "", amount: "", message: "", email: "" });
      setOpen(false);

      // Refresh page to show updated stats
      setTimeout(() => window.location.reload(), 1000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit donation. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="bg-arsenal-gold text-arsenal-red hover:bg-yellow-400 font-semibold">
            <Heart className="w-4 h-4 mr-2" />
            Donate Now
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-arsenal-red">
            Support Arsenal Transfers
          </DialogTitle>
          <DialogDescription>
            Help Arsenal sign our dream targets and compete for the Premier
            League title
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Your name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount">Amount (£) *</Label>
            <div className="grid grid-cols-3 gap-2 mb-2">
              {predefinedAmounts.map((amount) => (
                <Button
                  key={amount}
                  type="button"
                  variant={
                    formData.amount === amount.toString()
                      ? "default"
                      : "outline"
                  }
                  size="sm"
                  onClick={() =>
                    setFormData({ ...formData, amount: amount.toString() })
                  }
                  className={
                    formData.amount === amount.toString()
                      ? "bg-arsenal-red"
                      : "border-arsenal-red text-arsenal-red"
                  }
                >
                  £{amount}
                </Button>
              ))}
            </div>
            <Input
              id="amount"
              type="number"
              min="1"
              value={formData.amount}
              onChange={(e) =>
                setFormData({ ...formData, amount: e.target.value })
              }
              placeholder="Custom amount"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Share your message of support for Arsenal..."
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email (optional)</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="your@email.com"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-arsenal-red hover:bg-arsenal-dark-red"
            disabled={submitting}
          >
            {submitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Heart className="w-4 h-4 mr-2" />
                Donate £{formData.amount || "0"}
              </>
            )}
          </Button>
        </form>
        <p className="text-xs text-gray-500 text-center">
          This is a demo. No real payments are processed.
        </p>
      </DialogContent>
    </Dialog>
  );
}
