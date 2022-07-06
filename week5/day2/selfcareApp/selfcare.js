const feelActivity = document.getElementById("feelingActivity");

const exploreFeelings = async (emote) => {
  //adventurous fetch
  const urlAdv = "http://www.boredapi.com/api/activity?type=recreational";
  const activityData = await fetch(urlAdv);
  const json = await activityData.json();

  //relaxed fetch
  const urlRelax = "http://www.boredapi.com/api/activity?type=relaxation";
  const relaxData = await fetch(urlRelax);
  const json2 = await relaxData.json();

  //social fetch
  const urlSocial = "http://www.boredapi.com/api/activity?type=social";
  const socialData = await fetch(urlSocial);
  const json3 = await socialData.json();

  //charitable fetch
  const urlCharity = "http://www.boredapi.com/api/activity?type=charity";
  const charityData = await fetch(urlCharity);
  const json4 = await charityData.json();

  //diy fetch
  const urlInspire = "http://www.boredapi.com/api/activity?type=diy";
  const inspireData = await fetch(urlInspire);
  const json5 = await inspireData.json();

  const priceBox = document.getElementById("price");
  const friendBox = document.getElementById("friend");

  //select choice
  if (emote === "adventurous") {
    //big box
    const advAct = document.createElement("p");
    advAct.innerText = json.activity;
    actContainer.append(advAct);

    //price box
    const advPrice = document.createElement("p");
    advPrice.innerText = "$" + json.price;
    priceBox.append(advPrice);

    //friends box
    const advFriends = document.createElement("p");
    advFriends.innerText = json.participants + " " + "friend(s)";
    friendBox.append(advFriends);
  } else if (emote === "relaxed") {
    //activity
    const relAct = document.createElement("p");
    relAct.innerText = json2.activity;
    actContainer.append(relAct);

    //price box
    const relPrice = document.createElement("p");
    relPrice.innerText = "$" + json2.price;
    priceBox.append(relPrice);

    //friends box
    const relFriends = document.createElement("p");
    relFriends.innerText = json2.participants + " " + "friend(s)";
    friendBox.append(relFriends);
  } else if (emote === "social") {
    //activity
    const socAct = document.createElement("p");
    socAct.innerText = json3.activity;
    actContainer.append(socAct);

    //price
    const socPrice = document.createElement("p");
    socPrice.innerText = "$" + json3.price;
    priceBox.append(socPrice);

    //friends
    const socFriends = document.createElement("p");
    socFriends.innerText = json3.participants + " " + "friend(s)";
    friendBox.append(socFriends);
  } else if (emote === "charitable") {
    //activity
    const charAct = document.createElement("p");
    charAct.innerText = json4.activity;
    actContainer.append(charAct);

    //price
    const charPrice = document.createElement("p");
    charPrice.innerText = "$" + json4.price;
    priceBox.append(charPrice);

    //friends
    const charFriends = document.createElement("p");
    charFriends.innerText = json4.participants + " " + "friend(s)";
    friendBox.append(charFriends);
  } else {
    const inspireAct = document.createElement("p");
    inspireAct.innerText = json5.activity;
    actContainer.append(inspireAct);

    //price
    const inspirePrice = document.createElement("p");
    inspirePrice.innerText = "$" + json5.price;
    priceBox.append(inspirePrice);

    //friends
    const inspireFriends = document.createElement("p");
    inspireFriends.innerText = json5.participants + " " + "friend(s)";
    friendBox.append(inspireFriends);
  }
};

feelActivity.onchange = (e) => exploreFeelings(e.target.value);
