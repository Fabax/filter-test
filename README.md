# Ask Phill Assignment

## Getting Started

##### Install project

-   Clone/copy this repo and run `nmp install`
-   Start developement server with `npm run dev`
-   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

##### View online version
- built and deployed here : https://filter-test-nine.vercel.app/

## Project requirements
- We need to have the possibility to filter 
    - Color(color family name) 
    - Price(price range between x and x) 
    - Category tags(for example sandals, mid-heels, etc) 
- Use Next, Gatsby or CRA (if you want to impress? use our current stack) 
- Use pagination so not all products are loaded at once 
- All the filters need to accept multiple parameters 
- The user should be able to combine the filter parameters together 

## Stack
Next.js, SWR, Styled modules (scss)


## Styling
Although styling was not required. Some basic style was applied using styles modules and BEM methodology whenever possible.

## Code formating
Here are the tools I used to format my code : 
ESlint /  Prettier / Post css sorting 

## API
The api exposes 2 entry points :

##### GET `/shoes`
Return the firlt 12 product unfiltered + pagination

##### GET `/shoes/[params]`
Accepts a lits of params and returns a list of filteres products + pagination.

-   **colors** (optional) : sort product by colors, ex :
    -   get white products : `/shoes/colors=white`
    -   get black and white products : `/shoes/color=black,white`
-   **categories** (optional) : sort produtcs by categories
    -   get Sandals : `/shoes/categories=sandals`
    -   get Sandals and Flata : `/shoes/categories=sandals,flats`
-   **pricerange** (optional): sort produtcs by price range `
    -   get products between 0 and 1000 euros `/shoes/pricerange=0,1000`
-   **page** (optional): return the desired page for the filter query. if this params is not provided, it will return the first page
    -   get page 3`/shoes/page=3`

All pararms can be added in a single query when joining them with `&`
ex : get the white & green mid-heels that cost between 0 and 200 euros `api/shoes/colors=white,green&categories=mid-heels&pricerange=0,200`

##### Response
The API returns an array containing the product list for the page and the max page amount for the query