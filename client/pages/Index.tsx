import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Target,
  Users,
  TrendingUp,
  Star,
  Trophy,
  ArrowRight,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Index() {
  const [currentAmount, setCurrentAmount] = useState(2750000);
  const targetAmount = 180000000;
  const progress = (currentAmount / targetAmount) * 100;

  const players = [
    {
      name: "Rodrigo",
      position: "Striker",
      age: 33,
      club: "Al-Nassr",
      stats: { goals: 47, assists: 12, matches: 51 },
      description:
        "World-class striker with proven Premier League experience. His clinical finishing and leadership qualities will elevate Arsenal's attack to championship level.",
      transferFee: "€60M",
      impact:
        "Clinical finishing, Champions League experience, Natural goalscorer",
    },
    {
      name: "Eberechi Eze",
      position: "Attacking Midfielder",
      age: 26,
      club: "Crystal Palace",
      stats: { goals: 11, assists: 6, matches: 31 },
      description:
        "Dynamic attacking midfielder with pace, creativity, and the ability to unlock tight defenses. Perfect for Arsenal's fluid attacking system.",
      transferFee: "€70M",
      impact:
        "Pace and creativity, Set-piece specialist, Premier League proven",
    },
    {
      name: "Viktor Gyökeres",
      position: "Forward",
      age: 26,
      club: "Sporting CP",
      stats: { goals: 43, assists: 15, matches: 50 },
      description:
        "Prolific goalscorer with incredible physicality and technical ability. His versatility and work rate make him ideal for Arteta's system.",
      transferFee: "€50M",
      impact: "Physical presence, Versatile forward, High work rate",
    },
  ];

  const supporters = [
    {
      name: "Emma Thompson",
      amount: "£500",
      message: "COYG! These signings will bring us the title!",
    },
    {
      name: "David Miller",
      amount: "£250",
      message: "Arsenal till I die! Let's make this happen!",
    },
    {
      name: "Sarah Wilson",
      amount: "£1000",
      message: "For the badge and for glory!",
    },
    {
      name: "James Cooper",
      amount: "£750",
      message: "Trust the process, back the team!",
    },
    { name: "Lisa Ahmed", amount: "£300", message: "North London is RED!" },
    {
      name: "Michael Brown",
      amount: "£425",
      message: "These players will transform our season!",
    },
    {
      name: "Alex Kumar",
      amount: "£600",
      message: "Invincibles 2.0 loading...",
    },
    {
      name: "Sophie Clarke",
      amount: "£350",
      message: "For Arsène, for Arsenal, forever!",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-arsenal-light-red to-white">
      {/* Navigation */}
      <nav className="bg-arsenal-red text-white py-4 px-6 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-arsenal-gold rounded-full flex items-center justify-center">
              <Trophy className="w-6 h-6 text-arsenal-red" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Arsenal Transfer Fund</h1>
              <p className="text-sm opacity-90">
                Powered by the Gooner Community
              </p>
            </div>
          </div>
          <Button className="bg-arsenal-gold text-arsenal-red hover:bg-yellow-400 font-semibold">
            Donate Now
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-arsenal-red via-arsenal-dark-red to-arsenal-red py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
          <Badge className="bg-arsenal-gold text-arsenal-red text-lg px-6 py-2 mb-6 font-bold">
            URGENT: TRANSFER WINDOW CLOSING SOON
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Help Arsenal Sign
            <span className="block text-arsenal-gold">Our Dream Targets</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Join thousands of Arsenal supporters worldwide in making history.
            Together, we can bring Rodrigo, Eberechi Eze, and Viktor Gyökeres to
            the Emirates and compete for the Premier League title.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-arsenal-gold text-arsenal-red hover:bg-yellow-400 px-8 py-4 text-lg font-bold"
            >
              <Heart className="w-5 h-5 mr-2" />
              Donate Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-arsenal-red px-8 py-4 text-lg"
            >
              View Progress
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Progress Tracker */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-arsenal-red mb-4">
              Fundraising Progress
            </h2>
            <p className="text-lg text-gray-600">
              See how close we are to making these transfers happen
            </p>
          </div>

          <Card className="max-w-4xl mx-auto border-arsenal-red border-2">
            <CardHeader className="bg-gradient-to-r from-arsenal-red to-arsenal-dark-red text-white">
              <CardTitle className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Target className="w-8 h-8" />
                  <span className="text-2xl font-bold">
                    Transfer Fund Progress
                  </span>
                </div>
                <div className="text-3xl font-bold">
                  £{(currentAmount / 1000000).toFixed(1)}M raised of £
                  {(targetAmount / 1000000).toFixed(0)}M target
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <Progress value={progress} className="h-6 mb-6" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-arsenal-light-red rounded-lg">
                  <TrendingUp className="w-8 h-8 text-arsenal-red mx-auto mb-2" />
                  <div className="text-2xl font-bold text-arsenal-red">
                    {progress.toFixed(1)}%
                  </div>
                  <div className="text-sm text-gray-600">Complete</div>
                </div>
                <div className="text-center p-4 bg-arsenal-light-red rounded-lg">
                  <Users className="w-8 h-8 text-arsenal-red mx-auto mb-2" />
                  <div className="text-2xl font-bold text-arsenal-red">
                    12,847
                  </div>
                  <div className="text-sm text-gray-600">Supporters</div>
                </div>
                <div className="text-center p-4 bg-arsenal-light-red rounded-lg">
                  <Zap className="w-8 h-8 text-arsenal-red mx-auto mb-2" />
                  <div className="text-2xl font-bold text-arsenal-red">
                    £{((targetAmount - currentAmount) / 1000000).toFixed(1)}M
                  </div>
                  <div className="text-sm text-gray-600">To Go</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gradient-to-r from-arsenal-red to-arsenal-dark-red text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl leading-relaxed mb-8">
              Arsenal stands at a crossroads. After years of progress under
              Mikel Arteta, we're closer than ever to reclaiming the Premier
              League title. But to compete with the very best, we need
              world-class talent in crucial positions.
            </p>
            <p className="text-xl leading-relaxed mb-8">
              Rodrigo brings proven goalscoring pedigree, Eberechi Eze offers
              the creativity to unlock stubborn defenses, and Viktor Gyökeres
              provides the physicality and versatility our attack needs.
              Together, these three signings would transform Arsenal into
              genuine title contenders.
            </p>
            <p className="text-xl leading-relaxed">
              This is our moment. With your support, we can help the club we
              love reach the summit of English football once again.
            </p>
          </div>
        </div>
      </section>

      {/* Player Profiles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-arsenal-red mb-4">
              Our Transfer Targets
            </h2>
            <p className="text-lg text-gray-600">
              Meet the players who will elevate Arsenal to new heights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {players.map((player, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 border-arsenal-red hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader className="bg-gradient-to-r from-arsenal-red to-arsenal-dark-red text-white relative">
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-arsenal-gold text-arsenal-red font-bold">
                      {player.transferFee}
                    </Badge>
                  </div>
                  <div className="w-24 h-24 bg-arsenal-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Star className="w-12 h-12 text-arsenal-red" />
                  </div>
                  <CardTitle className="text-center">
                    <div className="text-2xl font-bold">{player.name}</div>
                    <div className="text-arsenal-gold text-lg">
                      {player.position}
                    </div>
                    <div className="text-sm opacity-90">
                      Age {player.age} • {player.club}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div className="bg-arsenal-light-red p-3 rounded-lg">
                      <div className="text-2xl font-bold text-arsenal-red">
                        {player.stats.goals}
                      </div>
                      <div className="text-sm text-gray-600">Goals</div>
                    </div>
                    <div className="bg-arsenal-light-red p-3 rounded-lg">
                      <div className="text-2xl font-bold text-arsenal-red">
                        {player.stats.assists}
                      </div>
                      <div className="text-sm text-gray-600">Assists</div>
                    </div>
                    <div className="bg-arsenal-light-red p-3 rounded-lg">
                      <div className="text-2xl font-bold text-arsenal-red">
                        {player.stats.matches}
                      </div>
                      <div className="text-sm text-gray-600">Matches</div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {player.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-arsenal-red">
                      Key Strengths:
                    </h4>
                    <p className="text-sm text-gray-600">{player.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supporter Wall */}
      <section className="py-16 bg-arsenal-light-red">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-arsenal-red mb-4">
              Supporter Wall
            </h2>
            <p className="text-lg text-gray-600">
              Messages from Gooners worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supporters.map((supporter, index) => (
              <Card
                key={index}
                className="border-arsenal-red hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="font-semibold text-arsenal-red">
                      {supporter.name}
                    </div>
                    <Badge
                      variant="outline"
                      className="border-arsenal-red text-arsenal-red"
                    >
                      {supporter.amount}
                    </Badge>
                  </div>
                  <p className="text-gray-700 italic">"{supporter.message}"</p>
                  <div className="flex items-center mt-3 text-arsenal-gold">
                    <Heart className="w-4 h-4 mr-1 fill-current" />
                    <Heart className="w-4 h-4 mr-1 fill-current" />
                    <Heart className="w-4 h-4 mr-1 fill-current" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-arsenal-red via-arsenal-dark-red to-arsenal-red text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">The Time is NOW</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Every donation, no matter the size, brings us closer to our dream.
            Join thousands of Arsenal supporters who believe in our vision.
            Together, we can make history and bring the Premier League title
            back to North London.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex justify-center items-center space-x-8 text-lg">
              <div className="flex items-center">
                <Trophy className="w-6 h-6 mr-2 text-arsenal-gold" />
                <span>Premier League Title</span>
              </div>
              <div className="flex items-center">
                <Users className="w-6 h-6 mr-2 text-arsenal-gold" />
                <span>United Fanbase</span>
              </div>
              <div className="flex items-center">
                <Star className="w-6 h-6 mr-2 text-arsenal-gold" />
                <span>World-Class Players</span>
              </div>
            </div>
          </div>
          <Button
            size="lg"
            className="bg-arsenal-gold text-arsenal-red hover:bg-yellow-400 px-12 py-6 text-xl font-bold"
          >
            <Heart className="w-6 h-6 mr-3" />
            Donate to the Arsenal Transfer Fund
          </Button>
          <p className="text-sm mt-4 opacity-90">
            100% of donations go directly to supporting Arsenal transfers.
            Transparent. Accountable. For the badge.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-arsenal-dark-red text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-lg mb-2">
            Made with ❤️ by Arsenal supporters, for Arsenal supporters
          </p>
          <p className="text-sm opacity-75">
            This is a fan initiative. Not officially affiliated with Arsenal
            Football Club.
          </p>
        </div>
      </footer>
    </div>
  );
}
