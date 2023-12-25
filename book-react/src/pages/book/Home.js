import React from 'react';
import BookItem from '../../components/BookItem';
import styled from 'styled-components';

const StyledContainerDiv = styled.div`
  margin-top: 30px;
`;

const Home = () => {
  return (
    <StyledContainerDiv>
      <BookItem />
    </StyledContainerDiv>
  );
};

export default Home;
