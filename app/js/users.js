var Users = (function(){
    "use strict";

    var userList = [];

    var generateUser = function() {
        return faker.helpers.contextualCard();
    };

    var setUserList = function() {
        for (var i = 0; i < 5; i++) {
            userList.push(generateUser());
        }
    };
    setUserList();

    var getUserList = function() {
        return userList;
    };

    return {
        getUserList: getUserList
    }
})();
