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

        }, 300);


        function userclear() {
            $('.usercard').html('');
        };

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





})