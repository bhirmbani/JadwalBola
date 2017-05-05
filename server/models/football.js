const axios = require('axios');
const circularJSON = require('circular-json')
const methods = {};

methods.getAllTeams = (req, res) => {
  axios.get('http://api.football-data.org/v1/competitions/426/teams', {headers: {'X-Auth-Token': 'd50e127ef1404fd9a4a51c807899d109' }})
  .then((data) => {
    let stringFromApi = circularJSON.stringify(data.data);
    let objFromAPi = circularJSON.parse(stringFromApi);
    let container = [];
    res.send(objFromAPi.teams);
  });
}

methods.getTimedFixtures = (req, res) => {
  axios.get(`http://api.football-data.org/v1/competitions/426/fixtures`, {headers: {'X-Auth-Token': 'd50e127ef1404fd9a4a51c807899d109' }})
  .then((data) => {
    let stringFromApi = circularJSON.stringify(data.data.fixtures);
    let objFromAPi = circularJSON.parse(stringFromApi);
    let arr = [];
    
    objFromAPi.forEach(function(val) {
      if(val.status === 'TIMED') {
        let obj = {};
        obj.status = val.status;
        obj.date = val.date;
        obj.matchday = val.matchday;
        obj.homeTeamName = val.homeTeamName;
        obj.awayTeamName = val.awayTeamName;
        obj.result = val.result;
        arr.push(obj)
      }
    });
    res.send(arr);
  });
}

methods.getAllFixtures = (req, res) => {
  let teamId = req.params.id;
  let url = `http://api.football-data.org/v1/teams/${teamId}/fixtures`;
  axios.get(url, {headers: {'X-Auth-Token': 'd50e127ef1404fd9a4a51c807899d109' }})
  .then((data) => {
    let stringFromApi = circularJSON.stringify(data.data.fixtures);
    let objFromAPi = circularJSON.parse(stringFromApi);
    let arr = [];

    objFromAPi.forEach(function(val) {
        let obj = {};
        obj.status = val.status;
        obj.date = val.date;
        obj.matchday = val.matchday;
        obj.homeTeamName = val.homeTeamName;
        obj.awayTeamName = val.awayTeamName;
        obj.result = val.result;
        arr.push(obj);
    });
    res.send(arr);
  });
}

methods.getTable = (req, res) => {
  axios.get(`http://api.football-data.org/v1/competitions/426/leagueTable`, {headers: {'X-Auth-Token': 'd50e127ef1404fd9a4a51c807899d109' }})
  .then((data) => {
    let stringFromApi = circularJSON.stringify(data.data.standing);
    let objFromAPi = circularJSON.parse(stringFromApi);
    let arr = [];
    
    objFromAPi.forEach(function(val) {
      let obj = {};
      obj.position = val.position;
      obj.teamName = val.teamName;
      obj.crestURL = val.crestURL;
      obj.playedGames = val.playedGames;
      obj.points = val.points;
      arr.push(obj);
    });
    res.send(arr);
  })
}

// methods.getPlayers = (req, res) => {
//   axios.get('http://api.football-data.org/v1/teams/322/players')
//   .then((data) => {
//     let stringFromApi = circularJSON.stringify(data.players);
//     let objFromAPi = circularJSON.parse(stringFromApi)
//     res.send(objFromAPi);
//   })
// }

module.exports = methods;

