<div align="center">

# 🔐 PASSWORD MANAGER 

*Securely store your passwords  right in your browser.*

![React](https://img.shields.io/badge/Built%20With-React-61DAFB?logo=react)
![Tailwind](https://img.shields.io/badge/UI-TailwindCSS-38B2AC?logo=tailwindcss)
![Status](https://img.shields.io/badge/Type-Frontend--Only-orange)
![Storage](https://img.shields.io/badge/Data-LocalStorage-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Last Updated](https://img.shields.io/badge/Last%20Update-July%202025-lightgrey)

</div>

---

## 📚 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

---

## 📖 Overview

This is a **fully frontend-based Password Manager** made with React.  
All data is stored securely in the **browser's LocalStorage** using optional **AES encryption**.

It’s built for those who want a lightweight password vault without setting up a server.

---

## ✨ Features

- 📝 Add, edit, delete passwords
- 🔍 Search and filter saved credentials
- 👁️ Show/hide password toggle
- 🔐 Optional encryption using `crypto-js`
- 🧠 Built-in strong password generator
- 💾 LocalStorage-based persistence
- ⚙️ Responsive and clean UI with Tailwind CSS
- ❌ No backend / No database needed


---

## 🧰 Tech Stack

- **Framework:** React (Vite or Create React App)
- **Styling:** Tailwind CSS
- **State:** useState, useEffect (React Hooks)
- **Storage:** LocalStorage API
- **Encryption:** crypto-js (AES)

---

## 🚀 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/password-manager-ui.git
```

2. Navigate into the project:

```bash
cd password-manager-ui
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

---

## 🧑‍💻 Usage

- Use the form to add new credentials (website URL, username, password).
- Search for saved entries by name.
- Edit or delete any stored password.
- Toggle visibility to view password.
- All passwords are saved in browser’s LocalStorage.

---

## 🔐 Security

- Data is optionally encrypted before saving using `AES` via `crypto-js`.
- Works offline  no internet or server needed.
- *Note:* This is a demo app. For sensitive data, always use secure backend-based solutions.

---

## 🤝 Contributing

Want to help improve this?  
Feel free to fork and make changes!

1. Fork the repo  
2. Create a new branch (`git checkout -b feature/something`)  
3. Commit your changes  
4. Push and open a PR

---

## 📄 License

This project is licensed under the **MIT License**.  
Use it, modify it, share it  just keep the credits intact.

---

<div align="center">

_Made with 💙 by Saira — Privacy begins in your browser._

</div>
