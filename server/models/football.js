const axios = require('axios');
const circularJSON = require('circular-json')
const methods = {};

methods.getAllTeams = (req, res) => {
  axios.get('http://api.football-data.org/v1/competitions/426/teams')
  .then((data) => {
    res.send(circularJSON.stringify(data.data));
  })
}


module.exports = methods;

