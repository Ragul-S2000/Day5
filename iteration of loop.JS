let myResume=[{
    "Details":{
        "Name":"S.Ragul",
        "Age":24,
        "Email":"xxxxxxx@gmail.com",
        "Mobile Number":7598720569,
        "location":{
            "Address":"no.3,vinayagar Street,Puthukulam",
            "city":"Tirunelveli",
            "State":"Tamil Nadu",
            "Pincode":627884. 
        },
    "Profile":[{"Linkedin":"https://www.linkedin.com/in/RAgul-t-78/"}]
    },
    "Work":[
        {
        "Comapany":"ABC Electro Product",
        "Position":"GAT",
        "Start Date":"Sep 2022",
        "End Date":"Feb 2024"
        }
    ],
    "Educatin":[
        {
            "Graduation":"B.E Mechanical Engineering",
            "University":"Anna University",
            "Place":"Chennai",
            "CGPA":8.38
        }
    ],
    "Skills":[
        {
            "Name":"AutoCAd,Creo",
            "Level":"Begginer",
            "Project":[
                {
                    "proj1":"KArt Making",
                    "proj2":"Stir casting Setup"
                }
            ]  
        }
    ],
    "Language":[
        {
          "language": "Tamil,ENglish"
        }
    ],
    "Interest":[
        {
            "Name":"FSD,JS"
        }
    ]
}];
 
//for in loop
/*
for( var i in myResume){
    console.log(i,myResume[i]);
};
*/
// **************************************************************************************
// //For loop
// for(var i=0;i<myResume.length;i++){
// //     console.log(myResume[i]);
// // }
// ***************************************************************************************
// For each    
// myResume.forEach(function(obj) { console.log(obj.Details); });
// ***************************************************************************************
// For of loop
// for (const resume of myResume) {
//     console.log(`Name: ${resume.Details.Name}`);
// }