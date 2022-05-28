"use strict";

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = (`Мне ${age} и я владею языками: `);

        languages.forEach(function(item) {
            str += `${item.toUpperCase()} `;
        });
       console.log(str);
    }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);
console.log(Object.keys(personalPlanPeter).length);

// function showExperience(plan) {
//     console.log(plan['skills']['programmingLangs'].js);
// }

// showExperience(personalPlanPeter);
// if (key + 1 === Object.keys(plan['skills']['programmingLangs']).length) {
//             langs += `Язык ${key} изучен на ${plan['skills']['programmingLangs'][key]}`;
//         }
function showProgrammingLangs(plan) {
    let langs = '';
    for (let key in plan['skills']['programmingLangs']) {
        langs += `Язык ${key} изучен на ${plan['skills']['programmingLangs'][key]}\n`;
    }
    return langs;
}
showProgrammingLangs(personalPlanPeter);