import React, { useEffect, useState } from 'react';
import BookItem from '../../components/BookItem';
import styled from 'styled-components';

const StyledContainerDiv = styled.div`
  margin-top: 30px;
`;

const Home = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/book')
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <StyledContainerDiv>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </StyledContainerDiv>
  );
};

export default Home;
