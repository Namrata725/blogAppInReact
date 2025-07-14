# blogAppInReact

A blog application built with **React** where users can write and explore travel experiences related to the majestic mountains of Nepal. This app includes user login, blog creation/editing, image uploads, and filtering features — all managed through the browser’s `localStorage`.

---

## Live Preview

https://namrata725.github.io/blogAppInReact/

---


## Features

- Landing Page with call-to-action
- Explore section showing mountain info
- Login system (admin/user roles via `localStorage`)
- Add new blogs with:
  - Title, blogger name, email
  - Main image + multiple gallery images
  - Rich content & mountain selection
- View all blogs (including dummy blogs)
- View only **My Blogs** (filter by logged-in user)
- Edit / Delete blogs
- Blog Details Page with full content and images
- Navbar with routing links and user session dropdown
- No backend — data is stored in `localStorage`

---

## Technologies Used

- **React**
- **React Router DOM**
- **CSS Modules + Plain CSS**
- **LocalStorage** (to store users and blog data)

## Folder Structure

```
blogAppInReact/
│
├── component/            # Reusable UI components like Navbar, About
├── pages/                # Page-level components (Landing, Login, Main, etc.)
├── style/                # CSS Modules and plain CSS
├── img/                  # All mountain & blog images
├── App.jsx               # Main routing logic
├── main.jsx              # React entry point
└── ...
```

---


## Login Credentials

| Role   | Username | Password |
|--------|----------|----------|
| Admin  | admin    | admin    |
| User 1 | user     | user     |
| User 2 | user1    | user1    |

> Users must log in before accessing "Add Blog" or "My Blogs".

---

## Role-Based Permissions

###  Admin (`username: admin`, `password: admin`)
**Admin has full access across the app:**

| Feature                    | Access |
|---------------------------|--------|
| View all blogs            | yes     |
| Add a blog                | yes     |
| Edit any blog             | yes     |
| Delete any blog           | yes     |
| View "My Blogs" section   | yes (shows all blogs) |
| See Navbar with all links | yes     |
| Logout                    | yes     |

> **Note:** On the "My Blogs" page, admins see **all blogs**, not just their own.

---

###  Regular Users (`user`, `user1`, or custom)
**Users have restricted access to their own blogs only:**

| Feature                    | Access |
|---------------------------|--------|
| View all blogs            | yes     |
| Add a blog                | yes     |
| Edit own blog             | yes     |
| Delete own blog           | yes     |
| Edit/delete others’ blogs | no     |
| View "My Blogs" section   | yes (only their own) |
| See Navbar with all links | yes     |
| Logout                    | yes     |

> Each blog stores the `author` in `localStorage`, and `My Blogs` filters accordingly.

## Installation & Running Locally

1. **Clone the repository**  
   ```bash
   git clone https://github.com/yourusername/blogAppInReact.git
   cd blogAppInReact
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Start the development server**  
   ```bash
   npm run dev
   ```

---

## Learning Goals

This project was created to strengthen the following concepts:

- React component structure and props/state management
- Routing using `react-router-dom`
- Handling file uploads and displaying previews
- CRUD operations with localStorage
- Form handling and conditional rendering
- Working with images and layout using CSS

---

