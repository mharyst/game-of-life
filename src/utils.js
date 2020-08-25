import {ROWS, COLUMNS, NEIGHBORS} from './config'

export const createInitialGrid = () =>
  Array.from({length: ROWS})
    .map(
      () => Array.from({length: COLUMNS})
        .map(
          () => Boolean(Math.round(Math.random())),
        ),
    )

const calculateLiveNeighbors = ({cellIndex, rowIndex, grid}) => NEIGHBORS.map(
  ([x, y]) => grid[rowIndex + x] && grid[rowIndex + x][cellIndex + y],
).filter(Boolean).length

export const recalculateGrid = (grid) => grid.map((row, rowIndex) => row.map((cell, cellIndex) => {
  const liveNeighbors = calculateLiveNeighbors({cellIndex, grid, rowIndex})

  return cell
    ? liveNeighbors <= 3 && liveNeighbors >= 2
    : liveNeighbors === 3
}))
