# 📄 Resume Builder App

A modern, professional resume builder application built with React, Vite, Redux Toolkit, and Tailwind CSS. Create stunning resumes with an intuitive form-based interface and instant preview.

## ✨ Features

- 📝 Personal information management
- 💼 Work experience section
- 🎓 Education details
- 🛠️ Skills management with tags
- 🖨️ Print resume functionality
- 💾 Download resume as text
- 🎨 Modern, professional design
- 📱 Fully responsive layout
- ⚡ Fast development with Vite
- 🔄 Redux state management
- 🎯 Form validation
- ✅ Success notifications
- 🎨 Tailwind CSS styling
- 🔍 React Icons integration

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd react/my-resume-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open the URL shown in terminal (usually [http://localhost:5173](http://localhost:5173)) to view the app.

## 🎯 Usage

### Building Your Resume

1. **Personal Information**
   - Enter your full name
   - Add email address
   - Provide physical address
   - Add phone number
   - All fields validated in real-time

2. **Work Experience**
   - Add company name
   - Specify position/role
   - Include employment dates
   - Describe responsibilities

3. **Education**
   - List degree/certification
   - Add institution name
   - Include graduation year
   - Add relevant details

4. **Skills**
   - Add technical skills
   - Include soft skills
   - Use tag-based input
   - Easy add/remove functionality

5. **Preview & Export**
   - Real-time resume preview
   - Print directly from browser
   - Download as text file
   - Professional formatting

## 📁 Project Structure

```
my-resume-app/
├── public/
├── src/
│   ├── components/
│   │   └── ResumeView.jsx    # Resume preview & export
│   ├── Slice/
│   │   └── ReduxSlicer.js    # Redux state management
│   ├── App.jsx                # Main form component
│   ├── Store.js               # Redux store config
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🛠️ Built With

- **React** (v19.2.5) - UI library with latest features
- **Vite** (v6.0+) - Lightning-fast build tool
- **Redux Toolkit** (v2.11.2) - State management
- **React Redux** (v9.2.0) - Redux bindings
- **Tailwind CSS** (v4.2.4) - Utility-first CSS framework
- **React Router DOM** (v7.15.0) - Routing
- **React Icons** (v5.6.0) - Icon library
- **React Tag Input** (v6.10.6) - Tag input component

## 📦 Available Scripts

### `npm run dev`
Starts the Vite development server with hot module replacement.

### `npm run build`
Builds the app for production. Output goes to the `dist` folder.

### `npm run preview`
Preview the production build locally.

### `npm run lint`
Runs ESLint to check code quality.

## 🎨 Design Features

### Form Interface
- Clean, modern card-based design
- Gradient backgrounds
- Icon-enhanced input fields
- Real-time validation feedback
- Success notifications
- Helpful tips and guidance

### Resume Preview
- Professional layout
- Clean typography
- Organized sections
- Print-optimized styling
- Responsive design

### User Experience
- Smooth animations
- Hover effects
- Loading states
- Error handling
- Intuitive navigation

## 🔄 State Management

Redux Toolkit manages the application state:
- **Personal Details**: Name, email, address, phone
- **Experience Details**: Work history
- **Education Details**: Academic background
- **Skills**: Technical and soft skills

## 🎨 Customization

### Tailwind Configuration
Customize colors and theme in `tailwind.config.js`

### Styling
Modify global styles in `src/index.css`

### Components
Individual component styling uses Tailwind utility classes

## 💡 Tips

- Fill out all sections for a complete resume
- Use professional email addresses
- Keep descriptions concise
- Highlight key achievements
- Use action verbs in experience
- Proofread before printing/downloading

## 🖨️ Printing Tips

1. Use the "Print Resume" button for best results
2. Browser print settings: Portrait, A4 size
3. Margins: Default or minimal
4. Background graphics: Enabled (optional)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Built with ❤️ using React, Vite, and Tailwind CSS

## 🙏 Acknowledgments

- Vite team for the amazing build tool
- Redux Toolkit for simplified state management
- Tailwind CSS for utility-first styling
- React Icons for beautiful icons

---

**Build Your Future!** 🚀📄

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
