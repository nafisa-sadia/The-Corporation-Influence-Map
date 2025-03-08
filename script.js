let timelineIndex = 0;
const timelineData = [
    "1970s: Corporate lobbying begins influencing government policies.",
    "1980s: Deregulation leads to corporate expansion in media and healthcare.",
    "1990s: The rise of PR-driven sustainability efforts (greenwashing).",
    "2000s: Tech monopolies gain control over digital discourse.",
    "2010s: Fake news and algorithmic influence shape political decisions.",
    "2020s: AI-driven corporate policies replace human regulation."
];

function showDetails(type) {
    const infoBox = document.getElementById("info-box");
    const details = {
        "corporation": "Corporations fund political campaigns and influence laws to serve their interests.",
        "media": "Media outlets, often owned by corporations, frame narratives in ways that benefit their funders.",
        "government": "Lobbyists shape government policies, often prioritizing corporate interests over public welfare.",
        "public": "Public perception is influenced by media messaging, framing policies as inevitable or beneficial."
    };
    infoBox.innerText = details[type] || "Click on a node to see its influence.";
}

function updateOvertonWindow(value) {
    const label = document.getElementById("overton-label");
    if (value < 30) label.innerText = "Public Perception: Corporate-Controlled";
    else if (value > 70) label.innerText = "Public Perception: Democratic Shift";
    else label.innerText = "Public Perception: Balanced";
}

function updateTimeline(direction) {
    timelineIndex += direction;
    if (timelineIndex < 0) timelineIndex = 0;
    if (timelineIndex >= timelineData.length) timelineIndex = timelineData.length - 1;
    document.getElementById("timeline-text").innerText = timelineData[timelineIndex];
}

function toggleVisibility(id) {
    const element = document.getElementById(id);
    element.style.display = element.style.display === "none" ? "block" : "none";
}
