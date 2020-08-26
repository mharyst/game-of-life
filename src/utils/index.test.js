import {createInitialGrid, recalculateGrid} from './index'
import {ROWS, COLUMNS} from '../config'

describe('utils', () => {
  describe('createInitialGrid', () => {
    it('should contain specific length', () => {
      const result = createInitialGrid()

      expect(result.length).toBe(ROWS)
      expect(result[0].length).toBe(COLUMNS)
    })
  })

  describe('recalculateGrid', () => {
    it('should correctly recalculate grid when any live cell has fewer than two live neighbors and dies', () => {
      const testGrid = [[false, false, false], [false, true, false], [false, false, false]]
      const result = recalculateGrid(testGrid)

      const expectedGrid = [[false, false, false], [false, false, false], [false, false, false]]

      expect(result).toStrictEqual(expectedGrid)
    })

    it('should correctly recalculate grid when any live cell has two or three live neighbors and lives', () => {
      const testGrid = [[true, true, true], [false, true, false], [false, false, false]]
      const result = recalculateGrid(testGrid)

      const expectedGrid = [[true, true, true], [true, true, true], [false, false, false]]

      expect(result).toStrictEqual(expectedGrid)
    })

    it('should correctly recalculate grid when any live cell has more than three live neighbors and dies', () => {
      const testGrid = [[true, true, true], [false, true, false], [true, false, false]]
      const result = recalculateGrid(testGrid)

      const expectedGrid = [[true, true, true], [false, false, true], [false, false, false]]

      expect(result).toStrictEqual(expectedGrid)
    })

    it('should correctly recalculate grid when dead cell has exactly three live neighbors and becomes a live cell', () => {
      const testGrid = [[false, true, true], [false, true, false], [false, false, false]]
      const result = recalculateGrid(testGrid)

      const expectedGrid = [[false, true, true], [false, true, true], [false, false, false]]

      expect(result).toStrictEqual(expectedGrid)
    })

    it('should not recalculate grid in a specific case', () => {
      const testGrid = [[false, true, false], [true, false, true], [false, true, false]]
      const result = recalculateGrid(testGrid)

      expect(result).toStrictEqual(testGrid)
    })
  })
})
