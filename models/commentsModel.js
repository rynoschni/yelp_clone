const { static } = require('express');
const { query } = require('./con');
const db = require('./con');

class CommentList {
    constructor (id, name, comment, user_id, post_id) {
        this.id = id;
        this.name = name;
        this.comment = comment;
        this.user_id = user_id;
        this.post_id = post_id;
    }

    static async getAll() {
        try {
            const response = await db.any(`SELECT * FROM comments;`);
            return response;
        } catch(error) {
            return error.message;
        }
    }

    static async getOne(slug){
        try{
            const response = await db.one(`SELECT * FROM comments WHERE slug = '${slug}';`);
            return response;

        } catch(error){
            console.error('Error: ', error);
            return error;
        }
    }

    // static async addReview(title, review, stars, restaurant_id) {
    //     try {
    //         const response = await db.result(`INSERT INTO reviews (title, review, stars, reviewer_id, restaurant_id) VALUES ($1, $2, $3, $4, $5);`, [title, review, stars, 1, restaurant_id]);
    //         return response;
    //     } catch(error){
    //         console.log("Error:", error);
    //     }
    // }
}



module.exports = CommentList;
