// @flow
import React, {useState, useEffect} from 'react'
import classNames from 'classnames'

import {createInitialGrid, recalculateGrid} from '../../utils/'
import {TICK} from '../../config'
import type {GridT} from '../../types'

import css from './style.css'

const Grid = () => {
  const [grid, setGrid] = useState<GridT>(createInitialGrid)

  useEffect(() => {
    const intervalId = setInterval(() => setGrid(recalculateGrid), TICK)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className={css.wrapper}>
      <div className={css.grid}>
        {grid.map((row, rowIndex) => (
          <div
            className={css.row}
            key={rowIndex}
          >{row.map((cell, cellIndex) => (
            <div
              className={classNames(css.cell, {[css.alive]: cell})}
              key={cellIndex}
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
