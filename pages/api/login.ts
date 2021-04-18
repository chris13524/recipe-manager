import { verify } from 'argon2';
import knex from '../../lib/knex';
import withSession from '../../lib/session';
import { User } from '../../lib/user';

export default withSession(async (req, res) => {
    const { email, password } = await req.body;

    if (!email || !password) {
        res.status(400).json({ message: "missing or blank email or password" });
        return;
    }

    const user = await (await knex())<User>("users").where("email", email).first();

    if (!user) {
        res.status(403).json({ message: "Invalid email or password" });
        return;
    }

    const hashedPassword = user.password;

    if (await verify(hashedPassword, password)) {
        req.session.set('user', user);
        await req.session.save();
        res.status(200).json({});
    } else {
        res.status(403).json({ message: "Invalid email or password" });
        return;
    }
});
