const { static } = require('express');
const { query } = require('./con');
const db = require('./con');

class ReviewList {
    constructor (name, category, stars) {
        this.name = name;
        this.category = category;
        this.stars = stars;
    
    }

    static async getAll() {
        try {
            const response = await db.any(`SELECT * FROM restaurant;`);
            return response;
        } catch(error) {
            return error.message;
        }
    }

    static async getOne(slug){
        try{
            const response = await db.one(`SELECT * FROM restaurant WHERE slug = '${slug}';`);
            return response;

        } catch(error){
            console.error('Error: ', error);
            return error;
        }
    }

    static async reviewUpdate(review, restaurant_id) {
        try {
            const response = await db.result(`UPDATE reviews INTO review;`, [review, restaurant_id]);
            return response;
        } catch(error){
            console.log("Error:", error);
        }
    }
}



module.exports = ReviewList;
