require("dotenv").config();

require("../config/mongoos-setup");

const Phone = require("../models/phone-models");

const phoneList = [
  {
    brand: "Apple",
    name: "iPhone X",
    image: "http://ksassets.timeincuk.net/wp/uploads/sites/54/2017/09/iphone-x-front.png",
    specs: [
      "Unibrow Design",
      "Unlocks with your Face",
      "Tons of Screen Space"
    ]
  },
  {
    brand: "Google",
    name: "Pixel 2",
    image: "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/10/Note-8-Pixel-2-Samsung-Google-796x398.jpg",
    specs: [
      "Plastic Design",
      "Domino Design",
      "Ads For Days"
    ]
  }
];

Phone.create(phoneList)
.then((results) => {
  console.log(`${results.length} phones created`);
})
.catch((err) => {
  console.log("Save ERROR!!");
  console.log(err);
});
