import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

const StyledContainerDiv = styled.div`
  margin-top: 30px;
`;

const UpdateForm = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [book, setBook] = useState({
    title: state.title,
    author: state.author,
  });

  const changeValue = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const submitBook = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/book/' + state.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(book),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return null;
        }
      })
      .then((data) => {
        if (data !== null) {
          navigate('/book/' + state.id);
        } else {
          alert('책 등록에 실패하였습니다.');
        }
      })
      .catch((error) => {
        alert('올바르지 않은 요청입니다.');
        console.error('Error fetching data:', error);
      });
  };

  return (
    <StyledContainerDiv>
      <h1>수정하기</h1>
      <hr />
      <Form onSubmit={submitBook}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            onChange={changeValue}
            name="title"
            value={book.title}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Author"
            onChange={changeValue}
            name="author"
            value={book.author}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </StyledContainerDiv>
  );
};

export default UpdateForm;
