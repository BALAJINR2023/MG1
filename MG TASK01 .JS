                                        //MONGODB//
/*Commands:
•	show dbs
•	use ---
•	show collections or show tables
•	clear----cls
•	insert---db.student.insertOne({name:"balaji", batch:"new"})
•	collection---db.createCollection("mentor")*/

//1.	Find all the information about each product
        db["TASK01"].find() 
        db.TASK01.find().(cmd)
        //Please select the particular collection to give the information of the each product.(MONGODB APP)
//2.	Find the product prices which are between 400 to 800
    	db.TASK01.find({product_price:{$gte:400, $lte:800}})
//3.	Find the product prices which are not between 400 to 600
        db.TASK01.find({ $or:[{product_price:{$lt: 400}}, {product_price:{ $gt: 600}}] })
        { $or:[{product_price:{$lt: 400}}, {product_price:{ $gt: 600}}] }
//4.	List the four products which are greater than 500 in price 
        db.TASK01.find({ product_price: { $gt: 500 } },{},{limit:4}) //–option method
        db.TASK01.find({ product_price: { $gt: 500 } }).limit(4)
        { product_price: { $gt: 500 } } //LIMIT shown in the option button.
//5.	Find the product name and product material of each products
    	db.TASK01.find({}, { product_name: 1, product_material: 1 })
//6.	Find the product with a row id of 10
        db.TASK01.find({id:"10"}) 
        db.TASK01.findOne({id:"10"})
        ({id:"10"})
//7.	Find only the product name and product material
        db.TASK01.find({}, { product_name: 1, product_material: 1, _id: 0 })//---1 indicates Boolean value true
//8.	Find all products which contain the value of soft in product material 
    	db.TASK01.find({ product_material: { $regex: /soft/i } })//---I indicates not inculed case sensitive
//9.	Find products which contain product color indigo and product price 492.00
    	//question product price is wrong
        db.TASK01.find({ $and: [ { product_color: "indigo" }, { product_price: 492 }] })
//10.	Delete the products which product price values are 28
        db.TASK01.deleteMany({ product_price: 28 })
