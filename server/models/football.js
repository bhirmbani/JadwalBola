const axios = require('axios');
const circularJSON = require('circular-json')
const methods = {};

methods.getAllTeams = (req, res) => {
  axios.get('http://api.football-data.org/v1/competitions/426/teams')
  .then((data) => {
    let stringFromApi = circularJSON.stringify(data.data);
    let objFromAPi = circularJSON.parse(stringFromApi);
    res.send(objFromAPi);
  })
}

methods.getFixtures = (req, res) => {
  axios.get(`http://api.football-data.org/v1/competitions/426/fixtures`)
  .then((data) => {
    let stringFromApi = circularJSON.stringify(data.data.fixtures);
    let objFromAPi = circularJSON.parse(stringFromApi)
    res.send(objFromAPi);
  })
}


module.exports = methods;

