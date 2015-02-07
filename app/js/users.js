var Users = (function(){
    "use strict";

    var userList = [];

    var generateUser = function() {
        return faker.helpers.createCard();
    };

    var setUserList = function() {
        for (var i = 0; i < 5; i++) {
            var user = generateUser();
            user.favorite = (i % 3 === 0);
            user.avatar = faker.image.avatar();
            userList.push(user);
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
