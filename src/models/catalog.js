import { query } from "./connect_to_database.js";
import { database } from "./db.js";

async function get_list() {
  let request = await query`select * from sushi;`;
  console.log(request);
  return request;
}

export { get_list };
