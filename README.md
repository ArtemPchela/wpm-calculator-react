# Reading Time Calculator React Component

[//]: # (![npm]&#40;https://img.shields.io/npm/v/@cycle/core/canary.svg&#41;)

[//]: # (![npm bundle size]&#40;https://img.shields.io/bundlephobia/min/wpm-calculator-react.git&#41;)

[//]: # (![GitHub]&#40;https://img.shields.io/github/license/ArtemPchela/wpm-calculator-react&#41;)

A React component for calculating estimated reading time for a given text.

## Installation

You can install the `reading-time-calculator` package via npm or yarn:

```bash
npm install reading-time-calculator
# OR
yarn add reading-time-calculator
```

## Usage

Import the ReadingTimeCalculator component and use it in your React application:

```jsx
import React from "react";
import ReadingTimeCalculator from "reading-time-calculator";

function App() {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit...";
  
  return (
    <div>
      <h1>My Blog Post</h1>
      <ReadingTimeCalculator text={text} />
      <p>{text}</p>
    </div>
  );
}

export default App;
```

## Props

* text (required): The text content for which you want to calculate the reading time.

* className (optional): An optional CSS class to style the component.

* wpm (optional): The reading speed in words per minute (default: 238).

## Development

If you want to contribute to this project or modify it for your specific needs, you can follow these steps:
```bash
cd reading-time-calculator
npm install
# OR
yarn install
```

## License
This project is licensed under the MIT License. See the LICENSE file for details.


## Author
Created by Artsiom Pchaliankou.

If you have any questions or suggestions, please feel free to open an issue or contact me at pchelenkovartem@gmail.com.
