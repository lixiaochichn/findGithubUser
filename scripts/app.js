$(function () {




    let data = {
        client_id: '85fb7d41bc18a935b161',
        client_secret: '56f832136a7972de2085aa3f75f6a383a48f45ae'
    };

    let pause;
    let url = 'https://api.github.com/users/lixiaochichn';

    let $userinput = $('.userinput');

    $userinput.on('keyup', function () {

        if ($userinput.val().length === 0) {
            userclear();
            reposclear();
            return;
        };




        clearTimeout(pause);

        pause = setTimeout(async function getJson() {
            console.log('aaa');
            $.ajax({
                url: `https://api.github.com/users/${$userinput.val()}`,
                data
            }).then(function (user) {
                showuser(user);
            }).catch(function (error) {
                console.log(error);
                userclear();
            });

            $.ajax({
                url: `https://api.github.com/users/${$userinput.val()}/repos`,
                data
            }).then(function (repos) {
                showrepos(repos);
            }).catch(function (repos) {
                console.log(repos);
                reposclear();
            });

            console.log(`A${data}`);


        }, 300);





        function reposclear() {
            $('.panel').html('');
        };

        function userclear() {
            $('.usercard').html('');
        };

        function showrepos(repos) {
            console.log(repos);
                $('.panel').html(`<p class="panel-heading"><span><i class="fa fa-bars" aria-hidden="true"></i></span> PUBLIC REPOS</p>`);
            repos.map(function (repo) {
                $('.panel').append(`<a  href="${repo.html_url}" class="panel-block">
                <span class="panel-icon"><i class="fa fa-book"></i></span>
                ${repo.name}<span class="star-icon">${repo.stargazers_count}<i class="fa fa-star"></i></span></a>`);
            });
        }

        function showuser(user) {
            console.log(user);
            $('.usercard').html(`<div class="card">
    <div class="card-content">
        <div class="media">
            <img class="userimage" src="${user.avatar_url}" alt="userImage">
        </div>
    </div>


    <nav class="level">
        <div class="level-item has-text-centered">
            <div>
                <p class="heading">public repos</p>
                <p class="title">${user.public_repos}</p>
            </div>
        </div>
        <div class="level-item has-text-centered">
            <div>
                <p class="heading">Following</p>
                <p class="title">${user.following}</p>
            </div>
        </div>
        <div class="level-item has-text-centered">
            <div>
                <p class="heading">Followers</p>
                <p class="title">${user.followers}</p>
            </div>
        </div>
        <div class="level-item has-text-centered">
            <div>
                <p class="heading">LOCATION</p>
                <p class="title">${user.location}</p>
            </div>
        </div>
    </nav>

    <footer class="card-footer">
    <a href="${user.html_url}" class="card-footer-item githubhome">
    <span class="githubcat"><i class="fa fa-github-alt" aria-hidden="true"></i></span>
    Github主页</a>

    </footer>
</div>`);
        };



    })





    console.log(`      ___           ___           ___           ___     
     /\\__\\         /\\__\\         /\\__\\         /\\  \\    
    /:/  /        /:/  /        /::|  |        \\:\\  \\   
   /:/__/        /:/  /        /:|:|  |         \\:\\  \\  
  /::\\  \\ ___   /:/  /  ___   /:/|:|  |__       /::\\  \\ 
 /:/\\:\\  /\\__\\ /:/__/  /\\__\\ /:/ |:| /\\__\\     /:/\\:\\__\\
 \\/__\\:\\/:/  / \\:\\  \\ /:/  / \\/__|:|/:/  /    /:/  \\/__/
      \\::/  /   \\:\\  /:/  /      |:/:/  /    /:/  /     
      /:/  /     \\:\\/:/  /       |::/  /     \\/__/      
     /:/  /       \\::/  /        /:/  /                 
     \\/__/         \\/__/         \\/__/                  
\n李晓驰(苏州)，应聘前端开发工程师 lixiaochichn@gmail.com
`);

})