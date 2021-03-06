// 1.2 | Insert our first users in users collection

db.users.insertOne({
    "firstName": "John",
    "lastName": "Smith",
    "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
    "address": {
      "streetAddress": "21 2nd Street",
      "city": "New York",
      "state": "NY",
      "postalCode": "10021"
    }
  })
    "acknowledged": true,
    "insertedId": ObjectId("5a019b2777344084fc764a06")
    // ------------------------------------------------
    // PASTE 3 USER INSERT QUERIES HERE
    db.users.insertMany([{
        "firstName": "Alvaro",
        "lastName": "Lendínez",
        "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
        "address": {
          "streetAddress": "21 2nd Street",
          "city": "Boston",
          "state": "BO",
          "postalCode": "10028"
        }
      },
      {
        "firstName": "Virginia",
        "lastName": "Smith",
        "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
        "address": {
          "streetAddress": "19 street",
          "city": "Harlem",
          "state": "NY",
          "postalCode": "10087"
        }
      }
    ]) {
      "acknowledged": true,
      "insertedIds": [
        ObjectId("5a01a05b77344084fc764a08"),
        ObjectId("5a01a05b77344084fc764a09")
      ]
    }


    // 1.3 | Insert our first products in products collection

    db.products.insertOne({
      "name": "Water Bottle",
      "description": "High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
      "category": "Kitchen",
      "price": 23.0

    }) {
      "acknowledged": true,
      "insertedId": ObjectId("5a019bd277344084fc764a07")
    }
    // ------------------------------------------------------
    // PASTE 3 PRODUCT INSERT QUERIES HERE

    db.products.insertMany([{
        "name": "cafe",
        "description": "cafe de colombia",
        "category": "Kitchen",
        "price": 7.0

      },
      {
        "name": "cocacola",
        "description": "refreshment",
        "category": "Kitchen",
        "price": 1.0

      }
    ]) {
      "acknowledged": true,
      "insertedIds": [
        ObjectId("5a01a29d77344084fc764a0a"),
        ObjectId("5a01a29d77344084fc764a0b")
      ]
    }


    // 1.4 | Getting Started with queries
    // ----------------------------------
    // PASTE SHOPPING CART QUERY HERE

db.users.updateOne(
  {"firstName": "John"},
  {$push: {"shoppingCarts": {$each: [ObjectId("5a01a29d77344084fc764a0a"),
  ObjectId("5a01a29d77344084fc764a0b")]}}}
)



    // PASTE LIST PRODUCTS QUERY HERE
    db.products.find().pretty()

    // PASTE CATEGORY PRODUCTS QUERY HERE
    db.products.find({category: "Kitchen"})

    // PASTE DELETE PRODUCT QUERY HERE
    db.products.deleteOne({name: "Water Bottle"})

    // PASTE REVIEW QUERY HERE
    db.products.updateOne(
      {name: "cocacola"},
      {$push: {"reviews": [
    {
      "name": "Shannon",
      "comment": "This is so warm and comfortable.",
      "stars": 2,
      "date": "2016-11-10T18:28:09.369Z"
    }
  ]}}
    )
