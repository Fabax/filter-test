# Ask Phill Assignment

## Getting Started

-   Clone/copy this repo and run `nmp install`
-   Start developement server with `npm run dev`
-   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Stack

-   Next.js
-   SWR
-   Styled modules

## API

The api exposes 2 entry points :

##### GET `/shoes`

returns all the products in the catalogue as a json file

##### GET `/shoes/[params]`

accepts a lits of params and returns a list of filteres products.

-   **color** (optional) : sort product by colors, ex :
    -   get white products : `/shoes/color=white`
    -   get black and white products : `/shoes/color=black,white`
-   **category** (optional) : sort produtcs by categories
    -   get Sandals : `/shoes/category=sandals`
    -   get Sandals and Flata : `/shoes/category=sandals,flats`
-   **price** (optional): sort produtcs by price range `
    -   get products between 0 and 1000 euros `/shoes/price=0,1000`
-   **page** (optional): return the desired page for the filter query. if this params is not provided, it will return the first page
    -   get page 3`/shoes/page=3`

All pararms can be added in a single query when joining them with `&`
ex : get the white & green mid-heels that cost between 0 and 200 euros `api/shoes/color=white,green&category=mid-heels&price=0,200`
