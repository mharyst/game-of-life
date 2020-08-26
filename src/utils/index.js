// @flow
import {ROWS, COLUMNS} from '../config'
import type {GridT, CreateInitialGrid, CalculateLiveNeighbors, RecalculateGrid} from '../types'

const NEIGHBORS = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
]

export const createInitialGrid: CreateInitialGrid = () =>
  Array.from({length: ROWS})
    .map(
      () => Array.from({length: COLUMNS})
        .map(
          () => Boolean(Math.round(Math.random())),
        ),
    )

const calculateLiveNeighbors: CalculateLiveNeighbors = ({cellIndex, rowIndex, grid}) => NEIGHBORS.map(
  ([x, y]) => grid[rowIndex + x] && grid[rowIndex + x][cellIndex + y],
).filter(Boolean).length

export const recalculateGrid: RecalculateGrid = (grid) => grid.map((row, rowIndex) =>
  row.map((cell, cellIndex) => {
    const liveNeighbors = calculateLiveNeighbors({cellIndex, grid, rowIndex})

    return cell
      ? liveNeighbors <= 3 && liveNeighbors >= 2
      : liveNeighbors === 3
  }))
