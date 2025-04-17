# IPL T20 Live Dashboard

A responsive IPL 2025 dashboard displaying match schedules, results, and the points table with detailed stats.

## 🚀 Features
- Live match **fixtures** and **results** displayed with detailed match data.
- **Points table** with Net Run Rate (NRR), recent form, and other relevant statistics.
- **Responsive UI** built using Tailwind CSS for mobile-first design.
- Tabs to switch between **fixtures** and **results**.
- **Sticky navbar** for easy navigation.

## 🛠 Tech Stack
- **Next.js** (Pages Router)
- **React** with **TypeScript**
- **Tailwind CSS** for styling
- **Vercel** for deployment
- Data fetched from IPL official APIs

## 📦 Installation & Run Locally
Follow these steps to run the project on your local machine:

1. Clone this repository:
   ```bash
   git clone https://github.com/AishwaryaM12/ipl-dashboard.git

## Getting Started

First, Install dependencies
```bash
npm install
```
Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/ipl-data](http://localhost:3000/api/ipl-data). This endpoint can be edited in `pages/api/ipl-data.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 📁 Folder Structure
The folder structure of the project is as follows:

``` bash
src/
├── components/    # Reusable UI components (Navbar, IPLDashboard, IPLMatch, IPLMatchCard, IPLPointsTable, SafeImage)
├── hooks/         # Custom hooks for data fetching (useIPLData, useIPLPointsData)
├── pages/         # Next.js pages (/, /ipl/fixtures, /ipl/results, /ipl/points)
├── styles/        # CSS Module styling
└── types/         # TypeScript type definitions (match.ts)
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.


## 🌍 Deployment
This project is deployed on Vercel: https://ipl-dashboard.vercel.app

## 🧑‍💻 Author
Aishwarya Maurya

GitHub: https://github.com/AishwaryaM12
