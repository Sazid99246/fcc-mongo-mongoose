require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://dbUser1:tSATRnSo21NpqmPB@cluster0.obsituy.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("database connected");
});

const personSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  favoriteFoods: {
    type: [String],
    required: true
  }
})

let Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  let person = new Person({
    name: "Sazid",
    age: 21,
    favoriteFoods: ["sandwitch", "burger"]
  });

  person.save((err, data) => {
    done(null, data);
  });
};

let arrayOfPeople = [
  { name: "Lazz", age: 17, favoriteFoods: ["kachhi", "ice-cream"] },
  { name: "Mukta", age: 50, favoriteFoods: ["kachhi", "ice-cream"] },
  { name: "Shofi", age: 60, favoriteFoods: ["kachhi", "ice-cream"] }
]

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => {
    done(null, data);
  })

};

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, (err, data) => {
    done(null, data);
  })
};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, (err, data) => {
    done(null, data);
  })
};

const findPersonById = (personId, done) => {
  Person.findById(personId, (err, data) => {
    done(null, data);
  })
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  Person.findById(personId, (err, data) => {
    data.favoriteFoods.push(foodToAdd);
    data.save((err, updatedData) => {
      if (err) return console.log(err);
      done(null, updatedData);
    })
  })
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  Person.findOneAndUpdate(
    { name: personName },
    { age: ageToSet },
    { new: true },
    (err, data) => {
      done(null, data);
    }
  );
};

const removeById = (personId, done) => {
  Person.findByIdAndUpdate(personId, (err, done) => {
    done(null, data);
  })
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
