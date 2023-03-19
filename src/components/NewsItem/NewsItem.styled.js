import styled from 'styled-components';

export const NewsItemContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const NewsItemTitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const NewsItemText = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
  line-height: 1.4;
`;

export const NewsItemDate = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
`;

export const NewsItemLink = styled.a`
  font-size: 16px;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
