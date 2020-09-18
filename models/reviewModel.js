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

    // static async updateStatus(language, rank_id) {
    //     try {
    //         const response = await db.result(`UPDATE languages SET rank_id = $1 WHERE language =$2;`, [rank_id, language]);
    //         return response;
    //     } catch(error){
    //         console.log("Error:", error);
    //     }
    // }
}



module.exports = ReviewList;
