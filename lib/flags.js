var bigInt = require("big-integer");
var fs = require('fs');
var path = require('path');
var flags = require(path.join(__dirname, 'data', 'flags.json'));

function _parseFlags(value) {
    var result = [];
    for(item in flags) {
        var flag = flags[item];
        var bit = bigInt(value).and(flag.value).value;
        if(bit[0] != 0) {
            result.push(flag);
        }
    }

    return result;
}

function _getFlagBy(attr, value) {
    for(item in flags) {
        var flag = flags[item];
        if(flag[attr] == value) {
            return flag;
        }
    }

    return false;
}

module.exports = {

    getFlagsByNumber: function(flag) {
        return _parseFlags(flag);
    },

    getFlagByValue: function(value) {
        return _getFlagBy("value", value);
    },

    getFlagByName: function(name) {
        return _getFlagBy("name", name);
    },

    getFlags: function() {
        return flags;
    },
};