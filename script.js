document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-button");
    const caseStudies = document.querySelectorAll(".case-study");

    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            const filterValue = this.getAttribute("data-filter");

            caseStudies.forEach(study => {
                const phase = study.getAttribute("data-phase");
                const tags = study.getAttribute("data-tags");

                if (filterValue === "all" || phase.includes(filterValue) || tags.includes(filterValue)) {
                    study.style.display = "block";
                } else {
                    study.style.display = "none";
                }
            });
        });
    });
});

function searchCaseStudies() {
    let input = document.getElementById('search-bar').value.toLowerCase();
    let caseStudies = document.getElementsByClassName('case-study');

    for (let i = 0; i < caseStudies.length; i++) {
        let title = caseStudies[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
        if (title.includes(input)) {
            caseStudies[i].style.display = "block";
        } else {
            caseStudies[i].style.display = "none";
        }
    }
}
