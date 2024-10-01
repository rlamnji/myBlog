import React, { createContext, useState, useContext } from 'react';

// Context 생성
const BlogContext = createContext();

// Provider 컴포넌트
export const BlogProvider = ({ children }) => {
    const [state, setState] = useState({
        title: "",
        date: "",
        content: ""
    });

    return (
        <BlogContext.Provider value={{ state, setState }}>
            {children}
        </BlogContext.Provider>
    );
};

// Hook을 사용하여 쉽게 Context를 사용할 수 있도록 하는 함수
export const useBlog = () => useContext(BlogContext);