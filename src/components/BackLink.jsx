import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  background-color: #795e93;
  gap: 4px;
  padding: 8px 0;
  color: black;
  padding: 5px 10px;
  margin-bottom: 5px;

  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  :hover {
    color: #babdd2;
  }
`;

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};
