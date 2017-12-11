const express = require("express");

const Phone = require("../models/phone-models");

const router = express.Router();



router.get("/phones", (req, res, next) => {
  Phone
  .find()
  .limit(25)
  .exec()
  .then((phoneResults) => {
    // respond with the QUERY RESULTS in the JSON format
    res.status(200).json(phoneResults);
  })
  .catch((err) => {
    console.log("GET/Phones ERROR!!");
    console.log(err);

    // respond with an ERROR MESSAGE in the JSON format
    res.status(500).json({ error: "Phone list database error!" });
  });
}); // GET /phones



router.post("/phones", (req, res, next) => {
  const thePhone = new Phone({
    brand: req.body.brand,
    name: req.body.name,
    image: req.body.image,
    specs: req.body.specs
  });

  thePhone.save()
  .then(() => {
    res.status(200).json(thePhone);
  })
  .catch((err) => {
    console.log("POST/Phones ERROR!!");
    console.log(err);

    // 400 status code if validation error
    if(err.errors) {
      res.status(400).json(err.errors);
    }
    else {
      res.status(500).json({error: "Phone save database error!"});
    }
  });
}); // POST /phones



router.get("/phones/:id", (req, res, next) => {
  if (req.user === undefined) {
    res.status(400).json({ error: "Not logged in" });
    return;
  }
  Phone.findById(req.params.id)
  .then((phoneFromDb) => {
    if (phoneFromDb === null) {
      // respond with an ERROR MESSAGE in the json format
      res.status(404).json({ error: "Phone not found" });
    }
    else{
      // resond with the QUERY RESULT in the json format
      res.status(200).json(phoneFromDb);
    }
  })
  .catch((err) => {
    console.log("GET/Phones/:id ERROR!!");
    console.log(err);

    // respond with an ERROR MESSAGE in the json format
    res.status(500).json({ error: "Phone details database error!"});
  });
}); // GET /phones/:id



router.delete("/phones/:id", (req, res, next) => {
  if (req.user === undefined) {
    res.status(400).json({ error: "Not logged in" });
    return;
  }
  Phone.findByIdAndRemove(req.params.id)
  .then((phoneFromDb) => {
    if (phoneFromDb === null) {
      // respond with an ERROR MESSAGE in the json format
      res.status(404).json({ error: "Phone not found" });
    }
    else {
      // resond with the QUERY RESULT in the json format
      res.status(200).json(phoneFromDb);
    }
  })
  .catch((err) => {
    console.log("GET/Phones/:id ERROR!!");
    console.log(err);

    // respond with an ERROR MESSAGE in the json format
    res.status(500).json({ error: "Phone delete database error!" });
  });
}); // DELETE /phones/:id



router.put("/phones/:id", (req, res, next) => {
  Phone.findById(req.params.id)
  .then((phoneFromDb) => {
    if (phoneFromDb === null) {
      // respond with an ERROR MESSAGE in the json format
      res.status(404).json({ error: "Phone not found" });
      return;
    }
    phoneFromDb.set({
      brand: req.body.brand,
      name: req.body.name,
      image: req.body.image,
      specs: req.body.specs
    });
    return phoneFromDb.save();
  })
  .then((phoneFromDb) => {
    // resond with the QUERY RESULT in the json format
    res.status(200).json(phoneFromDb);
  })
  .catch((err) => {
    console.log("PUT/Phones/:id ERROR!!");
    console.log(err);

    // 400 status code if validation error
    if (err.errors) {
      // respond with an VALIDATION ERROR in the json format
      res.status(400).json(err.errors);
    }
    else {
      // respond with an ERROR MESSAGE in the json format
      res.status(500).json({ error: "Phone update database error!" });
    }
  });
}); // PUT /phones/:id


module.exports = router;
