import { useState, useEffect, useContext } from "react";
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';
import BooksContext from "./context/books";

function App() {
    const {fetchedBooks} = useContext(BooksContext);

    useEffect(() => {
        fetchedBooks()
    }, []);

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList />
            <BookCreate/>
        </div>
    )
}

export default App;