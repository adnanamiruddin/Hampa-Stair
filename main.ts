// TODO: Change this function to make all the tests pass
export function stair(num: number): string[][] {
  // We will be using a 2D array to store the result
  const result: string[][] = [];

  // Because we will be using a for loop, we need to make sure that the input is a positive number
  if (num <= 0) {
    return result;
  }

  // Generate total lines
  for (let i = num; i > 0; i--) {
    // Default value for each line is an array of empty strings
    const row: string[] = new Array(num).fill(" ");

    // Nested loop to generate the rows
    // Replace the empty strings with star if the index is less than the current line number
    for (let j = num - i; j < num; j++) {
      row[j] = "*";
    }

    // Push the line to the result array
    result.push(row);
  }

  return result;
}
