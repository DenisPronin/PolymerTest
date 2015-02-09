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
                user.id = i;
                userList.push(user);
            }
            saveUsers();
        }
        else {
            userList = JSON.parse(savedUsers);
        }
    };

    var updateUser = function(user) {
        userList = userList.map(function(_user) {
             if(_user.id === user.id) {
                 user = _user;
             }
            return _user;
        });
        saveUsers();
    };

    var saveUsers = function() {
        localStorage.setItem('userList', JSON.stringify(userList));
    };

    var getUserList = function() {
        return userList;
    };

    setUserList();

    return {
        getUserList: getUserList,
        updateUser: updateUser
    }
})();
