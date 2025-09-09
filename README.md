# Synchrony Change Management FAQ

A professional FAQ website for Synchrony's change management communications, featuring branded design and search functionality.

## 🎯 Overview

This Next.js application provides a comprehensive FAQ resource to help associates understand upcoming changes to simplify processes and improve the associate experience at Synchrony.

## ✨ Features

- **Professional Synchrony Branding** - Official colors, typography, and logo integration
- **Comprehensive FAQ Content** - 17 frequently asked questions organized into 5 categories
- **Advanced Search** - Full-text search across questions and answers
- **Category Filtering** - Easy navigation by topic areas
- **Responsive Design** - Optimized for desktop and mobile devices
- **Expandable FAQ Items** - Clean accordion-style interface

## 📂 FAQ Categories

1. **Change Overview** - Why changes are happening and what they involve
2. **Timing & Implementation** - When changes occur and rollout phases
3. **Client Assignments** - How client assignments work under the new system
4. **Performance & CCT** - Changes to performance metrics and targets
5. **Career Development** - Impact on career progression and skill development

## 🚀 Getting Started

### Development

1. Clone the repository:
```bash
git clone https://github.com/rhettferrin-wq/synchrony-change-faq.git
cd synchrony-change-faq
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Production Build

```bash
npm run build
npm start
```

## 🛠️ Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS with Synchrony brand colors
- **Deployment:** GitHub Pages with Actions workflow

## 📝 Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles with Synchrony brand colors
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Main FAQ page
├── components/         # Reusable React components
│   ├── FAQItem.tsx     # Individual FAQ accordion item
│   ├── SearchBar.tsx   # Search functionality
│   └── CategoryFilter.tsx # Category filtering buttons
├── data/              # Static data
│   └── faq-data.ts    # FAQ questions and categories
└── types/             # TypeScript definitions
    └── faq.ts         # FAQ data types
```

## 🎨 Brand Guidelines

This project implements Synchrony's official brand guidelines:

- **Primary Gold:** #F4B942
- **Corporate Blue:** #003875  
- **Navy:** #1C2B57
- **Typography:** Helvetica Neue font family
- **Official Synchrony Logo:** Integrated in header

## 📱 Responsive Design

The FAQ site is fully responsive and tested across:
- Desktop browsers (Chrome, Firefox, Safari, Edge)
- Tablet devices (iPad, Android tablets)
- Mobile devices (iOS, Android)

## 🔧 Customization

To modify FAQ content:
1. Edit `src/data/faq-data.ts` to add/update questions
2. Categories can be added/modified in the same file
3. Brand colors are defined in `src/app/globals.css`

## 📈 Usage Analytics

This internal tool helps associates during the change management process by providing:
- Quick access to important information
- Reduced support ticket volume
- Consistent messaging across the organization
