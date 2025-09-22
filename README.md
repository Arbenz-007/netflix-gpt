# 🎬 NetflixGPT - AI-Powered Movie Discovery Platform

A modern, full-stack Netflix clone built with React that combines the power of AI with movie recommendations. Users can browse movies, get AI-powered suggestions, and enjoy a seamless streaming experience with detailed movie information.

## 🚀 Live Demo

[View Live Application](https://netflixgpt-omega.vercel.app/)

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern JavaScript library for building user interfaces
- **React Router DOM** - Declarative routing for React applications
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Redux Toolkit** - State management for complex React applications
- **React Hooks** - Modern React patterns with useState, useEffect, useRef

### Backend & Authentication
- **Firebase** - Authentication and user management
- **TMDB API** - Movie database and metadata
- **Google Gemini AI** - AI-powered movie recommendations

### Development Tools
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and formatting
- **Git** - Version control system

### Deployment
- **Vercel** - Frontend deployment platform

## ✨ Features

### 🔐 Authentication System
- **Secure Login/Signup** - Firebase-powered authentication
- **Form Validation** - Real-time input validation
- **Profile Management** - User profile updates
- **Protected Routes** - Authentication-based routing

### 🎭 Browse Experience
- **Dynamic Header** - Responsive navigation with user controls
- **Main Movie Display** - Featured movie with trailer background
- **Movie Categories** - Multiple movie lists (Now Playing, Popular, Upcoming)
- **Movie Cards** - Interactive movie cards with hover effects
- **Movie Details Modal** - Click any movie card to view detailed information
  - Movie backdrop and poster
  - Rating, release year, vote count
  - Movie description and overview
  - Genre information
  - Adult content warnings
  - Play, add to list, like buttons

### 🤖 AI-Powered Search
- **GPT Search Bar** - Natural language movie search
- **AI Recommendations** - Google Gemini AI integration
- **Smart Suggestions** - Context-aware movie recommendations
- **Multi-language Support** - Search in multiple languages

### 🌐 Additional Features
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Multi-language UI** - Support for English, Spanish, Hindi
- **YouTube Integration** - Movie trailers and video content
- **Real-time Updates** - Dynamic content updates
- **Error Handling** - Comprehensive error boundaries
- **Loading States** - Smooth loading experiences

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- TMDB API key
- Firebase project
- Google Gemini AI API key

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/netflixgpt.git
   cd netflixgpt
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory:
   ```env
   VITE_TMDB_KEY=your_tmdb_api_key
   VITE_GEMAPI=your_gemini_ai_api_key
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🎯 Usage

### Getting Started
1. **Sign Up/Login** - Create an account or sign in with existing credentials
2. **Browse Movies** - Explore different movie categories on the browse page
3. **Movie Details** - Click on any movie card to view detailed information
4. **AI Search** - Use the search bar to get AI-powered movie recommendations
5. **Multi-language** - Switch between supported languages

### API Integration
- **TMDB API**: Fetches movie data, posters, trailers, and metadata
- **Firebase Auth**: Manages user authentication and profiles
- **Google Gemini AI**: Provides intelligent movie recommendations

## 📁 Project Structure

```
netflixgpt/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   │   ├── Body.jsx              # Main routing component
│   │   ├── Header.jsx            # Navigation header
│   │   ├── Login.jsx             # Authentication forms
│   │   ├── Browse.jsx            # Main browse page
│   │   ├── MovieCard.jsx         # Interactive movie cards
│   │   ├── MovieDetails.jsx      # Movie details modal
│   │   ├── MovieList.jsx         # Movie category lists
│   │   ├── MainContainer.jsx     # Featured movie section
│   │   ├── SecondaryContainer.jsx # Movie categories
│   │   ├── GptSearch.jsx         # AI search interface
│   │   └── VideoBackground.jsx   # Video player component
│   ├── hooks/
│   │   ├── useNowPlayingMovies.jsx
│   │   ├── usePopularMovies.jsx
│   │   ├── useUpcomingMovies.jsx
│   │   └── useMovieTrailer.jsx
│   ├── utils/
│   │   ├── firebase.jsx          # Firebase configuration
│   │   ├── constants.jsx         # API constants
│   │   ├── appStore.jsx          # Redux store setup
│   │   ├── movieSlice.jsx        # Movie state management
│   │   ├── gptSlice.jsx          # GPT search state
│   │   └── validate.jsx          # Form validation
│   ├── App.jsx                   # Root component
│   └── main.jsx                  # Application entry point
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🔄 Recent Updates

### Latest Features
- ✅ **Movie Card Clickable** - Click any movie card to open detailed modal
- ✅ **Enhanced Movie Details** - Comprehensive movie information display
- ✅ **Modal System** - Smooth modal interactions with backdrop
- ✅ **Responsive Design** - Improved mobile and tablet experience
- ✅ **Error Handling** - Better error boundaries and fallbacks

### Performance Improvements
- Optimized API calls with custom hooks
- Implemented lazy loading for movie images
- Added loading states for better UX
- Memory leak prevention with proper cleanup

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **TMDB** for providing comprehensive movie data
- **Google Gemini AI** for intelligent recommendations
- **Firebase** for robust authentication
- **React Community** for excellent documentation and tools

## 📞 Support

For support, email [your-email@example.com] or create an issue in the repository.

---

**Built with ❤️ using React, Tailwind CSS, and AI technology**
