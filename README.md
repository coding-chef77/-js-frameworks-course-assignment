# JS Frameworks Course Assignment React + Vite

This project is a React application that includes various paths such as home, detail, contact, login, and admin. The login functionality is implemented using a WordPress installation with the JWT plugin installed, and REST API is used for API calls.

---

## Getting Started

To get started with the project, clone the repository and run npm install to install the required dependencies.

### Clone the Repository

git clone `https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-heine5150.git`

### Install Dependencies

After cloning the repository, navigate to the project directory and run the following command to install the required dependencies:

### Install NPM packages

npm install

### Run the app

npm start

---

### Paths

The app includes the following paths:

- "/" - Home page that displays an array of items and a single item retrieved by a parameter, where each result should link to the detail page, passing a parameter in the URL.
- "/detail/:param" - Detail page that retrieves the parameter from the URL and uses it in an API call to fetch one item.
- "/contact" - Contact page with a form that includes First name, Last name, Email, Subject, and Message fields with validation.
- "/login" - Login page with a form that includes username/email and password fields with validation. It makes a login request to either a WordPress API with the JWT plugin and if the login is successful, it redirects the user to the admin route.
- "/admin" - Admin page that displays an "Admin" heading.

The admin path won't appear in your navigation.

### Reusable Components

Use reusable components where appropriate and pay attention to how the components are arranged.

### Home Page

The home page includes an array of items and a single item retrieved by a parameter, where each result should link to the detail page, passing a parameter in the URL.

### Detail Page

The detail page retrieves the parameter from the URL and uses it in an API call to fetch one item. Display at least 3 properties from the item.

### Contact Page

The contact page includes a form with the following inputs and validation:

- First name - required, minimum 3 characters
- Last name - required, minimum 4 characters
- Email - required, must be in a valid email format
- Subject - required, this must be a select box with at least 2 options
- Message - required, minimum 10 characters.

### Login Page

The login page includes a form with username/email and password fields. The inputs should have the necessary validation for a login form (not a registration form). The form makes a login request to the WordPress API with the JWT plugin installed. If the login is successful, it redirects the user to the admin route. If the login is unsuccessful, an error message is display above the form.

### Admin

The admin page simply displays an "Admin" heading.

---

## Author

Heine Günther
