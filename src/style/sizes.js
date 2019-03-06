/**
 * @function
 */
export const cellSize = (numberRows, numberCols) => 18;

/**
 * @function
 */
export const getBoardWidth = (numberCols, numberRows) => Math.round(cellSize(numberRows, numberCols) + 1) * numberCols;

/**
 * @function
 */
export const getBoardHeight = (numberRows, numberCols) => Math.round(cellSize(numberRows, numberCols) + 1) * numberRows;
