# Reading Time Calculator React Component

[//]: # (![npm]&#40;https://img.shields.io/npm/v/@cycle/core/canary.svg&#41;)

[//]: # (![npm bundle size]&#40;https://img.shields.io/bundlephobia/min/wpm-calculator-react.git&#41;)

[//]: # (![GitHub]&#40;https://img.shields.io/github/license/ArtemPchela/wpm-calculator-react&#41;)

A React component for calculating estimated reading time for a given text.

## Installation

You can install the `wpm-calculator-react` package via npm or yarn:

```bash
npm i wpm-calculator-react
# OR
yarn add wpm-calculator-react
```

## Usage

Import the wpm-calculator-react component and use it in your React application:

```jsx
import React from "react";
import Wpm from "wpm-calculator-react";

function App() {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit...";
  
  return (
    <div>
      <h1>My Blog Post</h1>
      <Wpm text={text} />
      <p>{text}</p>
    </div>
  );
}

export default App;
```

## Props

* **text** (required): The text content for which you want to calculate the reading time.

* **className** (optional): An optional CSS class to style the component.

you can add your own **className** and style it in your css file
 
```tsx
<Wpm text={text} className="your-class_name"/>
```

or wrap with your own div and style it

```tsx
<div className="your-class_name">
    <Wpm text={text} />
</div>
```
* **wpm** (optional): The reading speed in words per minute (default: 183).

or add your own **wpm**

 ```tsx
<Wpm text={text} wpm={250}/>
```

## License
This project is licensed under the MIT License. See the LICENSE file for details.


## Author
Created by Artsiom Pchaliankou.

If you have any questions or suggestions, please feel free to open an issue or contact me at [pchelenkovartem@gmail.com](pchelenkovartem@gmail.com).
