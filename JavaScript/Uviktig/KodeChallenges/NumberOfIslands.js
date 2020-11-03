//Bruker DFS
function numIslands(grid) {
  let count = 0;

  
// Itererer gjennom matrisen
  for (let i = 0; i < grid.length; i++){
    for (let j = 0; j < grid[i].length; j++){
      if (grid[i][j] === "1"){
        /* Starter gjennomgåing av øya når starten av en øy blir funnet
        AKA kjører gjennom øya hvis indexen er land(1) og sjekker om sidene er land/vann
        */
        visitIsland(i, j, grid);
        // Etter at hele øya har blitt besøkt, øker count med 1.
        count++;
      }
    }
  }
  return count;
}

const visitIsland = (i, j, grid) => {
  //Markerer øya som besøkt
  grid[i][j] = "0";

  //Sjekker nabo-posisjoner og hvis det er land(1) skjører visitIsland funkjsonen på posisjonen.
  if (grid[i - 1] && grid[i - 1][j] === "1") visitIsland(i - 1, j, grid)
  if (grid[i + 1] && grid[i + 1][j] === "1") visitIsland(i + 1, j, grid)
  if (grid[i][j + 1] === "1") visitIsland(i, j + 1, grid);
  if (grid[i][j - 1] === "1") visitIsland(i, j - 1, grid);
}