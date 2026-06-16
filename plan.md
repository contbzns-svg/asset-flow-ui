# Implementation Plan: Digital Products E-commerce Platform with Admin Dashboard

This plan extends the existing digital products platform to include an administrative dashboard for managing products (CRUD operations), persisted via localStorage for this session.

## Scope Summary
- **Target Language:** Arabic (RTL support).
- **Frontend:** Responsive React application using Tailwind CSS and shadcn/ui.
- **Storefront Features:**
    - Homepage, Product Details, Cart, Simulated Checkout, Success Page.
- **Admin Dashboard Features:**
    - Product Management: View all products in a table.
    - Product Creation/Editing: Form to add or modify digital products (title, price, category, description, features, image URL).
    - Product Deletion.
    - Persistent state: Use localStorage to store the product list so changes in Admin reflect in the Storefront.
- **Auth Model:** `no_auth_controlled_write` (Admin access will be via a simple toggle/route for this demo; no real login system requested yet).

## Auth & RLS model
**Auth in scope:** no
**Model:** no_auth_controlled_write
**RLS strategy:** not_applicable (Local storage only)
**Frontend implication:** Admin routes/components will be accessible for demonstration purposes.

## Migration baseline
**Local migrations in project:** none
**User confirmed proceed on connected DB:** not_applicable (Local storage usage)

## Affected Areas
- **Frontend:**
    - `src/App.tsx`: Add 'admin' page state and routing logic.
    - `src/hooks/useProducts.ts`: New hook to manage product state across the app using localStorage.
    - `src/pages/Admin.tsx`: New page for the product management dashboard.
    - `src/components/AdminProductForm.tsx`: Form for adding/editing products.
    - `src/components/Navbar.tsx`: Add link to Admin dashboard.

## Ordered Phases

### Phase 1: Product State Centralization (frontend_engineer)
- Create `src/hooks/useProducts.ts` to manage the product list in localStorage, initializing with the existing mock data if empty.
- Update `src/App.tsx` and storefront pages to use this hook instead of direct mock data import.

### Phase 2: Admin Dashboard Implementation (frontend_engineer)
- Create `src/pages/Admin.tsx` with a table view of products.
- Create `src/components/AdminProductForm.tsx` using shadcn components (Dialog, Input, Textarea, Button).
- Implement Add, Edit, and Delete functionality within the Admin page.

### Phase 3: Integration & Navigation (quick_fix_engineer)
- Update `src/components/Navbar.tsx` to include an "Admin" or "لوحة التحكم" link.
- Update `src/App.tsx` to handle the 'admin' page state.

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Centralize product state and build the Admin dashboard UI/logic.
2. quick_fix_engineer — Add navigation links and wiring in App.tsx.

**Per-agent instructions:**

### 1. frontend_engineer
- **Phases:** Phase 1, 2
- **Scope:** Build the administrative backend logic (localStorage) and the Admin UI.
- **Files:**
    - `src/hooks/useProducts.ts`: Hook providing `products`, `addProduct`, `updateProduct`, and `deleteProduct`. Sync with localStorage.
    - `src/pages/Admin.tsx`: Dashboard with a table and "Add Product" button.
    - `src/components/AdminProductForm.tsx`: Modal form for product details.
- **Depends on:** none
- **Acceptance criteria:** Products can be added, edited, and deleted. Changes persist on page refresh and are reflected in the storefront.

### 2. quick_fix_engineer
- **Phases:** Phase 3
- **Scope:** Connect the Admin page to the main App shell and Navigation.
- **Files:**
    - `src/App.tsx`: Add 'admin' to the `Page` type and render the `Admin` page.
    - `src/components/Navbar.tsx`: Add a link to switch to the Admin view.
- **Depends on:** Phase 1, 2
- **Acceptance criteria:** User can navigate between the Storefront and Admin dashboard via the Navbar.

**Do not dispatch:** (none)
