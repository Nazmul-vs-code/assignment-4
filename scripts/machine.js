let interviewList = [];
let rejectedList = [];

// 1. Tab Navigation (Traditional Style)
function showOnly(id) {
    let sections = ["Interview_history", "Rejected_history", "All_history"];

    for (let i = 0; i < sections.length; i++) {
        let sectionName = sections[i];
        let element = document.getElementById(sectionName);

        if (sectionName === id) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }

    updateCounters();
}

// Add to Interview
function addToInterview(jobId, btnElement) {
    if (interviewList.includes(jobId)) return;

    let originalCard = document.getElementById(jobId);
    let contentArea = document.getElementById('Interview_history_content');

    // toggole part
    let alreadyInRejected = document.getElementById(jobId + "-rejected");
    if (alreadyInRejected) {
        rejectedDelete(jobId); // Use your existing delete function
    }

    if (originalCard) {
        // 1. Update the original card flag
        let flag = originalCard.querySelector('.confirmation-flag');
        flag.innerText = "Interview";
        flag.className = "confirmation-flag badge badge-success";

        let cardHTML = originalCard.innerHTML;

        // 3. Create a new "div", give it the unique ID, and put the HTML inside
        let newCard = document.createElement("div");
        newCard.id = jobId + "-interview";
        newCard.className = "job-card shadow-sm space-y-3"; // keep the styling
        newCard.innerHTML = cardHTML;

        // 4. Fix the trash icon inside the new card
        let trash = newCard.querySelector('i');
        trash.setAttribute('onclick', "interviewDelete('" + jobId + "')");

        // 5. Add to screen
        if (interviewList.length === 0) {
            contentArea.innerHTML = ''; 
        }
        contentArea.appendChild(newCard);
        interviewList.push(jobId);

        btnElement.innerText = "ADDED TO INTERVIEW";
        updateCounters();
    }
}

// Add to Rejected
function addToRejected(jobId, btnElement) {
    if (rejectedList.includes(jobId)) return;

    let originalCard = document.getElementById(jobId);
    let contentArea = document.getElementById('Rejected_history_content');

    // toggle part
    let alreadyInInterview = document.getElementById(jobId + "-interview");
    if (alreadyInInterview) {
        interviewDelete(jobId); // Use your existing delete function
    }

    if (originalCard) {
        // 1. Update the original card flag
        let flag = originalCard.querySelector('.confirmation-flag');
        flag.innerText = "Rejected";
        flag.className = "confirmation-flag badge badge-error";

        let cardHTML = originalCard.innerHTML;

        // 3. Create a new "div", give it the unique ID, and put the HTML inside
        let newCard = document.createElement("div");
        newCard.id = jobId + "-rejected";
        newCard.className = "job-card shadow-sm space-y-3";
        newCard.innerHTML = cardHTML;

        // 4. Fix the trash icon inside the new card
        let trash = newCard.querySelector('i');
        trash.setAttribute('onclick', "rejectedDelete('" + jobId + "')");

        // 5. Add to screen
        if (rejectedList.length === 0) {
            contentArea.innerHTML = ''; 
        }
        contentArea.appendChild(newCard);
        rejectedList.push(jobId);

        btnElement.innerText = "REJECTED";
        updateCounters();
    }
}
// 4. Delete from Interview Tab
function interviewDelete(id) {
    const card = document.getElementById(id + "-interview");
    if (card) card.remove();
    interviewList = interviewList.filter(item => item !== id);
    if (interviewList.length === 0) {
        document.getElementById('Interview_history_content').innerHTML = `<p>No interviews scheduled</p>`;
    }
    updateCounters();
}

// 5. Delete from Rejected Tab
function rejectedDelete(id) {
    const card = document.getElementById(id + "-rejected");
    if (card) card.remove();
    rejectedList = rejectedList.filter(item => item !== id);
    if (rejectedList.length === 0) {
        document.getElementById('Rejected_history_content').innerHTML = `<p>No rejections yet</p>`;
    }
    updateCounters();
}

// 6. Global Delete (All Tab)
function jobDelete(id) {
    const card = document.getElementById(id);
    if (card) card.remove();
    updateCounters();
}

// 7. Counter Logic
function updateCounters() {
    const totalAll = document.querySelectorAll('#All_history .job-card').length;
    
    // Top Bar Counters
    const counters = document.querySelectorAll('.counter');
    if (counters.length >= 3) {
        document.getElementById('total1').innerText = totalAll;
        counters[1].innerText = interviewList.length;
        counters[2].innerText = rejectedList.length;
    }

    // Tab Sub-heading ("X of Y")
    const interviewTabVisible = document.getElementById("Interview_history").style.display === 'block';
    const rejectedTabVisible = document.getElementById("Rejected_history").style.display === 'block';

    const subTotal = document.getElementById('total2');
    if (subTotal) {
        if (interviewTabVisible) {
            subTotal.innerText = `${interviewList.length} of ${totalAll}`;
        } else if (rejectedTabVisible) {
            subTotal.innerText = `${rejectedList.length} of ${totalAll}`;
        } else {
            subTotal.innerText = totalAll;
        }
    }
}