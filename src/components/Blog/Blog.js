import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='min-h-screen md:px-10 lg:px-56 xl:ps-96 my-blog'>
            <div data-aos="zoom-in" className='border  border-cyan-400 p-5 m-5 rounded-lg shadow-lg'>
                <h2 className='text-xl pb-2'><span className='font-semibold'>Question : </span> What is the purpose of react router?</h2>
                <p><span className='font-semibold'>Answer : </span> React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. It allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.
                    <br /><br />
                    By preventing a page refresh, and using Router or Link, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.</p>
            </div>
            <div data-aos="zoom-in" className='border border-cyan-400 p-5 m-5 rounded-lg shadow-lg'>
                <h2 className='text-xl pb-2'><span className='font-semibold'>Question : </span> How does context API works?</h2>
                <p><span className='font-semibold'>Answer : </span> The React Context API, introduced with React v.16.3, allows us to pass data through our component trees, giving our components the ability to communicate and share data at different levels.
                    <br /><br />
                    Basically, When we work with many components in a react application, we have to drill the props from components to components. In case of huge props drilling, we face issues of maintaining the sequence and it slows down the development process. That's where react context helps us and we can pass data from parent component to the last child component without any drilling process. We can do this by creating a context and providing it with all the necessary components which need the data by "Provider".
                </p>
            </div>
            <div data-aos="zoom-in" className='border border-cyan-400 p-5 m-5 rounded-lg shadow-lg'>
                <h2 className='text-xl pb-2'><span className='font-semibold'>Question : </span> What is useRef in react?</h2>
                <p><span className='font-semibold'>Answer : </span> useRef is a hook in react which actually returns a mutable ref object. The object's .current property is initialized to the passed argument (initialValue).
                    <br />
                    useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes. This works because useRef() creates a plain JavaScript object. The only difference between useRef() and creating a current: ... object yourself is that useRef will give you the same ref object on every render.</p>
            </div>
        </div>
    );
};

export default Blog;