// @flow
export type GridT = Array<Array<boolean>>
export type CreateInitialGrid = () => GridT
export type CalculateLiveNeighbors = ({cellIndex: number, rowIndex: number, grid: GridT}) => number
export type RecalculateGrid = (grid: GridT) => GridT
