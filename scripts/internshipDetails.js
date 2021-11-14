let button = document.getElementsByTagName("button");
button[0].onclick = function() {
    window.location.href = "../pages/resume.html";
}

const internshipsDetails = document.getElementById("internshipsDetails");
    let internshipsList = JSON.parse(localStorage.getItem("internshipDatabaseList"));
    console.log("Internship Database" , internshipsList);
    
    showInternships();
    async function showInternships(){
        
        internshipsDetails.innerHeight = null;
        const id = internshipsList[internshipsList.length - 1];

        const res = await fetch(`http://localhost:5000/api/internships/${id}`);
		const resData = await res.json();
		console.log("ResData" , resData);

        displayJD( resData );
    }

    function displayJD(jobDesc){
        let heading = document.getElementById("heading");
        if(jobDesc.internships_with_job == "" && jobDesc.work_form_home == "No")
        heading.innerHTML = `${jobDesc.role} internship at ${jobDesc.company_name}`;
        if(jobDesc.internships_with_job == "" && jobDesc.work_form_home == "Yes")
        heading.innerHTML = `${jobDesc.role} work from home internship at ${jobDesc.company_name}`;
        else if(jobDesc.internships_with_job != "" && jobDesc.work_form_home == "Yes")
        {
            heading.innerHTML = `${jobDesc.role} work from home job/internship at ${jobDesc.company_name}`;
        }
        else if(jobDesc.internships_with_job != "" && jobDesc.work_form_home == "No")
        heading.innerHTML = `${jobDesc.role} job/internship at ${jobDesc.company_name}`;
        let role = document.getElementById("Role");
        role.innerText = jobDesc.role;
        let companyName = document.getElementById("companyName");
        companyName.innerText = jobDesc.company_name;
        let wfh = document.getElementById("wfh")
        if(jobDesc.work_form_home == "Yes")
        {
            wfh.innerText = "Work From Home"
        }
        else
        wfh.style.display = "none";
        let briefDesc = document.querySelectorAll(".detailOfIntern > p")
        briefDesc[1].innerText = `${jobDesc.duration} months`
        briefDesc[2].innerText = `${jobDesc.stipend} /month`
        briefDesc[3].innerText = jobDesc.applyby;
        let applicants = document.getElementById("applicants");
        applicants.innerText = `${jobDesc.total_applied} applicants`;
        let aboutHead = document.getElementById("about");
        aboutHead.innerText = `About ${jobDesc.company_name}`
        let aboutComp = document.getElementById("aboutCompany");
        aboutComp.innerHTML = jobDesc.company_about;
        let aboutWorkHead = document.getElementById("aboutWork");
        if(jobDesc.work_from_home == "Yes")
        {
            aboutWorkHead.innerText = "About the work from home job/internship";
        }
        else
        {
            aboutWorkHead.innerText = "About the internship";
        }
        
        let workDescription = document.getElementById("workDes");
        let workDesList = document.querySelector("#workDes > ol")
        for(let i = 0; i<jobDesc.about_internship.length; i++)
        {
            let list = document.createElement("li");
            list.innerText = jobDesc.about_internship[i];
            workDesList.appendChild(list);
        }
        let skills = document.getElementById("skills");
        for(let j = 0; j<jobDesc.skills.length; j++)
        {
            let skill = document.createElement("div");
            skill.innerText = jobDesc.skills[j];
            skills.appendChild(skill);
        }
        let whoCanApply = document.getElementById("whoApply");
        let whoCanApplyList = document.querySelector("#whoApply > ol")
        for(let i = 0; i<jobDesc.who_can_apply.length; i++)
        {
            let list = document.createElement("li");
            list.innerText = jobDesc.who_can_apply[i];
            whoCanApplyList.appendChild(list);
        }
        let perks = document.getElementById("perks");
        for(let j = 0; j<jobDesc.perks.length; j++)
        {
            let perk = document.createElement("div");
            perk.innerText = jobDesc.perks[j];
            perks.appendChild(perk);
        }
        let openings = document.getElementById("openings");
        openings.innerHTML = jobDesc.number_of_openings;
        let icon = document.querySelector("#icon > img");
        icon.src = jobDesc.company_icon;
    }