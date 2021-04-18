import { hash } from 'argon2';
import knex from '../../lib/knex';
import withSession from '../../lib/session';
import { User } from '../../lib/user';

export default withSession(async (req, res) => {
  const { email, password } = await req.body;

  if (!email || !password) {
    res.status(400).json({ message: "Missing or empty email or password" });
    return;
  }

  await (await knex())<User>("users").insert({
    email,
    password: await hash(password),
  });

  res.status(201).json({});
});
