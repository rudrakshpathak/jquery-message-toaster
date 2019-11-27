# jQuery Message Toaster
A simple easy to use jQuery based message toaster. Fully configurable, and customizable options available.

[![version](https://img.shields.io/badge/version-v0.0.6-orange.svg)]()
[![npm](https://img.shields.io/npm/l/express.svg)]()
[![PyPI](https://img.shields.io/badge/status-stable-brightgreen.svg)]()

## Download from npm
Run `npm install jquery-message-toaster`

## How to use

- Import `toaster.js` and use this code where you want to show the toaster

```Javascript
var toaster = new Toaster({
    'text': 'Hi',
    'color': '#FFF',
    'background': '#333',
    'verticalPosition': 'top',
    'horizontalPosition': 'right',
    'container' : '#id'
});
```

- Use `toaster.publish();` to show the toaster.

## Configurable options available in Toaster

| Key               | Default Value       | Use                                                                 |
| ------------------|:--------------------| :-------------------------------------------------------------------|
| color             | #333                | Text color of Toaster content.                                      |
| background        | #FFF                | Background color of the toaster.                                    |
| verticalPosition  | bottom              | Vertical position of toaster. Can take two values - top, bottom     |
| horizontalPosition| right               | Horizontal position of toaster. Can take two values - left, right   |
| container         | #toasterContainer   | Element that holds the toaster html.                                |
| text              | Hello !!            | Text content of toaster.                                            |
| width             | 290px               | Width of toaster box.                                               |
| height            | 40px                | Height of toastr box.                                               |
| padding           | 5px                 | Padding inside toaster box.                                         |
| corderRadius      | 5px                 | Corner radius of toaster box.                                       |
