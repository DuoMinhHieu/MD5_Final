import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { getBooks, getCategories } from './service/bookService.js';
import BookList from './Component/BookList.js';
import CategoryList from './Component/CategoryList';

function App() {

  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksData = await getBooks();
        setBooks(booksData);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    const fetchCategories = async () => {
      try {
        const categoriesData = await getCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchBooks();
    fetchCategories();
  }, []);

  return (
      <div>
        <h1>Quản lý sách và thể loại sách</h1>
        <h2>Danh sách sách</h2>
        <BookList book={book} />

        <h2>Danh sách thể loại sách</h2>
        <CategoryList category={category} />
      </div>
  );
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  )
}

export default App;
