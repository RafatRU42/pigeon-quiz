import React from 'react';

const Blog = () => {
    return (
        <div className='question'>
            <h2>1.What is the purpose of the react router? </h2>
            <h3>Answer: React Router is a Standard library for Routing in React. It enables the navigation among views of various components in a react application, Allows changing the browser URL, and keeps the UI in sync with the URL.</h3>
            <hr />
            <h2>2. What is Context API? </h2>
            <h3>Answer: The React Context API is a way for React to effecticely produce global variables that can be passed around. This is the alternative to prop drilling or moving props from grandparent to the child parent, and so on. COntext is also tuted as an easier and lighter approch to state management using Redux.</h3>
            <hr />
            <h2>3.What is useRef ? </h2>
            <h3>Answer: useRef return a mutable reference object whose current property is initialized to the passed argument. The return object will persist for the life time of the component.</h3>
        </div>
    );
};

export default Blog;