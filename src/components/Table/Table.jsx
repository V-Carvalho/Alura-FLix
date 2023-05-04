import styled from "styled-components";
import Button from "../Button/Button";

const ContainerTable = styled.div`
  display: flex;
  margin-bottom: 30px;
  flex-direction: row;
`;

const StyledTable = styled.table`
  width: 100%;
  display: flex;
  border: 4px solid #2a7ae4;
`;

const TableBody = styled.tbody`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TableHeader = styled.tr`
  width: 100%;
  height: 50px;
  display: flex;
`;

const TableRow = styled.tr`
  width: 100%;
  display: flex;
`;

const TableCell = styled.td`
  width: 100%;
  padding: 5px;
  display: flex;
  color: #f5f5f5;
  align-items: center;
  flex: ${(props) => props.flex};
  font-weight: ${(props) => props.fontWeight};
  justify-content: ${(props) => props.justifyContent};
  border-right: 4px solid ${(props) => props.borderColor};
  border-bottom: 4px solid ${(props) => props.borderColor};

  &:last-child {
    border-right: none;
  }
`;

const Table = ({ listCategories, deleteCategory, tableReturn }) => {
  const fixedCategory = ["ALBqqolLLJDsDPOLGBUU", "KkSXx04Xojum1bymfwHf", "PVVJfQRAeRC5wEt5ZOdd"];

  return (
    <ContainerTable>
      <StyledTable>
        <TableBody>
          <TableHeader>
            <TableCell
              flex={2}
              fontWeight="400"
              justifyContent="flex-start"
              borderColor="#2a7ae4"
            >
              Nome
            </TableCell>
            <TableCell
              flex={3}
              fontWeight="400"
              justifyContent="flex-start"
              borderColor="#2a7ae4"
            >
              Descrição
            </TableCell>
            <TableCell
              flex={1}
              fontWeight="400"
              justifyContent="center"
              borderColor="#2a7ae4"
            >
              Editar
            </TableCell>
            <TableCell
              flex={1}
              fontWeight="400"
              justifyContent="center"
              borderColor="#2a7ae4"
            >
              Remover
            </TableCell>
          </TableHeader>

          {listCategories.map((category) => (
            <TableRow key={category.id}>
              <TableCell
                flex={2}
                fontWeight="300"
                justifyContent="flex-start"
                borderColor="#000000"
              >
                {category.categoryName}
              </TableCell>
              <TableCell
                flex={3}
                fontWeight="300"
                justifyContent="flex-start"
                borderColor="#000000"
              >
                {category.categoryDescription}
              </TableCell>
              
              <TableCell
                flex={1}
                fontWeight="300"
                justifyContent="center"
                borderColor="#000000"
              >
                <Button
                  height="50px"
                  width="100%"
                  title="Editar"
                  titleColor="#F5F5F5"
                  borderColor="transparent"
                  backgroundColor="transparent"
                  action={(event) => {
                    event.preventDefault();
                    if (category.id != fixedCategory[0] && category.id != fixedCategory[1] && category.id != fixedCategory[2]) {
                      tableReturn({
                        categoryId: category.id, 
                        categoryName: category.categoryName, 
                        categoryDescription: category.categoryDescription, 
                        categoryColor: category.categoryColor,
                      });
                    }                                           
                  }}
                />
              </TableCell>
              <TableCell
                flex={1}
                justifyCcontent="center"
                fontWeight="300"
                borderColor="#000000"
              >
                <Button
                  height="50px"
                  width="100%"
                  title="Remover"
                  titleColor="#F5F5F5"
                  borderColor="transparent"
                  backgroundColor="transparent"
                  action={(event) => {
                    event.preventDefault();
                    if (category.id != fixedCategory[0] && category.id != fixedCategory[1] && category.id != fixedCategory[2]) {
                      deleteCategory(category.id);
                    }                    
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </ContainerTable>
  );
};

export default Table;
