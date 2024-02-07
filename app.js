// const express = require("express");
// const bodyParser = require("body-parser");
// const request = require("request");
// const https = require("https");
// const { response } = require("express");

// const app = express();

// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// app.post("/", (req, res) => {
//   const email = req.body.semail;
//   const studentname = req.body.sname;
//   const studentnumber = req.body.snumber;
//   const parentsname = req.body.pname;
//   const parentsnumber = req.body.pnumber;
//   const city = req.body.city;
//   const stream = req.body.sstream;
//   const CampusEnvironment = req.body.ce;
//   const Laboratories = req.body.lab;
//   const Infrastructures = req.body.Infra;
//   const Hospitality = req.body.Hospi;
//   const Suggestion = req.body.sugg;
//   const name = req.body.name;

//   const data = {
//     members: [
//       {
//         email_address: email,
//         //merge_fields: {
//         SNAME: studentname,
//         SNUMBER: studentnumber,
//         PNAME: parentsname,
//         PNUMBER: parentsnumber,
//         CITY: city,
//         STREAM: stream,
//         CE: CampusEnvironment,
//         LAB: Laboratories,
//         INFRA: Infrastructures,
//         HOSPI: Hospitality,
//         SUGG: Suggestion,
//         NAME: name,
//         //},
//         status: "subscribed",
//       },
//     ],
//   };

//   const jsonData = JSON.stringify(data);

//   const url = "https://us12.api.mailchimp.com/3.0/lists/81933812f0";

//   const options = {
//     method: "post",
//     auth: "Tilak:9e88ef47ad956c8108dde95fdf9a45b0-us12",
//   };

//   const request = https.request(url, options, (response) => {
//     if (response.statusCode === 200) {
//       res.sendFile(__dirname + "/success.html");
//     } else {
//       res.sendFile(__dirname + "/failure.html");
//     }

//     response.on("data", (data) => {
//       console.log(JSON.parse(data));
//     });
//   });

//   request.write(jsonData);
//   request.end();
// });

// app.post("/failure", (req, res) => {
//   res.redirect("/");
// });

// app.listen(process.env.PORT || 3000, () => {
//   console.log("Server is running on port 3000.");
// });

//----------------------------------------------------

// const express = require("express");
// const bodyParser = require("body-parser");
// const { google } = require("googleapis");
// const { OAuth2Client } = require("google-auth-library");

// const app = express();

// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// app.post("/", async (req, res) => {
//   const email = req.body.semail;
//   const studentname = req.body.sname;
//   const studentnumber = req.body.snumber;
//   const parentsname = req.body.pname;
//   const parentsnumber = req.body.pnumber;
//   const city = req.body.city;
//   const stream = req.body.sstream;
//   const School = req.body.school;
//   const CampusEnvironment = req.body.ce;
//   const Laboratories = req.body.lab;
//   const Infrastructures = req.body.Infra;
//   const Hospitality = req.body.Hospi;
//   const Suggestion = req.body.sugg;
//   const name = req.body.name;

//   const credentials = {
//     client_id:
//       "613893152168-qj74ial9m838olar1s4q87tligt4orc6.apps.googleusercontent.com",
//     client_secret: "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", // Replace with your actual client secret
//     redirect_uris: ["http://localhost:3000"], // Add the redirect URI you set up in the Google Cloud Console
//   };

//   const oAuth2Client = new OAuth2Client(
//     credentials.client_id,
//     credentials.client_secret,
//     credentials.redirect_uris[0]
//   );

//   oAuth2Client.setCredentials({
//     // Set your access_token and refresh_token here if you have them
//   });

//   const sheets = google.sheets({ version: "v4", auth: oAuth2Client });

//   const spreadsheetId = "your-spreadsheet-id";
//   const range = "Sheet1"; // Change this to the name of your sheet

//   const values = [
//     email,
//     studentname,
//     studentnumber,
//     parentsname,
//     parentsnumber,
//     city,
//     stream,
//     School,
//     CampusEnvironment,
//     Laboratories,
//     Infrastructures,
//     Hospitality,
//     Suggestion,
//     name,
//   ];

//   try {
//     await sheets.spreadsheets.values.append({
//       spreadsheetId,
//       range,
//       valueInputOption: "RAW",
//       resource: {
//         values: [values],
//       },
//     });

//     res.sendFile(__dirname + "/success.html");
//   } catch (error) {
//     console.error("Error appending data to Google Sheets:", error);
//     res.sendFile(__dirname + "/failure.html");
//   }
// });

// app.post("/failure", (req, res) => {
//   res.redirect("/");
// });

// app.listen(process.env.PORT || 3000, () => {
//   console.log("Server is running on port 3000.");
// });

// ---------------------------------------------------------
