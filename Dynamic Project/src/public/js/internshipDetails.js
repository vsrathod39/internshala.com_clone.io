let button = document.getElementsByTagName("button");
button[0].onclick = function () {
  if(localStorage.getItem("bearerToken"))
  {
    console.log(localStorage.getItem("bearerToken"));
    window.location.href = "/pages/resume";
  }
  else
  {
      document.getElementById("login_modal_popup").style.display = "block";
      document.getElementById("login_modal_popup").innerHTML = loginModal();
      document.getElementsByTagName("body")[0].setAttribute("id", "fixedBody");
      document.getElementById("loginGoogle").addEventListener("click", loginWithGoogle);
      core();
      function loginWithGoogle() {
      console.log("go");
      window.location.href = "http://localhost:2345/auth/google";
    }
  }
};

// const internshipsDetails = document.getElementById("internshipsDetails");
//     let internshipsList = JSON.parse(localStorage.getItem("internshipDatabaseList"));
//     console.log("Internship Database" , internshipsList);

// showInternships();
// async function showInternships(){

//     internshipsDetails.innerHeight = null;
//     // const id = internshipsList[internshipsList.length - 1];

//     // const res = await fetch(`http://localhost:5000/api/internships/${id}`);
// 	// const resData = await res.json();
// 	// console.log("ResData" , resData);

//     displayJD( resData );
// }

function displayJD(product) {
  product = JSON.parse(product);
  let heading = document.getElementById("heading");
  if (product.internships_with_job == "" && product.work_form_home == "No")
    heading.innerHTML = `${product.role} internship at ${product.company_name}`;
  if (product.internships_with_job == "" && product.work_form_home == "Yes")
    heading.innerHTML = `${product.role} work from home internship at ${product.company_name}`;
  else if (
    product.internships_with_job != "" &&
    product.work_form_home == "Yes"
  ) {
    heading.innerHTML = `${product.role} work from home job/internship at ${product.company_name}`;
  } else if (
    product.internships_with_job != "" &&
    product.work_form_home == "No"
  )
    heading.innerHTML = `${product.role} job/internship at ${product.company_name}`;
  let role = document.getElementById("Role");
  role.innerText = product.role;
  let companyName = document.getElementById("companyName");
  companyName.innerText = product.company_name;
  let wfh = document.getElementById("wfh");
  if (product.work_form_home == "Yes") {
    wfh.innerText = "Work From Home";
  } else wfh.style.display = "none";
  let briefDesc = document.querySelectorAll(".detailOfIntern > p");
  briefDesc[1].innerText = `${product.duration} months`;
  briefDesc[2].innerText = `${product.stipend} /month`;
  briefDesc[3].innerText = product.applyby;
  let applicants = document.getElementById("applicants");
  applicants.innerText = `${product.total_applied} applicants`;
  let aboutHead = document.getElementById("about");
  aboutHead.innerText = `About ${product.company_name}`;
  let aboutComp = document.getElementById("aboutCompany");
  aboutComp.innerHTML = product.company_about;
  let aboutWorkHead = document.getElementById("aboutWork");
  if (product.work_from_home == "Yes") {
    aboutWorkHead.innerText = "About the work from home job/internship";
  } else {
    aboutWorkHead.innerText = "About the internship";
  }

  let workDescription = document.getElementById("workDes");
  let workDesList = document.querySelector("#workDes > ol");
  for (let i = 0; i < product.about_internship.length; i++) {
    let list = document.createElement("li");
    list.innerText = product.about_internship[i];
    workDesList.appendChild(list);
  }
  let skills = document.getElementById("skills");
  for (let j = 0; j < product.skills.length; j++) {
    let skill = document.createElement("div");
    skill.innerText = product.skills[j];
    skills.appendChild(skill);
  }
  let whoCanApply = document.getElementById("whoApply");
  let whoCanApplyList = document.querySelector("#whoApply > ol");
  for (let i = 0; i < product.who_can_apply.length; i++) {
    let list = document.createElement("li");
    list.innerText = product.who_can_apply[i];
    whoCanApplyList.appendChild(list);
  }
  let perks = document.getElementById("perks");
  for (let j = 0; j < product.perks.length; j++) {
    let perk = document.createElement("div");
    perk.innerText = product.perks[j];
    perks.appendChild(perk);
  }
  let openings = document.getElementById("openings");
  openings.innerHTML = product.number_of_openings;
  let icon = document.querySelector("#icon > img");
  icon.src = product.company_icon;
}
