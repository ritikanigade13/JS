const accountId = 12279
let accountEmail = "ritika@ymail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;


// accountId=99373 not allowed
accountEmail = "nigade@ymail.com"
accountPassword= "89273"
accountCity="Indore"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);
/*
prefer not to use var because of block and functional scope
outpt: of variables
┌─────────┬────────────────────┐
│ (index) │       Values       │
├─────────┼────────────────────┤
│    0    │       12279        │
│    1    │ 'nigade@ymail.com' │
│    2    │      '89273'       │
│    3    │      'Indore'      │
│    4    │     undefined      │
└─────────┴────────────────────┘
*/
