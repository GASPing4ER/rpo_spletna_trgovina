# Shop Project

## Getting Started

First, install the dependencies:

```bash
npm install
```

Second, run the development server:

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

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Overview
The **Shop Project** is a modern e-commerce platform designed to provide a seamless shopping experience for both customers and administrators. This project leverages cutting-edge technologies to deliver a fast, scalable, and user-friendly system. 

## Features
### Customer-Facing Features
- **Product Catalog**: Browse products with filters and search functionality.
- **Product Details**: View detailed information, images, and reviews for each product.
- **Shopping Cart**: Add items, adjust quantities, and manage your cart.
- **Checkout Process**: Secure payment gateway integration for smooth transactions.
- **Order Tracking**: View order history and track delivery status.
- **Language Switcher**: Choose between slovene and english language.
- **Light/Dark Theme** Option to switch between dark and light theme.

### Administrator Features
- **Product Management**: Add, edit, and delete products with images and descriptions.
- **Order Management**: View and manage customer orders.
- **Analytics Dashboard**: Insights into sales, inventory, and customer behavior.
- **User Roles**: Role-based access control for staff and administrators.

## Tech Stack
### Frontend
- **Framework**: Next.js
- **Styling**: TailwindCSS and Shadcn and Framer Motion
- **State Management**: Context API

### Backend
- **Framework**: Next.js
- **Database**: Supabase
- **Authentication**: Supabase Auth

### Hosting and DevOps
- **Frontend Hosting**: Vercel
- **CI/CD**: GitHub

  This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Sprint 1

### Sprint Goal
The primary goal of Sprint 1 was to design and implement the visual components of the e-commerce website, ensuring a responsive, user-friendly, and aesthetically pleasing interface. This sprint focused on laying a strong foundation for the customer-facing side of the platform.

### Objectives
1. **Choosing Technologies (1P):** This task involves finalizing the tech stack 
2. **Planning and Implementing the Database (3P):** Design and implement the database schema using Supabase
3. **Product Information (5P):** Build a dynamic product detail page that fetches data from Supabase using Next.js. 
4. **Homepage Design (8P):** Design homepage with header, main content and footer using Figma.
5. **Login, Registration, and Profile (5P):** Create login and registration forms with validation, and user profile page.
6. **Header (1P):** Design and build a responsive header.
7. **Order History Overview (3P):** Develop an order history table for users to view their past orders.
8. **Shopping Cart (8P):** Build the shopping cart functionality.
9. **Design Implementation (5P):** Ensure consistent styling across the application.
10. **Product Listing Page (Shopping Menu) (5P):** Create a product listing page that fetches products.
11. **Language Dropdown Component (1P):** Create a language switcher component.

### Tasks Moving to Sprint 2:
-**Language Dropdown Component (1P):** Create a language switcher component.

## Key Achievements
- Delivered a visually complete prototype of the e-commerce website.
- Established a consistent design system and styling across components.
- Implemented essential UI components, including the homepage, product catalog, and shopping cart.
- Designed a database schema and initiated frontend-backend integration.
- Implemented advanced filters and search functionality in the product catalog.

## Challenges
- Managing multiple dependencies and aligning designs with the finalized tech stack.
- Time constraints while ensuring consistency and quality in visual design.
- Incorporating dynamic functionality within the static frontend structure.

## Next Steps
1. Complete and integrate the Language Dropdown Component.
2. Connect the frontend to backend APIs to fetch and display live data.
3. Begin developing user authentication and session management features.
4. Create responsive layouts for desktop, tablet, and mobile devices.

---

Sprint 1 successfully established the visual framework for the Shop Project, setting the stage for functionality integration in upcoming sprints.

