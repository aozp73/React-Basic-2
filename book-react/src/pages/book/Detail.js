import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledContainerDiv = styled.div`
  margin-top: 30px;
`;

const Detail = () => {
  const paramId = useParams().id;
  const navigate = useNavigate();

  const [book, setBook] = useState({
    id: '',
    title: '',
    author: '',
  });

  useEffect(() => {
    fetch('http://localhost:8080/book/' + paramId)
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
      })
      .catch((error) => {
        alert('올바르지 않은 요청입니다.');
        console.error('Error fetching data:', error);
      });
  }, []);

  const deleteBook = () => {
    fetch('http://localhost:8080/book/' + paramId, {
      method: 'DELETE',
    })
      .then((res) => res.text())
      .then((data) => {
        if (data === 'ok') {
          navigate('/');
        } else {
          alert('삭제 실패');
        }
      })
      .catch((error) => {
        alert('잘못된 요청입니다.');
        console.error('Error fetching data:', error);
      });
  };

  const updateBook = () => {
    navigate('/updateForm/' + paramId, { state: book });
  };

  return (
    <StyledContainerDiv>
      <h1>상세보기</h1>
      <Button variant="warning" onClick={updateBook}>
        수정
      </Button>{' '}
      <Button variant="danger" onClick={deleteBook}>
        삭제
      </Button>
      <hr />
      <h3>저자: {book.author}</h3>
      <h3>제목: {book.title}</h3>
    </StyledContainerDiv>
  );
};

export default Detail;
