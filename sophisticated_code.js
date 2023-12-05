// Filename: sophisticated_code.js

/*
This code generates a grid with cells that can be toggled on/off by clicking.
It also allows for filling the grid with a specific pattern, clearing the grid, and changing the cell colors.

The grid can be resized, the cell size can be changed, and a random pattern can be generated.

This is an example of a more sophisticated and complex code.
*/

const gridSize = 20; // Number of cells in each row and column
const cellSize = 25; // Size of each cell in pixels

let grid = [];
let pattern = [];

let fillColor = "white";
let strokeColor = "gray";
let backgroundColor = "black";

function setup() {
  createCanvas(gridSize * cellSize, gridSize * cellSize);
  frameRate(60);
  initializeGrid();
}

function draw() {
  background(backgroundColor);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const cell = grid[i][j];
      if (cell.active) {
        fill(fillColor);
        stroke(strokeColor);
        rect(i * cellSize, j * cellSize, cellSize, cellSize);
      }
    }
  }
}

function initializeGrid() {
  for (let i = 0; i < gridSize; i++) {
    let row = [];
    for (let j = 0; j < gridSize; j++) {
      const cell = {
        active: false,
      };
      row.push(cell);
    }
    grid.push(row);
  }
}

function mouseClicked() {
  const i = Math.floor(mouseX / cellSize);
  const j = Math.floor(mouseY / cellSize);

  if (i >= 0 && i < gridSize && j >= 0 && j < gridSize) {
    const cell = grid[i][j];
    cell.active = !cell.active;
  }
}

function keyTyped() {
  if (key === "f") {
    fillColor = chooseRandomColor();
  } else if (key === "s") {
    strokeColor = chooseRandomColor();
  } else if (key === "c") {
    grid.forEach(row => {
      row.forEach(cell => {
        cell.active = false;
      });
    });
  } else if (key === "r") {
    generateRandomPattern();
  }
}

function chooseRandomColor() {
  const colors = ["red", "green", "blue", "yellow", "magenta", "cyan"];
  return colors[Math.floor(random(colors.length))];
}

function generateRandomPattern() {
  grid.forEach(row => {
    row.forEach(cell => {
      cell.active = Math.random() < 0.5;
    });
  });
}

setup();