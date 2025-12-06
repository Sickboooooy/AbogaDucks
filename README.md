# 🦆 AbogaDucks

**AbogaDucks** is an interactive vocational test application designed for law students in Mexico. It helps students discover their ideal legal profile through a series of situational, aptitude, and value-based questions, rewarding them with a unique procedure-generated "AbogaDuck" character.

## ✨ Features

- **Vocational Test**: A complete 50-question instrument covering Situations, Aptitudes, and Values.
- **Profiling Engine**: Scores users across 12 legal profiles (e.g., Penal, Civil, Constitutional) and 10 dimensions.
- **Data Visualization**: Interactive Radar Chart showing personal strengths.
- **AI-Powered Avatars**: Integration with **Google Gemini 1.5 Flash** to generate unique, personalized descriptions for each user's AbogaDuck.
- **Responsive Design**: Modern UI built with Tailwind CSS and Shadcn/UI animations.

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Vite, Wouter (Routing), TanStack Query, Recharts.
- **Backend**: Express.js (Node.js).
- **AI**: Google Generative AI (Gemini 1.5 Flash).
- **Styling**: Tailwind CSS, Shadcn/UI.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- A [Google Gemini API Key](https://aistudio.google.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sickboooooy/AbogaDucks.git
   cd AbogaDucks
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment**
   Create a `.env` file in the root directory:
   ```env
   GEMINI_API_KEY=your_actual_api_key_here
   ```

4. **Run the Application**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5000`.

## 📂 Project Structure

- `client/`: React frontend application.
- `server/`: Express backend API and AI integration logic.
- `shared/`: Shared TypeScript schemas and the 50-question database.

## 🤝 Contribution

This project was built as an academic tool. Pull requests are welcome to expand the question bank or add new visual traits to the ducks!

---
*Created by [Your Name] for [Institution Name]*