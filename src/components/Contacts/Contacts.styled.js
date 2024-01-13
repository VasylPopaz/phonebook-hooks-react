import styled from 'styled-components';

export const ContactsList = styled.ul`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ContactsItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 4px;
  border-radius: 5px;
  border-bottom: 1px solid black;
`;

export const ContactsDescr = styled.p`
  font-weight: 600;
  font-size: 18px;
`;
