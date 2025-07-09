# Arsenal Transfer Fund

A modern, professional fundraising website for Arsenal Football Club supporters to help raise funds for three top transfer targets: Rodrigo, Eberechi Eze, and Viktor Gyökeres.

![Arsenal Transfer Fund](https://img.shields.io/badge/Arsenal-Transfer_Fund-DC143C?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgOUg0LjVhMi41IDIuNSAwIDAgMSAwLTVINiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xOCA5aDEuNWEyLjUgMi41IDAgMCAwIDAtNUgxOCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Im00IDIyaDE2IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEwIDE0LjY2VjE3YzAgLjU1LS40Ny45OC0uOTcgMS4yMUM3Ljg1IDE4Ljc1IDcgMjAuMjQgNyAyMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNC42NlYxN2MwIC41NS40Ny45OC45NyAxLjIxQzE2LjE1IDE4Ljc1IDE3IDIwLjI0IDE3IDIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE4IDJINnY3YTYgNiAwIDAgMCAxMiAwVjJaIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+)

## 🎯 Overview

This full-stack web application enables Arsenal supporters worldwide to contribute to a community fundraising effort aimed at helping the club secure three key transfer targets. Built with modern technologies and featuring real-time donation tracking, supporter messaging, and responsive design.

## ⚽ Features

### 🔴 Frontend Features

- **Arsenal-themed Design** - Authentic red, white, and gold color scheme
- **Hero Section** - Bold, energetic landing with urgent transfer messaging
- **Real-time Progress Tracker** - Visual fundraising progress with live stats
- **Player Profiles** - Detailed cards for Rodrigo, Eberechi Eze, and Viktor Gyökeres
- **Interactive Donation Form** - Modal with predefined amounts and custom input
- **Supporter Wall** - Live feed of donor messages and contributions
- **Responsive Design** - Optimized for all screen sizes
- **Mission Statement** - Passionate explanation of transfer importance
- **Call-to-Action** - Motivational sections encouraging fan participation

### 🔥 Backend Features

- **Firebase Integration** - Real-time database for donations and messages
- **RESTful API** - Express.js endpoints for all operations
- **Data Validation** - Zod schema validation for API requests
- **TypeScript** - Full type safety across client and server
- **Demo Mode** - Fallback data when Firebase isn't configured

## 🚀 Tech Stack

### Frontend

- **React 18** - Modern functional components with hooks
- **TypeScript** - Type safety and enhanced developer experience
- **Vite** - Fast build tool and development server
- **TailwindCSS 3** - Utility-first CSS framework with Arsenal theming
- **Radix UI** - Accessible, unstyled UI primitives
- **React Router 6** - SPA routing with fallback support
- **Lucide React** - Beautiful, customizable icons

### Backend

- **Express.js** - Node.js web framework
- **Firebase Admin SDK** - Server-side Firebase operations
- **Firebase Firestore** - NoSQL document database
- **Zod** - Runtime type validation
- **CORS** - Cross-origin resource sharing

### Development Tools

- **Vitest** - Unit testing framework
- **Prettier** - Code formatting
- **ESLint** - Code linting

## 📱 Screenshots

### Desktop View

- Hero section with player imagery and donation call-to-action
- Progress tracker showing fundraising stats
- Player profile cards with stats and impact analysis
- Supporter wall with real-time messages

### Mobile View

- Responsive navigation with Arsenal branding
- Optimized donation form for mobile input
- Stacked layout maintaining visual hierarchy

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+
- npm or yarn package manager
- Firebase project (optional - works in demo mode)

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd arsenal-transfer-fund
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

#### Option A: Demo Mode (No Firebase Setup Required)

The app will work immediately with mock data. Perfect for development and testing.

#### Option B: Firebase Integration

Create a `.env` file in the root directory:

```env
# Firebase Server Configuration
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY\n-----END PRIVATE KEY-----\n"

# Firebase Client Configuration
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef123456789
```

### 4. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:8080` to see the application.

## 🗄️ Database Schema

### Collections

#### `donations`

```typescript
{
  id: string;
  name: string;
  amount: number;
  message: string;
  email?: string;
  createdAt: Date;
  status: "pending" | "completed" | "failed";
}
```

#### `supporter-messages`

```typescript
{
  id: string;
  name: string;
  message: string;
  amount?: number;
  createdAt: Date;
  approved: boolean;
}
```

## 🌐 API Endpoints

### Donations

- `GET /api/donations` - Fetch all donations
- `POST /api/donations` - Submit new donation
- `GET /api/donations/total` - Get fundraising statistics

### Supporter Messages

- `GET /api/supporters` - Fetch supporter messages
- `POST /api/supporters` - Submit supporter message

### Example API Usage

#### Submit Donation

```javascript
const response = await fetch("/api/donations", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: "John Doe",
    amount: 100,
    message: "COYG! Let's sign these players!",
    email: "john@example.com",
  }),
});
```

#### Get Fundraising Stats

```javascript
const response = await fetch("/api/donations/total");
const stats = await response.json();
// { totalRaised: 2750000, donorCount: 12847, targetAmount: 180000000, progress: 1.53 }
```

## 🎨 Customization

### Arsenal Theme Colors

The application uses CSS custom properties for theming:

```css
:root {
  --arsenal-red: 348 79% 44%; /* #DC143C */
  --arsenal-gold: 51 100% 50%; /* #FFD700 */
  --arsenal-dark-red: 348 79% 30%; /* Darker red */
  --arsenal-light-red: 348 79% 96%; /* Light red background */
}
```

### Adding New Transfer Targets

Update the `players` array in `client/pages/Index.tsx`:

```typescript
const players = [
  {
    name: "New Player",
    position: "Position",
    age: 25,
    club: "Current Club",
    stats: { goals: 20, assists: 10, matches: 30 },
    description: "Player description...",
    transferFee: "€50M",
    impact: "Key strengths...",
  },
];
```

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🧪 Testing

Run the test suite:

```bash
npm test
```

## 🚀 Deployment

### Production Build

```bash
npm run build
npm start
```

### Environment Variables for Production

Ensure all Firebase environment variables are set in your hosting platform.

### Recommended Hosting

- **Vercel** - Zero-config deployment with automatic preview URLs
- **Netlify** - Integrated with Git for continuous deployment
- **Firebase Hosting** - Native integration with Firebase backend

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📋 Project Structure

```
arsenal-transfer-fund/
├── client/                   # React frontend
│   ├── components/
│   │   ├── ui/              # Radix UI components
│   │   └── donation-form.tsx # Custom donation form
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utilities and Firebase config
│   ├── pages/               # Route components
│   └── global.css           # Global styles and theme
├── server/                  # Express backend
│   ├── config/              # Firebase admin config
│   ├── routes/              # API route handlers
│   └── index.ts             # Server setup
├── shared/                  # Shared TypeScript types
└── README.md               # This file
```

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run start        # Start production server
npm test            # Run tests
npm run typecheck   # TypeScript validation
npm run format.fix  # Format code with Prettier
```

## 🐛 Troubleshooting

### Common Issues

**1. Firebase Connection Issues**

- Verify environment variables are correctly set
- Check Firebase project configuration
- Ensure service account has proper permissions

**2. Build Errors**

- Run `npm run typecheck` to identify TypeScript issues
- Clear node_modules and reinstall dependencies

**3. Styling Issues**

- Verify TailwindCSS is properly configured
- Check that CSS custom properties match expected format

## 📄 License

This project is for educational and demonstration purposes. Not officially affiliated with Arsenal Football Club.

## 🎖️ Acknowledgments

- **Arsenal Football Club** - For inspiration and the beautiful game
- **Gooner Community** - For their passionate support
- **Radix UI** - For accessible component primitives
- **TailwindCSS** - For rapid UI development

---

**COYG! 🔴⚪**

_This is a fan-created project to demonstrate modern web development techniques. All player imagery and club references are for educational purposes only._
