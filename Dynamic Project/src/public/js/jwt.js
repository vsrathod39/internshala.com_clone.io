function login_status_check() {
    if (localStorage.getItem("logedin_user")) {
        const logedin_user = JSON.parse(localStorage.getItem("logedin_user"));
        document.getElementById("nameLogo_icon").innerText = logedin_user.user.first_name[0]; // change name logo icon with user first_name first letter
        // document.getElementById("hamburger_nameLogo_icon").innerText = logedin_user.user.first_name[0];
        document.getElementById("register_btn").style.display = "none"; // hide register button
        document.getElementById("hamburger_login").style.display = "none";
        document.getElementById("hamburger_user_name").innerText = logedin_user.user.first_name;
        document.getElementById("hamburger_user_email").innerText = logedin_user.user.email;
        document.getElementById("huberberg").style.height = "70vh";
    } else {
        document.getElementById("bookmark_icon").style.display = "none"; // hide/shows navbar bookmark icon
        document.getElementById("message_icon").style.display = "none"; // hide/shows navbar message icon
        document.getElementById("post_login_views").style.display = "none"; // hide/shows user name logo icon
        document.getElementById("hamburger_logout").style.display = "none"; // hide/shows logout icon in hamburger
        document.getElementById("logout_icon").style.display = "none"; // hide/shows logout icon in non-mobile view
        document.getElementById("hamburger_useer_details").style.display = "none";
        document.getElementById("hamburger_rating").style.display = "none";
        document.getElementById("logout_icon").style.display = "none";
        console.log("else");
    };
};
function desktop_login_status_check() {
    if (localStorage.getItem("logedin_user")) {
        const logedin_user = JSON.parse(localStorage.getItem("logedin_user"));
        console.log(logedin_user);
        document.getElementById("nameLogo_icon").innerText = logedin_user.user.first_name[0]; // change name logo icon with user first_name first letter
        document.getElementById("register_btn").style.display = "none"; // hide register button
        document.getElementById("logIn_button").style.display = "none";
        // document.getElementById("hamburger_user_name").innerText = "Vikas";
        // document.getElementById("hamburger_user_email").innerText = "v@gmail.com";
        // document.getElementById("huberberg").style.height = "70vh";
        document.getElementById("logout_icon").addEventListener("click", () => {
            localStorage.removeItem("logedin_user");
            localStorage.removeItem("bearerToken");
            window.location.href = "/";
        });
    } else {
        document.getElementById("bookmark_icon").style.display = "none"; // hide/shows navbar bookmark icon
        document.getElementById("message_icon").style.display = "none"; // hide/shows navbar message icon
        document.getElementById("post_login_views").style.display = "none"; // hide/shows user name logo icon
        // document.getElementById("hamburger_logout").style.display = "none"; // hide/shows logout icon in hamburger
        document.getElementById("logout_icon").style.display = "none"; // hide/shows logout icon in non-mobile view
        // document.getElementById("hamburger_useer_details").style.display = "none";
        // document.getElementById("hamburger_rating").style.display = "none";
        document.getElementById("logout_icon").style.display = "none";
        console.log("else");
    };
};