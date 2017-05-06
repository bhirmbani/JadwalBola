const axios = require('axios');
const circularJSON = require('circular-json')
const methods = {};
var helper = require('../helpers/convert');

methods.getAllTeams = (req, res) => {
    axios.get('http://api.football-data.org/v1/competitions/426/teams', {
            headers: {
                'X-Auth-Token': 'd50e127ef1404fd9a4a51c807899d109'
            }
        })
        .then((data) => {
            let stringFromApi = circularJSON.stringify(data.data.teams);
            let objFromAPi = circularJSON.parse(stringFromApi);
            let arr = [];

            objFromAPi.forEach(function(val) {
                let obj = {};
                obj.name = val.name;
                obj.crestURL = val.crestUrl;
                arr.push(obj);
            })
            res.send(arr);

        });
}

methods.getTimedFixtures = (req, res) => {
    axios.get(`http://api.football-data.org/v1/competitions/426/fixtures`, {
            headers: {
                'X-Auth-Token': 'd50e127ef1404fd9a4a51c807899d109'
            }
        })
        .then((data) => {
            let stringFromApi = circularJSON.stringify(data.data.fixtures);
            let objFromAPi = circularJSON.parse(stringFromApi);
            let arr = [];

            objFromAPi.forEach(function(val) {
                if (val.status === 'TIMED') {
                    let obj = {};
                    obj.status = val.status;
                    obj.date = helper.convert(val.date);
                    obj.matchday = val.matchday;
                    obj.homeTeamName = val.homeTeamName;
                    obj.awayTeamName = val.awayTeamName;
                    obj.result = val.result;
                    arr.push(obj)
                }
            });
            res.json({
                records: arr,
                success: true
            });
        });
}

methods.getAllFixtures = (req, res) => {
    let teamId = req.params.id;
    let url = `http://api.football-data.org/v1/teams/${teamId}/fixtures`;
    axios.get(url, {
            headers: {
                'X-Auth-Token': 'd50e127ef1404fd9a4a51c807899d109'
            }
        })
        .then((data) => {
            let stringFromApi = circularJSON.stringify(data.data.fixtures);
            let objFromAPi = circularJSON.parse(stringFromApi);
            let arr = [];

            objFromAPi.forEach(function(val) {
                let obj = {};
                obj.status = val.status;
                obj.date = helper.year(val.date);
                obj.matchday = val.matchday;
                obj.homeTeamName = val.homeTeamName;
                obj.awayTeamName = val.awayTeamName;
                obj.result = val.result;
                arr.push(obj);
            });
            res.send({
                success: true,
                records: arr
            });
        });
}

methods.getTable = (req, res) => {
    axios.get(`http://api.football-data.org/v1/competitions/426/leagueTable`, {
            headers: {
                'X-Auth-Token': 'd50e127ef1404fd9a4a51c807899d109'
            }
        })
        .then((data) => {
            let stringFromApi = circularJSON.stringify(data.data.standing);
            let objFromAPi = circularJSON.parse(stringFromApi);
            let arr = [];

            objFromAPi.forEach(function(val) {
                let obj = {};
                obj.position = val.position;
                obj.teamName = val.teamName;
                obj.crestURL = val.crestUrl;
                obj.playedGames = val.playedGames;
                obj.points = val.points;
                arr.push(obj);
            });
            // res.send(arr);
            res.json({
                records: arr,
                success: true
            })
        })
}

methods.getPlayers = (req, res) => {
    let teamId = req.params.id;
    let url = `http://api.football-data.org/v1/teams/${teamId}/players`;
    axios.get(url, {
            headers: {
                'X-Auth-Token': 'd50e127ef1404fd9a4a51c807899d109'
            }
        })
        .then((data) => {
            let stringFromApi = circularJSON.stringify(data.data.players);
            let objFromAPi = circularJSON.parse(stringFromApi)
            res.send(objFromAPi);
        })
}

module.exports = methods;
