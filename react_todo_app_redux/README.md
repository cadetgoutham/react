# ✅ React Todo App with Redux

A powerful todo list application built with React and Redux Toolkit. Manage your tasks efficiently with full CRUD operations and a modern, intuitive interface.

## ✨ Features

- ➕ Add new tasks
- ✏️ Edit existing tasks
- 🗑️ Delete tasks
- ✅ Mark tasks as complete/incomplete
- 🔄 Redux state management
- 💾 Persistent state
- 🎨 Bootstrap-based UI
- 📱 Fully responsive design
- ⚡ Real-time updates
- 🎯 Organized task list view

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd react/react_todo_app_redux
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the app.

## 🎯 Usage

### Task Management
- **Add Task**: Enter your task in the input field and click "Add" or press Enter
- **Edit Task**: Click the edit button to modify an existing task
- **Delete Task**: Click the delete button to remove a task
- **Mark Complete**: Toggle task completion status with a single click
- **View All**: See all your tasks in a clean, organized list

## 📁 Project Structure

```
react_todo_app_redux/
├── public/
│   └── index.html
├── src/
│   ├── Components/
│   │   ├── Addlist.js     # Add task component
│   │   ├── Header.js      # App header
│   │   ├── ShowList.js    # Display tasks
│   │   └── UpdateList.js  # Edit task component
│   ├── Slices/
│   │   └── ReduxSlice.js  # Redux slice for todos
│   ├── App.js             # Main app component
│   ├── Store.js           # Redux store configuration
│   ├── index.js           # Entry point
│   └── index.css          # Styling
├── package.json
└── README.md
```

## 🛠️ Built With

- **React** (v18.2.0) - UI library
- **Redux Toolkit** (v1.9.5) - State management
- **React Redux** (v8.0.5) - React bindings for Redux
- **Bootstrap** (v5.2.3) - CSS framework
- **React Bootstrap** (v2.7.4) - Bootstrap components

## 📦 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.

### `npm run eject`
**Note: this is a one-way operation!** Ejects from Create React App.

## 🔄 State Management

Uses Redux Toolkit for predictable state management:
- **Todo List State**: All tasks stored centrally
- **Actions**: Add, Edit, Delete, Toggle completion
- **Slices**: Organized Redux logic with createSlice

## 🎨 Customization

Customize the appearance by modifying:
- `src/index.css` for custom styles
- Bootstrap theme variables for colors
- Component styles in individual component files

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Built with ❤️ using React and Redux Toolkit

---

**Stay Organized!** 📝✨

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
