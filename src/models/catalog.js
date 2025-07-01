import { database } from "./db.js";

function get_list() {
  return database.catalog;
}

export { get_list };
