import React, { useState, useEffect } from 'react'
import classes from './FilterMeals.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

/*
  根据关键字过滤
*/
export default function FilterMeals(props) {
  const [keyword, setKeyword] = useState('')
  const changeInputHandler = (e) => {
    setKeyword(e.target.value.trim())
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      props.onFilt(keyword)
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [keyword])
  return (
    <div className={classes.FilterMeals}>
      <div className={classes.InputOuter}>
        <input
          type="text"
          placeholder='请输入搜索关键字'
          className={classes.SearchInput}
          value={keyword}
          onChange={(e) => { changeInputHandler(e) }}
        />
        <FontAwesomeIcon icon={faSearch} className={classes.SearchIcon} />
      </div>
    </div>
  )
}
