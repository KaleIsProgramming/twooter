const Tweet = require("../models/tweet");

exports.getForYouPage = (req: any, res: any, next: any) => {
    Tweet.getForYouPage()
        .then((data: any) => {
            res.status(202).json({
                data
            })
        })
        .catch((err: any) => {
            console.log(err);
        });
}