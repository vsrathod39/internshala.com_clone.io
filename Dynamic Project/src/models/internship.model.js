const mongoose = require('mongoose');


const internsSchema = new mongoose.Schema(
{

role: { type: String , required: true },
company_name:{ type: String , required: true },
company_icon :{ type: String , required: true },

location :[ { type: String , required: true } ],

work_form_home :{ type: String , required: true },

startDate :{ type: String , required: true },

duration : { type: Number , required: true },

stipend: { type: Number , required: true },

applyby:{ type: String , required: true },

close_aplication:{ type: Number , required: true },

job_type: [{ type: String , required: true }],

parttime:{ type: String , required: true },

internships_with_job : { type: String , required: true },

total_applied:{ type: Number , required: true },

company_website:{ type: String , required: true },

company_about:{ type: String , required: true },

about_internship : [ { type: String , required: true }] ,

skills : [ { type: String , required: true} ],

who_can_apply : [ { type: String , required: true }] ,

perks: [ { type: String , required: true } ] ,
additional_Information : { type: String , required: true },

number_of_openings : { type: Number , required: true },

},

    {
      versionKey: false,
      timestamps: true,
    }

  );
  
 module.exports = mongoose.model("data", internsSchema);