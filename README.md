## Overview:

This is a mock take home challenge from Turing.  The spec sheet is [here](https://mod4.turing.edu/projects/take_home/take_home_fe).  I elected to shoot for minimum viable product with minimal styling in order to stay within the stated 8 hour time constraint.  

## To initialize the project:

Clone this project to your local machine.

Then run the commands:
### `npm install`
### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Design 

I elected to keep the overall design of this project simple in order to stay within the stated time constraints.  Keeping it simple also avoids any potential accessibility issues (Lighthouse score: 100).  I mocked up a very basic wireframe and component tree diagram.

<img width="700" alt="Turing take home component tree" src="https://user-images.githubusercontent.com/91761276/173144916-6279ed4d-551f-440f-a5d7-6d3759684c2a.png">

<img width="700" alt="Turing take home wireframe" src="https://user-images.githubusercontent.com/91761276/173144941-f7389730-0c09-4b43-b277-5ddfcb1130a3.png">

## Finished Minimum Viable Product (MVP)

The finished app fetches the top stories from the New York Times API.  It loads the articles as cards on to the main page.  The cards are sortable by the date they were initially published. Each card can be clicked on to render a detailed view, including a link to the NY Times site.

Initial view:

<img width="700" alt="turing takehome screen shot 1" src="https://user-images.githubusercontent.com/91761276/173146487-7492567f-c8f1-4d78-aba8-bded9bae0e48.png">

Sorted view:

<img width="700" alt="turing takehome screenshot 2" src="https://user-images.githubusercontent.com/91761276/173146791-1c2c4311-4146-4945-803f-5cbfd331b815.png">

Detail view:

<img width="700" alt="turing takehome screen shot 3" src="https://user-images.githubusercontent.com/91761276/173147188-e6ffd583-4eb2-401c-a12f-a833b14473ed.png">

## Extensions/Expansions

There are several areas that I would be interested in exploring in this app given more time.  Primarily, the styling could be updated quickly and easily to provide better UI/UX.  The sort function could be built out further to include search and filter options.

I ran into issues with implementing dynamic urls in React Router for the detailed article views, so I elected to utilize conditional rendering to meet the requirement in the interest of staying within the time constraints.  Given some additional time, it should be something that could be fixed.

## Technologies used

- React.js
- ReactRouter
- Fetch API
- JavaScript
- HTML
- CSS
- JSX
- Figma
