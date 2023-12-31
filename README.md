# Key Codes Keyboard Event Handler

A simple JavaScript function to handle key events and display the pressed key and its key code dynamically in the HTML.

<img src="./src/img/preview.gif" alt="Project Demo"  width="100%" height="auto">

## Table of Contents

- [About](#about)
- [Features](#features)
- [Demo](#demo)
- [Usage](#usage)
- [Installation](#installation)
- [License](#license)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)
- [Contact](#contact)
- [Author](#author)

## About

This project provides a straightforward JavaScript function (`checkKeycode`) that listens for keyboard events and updates the content of an HTML element with the class "keycode" to display the pressed key and its corresponding key code. The code is written using modern JavaScript syntax and is well-documented for ease of use.

## Features

- Dynamic display of pressed key and key code.
- Support for modern browsers using the 'key' property and a fallback for older browsers using 'keyCode'.
- Additional handling for the space key to display "Space" instead of an empty string.

## Demo

View the demo on [CodePen](https://codepen.io/karlhorning/pen/MBjMrX).

## Usage

1. Include the JavaScript file in your HTML:

   ```html
   <script src="path/to/script.js"></script>
   ```

2. Ensure that you have an HTML element with the class "keycode" in your document:

   ```html
   <div class="keycode"></div>
   ```

3. Add an event listener to call the `checkKeycode` function on keyboard events:

   ```javascript
   document.addEventListener("keydown", checkKeycode);
   ```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Karl-Horning/key-codes-keyboard-event-handler.git
   ```

2. Copy the `script.js` file into your project.

3. Include the script in your HTML file as mentioned in the usage section.

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure that the project still works.
4. Create a pull request with a clear description of your changes.

## License

This project is licensed under the [MIT License](LICENSE).

- **Font:** [Alfa Slab One](https://fonts.google.com/specimen/Alfa+Slab+One).
- **Background Animation:** Manuel Pinto's [Pure CSS Gradient Background Animation](https://codepen.io/P1N2O/pen/pyBNzX).

## Contact

For any inquiries or support related to this project, please contact Karl Horning using any of the links in the 'Author' section.

## Author

Karl Horning: [GitHub](https://github.com/Karl-Horning/) | [LinkedIn](https://www.linkedin.com/in/karl-horning/) | [CodePen](https://codepen.io/karlhorning)