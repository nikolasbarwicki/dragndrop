import React from 'react';
import styled from 'styled-components';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';

const InnerWrapper = styled.ul`
  background-color: #f5f6f9;
  padding: 2rem;
  margin: 2rem 0;
  border-radius: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem;
`;

const ListItem = styled.li`
  background-color: #dee1eb;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  font-weight: 600;
  list-style: none;
  margin-bottom: 1rem;
`;

const ButtonIcon = styled.button`
  width: 4rem;
  height: 4rem;
  outline: none;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  color: white;
  background-color: #2e2545;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;

  :hover {
    color: #2e2545;
    background-color: #dee1eb;
  }
`;

const RecipeItem = ({
  id,
  createdAt,
  name,
  ingredients,
  history,
  getRecipe,
  deleteRecipe,
  setAlert,
}) => {
  return (
    <div key={id} style={{ marginBottom: '4rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <h3>{name}, potrzebne składniki</h3>
          <span>
            {`Data dodania:
              ${format(new Date(createdAt), 'iiii, dd LLLL yyyy', {
                locale: pl,
              })}`}
          </span>
        </div>
        <div style={{ display: 'flex' }}>
          <ButtonIcon onClick={() => getRecipe(id, history)}>
            <FiEdit />
          </ButtonIcon>
          <ButtonIcon
            onClick={() => {
              deleteRecipe(id);
              setAlert('Przepis usunięty', 'danger');
            }}
          >
            <FiTrash2 />
          </ButtonIcon>
        </div>
      </div>
      <InnerWrapper>
        {ingredients.map((el) => (
          <ListItem key={el.id}>{el.content}</ListItem>
        ))}
      </InnerWrapper>
    </div>
  );
};

export default RecipeItem;
