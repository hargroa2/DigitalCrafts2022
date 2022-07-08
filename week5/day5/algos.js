//Class Photos Algorithm

const classPhotos = (redShirtHeights, blueShirtHeights) => {
  //sort the arrays
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);

  //grab the shortest person from each array and store that red heights be less than blue heights in redFrontRow
  redFrontRow = redShirtHeights[0] < blueShirtHeights[0];

  //iterate over the arrays and check to see if the redFrontRow criteria is met and if their height is greater than or equal to blue heights
  for (let i = 0; i < redShirtHeights.length; i++) {
    const redHeight = redShirtHeights[i];
    const blueHeight = blueShirtHeights[i];

    //if the front row's shortest heights are less than the blue heights, but are greater than or equal to the blue heights, return false
    if (redFrontRow && redHeight >= blueHeight) {
      console.log(false);
      //   return false;
    }
    //if the shortest red is greater than the shortest blue, but blue height is greater than or equal to red height, return false
    if (!redFrontRow && blueHeight >= redHeight) {
      console.log(true);
      //   return false;
    }
  }
  //otherwise, return true
  console.log(true);
  //   return true;

  //   console.log(redShirtHeights, blueShirtHeights);
};

classPhotos([5, 8, 1, 3, 4], [6, 9, 2, 4, 5]);
