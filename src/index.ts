import * as mysql from "mysql2";

function sqlFunction(event, context, callback) {
  const responseBody = {
    statusCode: 200,
    body: mysql.format("asdfasdf"),
  };

  const dbConn = mysql.createConnection({
    host: "",
    user: "",
    password: "",
  });

  dbConn.query("SHOW TABLES", (err, values) => {
    if (err) {
      responseBody.statusCode = 500;
      responseBody.body = JSON.stringify(err);
    } else {
      responseBody.body = JSON.stringify(values);
    }
    callback(null, responseBody);
  });
}

function testHandler(event, context, callback) {
  const responseBody = {
    statusCode: 200,
    body: mysql.format("asdfasdf"),
  };
  callback(null, responseBody);
}

module.exports.handler = testHandler;
