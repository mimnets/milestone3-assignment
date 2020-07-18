// Feet to mile calculator

function feetToMile(feet){
    var mile = feet/5280;   // 1 mile equals to 5280 feet
    return mile;
  }
  
  var yourFeet = feetToMile(50000); // Function call with value as parameter and store into variable
  
  console.log(yourFeet);

// Wood Cubic feet calculator

  function woodCalculator(chair, table, bed){
    var chairCft = chair * 1; // Calculate chair 
    var tableCft = table * 3;
    var bedCft  = bed * 5;
    var totalCft = chairCft + tableCft + bedCft;
    return totalCft;
  }
  
  var yourCft = woodCalculator(5,3,2);
  
  console.log(yourCft);

// Brick calculator

function brickCalculator(floor){
    if(floor <= 10){
        var tenFloorBrick = floor * 15 * 1000;
        return tenFloorBrick;
        }
    else if(floor <= 20){
        var twentyFloorBrick = floor * 12 * 1000;
        return twentyFloorBrick;
    }
    else if (floor => 21) {
        var twentyOneFloorBrick = floor * 10 * 1000;
        return twentyOneFloorBrick;
    }
  }
  
  var totalBrick = brickCalculator(21);
  
  console.log(totalBrick);

  // Tiny friend name finder

  