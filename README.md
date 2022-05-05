<h1 style="text-align:center">Documentation for the project</h1>
<br>
<h4><u>The App.jsx file:</u></h4>

This is the file for App Component. App Component is the main component in React which acts as a container for all other components.Conventionally, App.js acts as the highest level component in the React application structure. Under the same folder, you also find the index.js file, which holds your application’s configuration and incorporates dependencies. In this file we find a number of imports such as, "import React, {useEffect, useState} from 'react';" which takes care of the hooks.
1- useState() is a Hook that allows you to have state variables in functional components. we use useState for managing state in our component, the benefit of using useState is whenever the state will be updated, react will re-render the component on its own without reloading the page.
2- useEffect() is a react hook that allows you to perform side effects in your components. <br>

I will get all the data needed from an API which is accessed by the constant variable URL.  inside the app function, there are four useState hooks. I will use fetch() method to load the information on the webpages. The request can be of any APIs that return the data of the format JSON or XML. The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global fetch () method that provides an easy, logical way to fetch resources asynchronously across the network. In order to make sure is there a problem when loading data, I used "then" and "catch" methods that create a chain of promises. If all the promises pass, they will continue down the chain. If not, they will go to the catch method and, in this case, give an alert. The response.json() method transforms the API object into an object suitable for javascript. 
Inside this file, there are a number of functions to add a tag, delete a tag, search student by name, and serach a student by tag. <br>

The "delateTag" function has 2 parameters: tag and student. thsi function workes as follow: 
A copy of the array "filteredStudentData" is made inside the function. Later the copy is used with the method "forEach" to go through each student object and compare its "id" with the "id" of the object parameter student. If they are equal, the array is filtered using the filter method giving an array of the tag or tags that are not similar to the tag parameter erasing the tags selected by the user. <br>

The "addTag" function is the function that adds tags to each student according to the user inputs. I used push method to add new tag into the array of tags and then update the exact student object rendering later the main object already updated. <br>

The "searchByName" function filters the user's search information, rendering only the student objects according to the name entered by the user.This function allows the user to search for a student using the student's name or tag, or both. It uses the arrays "filteredByName" and "filteredByTag" to push the information the user needs and update the main object. The function also uses the concat method to concatenate both arrays if the user searches for names and tags. The "filteredByTag" function has a similar role as "filteredByName." The main difference is that this function specifically takes care of updating the main object according to tags. "filteredByName" takes care of concatenating all the information in one array. <br>

<h4><u>TagInput component:</u></h4> It renders a form that recieve a user input and add it to the student tags. It uses an "onChange" event to update the value entered by the user and store it in a state variable. It also uses a submit event that triggers with pressing Enter. "addTag" is called to add the information to the function. <br>

<h4><u>ExpandableButton component:</u></h4> This part takes care of rendering the plus button. This button allow a user to show or hide all student grades by using the "student.grades" array, which is revealed by using the same event handler and by using another hook that updates the array. <br>

<h4><u>Tags component:</u></h4> This component has a fuction that renders the component "Tag." It has two parameters student, and the function "deleteTag" that delete a tag. It also maps the array "student.tags" for information. If it has, it returns HTML to show all the tags on the screen. <br>

<h4><u>The "utils" File:</u></h4> This file has two functions. The first one is "formatStudentData" which receives the object students already transformed into an object that JavaScript can use. Inside, the function "_sortByStudentFirstName" runs before anything else happens. This function also receives the object students as a parameter, which later is copied into the array "sortedStudents." This array is used to sort all student objects in alphabetic order using the method sort(). Once the array is sorted, the function  "formatStudentData" maps the array. The map() method calculates the average of all grades and returns an object of each student but including the keys average, fullName, and tags with their respective values. The "formatStudentData" is the only function in this document that is exported and used in the App component. <br>


<h4><u>Tag component:</u></h4> This is what shows the tag or tags values on the screen. inside this component, I handled the delete tag when click on the x icon by calling "deleteTag" function. By using the "onClick" event, The event erases the tag selected by the user. <br>

<h4>The "App.css" File:</h4>This file contains some CSS code that takes care of the design. <br>


<h4><u>The Index File:</u></h4> The react and react-dom libraries are imported in this file. I use the function ReactDOM.render(). This function controls the content of the container nodes I pass in. With this function, I can replace the content of any DOM element using the ReactDom.render(). It renders my components to the DOM while the component's render returns the element that makes up the component. <React.StrictMode> is a tool for highlighting potential problems in an application. Like Fragment, StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants. Inside the ReactDOM.render we called <App /> the parent component, which uses the libraries mentioned before. In this case, all the child components can also use the react libraries mentioned "document.getElementById('root')" is part of the DOM, and it grabs all the code inside the root id. This is called a "root" DOM node because React DOM will manage everything inside it.

***************************************************************************************************************************************************
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
