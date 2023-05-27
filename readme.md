## Create a 3D customizable T-shirt With React

### This project uses many react libraries

### Read React Docs <a href="https://react.dev/blog/2023/03/16/introducing-react-dev" target="_blank"> <img src="readmesrc/react.png" alt="react" width="50"/> </a>

### For Style we use:

### Tailwind CSS <a href="https://tailwindcss.com/docs/guides/create-react-app" target="_blank"> <img src="readmesrc/tailwind.svg" alt="react" width="20"/> </a>

### React Three Fiber

### Library for ThreeJS in React: <a href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction" target="_blank"> <img src="readmesrc/threejs.svg" alt="react" width="20"/> </a>

### For Animation in react

### Framer Motion: <a href="https://www.npmjs.com/package/framer-motion" target="_blank"> <img src="readmesrc/framer.svg" alt="react" width="15"/> </a>

<br/>

## install node modules:

### For Create a React template using Vite Run this command in terminal

```bash
 npm create vite@latest -- --template react client
 cd client
```

### install rect three three,fiber, drei, maath,valtio,react-color,framer-motion

```bash
 npm install three @react-three/fiber @react-three/drei maath valtio react-color framer-motion
```

### Install tailwindcss and initialize it

```bash
 npm install -D tailwindcss postcss autoprefixer
 npx tailwindcss init -p
```

### configure tailwindcss in tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Add tailwind directives in index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Now it's done you can start your project and open the developer server in your browser

```bash
 npm run dev
```

## Extensions for VSCode fow easy development

- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [Color info](https://marketplace.visualstudio.com/items?itemName=bierner.color-info)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [GitHub Copilot(Optional)](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)

## Notes

### this project has a issue with Creating texture for the T-shirt by using AI prompts by OpenAI

### So I comment out the code for now and I will fix it later, you can see the commented code and try to fix it

### If you fix it please make a pull request and I will merge it, And you can see the server site code in the server folder that i create for AI prompts

### You can run that server by using this command in terminal

```bash
 cd server
 npm install # it install all the dependencies from package.json for server
 npm start
```

### If you have any question you can ask me in my <a href="https://discord.gg/nxjp43bt" target="_blank">Discord Server</a> ,Thanks for checking out my project
