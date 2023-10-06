# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![Desktop view screenshot](assets/images/screenshot.jpg)

### Links

- Solution URL: [Base Apparel](https://your-solution-url.com)
- Live Site URL: [Base Apparel](https://base-apparel-landing-page.firebase.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS3
- Firebase Hosting
- Mobile-first workflow

### What I learned

- Using the HTML Picture Element to display an image from a list of multiple images based on the device width:

```html
<Picture>
  <source
    media="(max-width: 900px)" 
    srcset="image.jpg"
  />
  <img 
    src="image.jpg" 
    alt="alt text"
  />
</Picture>
```

## Author

- Frontend Mentor - [@Smallz97](https://www.frontendmentor.io/profile/Smallz97)
- Twitter - [@taiwovicktor](https://www.twitter.com/taiwovicktor)
