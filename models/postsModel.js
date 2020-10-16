const { static } = require('express');
const { query } = require('./con');
const db = require('./con');

class BlogList {
    constructor (name, date, entry, title, slug, id) {
        this.name = name;
        this.date = date;
        this.entry = entry;
        this.title = title;
        this.slug = slug;
        this.id = id;
    
    }

    static async getAll() {
        try {
            const response = await db.any(`SELECT * FROM blog_entry;`);
            return response;
        } catch(error) {
            return error.message;
        }
    }

    static async getOne(slug){
        try{
            const response = await db.one(`SELECT * FROM blog_entry WHERE slug = '${slug}';`);
            return response;

        } catch(error){
            console.error('Error: ', error);
            return error;
        }
    }

    static async addEntry(title, entry) {
        try {
            const response = await db.result(`INSERT INTO blog_entry (title, entry) VALUES ($1, $2);`, [title, entry]);
            return response;
        } catch(error){
            console.log("Error:", error);
        }
    }
}



module.exports = BlogList;
