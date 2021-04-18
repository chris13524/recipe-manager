import domino from "domino";
import knex from "../../lib/knex";
import { User } from "../../lib/user";
import { NextApiRequest, NextApiResponse } from "next";
import sg from "@sendgrid/mail";

const Cron = async (req: NextApiRequest, res: NextApiResponse) => {
    // get all of our users in our database
    const users = await (await knex())<User>("users");

    // send each user their daily content
    for (const user of users) {
        // the Special:Random page to get a random article from
        const specialRandomUrl = "https://en.wikipedia.org/wiki/Special:Random";

        // request the random article; extract article URL
        const response = await fetch(specialRandomUrl);
        const articleUrl = response.url;

        // create a DOM window; extract article title
        const window = domino.createWindow(await response.text(), articleUrl);
        const articleTitle = window.document.querySelector("h1").textContent;

        // deliver content
        console.log(`${articleTitle} (${articleUrl}) -> ${user.email}`);

        const message = `Today's article is ${articleTitle} and can be found here: ${articleUrl}`;

        sg.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to: user.email,
            from: process.env.SENDGRID_FROM,
            subject: "Your daily content delivery",
            text: message,
            html: message,
        };

        console.log(await sg.send(msg));
    }

    res.status(204).end();
};

export default Cron;
