/**
 * @function
 */
export const cellSize = 20;

/**
 * @function
 */
export const getBoardWidth = (numberCols) => Math.round(cellSize + 1) * numberCols;

/**
 * @function
 */
export const getBoardHeight = (numberRows) => Math.round(cellSize + 1) * numberRows;
