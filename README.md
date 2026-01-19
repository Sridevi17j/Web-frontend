# ProMarshal Landing Page

AI Executive Assistant For Project Owners - Landing page built with Next.js, TypeScript, and Tailwind CSS v4.

> **Note**: This is a test repository for demonstration purposes.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Theme**: Green primary color (#78a530)
- **Fonts**: Roboto, Inter

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Build for production:

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx        # Root layout with fonts and metadata
│   ├── page.tsx          # Main landing page
│   └── globals.css       # Global styles and Tailwind config
├── components/
│   ├── Header.tsx        # Site header with navigation
│   ├── Footer.tsx        # Site footer
│   ├── HeroSection.tsx   # Hero section
│   ├── ValuesSection.tsx # Project management values section
│   ├── FeaturesSection.tsx # Feature cards section
│   ├── ProjectBrainSection.tsx # Project brain section
│   └── HexagonBackground.tsx # Background pattern
└── public/
    └── assets/           # Design assets from Figma
```

## Features

- Responsive design
- Custom green theme (#78a530)
- Hexagon background pattern
- Smooth transitions and hover effects
- Optimized images with Next.js Image component
- TypeScript for type safety

## Design

The design is implemented from Figma specifications with:
- Dark theme with hexagon pattern background
- Green accent color throughout
- Multiple feature sections with icon cards
- Clean, modern typography using Roboto and Inter fonts
