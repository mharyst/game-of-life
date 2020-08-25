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
    it('should correctly recalculate grid', () => {
      const testGrid = [[false, false, false], [true, true, true], [false, false, false]]
      const result = recalculateGrid(testGrid)

      const expectedGrid = [[false, true, false], [false, true, false], [false, true, false]]

      expect(result).toStrictEqual(expectedGrid)
    })

    it('should not recalculate grid in a specific case', () => {
      const testGrid = [[false, true, false], [true, false, true], [false, true, false]]
      const result = recalculateGrid(testGrid)

      expect(result).toStrictEqual(testGrid)
    })
  })
})
