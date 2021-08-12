// Creating Resume Data in json format
resume = {
    Professional_Role: "Data Scientist",
  
    basics: {
      Name: "Karthik R",
      Mail: "karthik96.rajendran@gmail.com",
      Phone: "9043999726",
      City: "Madurai",
      State: "Tamil Nadu"
    },
  
    Work_Experience: [
      { Company: "Tcs", role: "Data Scientist", Experience: "1 year" },
      { Company: "NIWE", role: "Data Analyst", Experience: "2 Months" }
    ],
  
    Education: [
      { Degree: "MSC STATISTICS", Institution_Name: "PSG", Percentage: 77 },
      { Degree: "BSC MATHEMATICS", Institution_Name: "MCC", Percentage: 70 }
    ],
  
    Skills: ["Python", "SQL", "Tableau", "ML", "DS", "MERN Stack"],

    certifictaions: [
      "python for everybody - coursera",
      "Elements of AI - Helsinki university"
    ],

    Interests: ["Football", "Reading", "Forex Trading"],
  };


//   Iterating Json Elements using for..in 

for (details in resume)
{
    console.log(resume[details])
}

//   Iterating Json Elements and fetching Interests details using for..of

for (details of resume.Interests)
{
    console.log(details)
}

//   Iterating Json Elements and fetching skills details using for

for(let i=0; i<resume.Skills.length; i++)
{
    console.log(resume.Skills[i])
}

//  Iterating Json Elements and fetching skills details using for..each

resume.Skills.forEach(element => {
    console.log(element)
});



// Compare Two Objects without order

var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };




function isequal(first,second)
{
    let flag = true

    if(Object.keys(first).length === Object.keys(second).length)
    {
        for (key in second)
        {

            if(first[key] === second[key])
            {
                continue
            }
            else
            {
                flag = false
                break
            }
        }
    }
    else
    {
        flag = false
    }

    return flag
}
console.log("\n\n\n\nComparing Obj1 and Obj2, whether equal or not :  ",isequal(obj1,obj2))



//Using XMLHTTP Request and Console.image library to display images in console

let request = new XMLHttpRequest()
request.open('GET',"https://restcountries.eu/rest/v2/all",true)
request.onload = () =>{
    data= JSON.parse(request.responseText);
    console.log("\n\n\n\nDisplaying Countries Flags")
    data.forEach((country) => console.log(`${country.name}: ${country.flag}`));
    console.log("\n\n\n\nDisplaying Countries Details")
    data.forEach((country) => console.log(`Country-Name: ${country.name}; Country-Region: ${country.region}; Country-Sub Region: ${country.subregion}; Country-Population: ${country.population}` ))
    
}
request.send()
