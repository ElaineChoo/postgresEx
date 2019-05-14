const pg = require('pg');

const configs = {
    user: 'Elaine',
    host: '127.0.0.1',
    database: 'pokemons',
    port: 5432
};

const client = new pg.Client(configs);


let text = 'INSERT INTO students(name, email) VALUES($1, $2)';
let values = ['brianc', 'brianc@monkey.com'];

client.connect((err) => {
    if (err) {
        console.log("error", err.message);
    }

    client.query(text, values, (err, res) => {
        if (err) {
            console.log("query error", err.message);
        } else {
            console.log("result", res.row[0]);
        }
    });
});