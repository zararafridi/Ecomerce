import styled from "styled-components"
import {popularProducts} from '../pages/Data'
import { Productsitem } from "./Productsitem"


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`


function Product() {
  return (
    <Container>
        {popularProducts.map((item)=>(
            <Productsitem item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Product