const chessboard = document.querySelector("#chessboard");
const knight = document.querySelector("#knight_div");

function createChessBoard() {
  let black = false;
  for (let i = 0; i < 8; i++) {
    black = !black;
    for (let j = 0; j < 8; j++) {
      let newTile = document.createElement("div");
      if (black) {
        newTile.classList.add("black_tile");
        black = false;
      } else {
        newTile.classList.add("tile");
        black = true;
      }
      // newTile.addEventListener("mouseenter", tileHovered);
      newTile.addEventListener("click", tileClicked);
      newTile.id = j.toString() + "," + i.toString();
      chessboard.append(newTile);
    }
  }
}

// function tileHovered(e) {
//   console.log(e.target.id);
// }

createChessBoard();

/*
#########################KNIGHT STUFF###################
*/

const Vec2 = (x = 0, y = 0) => {
  function equalTo(compareVec2) {
    return x === compareVec2.x && y === compareVec2.y;
  }

  function isInBounds() {
    return x > -1 && x < 8 && y > -1 && y < 8;
  }

  function sum(addingVec2) {
    return Vec2(x + addingVec2.x, y + addingVec2.y);
  }

  function copy() {
    return Vec2(x, y);
  }

  function getPossibleKnightMoves() {
    let moves = [
      sum(Vec2(-1, 2)),
      sum(Vec2(2, -1)),
      sum(Vec2(2, 1)),
      sum(Vec2(1, -2)),
      sum(Vec2(-1, -2)),
      sum(Vec2(-2, 1)),
      sum(Vec2(-2, -1)),
      sum(Vec2(1, 2)),
    ];
    let moveList = [];
    moves.forEach((move) => {
      if (move.isInBounds()) {
        moveList.push(move);
      }
    });
    return moveList;
  }
  return { x, y, equalTo, isInBounds, sum, getPossibleKnightMoves, copy };
};

let successList = [];

function findFastestMove(start, end) {
  successList = [];
  moveCheck([start], end);
  let shortest = null;
  let shortLength = 10;
  successList.forEach((moveList) => {
    if (moveList.length < shortLength) {
      shortLength = moveList.length;
      shortest = moveList;
    }
  });
  return shortest;
}

function moveCheck(moveList, targetPosition) {
  if (moveList.length > 6) {
    return;
  }
  let curPosition = moveList[moveList.length - 1];
  let possibleMoves = curPosition.getPossibleKnightMoves();
  possibleMoves.forEach((move) => {
    if (move.equalTo(targetPosition)) {
      // console.log(moveList);
      successList.push([...moveList, targetPosition]);
      return;
    }
    moveCheck([...moveList, move], targetPosition);
  });
}

//###########################################################

function stringToVec2(str) {
  let values = str.split(",");
  return Vec2(Number(values[0]), Number(values[1]));
}

let knightPosition = Vec2(0, 0);
const TILE_SIZE = 75;

let curPath;

function tileClicked(e) {
  curPath = findFastestMove(knightPosition, stringToVec2(e.target.id));
  console.log(curPath);
  curPath.shift();
  console.log(curPath);
  moveToNextPointInPath();
}

function moveToNextPointInPath() {
  if (curPath.length === 0) {
    return;
  }
  let nextPosition = curPath.shift();
  knight.style.transform =
    "translate(" +
    nextPosition.x * TILE_SIZE.toString() +
    "px, " +
    nextPosition.y * TILE_SIZE.toString() +
    "px)";
  knightPosition = nextPosition;
  setTimeout(moveToNextPointInPath, 500);
}
