import React from 'react'
import { CategoryProductRow } from './CategoryProductRow'
import '../styles/ProductTable.css'
function ProductTable() {
  return (
    <div className='product-table'>
        <div className='product-table_header'>
            <span>
                Name
            </span>
            <span>
                Price
            </span>
        </div>
        <div className='product-table_category'>
            <CategoryProductRow/>
            <CategoryProductRow/>
        </div>
    </div>
  )
}

export {ProductTable} 