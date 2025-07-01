import { get_list } from "../models/catalog.js";
function main_page(req, res, next) {
  const catalog = get_list();
  res.render("main_page", {
    catalog,
  });
}
function info_page(req, res, next) {
  const info = get_list().find((item) => item.id == req.params.id)?.name;
  if (info) {
    res.render("info_page.ejs", {
      info,
    });
  } else {
    next();
  }
}
function error_page(req, res, next) {
  res.send(`<!doctype html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>wook</title>
        </head>
      <body>
      <h1>такой сет не существует, закажи другой</h1>
      </body></html>`);
}
export { main_page, info_page, error_page };
