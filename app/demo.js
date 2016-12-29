var { normalize, schema } = require('normalizr');
var json = {"data":{"attributes":{"email":"mech@me.com","jobline-user-id":52383,"name":"Swee Me Chai","redirect-url":"/e"},"id":"7d13648a-422a-49ac-93dd-01625ab2bf35","links":{"self":"http://localhost:3000/users/7d13648a-422a-49ac-93dd-01625ab2bf35"},"relationships":{"current-contract":{"data":{"id":"S6414.02","type":"emp-contracts"}}},"type":"candidates"},"included":[{"attributes":{"claims?":true,"contract-code":"S6414.02","leaves?":true,"timesheets-upload?":false,"timesheets?":true},"id":"S6414.02","type":"emp-contracts"}]};

var user = new schema.Entity('user', {}, {
    processStrategy: (value) => {
        return Object.assign({}, value.attributes)
    }
});

var contract = new schema.Entity('current-contract', {}, {
    processStrategy: (value) => {
        return Object.assign({}, value.attributes)
    }
})

var auth = new schema.Object({
    data: user,
    included: new schema.Array(contract)
})

// var user = new schema.Entity('user');

var a = normalize(json, auth);

console.log(JSON.stringify(a, null, 4));