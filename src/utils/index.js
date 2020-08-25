// @flow
import {ROWS, COLUMNS, NEIGHBORS} from '../config'

type Grid = Array<Array<boolean>>

type CreateInitialGrid = () => Grid
export const createInitialGrid: CreateInitialGrid = () =>
  Array.from({length: ROWS})
    .map(
      () => Array.from({length: COLUMNS})
        .map(
          () => Boolean(Math.round(Math.random())),
        ),
    )

type CalculateLiveNeighbors = ({cellIndex: number, rowIndex: number, grid: Grid}) => number
const calculateLiveNeighbors: CalculateLiveNeighbors = ({cellIndex, rowIndex, grid}) => NEIGHBORS.map(
  ([x, y]) => grid[rowIndex + x] && grid[rowIndex + x][cellIndex + y],
).filter(Boolean).length

type RecalculateGrid = (grid: Grid) => Grid
export const recalculateGrid: RecalculateGrid = (grid) => grid.map((row, rowIndex) =>
  row.map((cell, cellIndex) => {
    const liveNeighbors = calculateLiveNeighbors({cellIndex, grid, rowIndex})

    return cell
      ? liveNeighbors <= 3 && liveNeighbors >= 2
      : liveNeighbors === 3
  }))
