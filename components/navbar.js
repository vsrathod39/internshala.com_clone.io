function navbar(){
    return `<nav>
    <section id="brandLogo">
        <img src="https://internshala.com/static/images/common/new_internshala_logo.svg" alt="brandLogo">
    </section>
    <section id="services">
        <ul>
            <li>
                <span>Internships</span>
                <ul>
                    <li>
                        <p class="spanTag">Location</p>
                        <ul>
                            <li>Work From Home</li>
                            <li>Internship in Bangalore</li>
                            <li>Internship in Delhi</li>
                            <li>Internship in Pune</li>
                        </ul>
                    </li>
                    <li>
                        <p class="spanTag">Profile</p>
                        <ul>
                            <li>Computer Science Internship</li>
                            <li>Marketing Internship</li>
                            <li>Finance Internship</li>
                        </ul>
                    </li>
                    <li>
                        <p class="spanTag">Category</p>
                        <ul>
                            <li>Engineering Internship</li>
                            <li>MBA Internship</li>
                            <li>Part-Time Jobs/Internship</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
        <ul>
            <li>
                <span>Online Trainings</span><span class="hotText">OFFER</span>
                <ul>
                    <li>Programming</li>
                    <li>Businesss & Management</li>
                    <li>Data Science</li>
                    <li>Language</li>
                </ul>
            </li>
        </ul>
        <ul>
            <li>Fresher Jobs</li>
        </ul>
        <ul>
            <li><button id="logIn_button">Login</button></li>
        </ul>
        <ul>
            <li>
                <span id="register_button">Register</span>
                <ul>
                    <li>As a student</li>
                    <li>As an employer</li>
                </ul>
            </li>
        </ul>
    </section>
</nav>`
}
export default navbar;