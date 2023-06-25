const db = require('../util/database');



module.exports = class Tweet {
    id: string;
    user: string;
    content: string;
    
    constructor(id: string, user: string, content: string) {
        this.id = id;
        this.user = user;
        this.content = content;
    }

    static getForYouPage() {
        return db.execute("SELECT * FROM tweets");
    }

}