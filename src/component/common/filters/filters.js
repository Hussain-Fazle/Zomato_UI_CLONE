import React from 'react'
import "./filters.css"
import FilterItem from './filteritem/filteritem'

const Filter = ({filterList}) => {
  return (
    <div className='filters'>
      {filterList && filterList.map((filter)=>{
        return <FilterItem filter={filter} key={filter.id} />
      })}
    </div>
  )
}

export default Filter
