import React from 'react'
import Item from "./Item";
import { Menu, SOCIAL, Contact } from "./Menus";

function ItemsContainer() {
  return (
    <div className='max-w-3xl mx-auto'>
     <div className="grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:px-8 px-10 py-16">
    <Item Links={Menu} title="COMPANY" />
    <Item Links={SOCIAL} title="SOCIAL" />
    <Item Links={Contact} title="COMPANY" />
    
  </div>
  </div>
  )
}

export default ItemsContainer