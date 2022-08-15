React is a Single Page Application (SPA). Everything we do only affects one root div.

- It's an open source JavaScript library made by Jordan Walke, a dev at Facebook and was deployed on their newsfeed in 2011 and was maintained by a community of other devs/companies as well as Facebook

Advantages:

- Simple declarative views for each state in your app (have data you want to change update and have a specific place for that data to go)
- Encapsulated components
- Dynamic properties and state (Props and State will come up a lot)
- Virtual DOM (what makes it so fast)

Virtual DOM

- A way to understand and create a new DOM for your view and will take a copy of that view to create a virtual version of it and syncs it to the real DOM and renders out the new stuff that you have. Makes it fast and doesn't redraw everything
- You tell react what state you want the UI to be in and it makes sure the DOM matches that state
- If you update state, the react component will re-render

We have class components and functional components. We are going to use functional components as class ones are not really used that much

- One Way Binding - When your view is updated it immediately reflects the data on that view
- React returns JSX, NOT html

- Life cycle of a react component --> Mounted, updated, unmounted
- React DOM allows us to manipulate the DOM
- Babel is a JS compiler that lets us use ES6+ in older browsers

ReactDOM.render(h1, document.getElementById('root));

---

JSX = JS XML. Looks like html. It's technically not mandatory but it is useful. The render method converts JSX code into HTML when the view is rendered

- Components are your building blocks, or Lego bricks, of your UI. Every React app has at least one component, and the first root component starts with App in App.js. It's the parent and calls everything else

- With render, only one main element is returned. Elements must be nested inside of a parent element

- Props are how you pass data between components. They're like messages that you want to pass and are read-only (immutable), sort of like arguments in a function

```
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}
```
