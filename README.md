# Outdoor PDP — React Product Detail Page

A production-style responsive product detail page built with React and Vite for a frontend developer assignment.

## Tech Stack

* React 18
* Vite
* SCSS Modules
* Context API
* Fake Store API
* localStorage

## Features

* Responsive product detail page
* Image gallery with thumbnail switching
* Mobile-friendly layout
* Product variants (colour + size)
* Low stock and sold out states
* Quantity selector with stock limit
* Add to cart functionality
* Persistent cart using localStorage
* URL-based variant selection
* Product tabs (description, specs, reviews)
* Cart drawer UI
* Async add-to-cart simulation
* Loading and error states

## Setup

Clone the repository and run:

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Design Decisions

Detailed architectural and technical decisions are documented in `DECISIONS.md`.



## Future Improvements

* Unit testing with Vitest
* Better accessibility support
* Swipe gestures for gallery
* Backend cart integration
* Skeleton loading states
