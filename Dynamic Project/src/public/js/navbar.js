function navbar() {
    return `
        <section id="brandLogo">
            <img id="huberbergMenu" src="https://internshala.com/static/images/icons/hamburger-menu-key-new.svg" alt="menu">
            <img id="intershalaLogo" src="https://internshala.com/static/images/common/new_internshala_logo.svg" alt="brandLogo">
        </section>
        <section id="services">
            <ul>
                <li>
                    <span>Internships<img id="upDownArrow" src="/images/icons/down-arrow-solid-24.png" alt="dropDownArrow"></span>
                    <ul>
                        <li>
                            <p class="spanTag navbar_ul_ul_ul">Location</p>
                            <ul>
                                <li class=" navbar_ul_ul_ul"><a href="http://localhost:2345/internships?work_form_home=work_form_home">Work From Home</a></li>
                                <li class=" navbar_ul_ul_ul"><a href="http://localhost:2345/internships?location=Bangalore">Internship in Bangalore</a></li>
                                <li class=" navbar_ul_ul_ul"><a href="http://localhost:2345/internships?location=Delhi">Internship in Delhi</a></li>
                                <li class=" navbar_ul_ul_ul"><a href="http://localhost:2345/internships?location=Pune">Internship in Pune</a></li>
                            </ul>
                        </li>
                        <li>
                            <p class="spanTag navbar_ul_ul_ul">Profile</p>
                            <ul>
                                <li class=" navbar_ul_ul_ul">Computer Science Internship</li>
                                <li class=" navbar_ul_ul_ul">Marketing Internship</li>
                                <li class=" navbar_ul_ul_ul">Finance Internship</li>
                            </ul>
                        </li>
                        <li>
                            <p class="spanTag navbar_ul_ul_ul">Category</p>
                            <ul>
                                <li class=" navbar_ul_ul_ul">Engineering Internship</li>
                                <li class=" navbar_ul_ul_ul">MBA Internship</li>
                                <li class=" navbar_ul_ul_ul"><a href="http://localhost:2345/internships?part_time=true">Part-Time Jobs/Internship</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul>
                <li>
                    <span>Online Trainings</span><span class="hotText">OFFER</span><img id="upDownArrow" src="/images/icons/down-arrow-solid-24.png" alt="dropDownArrow">
                    <ul>
                        <li>
                            <p class="spanTag navbar_ul_ul_ul">Programming</p>
                            <ul id="navbar_nested_dropDown">
                                <li class=" navbar_ul_ul_ul"><a href="http://localhost:2345/internships?work_form_home=work_form_home">Web Development</a></li>
                                <li class=" navbar_ul_ul_ul"><a href="http://localhost:2345/internships?location=Bangalore">Ethical Hacking</a></li>
                                <li class=" navbar_ul_ul_ul"><a href="http://localhost:2345/internships?location=Delhi">Core Java</a></li>
                                <li class=" navbar_ul_ul_ul"><a href="http://localhost:2345/internships?location=Pune">Blockchain</a></li>
                            </ul>
                        </li>
                        <li>
                            <p class="spanTag navbar_ul_ul_ul">Business & Management</p>
                            <ul>
                                <li class=" navbar_ul_ul_ul">Digital Marketing</li>
                                <li class=" navbar_ul_ul_ul">Advance Excel</li>
                                <li class=" navbar_ul_ul_ul">Business Communication Skills</li>
                            </ul>
                        </li>
                        <li>
                            <p class="spanTag navbar_ul_ul_ul">Core Engineering</p>
                            <ul>
                                <li class=" navbar_ul_ul_ul">AutoCAD</li>
                                <li class=" navbar_ul_ul_ul">Autocad 3D</li>
                                <li class=" navbar_ul_ul_ul"><a href="http://localhost:2345/internships?part_time=true">Fusion 360</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul>
                <li><a href="http://localhost:2345/internships">Fresher Jobs</a></li>
            </ul>
            <ul id="bookmark_icon">
                <li><img src="https://img.icons8.com/fluency-systems-regular/24/000000/bookmark-ribbon--v2.png"/></li>
            </ul>
            <ul id="message_icon">
                <li><img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/24/000000/external-message-chat-flatart-icons-outline-flatarticons-5.png"/></li>
            </ul>
            <ul id="post_login_views">
                <li>
                    <span id="nameLogo_icon"></span>
                </li>
            </ul>
            <ul id="logout_icon">
                <li>
                    <img src="https://img.icons8.com/small/24/000000/logout-rounded-up.png"/>
                </li>
            </ul>
            <ul id="login_btn">
                <li><button id="logIn_button">Login</button></li>
            </ul>
            <ul id="register_btn">
                <li>
                    <span id="register_button">Register<img id="upDownArrow" src="/images/icons/down-arrow-solid-24.png" alt="dropDownArrow"></span>
                    <ul>
                        <li class=" navbar_ul_ul_ul" id="register_as_student"><a href="http://localhost:2345/register?role=student">As a student</a></li>
                        <li class=" navbar_ul_ul_ul" id="register_as_employer">As an employer</li>
                    </ul>
                </li>
            </ul>
        </section>`;
}

function huberberg() {
    return `<div id="hamburger_useer_details">
        <div id="hamburger_post_login_views">
            <p id="hamburger_nameLogo_icon"></p>
        </div>
        <div id="hamburger_user_personal_info">
            <p id="hamburger_user_name"></p>
            <p id="hamburger_user_email"></p>
        </div>
    </div>
    <div id="hamburger_rating">
        <div>
            <div>
                <img src="https://img.icons8.com/emoji/20/000000/star-emoji.png"/>
                <p>4.2</p>
            </div>
        </div>
        <div>
            <p>Know More</p>
        </div>
        <div>
            <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/10/000000/external-right-arrow-arrows-dreamstale-lineal-dreamstale-2.png"/>
        </div>
    </div>
    <div id="huberberg">

    <ul>
        <li>Internships</li>
        <li>Online Trainings<span class="hotText">OFFER</span></li>
        <li><a href="http://localhost:2345/internships?work_form_home=work_form_home">WFH Internships</a></li>
        <li><a href="http://localhost:2345/internships">Fressher Jobs</a></li>
        <li>Contact US</li>
    </ul>
    <ul id="hamburger_register_btn">
        <li>Register - As a Student</li>
        <li>Register - As an Employer</li>
        <li id="hamburger_login">Login</li>
    </ul>
    <ul>
        <li id="hamburger_logout">Logout</li>
    </ul>

</div>`
}