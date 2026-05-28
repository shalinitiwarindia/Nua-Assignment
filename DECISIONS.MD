# DECISIONS.md

## Architectural Decision

One major architectural decision I made was choosing React Context API for global cart state instead of introducing Redux or Zustand.

Since this project is focused around a single product detail page and a lightweight cart system, using Context API kept the application simpler and easier to maintain without adding unnecessary complexity. The cart only needed to be accessed by a few components like ProductInfo and CartDrawer, so a full state management library felt excessive for the project scope.

I also chose to persist the cart state in localStorage using useEffect so the cart survives page refreshes and behaves more like a real ecommerce experience.

For the product details section, I used tabs on desktop because they keep the UI cleaner and reduce excessive scrolling. On smaller screens the layout naturally stacks vertically, which still feels accessible and mobile friendly.

Another decision was using SCSS modules instead of global CSS. This helped avoid style conflicts and made components easier to scale independently.

## What I Would Improve With More Time

With more time, I would improve accessibility further by adding complete keyboard navigation support and ARIA attributes for all interactive components like tabs, drawers, and variant selectors.

I would also add proper unit tests for variant selection and cart logic using Vitest and React Testing Library. I initially started setting up testing, but due to Node version compatibility issues, I prioritised stabilising the production build and overall UX.

For performance, I would lazy-load gallery images and optimise image delivery further. I would also integrate a more realistic backend cart API instead of using a mock async function.

Finally, I would polish smaller UI interactions like gallery swipe gestures, smoother micro-animations, and enhanced loading skeletons to make the experience feel even more production-ready.
