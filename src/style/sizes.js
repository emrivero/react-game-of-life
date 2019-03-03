/**
 * @function
 */
export const getCellSize = (numberCells, marginHeight) => Math.round((window.innerHeight * marginHeight) / numberCells);

/**
 * @function
 */
export const getBoardWidth = (numberCells, marginHeight) => Math.round(getCellSize(numberCells, marginHeight) + 1) * numberCells;
