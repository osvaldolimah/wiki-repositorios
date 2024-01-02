import React from 'react'
import { ItemContainer } from './style';

function ItemRepo() {
  return (
    <ItemContainer>
      <h3>Pablo</h3>
      <p>dio/pablo</p>
      <a href="#">Ver Repositorio</a> <br />
      <a href="#" className='remover'> Remover </a>
      <hr />
    </ItemContainer>
  )
}

export default ItemRepo;