const exploreButton = document.getElementById("explore");

const exploreFeelings = async () => {
  const url = "http://www.boredapi.com/api/activity?type=recreational";

  const activityData = await fetch(url);
  const json = await activityData.json();
  console.log(json);
};

exploreButton.onclick = () => exploreFeelings();
