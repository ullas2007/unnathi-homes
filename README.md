# Unnathi Homes — Official Website

Official website of Unnathi Homes, a residential construction company based in Tiptur, Karnataka — building homes across Tumkur district, Bengaluru and Hassan.

Built with React, Vite and Supabase.

## About the company

Unnathi Homes builds individual residential houses, including G+1 RCC homes, from foundation to finishing. The builder and architect is Ullas.

- Office: K R Extension, 4th Main Road, Near Shankar Mutt, Tiptur 572201
- Phone: +91 81970 50233
- Areas served: Tumkur district, Bengaluru, Hassan

## Features

- Home, About, Services, Projects, Gallery, Testimonials and Contact pages
- Enquiry form (name, phone, place, type, message) saved to Supabase
- Tap-to-call and WhatsApp links on every page

## Tech stack

- React + Vite
- react-router-dom
- Supabase (enquiries table)

## Run locally

```bash
npm install
npm run dev
```

## Supabase setup

1. Create a Supabase project and an `enquiries` table with text columns: name, phone, place, type, message.
2. Copy the project URL and the publishable (anon) key into `src/supabaseClient.js`.

## Project structure

- `src/pages/` — Home, About, Services, Projects, Gallery, Testimonials, Contact
- `src/components/` — Navbar
- `public/` — images

## Note on photos

The photos in `public/` are temporary placeholders. They will be replaced with real photos of Unnathi Homes' work before the final handover.
