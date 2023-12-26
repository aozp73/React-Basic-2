import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledContainerDiv = styled.div`
  margin-top: 30px;
`;

const Detail = (props) => {
  const paramId = useParams().id;
  const [book, setBook] = useState({
    id: '',
    title: '',
    author: '',
  });

  useEffect(() => {
    fetch('http://localhost:8080/book/' + paramId)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBook(data);
      })
      .catch((error) => {
        alert('올바르지 않은 요청입니다.');
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <StyledContainerDiv>
      <h1>상세보기</h1>
      <hr />
      <h3>저자: {book.author}</h3>
      <h3>제목: {book.title}</h3>
    </StyledContainerDiv>
  );
};

export default Detail;
