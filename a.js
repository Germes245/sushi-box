import query from './src/models/connect_to_database.js';
const table = 'filter_up'
query(`select * from ${table}`)
(async()=>{
    console.log(await query`select * from ${query.unsafe(table)}`)
})