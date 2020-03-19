# Flixier SDK

## Installation & Usage

### Via NPM or YARN

`$ npm install @flixier/sdk` -> if you're using NPM

or

`$ yarn add @flixier/sdk` -> if you're using YARN

Then just import it and get going :)

```javascript
import FlixierSDK from '@flixier/sdk';
```

### Via `<script>` tag

You can also add it directly in your HTML page via a `script` tag:

`<script src="[path-to-script]/FlixierSDK.[version].js"></script>` which will create a global object called **FlixierSDK**.

## API


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
import 'FlixierSDK.[version].js'

let removeFlixierBtn = window.FlixierSDK.button(document.body, {
    theme: 'white',
    popup: false
});

// Later in the progam when you no longer need it
removeFlixierBtn()

```

<hr>

<p align="center"> Made with ❤ by <a href="https://flixier.com"> Flixier team </a></p>
