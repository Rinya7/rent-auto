# Car Rental Application

This project is a React-based application for a car rental company in Ukraine.
It consists of three main pages:

## 1. Home Page:

1. Provides a general overview of the services offered by the company.
2. tyling and layout are at your discretion.

## 2. Catalog Page:

- Displays a catalog of cars with various configurations.
- Users can filter cars by brand, hourly rental price, and mileage.
- Pagination is implemented, showing 12 advertisements per page initially and
  loading more on button click.
- Users can add advertisements to their favorites, and the state is preserved
  even after refreshing the page.
- Clicking on the "Learn more" button opens a modal with detailed information
  about the car and rental conditions.
- The modal can be closed by clicking the close button, clicking on the
  backdrop, or pressing the 'Esc' key.

## 3. Favorites Page:

- Displays advertisements that the user has added to their favorites.
- Data persists across page refreshes.

### Technical Specifications

- Implement the advertisement card according to the provided design.
- Initially render 12 advertisements on the catalog page and load more on button
  click.
- Allow users to add and remove advertisements from their favorites.
- Preserve the user's favorites across page refreshes.
- Implement a detailed modal view for each advertisement.
- Format the car mileage with a comma for better readability.
- Implement a "Rental Car" button that provides users with the company's contact
  number.

### Additional Features

- Add a dropdown for filtering cars by brand using data from makes.json.
- Implement React Router for navigation with the following routes: /: Home page
  /catalog: Catalog page /favorites: Favorites page
- Redirect users to the home page for non-existing routes.

### Backend - MockAPI

- Create a personal backend for development using MockAPI.
- Define an "Advert" resource with the specified fields.
- Populate the database with at least 32 advertisements with varying values.
- Implement pagination on the MockAPI side.

### Getting Started

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the application: `npm start` Feel free to customize the styling, layout,
   and any additional features according to your preferences. If you have any
   questions or encounter issues, please let me know!
