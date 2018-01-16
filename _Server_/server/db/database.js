// jshint esversion: 6

/**
 * Author : Yazeen Thariq
 * Created : 1/13/2018
 * 
 * ------------------ DATABASE CONFIG ------------------
 */
const _username = 'yazeen';
const _password = 'jWrPeCoA1ZRzcsBB';
const _database = 'SignSpeaks';
const _replicaSet = 'YazeenCluster0-shard-0';
const _authSource = 'admin';

const _URI = `mongodb://${_username}:${_password}@` +
    `yazeencluster0-shard-00-00-5amgi.mongodb.net:27017,` +
    `yazeencluster0-shard-00-01-5amgi.mongodb.net:27017,` +
    `yazeencluster0-shard-00-02-5amgi.mongodb.net:27017/` +
    `${_database}?ssl=true&replicaSet=${_replicaSet}&authSource=${_authSource}`;

module.exports.URI = _URI;