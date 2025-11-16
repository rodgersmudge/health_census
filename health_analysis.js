const addPatientButton = document.getElementById("addPatient");
const report = document.getElementById("report");
const btnSearch = document.getElementById('btnSearch');
const patients = [];

function addpatient() {
    const name = document.getElementById("name").value;
    const gender = document.querSelector('input[name="gender"]:checked');
    const age = document.getElementById("age").value;
    const condition = document.getElementById("condition").value;

    if(name && gender && age && condition) {
        patients.push({ name, gender: gender.value, age, condition });

        resetForm();
        generateReport();
    }}

    function resetForm() {
        document.getElementById("name").value = "";
        document.querySelector('input[name="gender"]:checked').checked = false;
        document.getElementById("age").value = "";
        document.getElementById("condition").value = ""
    }

    function generateReport() {
        const numPatients = patients.length;
        const conditiondCOunt = {
            Diabetes: 0,
            Thyroid: 0,
            "High Blood Pressure": 0,
        };
        const genderConditionsCount = {
            Male: {
                Diabetes: 0,
                Thyroid: 0,
                "High Blood Pressure": 0,
            },
            Female: {
                Diabetes: 0,
                Thyroid: 0,
                "High Blood Pressure": 0,
            }
        };

        for(const patient in patients) {
            conditiondCOunt[patient.condition]++;
            genderConditionsCount[patient.gender][patient.condition]++;
        }

        report.innerHTML = `Number of patients: ${numPatients}<br><br>`;
        report.innerHTML = `Conditions breakdown <br>`;
        for (const condition in conditiondCOunt) {
            report.innerHTML = `${condition}: ${conditiondCOunt[condition]}<br>`;
        }

        report.innerHTML = `<br>Gender-Based Conditions:<br>`;
        for(const gender in genderConditionsCount) {
            report.innerHTML= `${gender}: <br>`;
            for (const condition in genderConditionsCount[gender]) {
                report.innerHTML += `&nbsp;&nbsp;${condition}: ${genderConditionsCount[gender][condition]}<br>`;
        }
        }
    }
addPatientButton.addEventListener("click",addpatient);