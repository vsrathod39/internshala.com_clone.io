
let checkedbrand = null;
let rangeValue = null;
var markedCheckbox = null;


// Display on checked Data
function onChecked() {
    rangeValue = document.getElementById("myRange").value;
    markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
        if(markedCheckbox.length > 0 && rangeValue >= 0){
            for (var checkbox of markedCheckbox) {  
                checkedbrand = checkbox.value;
                if(checkedbrand){
                    internships_div.innerHTML = null;
                    data.forEach(function(word) {
                        if(word.work_form_home == checkedbrand && ( word.parttime == checkedbrand  || word.stipend >= rangeValue || word.internships_with_job == checkedbrand ) ){

                            let {id, role , company_name , location , company_icon, work_form_home , parttime, startDate , duration, stipend, applyby, job_type ,internships_with_job} = word;
                            totalInternships_div.innerHTML = null;
                            
                            totalInternships_div.innerHTML = `<span>${++Product_count} Work from home/Internships</span>`;
                            
                            let x = "";
                            for (let i = 0; i < job_type.length; i++) {
                                x += "<div class='button_container1'>" + job_type[i] +"</div>";
                            }

                            let loc = "";
                            if(work_form_home === "Yes"){
                                loc = "Work From Home";
                            }
                            else{
                                loc = "<span>" + location + "</span>";
                            }
                            
                            let inside_div = document.createElement('div');
                            inside_div.innerHTML = `                                        
                            <div class="list_container1">
                                <div class="individual_internship_header">
                                    <div class="company">
                                        <div class="company_1">${role}</div>
                                        <div class="company_2" style="font-size: 14px;">${company_name}</div>
                                    </div>
                                    <div class="internship_logo">
                                        <img src = "${company_icon}">
                                    </div>
                                </div>
                                <div class="individual_internship_details">
                                    <div id="location_names">
                                        <span><i class="material-icons">add_location</i></span>
                                        ${loc}
                                    </div>
                                    <div class="internship_other_details_container">
                                        <div class="">
                                            <p><i></i>START DATE</p>
                                            <p>${startDate}</p>
                                        </div>
                                        <div class="">
                                            <p><i></i>DURATION</p>
                                            <p>${duration} Months</p>
                                        </div>
                                        <div class="">
                                            <p><i></i>STIPEND</p>
                                            <p>&#8377; ${stipend}/month</p>
                                        </div>
                                        <div class="">
                                            <p><i></i>APPLY BY</p>
                                            <p>${applyby}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="button_container" >

                                    <div class="button_container11">${x}</div>
                                    
                                    <a class="button_container2" onclick="getViewDetails(${id})">View details</a>
                                </div>
                            </div>`;
                        internships_div.appendChild(inside_div);
                        }
                        else if(word.parttime == checkedbrand && ( word.work_form_home == checkedbrand  || word.stipend >= rangeValue || word.internships_with_job == checkedbrand ) ){

                            let {id, role , company_name , location , company_icon, work_form_home , parttime, startDate , duration, stipend, applyby, job_type,internships_with_job} = word;
                            totalInternships_div.innerHTML = null;

                            totalInternships_div.innerHTML = `<span>${++Product_count} Part time/Internships</span>`;
                            let x = "";
                            for (let i = 0; i < job_type.length; i++) {
                                x += "<div class='button_container1'>" + job_type[i] +"</div>";
                            }
                            let loc = "";
                            if(work_form_home === "Yes"){
                                loc = "Work From Home";
                            }
                            else{
                                loc = "<span>" + location + "</span>";
                            }
                            
                            let inside_div = document.createElement('div');
                            inside_div.innerHTML = `
                            <div class="list_container1">
                                <div class="individual_internship_header">
                                    <div class="company">
                                        <div class="company_1">${role}</div>
                                        <div class="company_2" style="font-size: 14px;">${company_name}</div>
                                    </div>
                                    <div class="internship_logo">
                                        <img src = "${company_icon}">
                                    </div>
                                </div>
                                <div class="individual_internship_details">
                                    <div id="location_names">
                                        <span><i class="material-icons">add_location</i></span>
                                        ${loc}
                                    </div>
                                    <div class="internship_other_details_container">
                                        <div class="">
                                            <p><i></i>START DATE</p>
                                            <p>${startDate}</p>
                                        </div>
                                        <div class="">
                                            <p><i></i>DURATION</p>
                                            <p>${duration} Months</p>
                                        </div>
                                        <div class="">
                                            <p><i></i>STIPEND</p>
                                            <p>&#8377; ${stipend}/month</p>
                                        </div>
                                        <div class="">
                                            <p><i></i>APPLY BY</p>
                                            <p>${applyby}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="button_container" >

                                    <div class="button_container11">${x}</div>
                                    
                                    <a class="button_container2" onclick="getViewDetails(${id})">View details</a>
                                </div>
                                </div>                                      
                                `;
                                internships_div.appendChild(inside_div);
                        }
                        else if(word.stipend == checkedbrand && (  word.work_form_home >= rangeValue || word.parttime == checkedbrand || word.internships_with_job == checkedbrand ) ){

                            let {id, role , company_name , location , company_icon, work_form_home , parttime, startDate , duration, stipend, applyby, job_type,internships_with_job} = word;
                            totalInternships_div.innerHTML = null;

                            totalInternships_div.innerHTML = `<span>${++Product_count} Stipend/Internships</span>`;
                            let x = "";
                            for (let i = 0; i < job_type.length; i++) {
                                x += "<div class='button_container1'>" + job_type[i] +"</div>";
                            }
                            let loc = "";
                            if(work_form_home === "Yes"){
                                loc = "Work From Home";
                            }
                            else{
                                loc = "<span>" + location + "</span>";
                            }

                            let inside_div = document.createElement('div');
                            inside_div.innerHTML = `                                        
                            <div class="list_container1">
                                <div class="individual_internship_header">
                                    <div class="company">
                                        <div class="company_1">${role}</div>
                                        <div class="company_2" style="font-size: 14px;">${company_name}</div>
                                    </div>
                                    <div class="internship_logo">
                                        <img src = "${company_icon}">
                                    </div>
                                </div>
                                <div class="individual_internship_details">
                                    <div id="location_names">
                                        <span><i class="material-icons">add_location</i></span>
                                        ${loc}
                                    </div>
                                    <div class="internship_other_details_container">
                                        <div class="">
                                            <p><i></i>START DATE</p>
                                            <p>${startDate}</p>
                                        </div>
                                        <div class="">
                                            <p><i></i>DURATION</p>
                                            <p>${duration} Months</p>
                                        </div>
                                        <div class="">
                                            <p><i></i>STIPEND</p>
                                            <p>&#8377; ${stipend}/month</p>
                                        </div>
                                        <div class="">
                                            <p><i></i>APPLY BY</p>
                                            <p>${applyby}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="button_container" >

                                    <div class="button_container11">${x}</div>
                                    
                                    <a class="button_container2" onclick="getViewDetails(${id})">View details</a>
                                </div>
                                </div>                                        
                                `;
                                internships_div.appendChild(inside_div);
                        }
                        else if(word.internships_with_job == checkedbrand && ( word.parttime == checkedbrand  || word.stipend >= rangeValue || word.work_form_home == checkedbrand ) ){

                            let {id, role , company_name , location , company_icon, work_form_home , parttime, startDate , duration, stipend, applyby, job_type,internships_with_job} = word;
                            totalInternships_div.innerHTML = null;

                            totalInternships_div.innerHTML = `<span>${++Product_count} Internships with Job/Internships</span>`;
                            let x = "";
                            for (let i = 0; i < job_type.length; i++) {
                                x += "<div class='button_container1'>" + job_type[i] +"</div>";
                            }
                            let loc = "";
                            if(work_form_home === "Yes"){
                                loc = "Work From Home";
                            }
                            else{
                                loc = "<span>" + location + "</span>";
                            }

                            let inside_div = document.createElement('div');
                            inside_div.innerHTML = `                                        
                            <div class="list_container1">
                                <div class="individual_internship_header">
                                    <div class="company">
                                        <div class="company_1">${role}</div>
                                        <div class="company_2" style="font-size: 14px;">${company_name}</div>
                                    </div>
                                    <div class="internship_logo">
                                        <img src = "${company_icon}">
                                    </div>
                                </div>
                                <div class="individual_internship_details">
                                    <div id="location_names">
                                        <span><i class="material-icons">add_location</i></span>
                                        ${loc}
                                    </div>
                                    <div class="internship_other_details_container">
                                        <div class="">
                                            <p><i></i>START DATE</p>
                                            <p>${startDate}</p>
                                        </div>
                                        <div class="">
                                            <p><i></i>DURATION</p>
                                            <p>${duration} Months</p>
                                        </div>
                                        <div class="">
                                            <p><i></i>STIPEND</p>
                                            <p>&#8377; ${stipend}/month</p>
                                        </div>
                                        <div class="">
                                            <p><i></i>APPLY BY</p>
                                            <p>${applyby}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="button_container" >

                                    <div class="button_container11">${x}</div>
                                    
                                    <a class="button_container2" onclick="getViewDetails(${id})">View details</a>
                                </div>
                                </div>                                        
                                `;
                                internships_div.appendChild(inside_div);
                        }
                        else{
                            totalInternships_div.innerHTML = `<span>${Product_count} Internships</span>`;
                        }
                    });
                    Product_count = 0;
                }
            }
            Product_count = 0;
        }
        else if(rangeValue > 0){
            internships_div.innerHTML = null;
            data.forEach(function(word) {
                if( word.stipend >= rangeValue){
                    totalInternships_div.innerHTML = `<span>${++Product_count} Stipend/Internships</span>`;
                    let {id, role , company_name , location , company_icon, work_form_home,internships_with_job ,parttime, startDate , duration, stipend, applyby, job_type} = word;
                    let inside_div = document.createElement('div');

                    let x = "";
                    for (let i = 0; i < job_type.length; i++) {
                        x += "<div class='button_container1'>" + job_type[i] +"</div>";
                    }
                    let loc = "";
                    if(work_form_home === "Yes"){
                        loc = "Work From Home";
                    }
                    else{
                        loc = "<span>" + location + "</span>";
                    }

                    inside_div.innerHTML = `
                    <div class="list_container1">
                        <div class="individual_internship_header">
                            <div class="company">
                                <div class="company_1">${role}</div>
                                <div class="company_2" style="font-size: 14px;">${company_name}</div>
                            </div>
                            <div class="internship_logo">
                                <img src = "${company_icon}">
                            </div>
                        </div>
                        <div class="individual_internship_details">
                            <div id="location_names">
                                <span><i class="material-icons">add_location</i></span>
                                ${loc}
                            </div>
                            <div class="internship_other_details_container">
                                <div class="">
                                    <p><i></i>START DATE</p>
                                    <p>${startDate}</p>
                                </div>
                                <div class="">
                                    <p><i></i>DURATION</p>
                                    <p>${duration} Months</p>
                                </div>
                                <div class="">
                                    <p><i></i>STIPEND</p>
                                    <p>&#8377; ${stipend}/month</p>
                                </div>
                                <div class="">
                                    <p><i></i>APPLY BY</p>
                                    <p>${applyby}</p>
                                </div>
                            </div>
                        </div>
                        <div class="button_container" >

                            <div class="button_container11">${x}</div>
                            
                            <a class="button_container2" onclick="getViewDetails(${id})">View details</a>
                        </div>
                        </div>
                        `;
                        internships_div.appendChild(inside_div);
                }    
            });
            Product_count = 0;
        }
        else{
            internships_div.innerHTML = null;
            data.forEach(function(word) {
                if( word.stipend >= rangeValue){
                    totalInternships_div.innerHTML = `<span>${++Product_count} Internships</span>`;
                    let {id, role , company_name , location , company_icon, work_form_home,internships_with_job ,parttime, startDate , duration, stipend, applyby, job_type} = word;
                    let inside_div = document.createElement('div');
                    let x = "";
                    for (let i = 0; i < job_type.length; i++) {
                        x += "<div class='button_container1'>" + job_type[i] +"</div>";
                    }
                    let loc = "";
                    if(work_form_home === "Yes"){
                        loc = "Work From Home";
                    }
                    else{
                        loc = "<span>" + location + "</span>";
                    }

                    inside_div.innerHTML = `
                    <div class="list_container1">
                        <div class="individual_internship_header">
                            <div class="company">
                                <div class="company_1">${role}</div>
                                <div class="company_2" style="font-size: 14px;">${company_name}</div>
                            </div>
                            <div class="internship_logo">
                                <img src = "${company_icon}">
                            </div>
                        </div>
                        <div class="individual_internship_details">
                            <div id="location_names">
                                <span><i class="material-icons">add_location</i></span>
                                ${loc}
                            </div>
                            <div class="internship_other_details_container">
                                <div class="">
                                    <p><i></i>START DATE</p>
                                    <p>${startDate}</p>
                                </div>
                                <div class="">
                                    <p><i></i>DURATION</p>
                                    <p>${duration} Months</p>
                                </div>
                                <div class="">
                                    <p><i></i>STIPEND</p>
                                    <p>&#8377; ${stipend}/month</p>
                                </div>
                                <div class="">
                                    <p><i></i>APPLY BY</p>
                                    <p>${applyby}</p>
                                </div>
                            </div>
                        </div>
                        <div class="button_container" >

                            <div class="button_container11">${x}</div>
                            
                            <a class="button_container2" onclick="getViewDetails(${id})">View details</a>
                        </div>
                        </div>
                        `;
                        internships_div.appendChild(inside_div);
                }    
            });
            Product_count = 0;
        }
}

//create uncheckall function
function clearFilter() {
    // display_internships(data);
    searchInternships();
    let inputs = document.querySelectorAll('#messageCheckbox');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].checked = false;
    }
    document.getElementById("myRange").value = "0";
}

