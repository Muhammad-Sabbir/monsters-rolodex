// Now we're going to use another functional component. Now let's go a little deeper about functional components so functional components unlike class components such as our app J S component they don't have access to state because they don't have access to constructor which is a class method on our component that we import from react that we extend our classroom. They also don't have access to lifecycle methods. They don't have internal state and lifecycle methods because we don't always need to use lifecycle methods or internal state. Sometimes all we want to do is render some HTML and that's what a functional component really is. Unlike a class component a functional component is just a component that gets some props and returns some HTML and will figure out as we build our apps and see more challenges when to use each. But for now the main thing to remember is that if you don't think you need internal state nor access to lifecycle methods then just use a functional component because it's easier to read. It's actually easier to test as we'll see later in the course. And it's in some ways smaller and easier to reason about. // NONEED(So we'll just copy over the input that we want inside of our search box component and we'll apply a class name of search to it because that's where our search box styles are applying those styles to. We'll keep this type because we know that it's going to be search. And then as far as place holder goes we might want this to be dynamic because maybe another place that wants to use search box doesn't want the place holder to say search monsters let's say they want to search people or anything else we want places to be a prop that gets passed in and as we learn with our door structure we can d structure that prop off of the props object because all the props come in as one big objects.)

import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({placeholder, handleChange}) =>{
    return <input
                className='search'
                type="search"
                placeholder={placeholder}
                onChange={handleChange}
            />
}

