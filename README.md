# 🛡️ Next.js Login App with JWT Authentication

A simple Next.js application with **email & password validation**, stores a **mock JWT token** in `localStorage`, and redirects the user to a protected dashboard.

---

## 🚀 **Features**
- ✅ Email & password validation  
- ✅ Stores **mock JWT token** in `localStorage`  
- ✅ Protected dashboard with logout functionality  
- ✅ Built with **Next.js, Tailwind CSS, TypeScript**  

---

## 🛠️ **Tech Stack**
- **Framework:** Next.js (App Router)  
- **Language:** TypeScript  
- **Styling:** Tailwind CSS  
- **State Management:** `useState`, `useEffect`  

---

## 📦 **Installation & Setup**

1. **Clone the repository**  
    ```bash
    git clone <repository_url>
    cd <project_directory>
    ```

2. **Install dependencies**  
    ```bash
    npm install
    ```

3. **Run the development server**  
    ```bash
    npm run dev
    ```

4. **Open the app in your browser**  
    ```
    http://localhost:3000
    ```

---

## 🌟 **How It Works**

### 🔑 **Login Validation**
- Email format check using regex:  
    ```typescript
    const emailRegex = /\S+@\S+\.\S+/;
    ```
- Password must be at least **6 characters**

### 🔒 **JWT Authentication**
- **On successful login:**  
    - Stores a mock JWT token in `localStorage`  
    - Redirects the user to `/dashboard`  
- **On logout:**  
    - Clears the token  
    - Redirects the user to the login page  

---

## 🚀 **Deployment**
You can deploy this project on:  
- [Vercel](https://vercel.com)  

---


✅ Let me know if you need any changes or further modifications! 🚀
