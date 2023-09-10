import { categories } from '../pages/Data'
import styled from 'styled-components'
import Catagoryitems from './Catagoryitem'
import { mobile } from '../responsive'


const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({padding : "0px",flexDirection:"column"})}


`

function Catagories() {
  return (
    <Container>
        {categories.map(item=>(
            <Catagoryitems item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Catagories