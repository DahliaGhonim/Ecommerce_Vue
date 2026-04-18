# Exclusive — E-Commerce Web App

A frontend e-commerce web application built as part of an academy internship project.

🔗 **Live Demo:** [Link 1](https://ecommerce-vue-by-dahlia.netlify.app) | [Backup Link](https://ecommerce-by-dahlia.netlify.app)
*(If one is unavailable, please try the other.)*

---

## Tech Stack

- **Vue 2** — frontend framework
- **Vuex 3** — state management
- **Vue Router 3** — client-side routing
- **CSS** — styling (no CSS framework)

## Conventions

- **BEM** — CSS naming methodology
- **7-in-1 pattern** — styles folder organization
- **Layer-based architecture** — components folder structure (`business`, `UI`, `layout`)

---

## Pages

| Page | Route |
|------|-------|
| Home | `/` |
| Products | `/products` |
| Product Details | `/product/:id` |
| Contact | `/contact` |
| About | `/about` |
| Not Found | `*` |

---

## Project Structure

```
src/
├── assets/
│   ├── images/
│   └── styles/
│       ├── abstracts/       # CSS variables
│       ├── base/            # Reset, typography
│       ├── components/      # Component styles
│       └── main.css         # Entry point
├── components/
│   ├── business/            # Feature components (ProductCard, CartSlider)
│   ├── layout/              # Structural components (AppHeader, AppFooter, AppBreadcrumb)
│   └── UI/                  # Reusable UI components (AppButton, AppCarousel, AppHeading...)
├── layout/
│   └── AppLayout.vue
├── router/
│   └── index.js
├── store/
│   ├── modules/
│   │   └── products/        # state, getters, mutations, actions
│   └── index.js
└── views/
    ├── HomePage.vue
    ├── ProductsPage.vue
    ├── ProductDetails/
    ├── ContactUs.vue
    ├── AboutUs.vue
    └── NotFound.vue
```

---

## Key Features

- Product listing fetched from [DummyJSON API](https://dummyjson.com/docs/products)
- Product details page with image gallery and quantity control
- Sliding cart sidebar with item management and order summary
- Browse by category section
- Horizontal carousels (single-row and two-row)

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```
