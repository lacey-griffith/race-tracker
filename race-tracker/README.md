# Race Tracker

A race registration platform built with React + Vite. Modeled after RunSignup.com with a dark/bold default theme and theme-switching support.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Stack

- **React 18** + **Vite 5**
- **React Router v6** for client-side routing
- **CSS Modules** for component-scoped styles
- **Lucide React** for icons

## Features

- 🏁 Find a Race — searchable, filterable race listings
- 📝 Multi-step registration flow (Event → Info → Waiver → Payment)
- 🏆 Results page with live search
- 📊 Race Director dashboard
- 🌓 Dark/light theme toggle (persisted to localStorage)
- 📱 Responsive layout

## Project Structure

```
src/
  components/
    layout/       # Navbar, Footer
    pages/        # Home, Races, Director, Results
    registration/ # RegistrationModal (multi-step)
    ui/           # RaceCard
  context/        # ThemeContext
  data/           # Mock race/results data
  styles/         # Global CSS (variables, reset, utilities)
```

## Roadmap

- [ ] Part 2: Finish Line Live Feed with DVR rewind
- [ ] Real API integration
- [ ] Auth / user accounts
- [ ] Race director race creation flow
