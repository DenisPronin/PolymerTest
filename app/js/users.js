var Users = (function(){
    "use strict";

    var userList = [];

    var generateUser = function() {
        return faker.helpers.createCard();
    };

    var setUserList = function() {
        var savedUsers = localStorage.getItem('userList');
        if(!savedUsers) {
            for (var i = 0; i < 15; i++) {
                var user = generateUser();
                user.favorite = (i % 5 === 0);
                user.avatar = faker.image.avatar();
                userList.push(user);
            }
            localStorage.setItem('userList', JSON.stringify(userList));
        }
        else {
            userList = JSON.parse(savedUsers);
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
