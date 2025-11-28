BeatFlow – AI Dance Training & Beat Synchronization System

BeatFlow is an AI-assisted dance learning platform that analyzes music beats and generates synchronized 3D dance animations.
It supports multiple dance styles (Hip-Hop, Samba), beat detection using DSP, and a backend powered by Node.js + MongoDB.

## 🚀 Features

- Beat detection using DSP (BPM, peaks, beat timeline)

- 3D Dance Animation using Three.js

- Hip-Hop & Samba dance engines

- Backend APIs for songs, users, dance styles

- MongoDB Atlas storage

- Frontend UI with music styles, composer, quiz & dashboards
## 📦 Tech Stack

- Frontend: Next.js / React, Three.js

- Backend: Node.js, Express

- Database: MongoDB Atlas

- DSP Engine: Custom JavaScript beat processor

- 3D Rendering: Three.js AnimationMixer

## File structure


final beat/
├── Backend_project/        (Node.js/Express Backend)
│   ├── controllers/
│   ├── middlewares/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── dancestylemodel.js
│   │   ├── songmodel.js
│   │   └── userModel.js
│   ├── routes/
│   │   ├── danceStyleRoutes.js
│   │   ├── savedRoutes.js
│   │   ├── songRoutes.js
│   │   └── userRoutes.js
│   ├── temp_files/
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── DanceBeat/              (React/Vite/TS Frontend)
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   ├── AudioVisualizer.tsx
│   │   │   ├── BeatPad.tsx
│   │   │   ├── BeatProcessor.tsx
│   │   │   ├── BeatViewer.tsx
│   │   │   ├── DanceFormCard.tsx
│   │   │   ├── DancePlayer.tsx
│   │   │   ├── Dancer.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── InstrumentSelector.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── NavLink.tsx
│   │   │   ├── PasswordStrength.tsx
│   │   │   ├── PlaybackControls.tsx
│   │   │   ├── SequenceDisplay.tsx
│   │   │   ├── SongCard.tsx
│   │   │   ├── SongModal.tsx
│   │   │   └── ThemeToggle.tsx
│   │   ├── data/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── pages/
│   │   │   ├── AppPage.tsx
│   │   │   ├── FavoritesPage.tsx
│   │   │   ├── Game.tsx
│   │   │   ├── Index.tsx
│   │   │   ├── LikedPage.tsx
│   │   │   ├── Login.tsx
│   │   │   ├── MusicComposerPage.tsx
│   │   │   ├── NotFound.tsx
│   │   │   ├── page.tsx
│   │   │   ├── SavedPage.tsx
│   │   │   └── Signup.tsx
│   │   ├── types/
│   │   ├── App.css
│   │   ├── App.tsx
│   │   ├── custom.d.ts
│   │   ├── global.d.ts
│   │   ├── index.css
│   │   ├── main.tsx
│   │   └── vite-env.d.ts
│   ├── package.json
│   ├── package-lock.json
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── README.md
│   └── .gitignore

## ⚙ System Requirements
### Software

- Node.js (v16+ recommended)

- npm or yarn or bun

- MongoDB Atlas account

- Vite + React setup

### Hardware

- 4GB RAM

- Stable internet (for MongoDB Atlas)

## 🚀 How to Run the Project

### This project contains two modules:

1️⃣ Backend (Node.js + Express + MongoDB)

2️⃣ Frontend (React + Vite + TypeScript)


## 🟦 1. Backend Setup

### 📍 Step 1: Go to backend folder
####   &nbsp;&nbsp;&nbsp;&nbsp;cd Backend_project

### 📍 Step 2: Install required libraries
####  &nbsp;&nbsp;&nbsp;&nbsp;npm install

### ✔ Libraries that will be installed:

- express

- mongoose

- cors

- dotenv

- bcrypt

- jsonwebtoken

- multer (if used)

- nodemon (dev)

### 📍 Step 3: Configure environment

Create a .env file inside Backend_project:

MONGO_URI=your_mongo_atlas_connection_string
PORT=5000
JWT_SECRET=your_secret_key

### 📍 Step 4: Start the backend
####  &nbsp;&nbsp;&nbsp;&nbsp;npm start


### ✔ Backend runs on: http://localhost:5000

### ✔ Test endpoint: /test


## 🟩 2. Frontend Setup

### 📍 Step 1: Navigate to frontend
####  &nbsp;&nbsp;&nbsp;&nbsp;cd DanceBeat

### 📍 Step 2: Install required libraries
####  &nbsp;&nbsp;&nbsp;&nbsp;npm install

### ✔ This installs:

- react

- vite

- typescript

- tailwindcss

- three.js (3D animation)

- axios

- framer-motion

- shadcn/ui components

- zustand (state)

- react-icons

### 📍 Step 3: Run frontend
####  &nbsp;&nbsp;&nbsp;&nbsp;npm run dev


✔ Frontend runs on: http://localhost:5173

### 🎵 Beat Processing & Animation Workflow

- User selects a song

- DSP algorithm extracts BPM & peaks

- Beat timeline JSON is generated

- Dance engine maps beats → 3D animation frames

- Animation is shown in the 3D player

### 👥 Team Contributions

#### T. Vaishnavi (CS24B047)

- DSP beat processing

- Beat → Choreo mapping

- Hip-Hop 3D animation engine

- Neon-grid 3D stage setup

#### M. Tharsha Sri (CS24B024)

- Full backend development

- Database schemas + routes

- Postman API testing

- Backend–frontend integration

#### Varshini (CS24B021)

- Homepage + style pages

- Quiz module

- Music composer

- UI integration with 3D engine

- Audio–animation synchronization

#### Vaishnavi S (CS24B051)

- Login/Signup UI

- Song listing pages

- Favorites + Saved pages

- Global theme styling

#### Nandini (CS24B008)

- Samba choreography JSONs

- Full Samba animation engine

- Audio–animation synchronization

- Dance player integration

- Dance style dataset creation
