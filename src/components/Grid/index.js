import React, {useState, useEffect} from 'react'
import classNames from 'classnames'

import {createInitialGrid, recalculateGrid} from '../../utils/index'
import {TICK} from '../../config'

import css from './style.css'

const Grid = () => {
  const [grid, setGrid] = useState(createInitialGrid())

  useEffect(() => {
    setInterval(() => setGrid(recalculateGrid), TICK)
  }, [])

  return (
    <div className={css.wrapper}>
      <div className={css.grid}>
        {grid.map((row, rowIndex) => (
          <div
            className={css.row}
            key={`row-${rowIndex + 1}`}
          >{row.map((cell, cellIndex) => (
            <div
              className={classNames(css.cell, {[css.alive]: cell})}
              key={`cell-${cellIndex + 1}`}
            >&nbsp;
            </div>
          ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Grid
