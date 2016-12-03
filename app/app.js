var app = angular.module('webmovie', ['ui.router']);

app.config(function ($stateProvider) {
    var homeState = {
        name: 'home',
        url: '/',
        templateUrl: 'app/views/webmain.html'
    }

    var movieState = {
        name: 'movie',
        url: '/movie/:id',
        templateUrl: 'app/views/webview.html'
    }
    
    var labState = {
        name: 'lab',
        url: '/lab',
        templateUrl: 'app/views/weblab.html'
    }
    
    var aboutState = {
        name: 'about',
        url: '/about',
        templateUrl: 'app/views/webabout.html'
    }

    $stateProvider.state(homeState);
    $stateProvider.state(movieState);
    $stateProvider.state(labState);
    $stateProvider.state(aboutState);
});

app.controller('NavController', function ($scope, $location, $anchorScroll) {
    $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   }
});

app.controller('MainController', function ($scope, $rootScope, $state) {
    $rootScope.data = [
        {
            name: "One Piece",
            img: 1,
            video: "https://www.youtube.com/watch?v=o0WWLxqg3iw",
            description: ""
        },
        {
            name: "Naruto",
            img: 2,
            video: "https://www.youtube.com/watch?v=Hch6eF9Xf0A",
            description: ""
        },
        {
            name: "Fairy Tail",
            img: 3,
            video: "https://www.youtube.com/watch?v=Z2omMAFJGIQ",
            description: ""
        },
        {
            name: "Bleach",
            img: 4,
            video: "https://www.youtube.com/watch?v=RuXIPZXKegs",
            description: ""
        },
        {
            name: "One Punch Man",
            img: 5,
            video: "https://www.youtube.com/watch?v=saHJ_S-MEiY",
            description: ""
        },
        {
            name: "Dragon Ball Super",
            img: 6,
            video: "https://www.youtube.com/watch?v=5U5AKnvShQE",
            description: ""
        },
        {
            name: "Pokemon",
            img: 7,
            video: "https://www.youtube.com/watch?v=kCv4imDftwk",
            description: ""
        },
        {
            name: "Black Rock Shooter",
            img: 8,
            video: "https://www.youtube.com/watch?v=H0XssHL6ka4",
            description: ""
        },
        {
            name: "Sword Art Online",
            img: 9,
            video: "https://www.youtube.com/watch?v=dkvaprtP6L8",
            description: ""
        },
        {
            name: "5cm/s",
            img: 10,
            video: "https://www.youtube.com/watch?v=WAT-Gy6QsTY",
            description: ""
        },
        {
            name: "Date A Live",
            img: 11,
            video: "https://www.youtube.com/watch?v=AYTVnt5tNx4",
            description: ""
        },
        {
            name: "Attack on the Titan",
            img: 12,
            video: "https://www.youtube.com/watch?v=XMeihVthcGI",
            description: ""
        },
        {
            name: "Bikini Warriors",
            img: 13,
            video: "https://www.youtube.com/watch?v=DUivZxMCxJc",
            description: ""
        },
        {
            name: "Tokyo Ghoul",
            img: 14,
            video: "https://www.youtube.com/watch?v=rw8FlCddO08",
            description: ""
        },
        {
            name: "Fairy Tail",
            img: 15,
            video: "https://www.youtube.com/watch?v=L26ohVRPl0U",
            description: ""
        },
        {
            name: "Hunter x Hunter",
            img: 16,
            video: "",
            description: ""
        },
        {
            name: "Digimon",
            img: 17,
            video: "",
            description: ""
        },
        {
            name: "Gumball",
            img: 18,
            video: "",
            description: ""
        },
        {
            name: "Stand By Me",
            img: 19,
            video: "",
            description: ""
        },
        {
            name: "Adventure Time",
            img: 20,
            video: "",
            description: ""
        },
        {
            name: "InuYasha",
            img: 21,
            video: "",
            description: ""
        },
        {
            name: "MasouGakuen HxH",
            img: 22,
            video: "",
            description: ""
        },
        {
            name: "Overload",
            img: 23,
            video: "",
            description: ""
        },
        {
            name: "GodEater",
            img: 24,
            video: "",
            description: ""
        },
        {
            name: "Ajin",
            img: 25,
            video: "",
            description: ""
        },
        {
            name: "Gurren Lagann",
            img: 26,
            video: "",
            description: ""
        },
        {
            name: "Danmachi",
            img: 27,
            video: "",
            description: ""
        },
        {
            name: "Gintama",
            img: 28,
            video: "",
            description: ""
        }
    ];
    $scope.photos1 = [];
    $scope.photos2 = [];
    $scope.photos3 = [];
    $scope.photos4 = [];
    $scope.photos5 = [];
    
    $state.go('home');

    var make = function (data, i, n) {
        for (; i < n; i++) {
            data.push($scope.data[i]);
        }
    };

    make($scope.photos1, 0, 6);
    make($scope.photos2, 6, 12);
    make($scope.photos3, 12, 18);
    make($scope.photos4, 18, 23);
    make($scope.photos5, 23, 28);
});

app.controller('ViewController', function ($scope, $rootScope, $state) {
    $scope.video = {};
    console.log($rootScope.data);
    function checkMovie(id) {
        angular.forEach($rootScope.data, function(val){
           if(val.img === id)
               $scope.video = val;
        });
    }
    
    checkMovie($state.params.id);
});
