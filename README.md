# Robot Wars
## Introduction
A NodeJS command line application which controls (virtual) robots on a grid and then spits out the final location of all robots to the console.

## Build
No run time dependencies, only dev dependencies.

## Run
To run the code:
CD to directory
Ensure input.txt has been populated
Run `node index.js`

## Tests
Run npm test or npm run testWatch

## Input
There is an input.txt file which gets parsed for the grid set up and some initial robot positions and commands.
The default content is:

`5 5`

`1 2 N`

`LMLMLMLMM`

`3 3 E`

`MMRMMRMRRM`

Where:

Line one is the grid dimensions (east west)

Line two is the first robot's start position and orientation (east west orientation)

Line three is the first robot's initial commands (L = rotate left, R = rotate R, M = move forward 1 space)

Lines two and three can be rotated as many times as desired

(Be gentle - graceful handling is on my to do list)

## Code structure
The code implements my interpretation of Object orientated JavaScript best practices. If anyone (ever) has a look through it and disagrees with my choices, then feel free to drop me a message and I'll share my thought process and rational
