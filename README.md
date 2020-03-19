# Flixier SDK

## Installation

Include the `FlixierSDK.[hash].js` file in your app via a `<script>` tag. If your app has a build process - via Webpack for example - you can also import the script just when you need it:

`import 'FlixierSDK.[hash].js';`

## API

Including this script will add a global object called `FlixierSDK`.

### FlixierSDK.button

A function used to diynamically insert a Flixier button on your page. Clicking this button will open Flixier homepage.


Type: `Function(rootElement, config?)` <br>

#### Params:

#### 1. rootElement

The dynamically generated button will be inserted in this element;

Type: DOMElement

#### 2. config

Aditional configuration options for the style and behaviour of the button.

Type: `Object`<br>
Default: 

```js
{
    theme: 'blue', // styling theme. Available options: 'blue' | 'white'
    popup: true // whether or not to open it in a new window, as a pop-up
}
```

#### Returns

Returns a function you can use to remove the button from the page.


#### Example

```js
import 'FlixierSDK.[hash].js'

let removeFlixierBtn = window.FlixierSDK.button(document.body, {
    theme: 'white',
    popup: false
});

// Later in the progam when you no longer need it
removeFlixierBtn()

```

<hr>

<p align="center"> Made with ❤ by <a href="https://flixier.com"> Flixier team </a></p>
