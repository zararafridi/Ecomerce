import Styled from "styled-components";

const Container = Styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display:flex;
    align-items: center;
    justify-content:center;
    font-size: 14px;
    font-weight: 500;
    width:200
 `;

function Announcement() {
  return (
    <Container>
      <Container>Super Deal! Free shipping on Order Over $50</Container>
    </Container>
  );
}

export default Announcement;
