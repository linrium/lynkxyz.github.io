var app = angular.module('webmovie', ['ui.router', 'youtube-embed']);

app.config(function ($stateProvider) {
    var homeState = {
        name: 'home',
        url: '/',
        templateUrl: 'app/views/webmain.html',
        data: {
            title: 'Webmovie - The best website of watching anime'
        }
    }

    var movieState = {
        name: 'movie',
        url: '/movie/:id',
        templateUrl: 'app/views/webview.html',
        data: {
            title: 'Webmovie - Watch Anime Online'
        }
    }
    
    var labState = {
        name: 'lab',
        url: '/lab',
        templateUrl: 'app/views/weblab.html',
        data: {
            title: 'Webmovie - Lab TH NM Web'
        }
    }
    
    var aboutState = {
        name: 'about',
        url: '/about',
        templateUrl: 'app/views/webabout.html',
        data: {
            title: 'Webmovie - About Page'
        }
    }

    $stateProvider.state(homeState);
    $stateProvider.state(movieState);
    $stateProvider.state(labState);
    $stateProvider.state(aboutState);
});

app.factory('Page', function() {
   var title = 'Webmovie';
   return {
     title: function() { return title; },
     setTitle: function(newTitle) { title = newTitle }
   };
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
            views: 1300,
            genre: 'Ecchi, Action',
            producer: 'TV Tokyo',
            video: "https://www.youtube.com/watch?v=o0WWLxqg3iw",
            description: "Phần Naruto Shippuuden Vietsub thì tất cả những người bạn của Naruto đều đã trưởng thành, là những Jounin , có những người đã rất nổi trội. Không giống như phần đầu khi chỉ đóng vai trò phụ, tổ chức Akatsuki chiếm lấy vai trò đối nghịch chính trong tham vọng thống trị thế giới. Sau này chính Tobi và Obito đã khơi ngòi chiến tranh Ninja lần thứ tư giữa Ngũ Đại Quốc và Akatsuki mà người đứng phía sau giật dây là Uchiha Madara nhằm thực hiện kế hoạch Nguyệt Nhãn của hắn. "
        },
        {
            name: "Naruto",
            img: 2,
            views: 2390,
            genre: 'Ecchi, Action',
            producer: 'TV Tokyo',
            video: "https://www.youtube.com/watch?v=Hch6eF9Xf0A",
            description: "Phần Naruto Shippuuden Vietsub thì tất cả những người bạn của Naruto đều đã trưởng thành, là những Jounin , có những người đã rất nổi trội. Không giống như phần đầu khi chỉ đóng vai trò phụ, tổ chức Akatsuki chiếm lấy vai trò đối nghịch chính trong tham vọng thống trị thế giới. Sau này chính Tobi và Obito đã khơi ngòi chiến tranh Ninja lần thứ tư giữa Ngũ Đại Quốc và Akatsuki mà người đứng phía sau giật dây là Uchiha Madara nhằm thực hiện kế hoạch Nguyệt Nhãn của hắn. "
        },
        {
            name: "Fairy Tail",
            img: 3,
            views: 5300,
            genre: 'Ecchi, Action',
            producer: 'TV Tokyo',
            video: "https://www.youtube.com/watch?v=Z2omMAFJGIQ",
            description: "Phần Naruto Shippuuden Vietsub thì tất cả những người bạn của Naruto đều đã trưởng thành, là những Jounin , có những người đã rất nổi trội. Không giống như phần đầu khi chỉ đóng vai trò phụ, tổ chức Akatsuki chiếm lấy vai trò đối nghịch chính trong tham vọng thống trị thế giới. Sau này chính Tobi và Obito đã khơi ngòi chiến tranh Ninja lần thứ tư giữa Ngũ Đại Quốc và Akatsuki mà người đứng phía sau giật dây là Uchiha Madara nhằm thực hiện kế hoạch Nguyệt Nhãn của hắn. "
        },
        {
            name: "Bleach",
            img: 4,
            views: 7300,
            genre: 'Ecchi, Action',
            producer: 'TV Tokyo',
            video: "https://www.youtube.com/watch?v=RuXIPZXKegs",
            description: "Phần Naruto Shippuuden Vietsub thì tất cả những người bạn của Naruto đều đã trưởng thành, là những Jounin , có những người đã rất nổi trội. Không giống như phần đầu khi chỉ đóng vai trò phụ, tổ chức Akatsuki chiếm lấy vai trò đối nghịch chính trong tham vọng thống trị thế giới. Sau này chính Tobi và Obito đã khơi ngòi chiến tranh Ninja lần thứ tư giữa Ngũ Đại Quốc và Akatsuki mà người đứng phía sau giật dây là Uchiha Madara nhằm thực hiện kế hoạch Nguyệt Nhãn của hắn. "
        },
        {
            name: "One Punch Man",
            img: 5,
            views: 240,
            genre: 'Ecchi, Action',
            producer: 'TV Tokyo',
            video: "https://www.youtube.com/watch?v=saHJ_S-MEiY",
            description: "Phần Naruto Shippuuden Vietsub thì tất cả những người bạn của Naruto đều đã trưởng thành, là những Jounin , có những người đã rất nổi trội. Không giống như phần đầu khi chỉ đóng vai trò phụ, tổ chức Akatsuki chiếm lấy vai trò đối nghịch chính trong tham vọng thống trị thế giới. Sau này chính Tobi và Obito đã khơi ngòi chiến tranh Ninja lần thứ tư giữa Ngũ Đại Quốc và Akatsuki mà người đứng phía sau giật dây là Uchiha Madara nhằm thực hiện kế hoạch Nguyệt Nhãn của hắn. "
        },
        {
            name: "Dragon Ball Super",
            img: 6,
            views: 9300,
            genre: 'Ecchi, Action',
            producer: 'TV Tokyo',
            video: "https://www.youtube.com/watch?v=5U5AKnvShQE",
            description: "Phần Naruto Shippuuden Vietsub thì tất cả những người bạn của Naruto đều đã trưởng thành, là những Jounin , có những người đã rất nổi trội. Không giống như phần đầu khi chỉ đóng vai trò phụ, tổ chức Akatsuki chiếm lấy vai trò đối nghịch chính trong tham vọng thống trị thế giới. Sau này chính Tobi và Obito đã khơi ngòi chiến tranh Ninja lần thứ tư giữa Ngũ Đại Quốc và Akatsuki mà người đứng phía sau giật dây là Uchiha Madara nhằm thực hiện kế hoạch Nguyệt Nhãn của hắn. "
        },
        {
            name: "Pokemon",
            img: 7,
            views: 1720,
            genre: 'Ecchi, Action',
            producer: 'TV Tokyo',
            video: "https://www.youtube.com/watch?v=kCv4imDftwk",
            description: "Phần Naruto Shippuuden Vietsub thì tất cả những người bạn của Naruto đều đã trưởng thành, là những Jounin , có những người đã rất nổi trội. Không giống như phần đầu khi chỉ đóng vai trò phụ, tổ chức Akatsuki chiếm lấy vai trò đối nghịch chính trong tham vọng thống trị thế giới. Sau này chính Tobi và Obito đã khơi ngòi chiến tranh Ninja lần thứ tư giữa Ngũ Đại Quốc và Akatsuki mà người đứng phía sau giật dây là Uchiha Madara nhằm thực hiện kế hoạch Nguyệt Nhãn của hắn. "
        },
        {
            name: "Black Rock Shooter",
            img: 8,
            views: 2309,
            genre: 'Ecchi, Action',
            producer: 'TV Tokyo',
            video: "https://www.youtube.com/watch?v=H0XssHL6ka4",
            description: "Phần Naruto Shippuuden Vietsub thì tất cả những người bạn của Naruto đều đã trưởng thành, là những Jounin , có những người đã rất nổi trội. Không giống như phần đầu khi chỉ đóng vai trò phụ, tổ chức Akatsuki chiếm lấy vai trò đối nghịch chính trong tham vọng thống trị thế giới. Sau này chính Tobi và Obito đã khơi ngòi chiến tranh Ninja lần thứ tư giữa Ngũ Đại Quốc và Akatsuki mà người đứng phía sau giật dây là Uchiha Madara nhằm thực hiện kế hoạch Nguyệt Nhãn của hắn. "
        },
        {
            name: "Sword Art Online",
            img: 9,
            views: 2800,
            genre: 'Ecchi, Action',
            producer: 'TV Tokyo',
            video: "https://www.youtube.com/watch?v=dkvaprtP6L8",
            description: "Phần Naruto Shippuuden Vietsub thì tất cả những người bạn của Naruto đều đã trưởng thành, là những Jounin , có những người đã rất nổi trội. Không giống như phần đầu khi chỉ đóng vai trò phụ, tổ chức Akatsuki chiếm lấy vai trò đối nghịch chính trong tham vọng thống trị thế giới. Sau này chính Tobi và Obito đã khơi ngòi chiến tranh Ninja lần thứ tư giữa Ngũ Đại Quốc và Akatsuki mà người đứng phía sau giật dây là Uchiha Madara nhằm thực hiện kế hoạch Nguyệt Nhãn của hắn. "
        },
        {
            name: "5cm/s",
            img: 10,
            views: 2300,
            genre: 'Ecchi, Action',
            producer: 'TV Tokyo',
            video: "https://www.youtube.com/watch?v=WAT-Gy6QsTY",
            description: "Phần Naruto Shippuuden Vietsub thì tất cả những người bạn của Naruto đều đã trưởng thành, là những Jounin , có những người đã rất nổi trội. Không giống như phần đầu khi chỉ đóng vai trò phụ, tổ chức Akatsuki chiếm lấy vai trò đối nghịch chính trong tham vọng thống trị thế giới. Sau này chính Tobi và Obito đã khơi ngòi chiến tranh Ninja lần thứ tư giữa Ngũ Đại Quốc và Akatsuki mà người đứng phía sau giật dây là Uchiha Madara nhằm thực hiện kế hoạch Nguyệt Nhãn của hắn. "
        },
        {
            name: "Date A Live",
            img: 11,
            views: 2300,
            genre: 'Ecchi, Action',
            producer: 'TV Tokyo',
            video: "https://www.youtube.com/watch?v=AYTVnt5tNx4",
            description: "Phần Naruto Shippuuden Vietsub thì tất cả những người bạn của Naruto đều đã trưởng thành, là những Jounin , có những người đã rất nổi trội. Không giống như phần đầu khi chỉ đóng vai trò phụ, tổ chức Akatsuki chiếm lấy vai trò đối nghịch chính trong tham vọng thống trị thế giới. Sau này chính Tobi và Obito đã khơi ngòi chiến tranh Ninja lần thứ tư giữa Ngũ Đại Quốc và Akatsuki mà người đứng phía sau giật dây là Uchiha Madara nhằm thực hiện kế hoạch Nguyệt Nhãn của hắn. "
        },
        {
            name: "Attack on the Titan",
            img: 12,
            views: 2300,
            genre: 'Ecchi, Action',
            producer: 'TV Tokyo',
            video: "https://www.youtube.com/watch?v=XMeihVthcGI",
            description: "Phần Naruto Shippuuden Vietsub thì tất cả những người bạn của Naruto đều đã trưởng thành, là những Jounin , có những người đã rất nổi trội. Không giống như phần đầu khi chỉ đóng vai trò phụ, tổ chức Akatsuki chiếm lấy vai trò đối nghịch chính trong tham vọng thống trị thế giới. Sau này chính Tobi và Obito đã khơi ngòi chiến tranh Ninja lần thứ tư giữa Ngũ Đại Quốc và Akatsuki mà người đứng phía sau giật dây là Uchiha Madara nhằm thực hiện kế hoạch Nguyệt Nhãn của hắn. "
        },
        {
            name: "Bikini Warriors",
            img: 13,
            views: 2300,
            genre: 'Ecchi, Action',
            producer: 'TV Tokyo',
            video: "https://www.youtube.com/watch?v=DUivZxMCxJc",
            description: "Phần Naruto Shippuuden Vietsub thì tất cả những người bạn của Naruto đều đã trưởng thành, là những Jounin , có những người đã rất nổi trội. Không giống như phần đầu khi chỉ đóng vai trò phụ, tổ chức Akatsuki chiếm lấy vai trò đối nghịch chính trong tham vọng thống trị thế giới. Sau này chính Tobi và Obito đã khơi ngòi chiến tranh Ninja lần thứ tư giữa Ngũ Đại Quốc và Akatsuki mà người đứng phía sau giật dây là Uchiha Madara nhằm thực hiện kế hoạch Nguyệt Nhãn của hắn. "
        },
        {
            name: "Tokyo Ghoul",
            img: 14,
            views: 2300,
            genre: 'Ecchi, Action',
            producer: 'TV Tokyo',
            video: "https://www.youtube.com/watch?v=rw8FlCddO08",
            description: "Phần Naruto Shippuuden Vietsub thì tất cả những người bạn của Naruto đều đã trưởng thành, là những Jounin , có những người đã rất nổi trội. Không giống như phần đầu khi chỉ đóng vai trò phụ, tổ chức Akatsuki chiếm lấy vai trò đối nghịch chính trong tham vọng thống trị thế giới. Sau này chính Tobi và Obito đã khơi ngòi chiến tranh Ninja lần thứ tư giữa Ngũ Đại Quốc và Akatsuki mà người đứng phía sau giật dây là Uchiha Madara nhằm thực hiện kế hoạch Nguyệt Nhãn của hắn. "
        },
        {
            name: "Fairy Tail",
            img: 15,
            views: 290,
            genre: 'Ecchi, Action',
            producer: 'TV Tokyo',
            video: "https://www.youtube.com/watch?v=L26ohVRPl0U",
            description: "Phần Naruto Shippuuden Vietsub thì tất cả những người bạn của Naruto đều đã trưởng thành, là những Jounin , có những người đã rất nổi trội. Không giống như phần đầu khi chỉ đóng vai trò phụ, tổ chức Akatsuki chiếm lấy vai trò đối nghịch chính trong tham vọng thống trị thế giới. Sau này chính Tobi và Obito đã khơi ngòi chiến tranh Ninja lần thứ tư giữa Ngũ Đại Quốc và Akatsuki mà người đứng phía sau giật dây là Uchiha Madara nhằm thực hiện kế hoạch Nguyệt Nhãn của hắn. "
        },
        {
            name: "Hunter x Hunter",
            img: 16,
            views: 640,
            genre: 'Ecchi, Action',
            producer: 'TV Tokyo',
            video: "https://www.youtube.com/watch?v=hZsN0jUOr7s",
            description: "Phần Naruto Shippuuden Vietsub thì tất cả những người bạn của Naruto đều đã trưởng thành, là những Jounin , có những người đã rất nổi trội. Không giống như phần đầu khi chỉ đóng vai trò phụ, tổ chức Akatsuki chiếm lấy vai trò đối nghịch chính trong tham vọng thống trị thế giới. Sau này chính Tobi và Obito đã khơi ngòi chiến tranh Ninja lần thứ tư giữa Ngũ Đại Quốc và Akatsuki mà người đứng phía sau giật dây là Uchiha Madara nhằm thực hiện kế hoạch Nguyệt Nhãn của hắn. "
        },
        {
            name: "Digimon",
            img: 17,
            views: 1350,
            genre: 'Ecchi, Action',
            producer: 'TV Tokyo',
            video: "https://www.youtube.com/watch?v=s1X-2XMV0zM",
            description: "Phần Naruto Shippuuden Vietsub thì tất cả những người bạn của Naruto đều đã trưởng thành, là những Jounin , có những người đã rất nổi trội. Không giống như phần đầu khi chỉ đóng vai trò phụ, tổ chức Akatsuki chiếm lấy vai trò đối nghịch chính trong tham vọng thống trị thế giới. Sau này chính Tobi và Obito đã khơi ngòi chiến tranh Ninja lần thứ tư giữa Ngũ Đại Quốc và Akatsuki mà người đứng phía sau giật dây là Uchiha Madara nhằm thực hiện kế hoạch Nguyệt Nhãn của hắn. "
        },
        {
            name: "Gumball",
            img: 18,
            views: 2370,
            genre: 'Ecchi, Action',
            producer: 'TV Tokyo',
            video: "https://www.youtube.com/watch?v=xvks9zNnNHc",
            description: "Phần Naruto Shippuuden Vietsub thì tất cả những người bạn của Naruto đều đã trưởng thành, là những Jounin , có những người đã rất nổi trội. Không giống như phần đầu khi chỉ đóng vai trò phụ, tổ chức Akatsuki chiếm lấy vai trò đối nghịch chính trong tham vọng thống trị thế giới. Sau này chính Tobi và Obito đã khơi ngòi chiến tranh Ninja lần thứ tư giữa Ngũ Đại Quốc và Akatsuki mà người đứng phía sau giật dây là Uchiha Madara nhằm thực hiện kế hoạch Nguyệt Nhãn của hắn. "
        },
        {
            name: "Stand By Me",
            img: 19,
            views: 2300,
            genre: 'Ecchi, Action',
            producer: 'TV Tokyo',
            video: "https://www.youtube.com/watch?v=_rNFefxiLv0",
            description: "Phần Naruto Shippuuden Vietsub thì tất cả những người bạn của Naruto đều đã trưởng thành, là những Jounin , có những người đã rất nổi trội. Không giống như phần đầu khi chỉ đóng vai trò phụ, tổ chức Akatsuki chiếm lấy vai trò đối nghịch chính trong tham vọng thống trị thế giới. Sau này chính Tobi và Obito đã khơi ngòi chiến tranh Ninja lần thứ tư giữa Ngũ Đại Quốc và Akatsuki mà người đứng phía sau giật dây là Uchiha Madara nhằm thực hiện kế hoạch Nguyệt Nhãn của hắn. "
        },
        {
            name: "Adventure Time",
            img: 20,
            views: 2330,
            genre: 'Ecchi, Action',
            producer: 'TV Tokyo',
            video: "https://www.youtube.com/watch?v=48UwWuH2_JQ",
            description: "Phần Naruto Shippuuden Vietsub thì tất cả những người bạn của Naruto đều đã trưởng thành, là những Jounin , có những người đã rất nổi trội. Không giống như phần đầu khi chỉ đóng vai trò phụ, tổ chức Akatsuki chiếm lấy vai trò đối nghịch chính trong tham vọng thống trị thế giới. Sau này chính Tobi và Obito đã khơi ngòi chiến tranh Ninja lần thứ tư giữa Ngũ Đại Quốc và Akatsuki mà người đứng phía sau giật dây là Uchiha Madara nhằm thực hiện kế hoạch Nguyệt Nhãn của hắn. "
        },
        {
            name: "Inu Yasha",
            img: 21,
            views: 1750,
            genre: 'Ecchi, Action',
            producer: 'TV Tokyo',
            video: "https://www.youtube.com/watch?v=k6Crw6OMYdY",
            description: "Phần Naruto Shippuuden Vietsub thì tất cả những người bạn của Naruto đều đã trưởng thành, là những Jounin , có những người đã rất nổi trội. Không giống như phần đầu khi chỉ đóng vai trò phụ, tổ chức Akatsuki chiếm lấy vai trò đối nghịch chính trong tham vọng thống trị thế giới. Sau này chính Tobi và Obito đã khơi ngòi chiến tranh Ninja lần thứ tư giữa Ngũ Đại Quốc và Akatsuki mà người đứng phía sau giật dây là Uchiha Madara nhằm thực hiện kế hoạch Nguyệt Nhãn của hắn. "
        },
        {
            name: "MasouGakuen HxH",
            img: 22,
            views: 870,
            genre: 'Ecchi, Action',
            producer: 'TV Tokyo',
            video: "",
            description: "Phần Naruto Shippuuden Vietsub thì tất cả những người bạn của Naruto đều đã trưởng thành, là những Jounin , có những người đã rất nổi trội. Không giống như phần đầu khi chỉ đóng vai trò phụ, tổ chức Akatsuki chiếm lấy vai trò đối nghịch chính trong tham vọng thống trị thế giới. Sau này chính Tobi và Obito đã khơi ngòi chiến tranh Ninja lần thứ tư giữa Ngũ Đại Quốc và Akatsuki mà người đứng phía sau giật dây là Uchiha Madara nhằm thực hiện kế hoạch Nguyệt Nhãn của hắn. "
        },
        {
            name: "Overload",
            img: 23,
            views: 1700,
            genre: 'Ecchi, Action',
            producer: 'TV Tokyo',
            video: "https://www.youtube.com/watch?v=XVMdJuRQEBQ",
            description: "Phần Naruto Shippuuden Vietsub thì tất cả những người bạn của Naruto đều đã trưởng thành, là những Jounin , có những người đã rất nổi trội. Không giống như phần đầu khi chỉ đóng vai trò phụ, tổ chức Akatsuki chiếm lấy vai trò đối nghịch chính trong tham vọng thống trị thế giới. Sau này chính Tobi và Obito đã khơi ngòi chiến tranh Ninja lần thứ tư giữa Ngũ Đại Quốc và Akatsuki mà người đứng phía sau giật dây là Uchiha Madara nhằm thực hiện kế hoạch Nguyệt Nhãn của hắn. "
        },
        {
            name: "God Eater",
            img: 24,
            views: 250,
            genre: 'Ecchi, Action',
            producer: 'TV Tokyo',
            video: "https://www.youtube.com/watch?v=JnKK1wsSjFQ",
            description: "Phần Naruto Shippuuden Vietsub thì tất cả những người bạn của Naruto đều đã trưởng thành, là những Jounin , có những người đã rất nổi trội. Không giống như phần đầu khi chỉ đóng vai trò phụ, tổ chức Akatsuki chiếm lấy vai trò đối nghịch chính trong tham vọng thống trị thế giới. Sau này chính Tobi và Obito đã khơi ngòi chiến tranh Ninja lần thứ tư giữa Ngũ Đại Quốc và Akatsuki mà người đứng phía sau giật dây là Uchiha Madara nhằm thực hiện kế hoạch Nguyệt Nhãn của hắn. "
        },
        {
            name: "Ajin",
            img: 25,
            views: 5300,
            genre: 'Ecchi, Action',
            producer: 'TV Tokyo',
            video: "https://www.youtube.com/watch?v=dOqYibiWIec",
            description: "Phần Naruto Shippuuden Vietsub thì tất cả những người bạn của Naruto đều đã trưởng thành, là những Jounin , có những người đã rất nổi trội. Không giống như phần đầu khi chỉ đóng vai trò phụ, tổ chức Akatsuki chiếm lấy vai trò đối nghịch chính trong tham vọng thống trị thế giới. Sau này chính Tobi và Obito đã khơi ngòi chiến tranh Ninja lần thứ tư giữa Ngũ Đại Quốc và Akatsuki mà người đứng phía sau giật dây là Uchiha Madara nhằm thực hiện kế hoạch Nguyệt Nhãn của hắn. "
        },
        {
            name: "Gurren Lagann",
            img: 26,
            views: 230,
            genre: 'Ecchi, Action',
            producer: 'TV Tokyo',
            video: "https://www.youtube.com/watch?v=aNQvLECht08",
            description: "Phần Naruto Shippuuden Vietsub thì tất cả những người bạn của Naruto đều đã trưởng thành, là những Jounin , có những người đã rất nổi trội. Không giống như phần đầu khi chỉ đóng vai trò phụ, tổ chức Akatsuki chiếm lấy vai trò đối nghịch chính trong tham vọng thống trị thế giới. Sau này chính Tobi và Obito đã khơi ngòi chiến tranh Ninja lần thứ tư giữa Ngũ Đại Quốc và Akatsuki mà người đứng phía sau giật dây là Uchiha Madara nhằm thực hiện kế hoạch Nguyệt Nhãn của hắn. "
        },
        {
            name: "Danmachi",
            img: 27,
            views: 1300,
            genre: 'Ecchi, Action',
            producer: 'TV Tokyo',
            video: "https://www.youtube.com/watch?v=dPFq1-WGVM8",
            description: "Phần Naruto Shippuuden Vietsub thì tất cả những người bạn của Naruto đều đã trưởng thành, là những Jounin , có những người đã rất nổi trội. Không giống như phần đầu khi chỉ đóng vai trò phụ, tổ chức Akatsuki chiếm lấy vai trò đối nghịch chính trong tham vọng thống trị thế giới. Sau này chính Tobi và Obito đã khơi ngòi chiến tranh Ninja lần thứ tư giữa Ngũ Đại Quốc và Akatsuki mà người đứng phía sau giật dây là Uchiha Madara nhằm thực hiện kế hoạch Nguyệt Nhãn của hắn. "
        },
        {
            name: "Gintama",
            img: 28,
            views: 2100,
            genre: 'Ecchi, Action',
            producer: 'TV Tokyo',
            video: "https://www.youtube.com/watch?v=EiU4RP84xWc",
            description: "Phần Naruto Shippuuden Vietsub thì tất cả những người bạn của Naruto đều đã trưởng thành, là những Jounin , có những người đã rất nổi trội. Không giống như phần đầu khi chỉ đóng vai trò phụ, tổ chức Akatsuki chiếm lấy vai trò đối nghịch chính trong tham vọng thống trị thế giới. Sau này chính Tobi và Obito đã khơi ngòi chiến tranh Ninja lần thứ tư giữa Ngũ Đại Quốc và Akatsuki mà người đứng phía sau giật dây là Uchiha Madara nhằm thực hiện kế hoạch Nguyệt Nhãn của hắn. "
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

app.controller('ViewController', function ($scope, $rootScope, $state, youtubeEmbedUtils) {
    $scope.video = {};
    $scope.episode = [2300,4500,1500,560,360,980,1400,630,890,750,742];
    function checkMovie(id) {
        angular.forEach($rootScope.data, function(val){
            // console.log(val.img);
           if(val.img == id) {
              $scope.video = val;
           }
               
        });
    }
    checkMovie($state.params.id);
    // $scope.theBestVideo = 'sMKoNBRZM1M';
    $scope.theBestVideo = youtubeEmbedUtils.getIdFromURL($scope.video.video);
});
