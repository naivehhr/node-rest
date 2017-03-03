const mongoose = require('mongoose');




const db = mongoose.connect('mongodb://127.0.0.1:27017/demodb')
const ProductSchema = new mongoose.Schema({
	name: String,
	price: String,
});
const PersonModel = db.model('Product',ProductSchema);

const phone = new PersonModel({
	name: 'iphone 7',
	price: '7000'
})
phone.save()
