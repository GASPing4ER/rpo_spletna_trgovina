# Shop Project

## Overview
The **Shop Project** is a modern e-commerce platform designed to provide a seamless shopping experience for both customers and administrators. This project leverages cutting-edge technologies to deliver a fast, scalable, and user-friendly system. 

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

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

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

## Sprint 2

### Sprint Goal
The primary goal of Sprint 2 was to connect our Supabase tables with our frontend. We also wanted to finish the login/signup functionality and the task from last sprint. 

### Objectives
1. **Connect Supabase with our Next.js app (1P):** This task involves connecting environment variables from Supabase to our Next.js app. 
2. **Implement actions for fetching products, orders, and users. (5P):** This task involves programming actions for fetching data from Supabase.
3. **Finish functionality for Login/Signup page (5P):** Build a form for login/signup and forward the data to our database to create user instances.
4. **Finish Language Dropdown Component from last sprint (1P):** Create a language switcher component.

### Key Achievements
- Successfully integrated Supabase with the Next.js app by configuring environment variables and establishing a connection.
- Developed and tested actions for fetching data such as products, orders, and users, ensuring proper data flow between the frontend and the database.
- Completed the login/signup functionality, including form validation and seamless user creation in the database.
- Finalized the Language Dropdown Component, providing users with an intuitive way to switch languages on the platform.

### Challenges
- Encountered issues with environment variable misconfigurations during the Supabase integration, which delayed initial progress.
- Debugging data-fetching actions was time-consuming due to inconsistencies in database schema definitions.
- Managing asynchronous operations for login/signup posed challenges in error handling and state management.
- Achieving a polished UI for the Language Dropdown Component required additional iterations.

### Next Steps
1. **Improve error handling and validations:**
   - Refine error messages for login/signup forms.
   - Ensure robust fallback mechanisms for failed API calls.
2. **Enhance UI/UX:**
   - Add design refinements to the Language Dropdown Component for a better user experience.
   - Implement loading indicators for actions like fetching data or form submissions.

## Sprint 3  

### Sprint Goal  
The primary goal of Sprint 3 is to implement advanced features and functionalities, focusing on enhancing the user experience and providing key e-commerce functionalities for both registered and unregistered users.  

### Objectives  
1. **Design and Implement Login/Register/Profile and Cart Pages (8P):**  
   - Finalize the visual designs for login, register, profile, and cart pages.  
   - Implement functionality for user profile management, including editing delivery and payment information.  

2. **Shopping Cart Functionality (10P):**  
   - Display a detailed list of products in the cart.  
   - Include total price, taxes, product prices, and delivery costs.  
   - Add visual options for selecting payment and delivery methods.  
   - For unregistered users, include a form to fill out the delivery address.  
   - Finalize the "Place Order" feature.  

3. **Order History Overview (5P):**  
   - Display a comprehensive list of all past orders, including product details and total prices.  

4. **Pagination and Product Filters (8P):**  
   - Implement sorting functionality to sort products by price, name, or stock availability.  
   - Add category-based product filtering.  
   - Enable pagination to display a limited number of products per page.  

5. **Profile Functionality (7P):**  
   - Allow users to edit and save banking information and delivery details.  
   - Provide a view of purchased products.  
   - Enforce limitations for non-administrator users, such as restricted access to certain areas or actions.  

### Key Achievements (Carried Over)  
- Completed the design for login, register, profile, and cart pages.  
- Built visual options for shopping cart functionalities such as payment and delivery selection.  
- Enhanced profile features with editable delivery and banking information.  
- Added pagination and robust product filtering capabilities.  

### Challenges  
- Ensuring seamless integration of shopping cart functionalities for both registered and unregistered users.  
- Managing performance and responsiveness for pagination and filter features on large datasets.  
- Designing intuitive yet secure profile functionality for editing sensitive information like banking details.  

### Next Steps  
1. **Backend Integration for Cart and Profile Features:**  
   - Connect cart functionalities to the backend for live updates.  
   - Implement backend validations for profile changes (e.g., delivery and banking details).  

2. **Optimize Performance:**  
   - Fine-tune pagination and filtering for faster rendering.  
   - Implement lazy loading for product images in the catalog.  

3. **UI/UX Improvements:**  
   - Add feedback mechanisms (e.g., success/error messages for profile updates and order placement).  
   - Introduce tooltips and additional guidance for sensitive fields like banking information.  

## Sprint 4

### Sprint Goal  
Enhance the application's usability by implementing key features, including multilingual support, business listing, and user-friendly design updates.

### Objectives  

1. **Details Screen Design (5P):**  
   - Design an intuitive and visually appealing details screen.  

2. **Language Selection Implementation (8P):**  
   - Add functionality to select and switch between languages.  
   - Ensure proper localization of UI elements.  

3. **Business Directory (3P):**  
   - Display a list of businesses with relevant details.  

4. **Language Selection Update (1P):**  
   - Finalize UI for language selection.  

5. **Cart - Delivery & Payment Info (8P):**  
   - Include fields for delivery address and banking information.  
   - Validate inputs for a seamless checkout experience.  

6. **Documentation (3P):**  
   - Document features and functionalities for Sprint 4 tasks.  

## Key Achievements  
- Designed a user-friendly details screen.  
- Implemented multilingual support with localization.  
- Completed a functional business directory.  
- Enhanced cart functionality with delivery and payment details.  
- Finalized and updated project documentation.  

## Sprint 5

### Sprint Goal  
Refine usability and enhance features for product pages, including theme customization and improved user interactions.

### Objectives  

1. **Product Comments (5P):**  
   - Allow users to leave and view comments on products.  
   - Add moderation tools for administrators.  

2. **Theme Selection (8P):**  
   - Enable users to select and preview themes.  
   - Ensure themes are responsive and accessible.  

3. **Product Images (1P):**  
   - Integrate high-quality product images with zoom functionality.  

4. **Details Page Update (4P):**  
   - Redesign product details with features, specs, and social sharing.  

### Key Achievements  
- Implemented product comments with moderation.  
- Added theme selection and preview functionality.  
- Integrated product images with zoom.  
- Redesigned details page for better engagement.  
