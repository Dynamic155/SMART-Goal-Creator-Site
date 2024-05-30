
function lockGoal() {
    const goalInput = document.getElementById('goal');
    if (goalInput.value.trim() === "") {
        alert("Please enter a goal.");
        return;
    }
    goalInput.disabled = true;
    document.getElementById('smart-steps').style.display = 'block';
}

function formatGoal() {
    const specific = document.getElementById('specific-input').value;
    const measurable = document.getElementById('measurable-input').value;
    const achievable = document.getElementById('achievable-input').value;
    const relevant = document.getElementById('relevant-input').value;
    const timeBound = document.getElementById('time-bound-input').value;

    if (specific && measurable && achievable && relevant && timeBound) {
        const formattedGoal = `
            Goal: ${document.getElementById('goal').value} <br>
            Specific: ${specific} <br>
            Measurable: ${measurable} <br>
            Achievable: ${achievable} <br>
            Relevant: ${relevant} <br>
            Time-bound: ${timeBound}
        `;
        document.getElementById('goal-output').innerHTML = formattedGoal;
        document.getElementById('formatted-goal').style.display = 'block';
    } else {
        alert("Please fill out all sections.");
    }
}

function copyGoal() {
    const goalOutput = document.getElementById('goal-output').innerText;
    navigator.clipboard.writeText(goalOutput).then(() => {
        alert('Goal copied to clipboard!');
    });
}

function saveGoal() {
    alert('Save functionality is not implemented yet.');
}