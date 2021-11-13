function loginModal(){
    return `
    <div id="loginSec">
        <div id="loginDiv">
            <i id="closeLogin_modal" class='bx bx-x'></i>
            <div id="userCat">
                <div class="textCenter">
                    Student
                </div>
                <div class="textCenter">
                    Employer / T&P
                </div>
            </div>
            <div class="textCenter" id="loginGoogle">
                <img src="https://internshala.com/static/images/login/google_logo.png">
                <h4>Login with Google</h4>
            </div>
            <div id="horStroke">

            </div>
            <div class="textCenter" id="opt">
                <p>OR</p>
            </div>
            <form id="logInForm">
                <div class="details1">
                    <label>Email</label>
                    <input placeholder="vivek@example.com"/>
                </div>
                <div class="details1">
                    <label>Password</label>
                    <input placeholder="Must be at least 6 characters" type="password"/>
                </div>
                <p id="tc"><span>Forgot password?</span></p>
                <button class="textCenter" type="submit">Login</button>
            </form>
            <p id="msg">New to Internshala? Register (<span>Student</span> / <span>Company</span>)</p>
        </div>
    </div>`
}
export default loginModal;