import React, { useReducer } from 'react';

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []); //blogPosts can also be written as "state"

  const addBlogPost = () => {
    dispatch({ type: 'add_blogpost' });
  };

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;




// import React , {useState} from 'react';

// const BlogContext = React.createContext();

// export const BlogProvider = ({ children }) => {

//     const [blogPosts, setBlogPosts] = useState([])
    
//     const addBlogPost = () => {
//         setBlogPosts([ ...blogPosts, { title:  `Blog Post #${blogPosts.length+1}` } ]);
//     };

//     return <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}> 
//      {/*value={{ data: blogPosts, addBlogPost: addBlogPost(key=value Therefore , just write addBlogPost}}  */}
//     {/* value={5} is the info that we want to share */}
//         {children}
//     </BlogContext.Provider>
// };

// export default BlogContext;
