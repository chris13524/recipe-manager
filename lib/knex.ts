import Knex from "knex";

export default async () => {
    // configure knex
    const knex = Knex({
        client: 'sqlite3',
        connection: {
            filename: "./mydb.sqlite"
        },
        migrations: {
            tableName: "knex_migrations",
        },
    });

    // await a connection
    await knex.raw("select 1+1 as result");

    // run migrations
    await knex.migrate.latest();

    // return knex so we can use it in our app
    return knex;
};
