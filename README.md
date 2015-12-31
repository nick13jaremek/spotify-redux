# Spotify-Redux

This is a sample application I started in order to learn and understand the React ecosystem in a more concise way,
as an evolution step from the well-known *To-do list* tutorials.

# What is being used

*ReactJS* is a JavaScript library developed at Facebook which is targeted at building UI components. Although it exists
as a single library, there are additional modules and libraries which comprise a much more complex and useful React 
ecosystem. This project makes use of such blocks, outlined as follows:

- [react](https://github.com/facebook/react): the core *React* library.
- [react-redux](https://github.com/rackt/react-redux): allows to use a single store that receives actions from the 
React components, generating a new application state as a result.
- [react-router](https://github.com/rackt/react-router): permits to define a nested routing structure by setting paths 
and rendering different components accordingly.
- [webpack](https://github.com/webpack/webpack): a packaging tool to generate the application bundle and run it on the 
web browser.
- [immutable-js](https://github.com/facebook/immutable-js): a set of JavaScript-standard-data-structure equivalents 
which satisfy the immutable criteria as specified on the Redux way.
- [react-dom](https://www.npmjs.com/package/react-dom): a package that allows to render *React* components and provides
 a set of methods useful for DOM manipulation of the very same components.

*Note that some of the libraries, such as react-dom belong to the main react module, but are also distributed as a 
separate package.*

# The purpose

This application is simply a browser client that allows to search for Spotify *songs, albums and artists* via the 
Spotify Web API. No prior authentication is required although it could be implemented in the future to fetch the data 
associated to a certain Spotify user.

The main objectives while developing this project are two-fold:
- Develop a more complex application, where lots of components are defined and also, where **data are fetched from an 
external resource such as Spotify Web API**.
- Learn and integrate unit testing (and possibly integration testing) in a React environment. This turns out to be 
important because TDD/BDD is essential nowadays, and **I personally have not seen a complex project with tests
that cover most of the application.**

# 