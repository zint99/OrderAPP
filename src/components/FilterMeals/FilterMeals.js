import React from 'react'
import classes from './FilterMeals.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

/*
  根据关键字过滤
*/
export default function FilterMeals(props) {
  return (
    <div className={classes.FilterMeals}>
      <div className={classes.InputOuter}>
        <input
          type="text"
          placeholder='请输入搜索关键字'
          className={classes.SearchInput}
          onChange={(e) => { props.onFilt(e.target.value.trim()) }}
        />
        <FontAwesomeIcon icon={faSearch} className={classes.SearchIcon} />
      </div>
    </div>
  )
}
