function exportRosterPdf() {

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

   doc.setFontSize(20);

doc.text(
    teamName?.value || "Unbenanntes Team"
    14,
    20
);

doc.setFontSize(11);

doc.text(
    `Volk: ${teamSelect.value}`,
    14,
    35
);

doc.text(
    `Teamwert: ${formatMoney(calculateTeamValue())}`,
    90,
    35
);

doc.text(
    `Re-Rolls: ${rerolls}`,
    14,
    43
);

doc.text(
    `Apotheker: ${apothecary ? "Ja" : "Nein"}`,
    90,
    43
);

doc.setFontSize(12);


    const rows = currentRoster.map(player => [

        player.number || "",
        player.name || "",
        player.position || "",

        player.ma || "",
        player.st || "",
        player.ag || "",
        player.pa || "",
        player.av || "",

        player.skills
            ? player.skills.join(", ")
            : ""

    ]);

    doc.autoTable({

        startY: 55,

        head: [[
            "Nr",
            "Name",
            "Position",
            "MA",
            "ST",
            "AG",
            "PA",
            "AV",
            "Skills"
        ]],

        body: rows,

        styles: {
            fontSize: 8
        }

    });

    doc.save(
        `${teamSelect.value}_Roster.pdf`
    );

}


console.log("APP START");
alert("app.js geladen");
const teamName =
    document.getElementById(
        "teamName"
    );

console.log("teamName:", teamName);

const budget = 700000;
const rrCost = 100000;
const apothecaryCost = 50000;
const minPlayers = 8;
const maxPlayers = 11;
const maxSpecialPlayers = 4;
const groupRestrictions = {

    "Old World Alliance": {
        max: 1,
        players: [
            "Ogre",
            "Altern Forest Treeman"
        ]
    },

    "Chaos Chosen": {
        max: 1,
        players: [
            "Chaos Ogre",
            "Chaos Troll",
            "Minotaur"
        ]
    },

    "Underworld Denizens": {
        max: 1,
        players: [
            "Rat Ogre",
            "Troll"            
        ]
    },

    "Chaos Renegades": {
        max: 3,
        players: [
            "Chaos Ogre",
            "Chaos Troll",
            "Rat Ogre",
            "Minotaur"            
        ]
    }
};

let currentRoster = [];
let rerolls = 0;
let apothecary = false;

const teamSelect = document.getElementById("teamSelect");
const positionList = document.getElementById("positionList");
const rosterBody = document.getElementById("rosterBody");

const exportPdfButton =
    document.getElementById(
        "exportPdfButton"
    );

const validateRosterButton =
    document.getElementById(
        "validateRosterButton"
    );
    

const rrPlus = document.getElementById("rrPlus");
const rrMinus = document.getElementById("rrMinus");
const rrCount = document.getElementById("rrCount");

const apoButton = document.getElementById("apoButton");

if (typeof teams === "undefined") {
    alert("teams.js wurde nicht geladen.");
    throw new Error("teams.js fehlt.");
}

init();

function init() {

    Object.keys(teams)
        .sort()
        .forEach(team => {

            const option = document.createElement("option");

            option.value = team;
            option.textContent = team;

            teamSelect.appendChild(option);
        });

    teamSelect.addEventListener("change", handleTeamChange);
    if (validateRosterButton) {

    validateRosterButton.addEventListener(
        "click",
        validateRoster
    );

}

    rrPlus.addEventListener("click", addReRoll);
    rrMinus.addEventListener("click", removeReRoll);

    apoButton.addEventListener("click", toggleApothecary);
    
    exportPdfButton.addEventListener(
    "click",
    exportRosterPdf
);

    document.getElementById("budget").textContent =
        formatMoney(budget);

    if (teamSelect.options.length > 0) {
        loadTeam();
    }
}

function handleTeamChange() {

    if (
        currentRoster.length > 0 &&
        !confirm("Aktuelles Roster verwerfen?")
    ) {
        return;
    }

    currentRoster = [];
    rerolls = 0;
    apothecary = false;

    loadTeam();
}

function loadTeam() {

    const team = teamSelect.value;

    positionList.innerHTML = "";

    if (!team || !teams[team]) {
        return;
    }

    teams[team].forEach(player => {

        const row = document.createElement("div");

        row.className = "positionRow";

        const count =
            countPosition(player.position);
            function countSpecialPlayers() {

    function checkGroupRestriction(player) {

    const team = teamSelect.value;

    if (!groupRestrictions[team]) {
        return true;
    }

    const rule = groupRestrictions[team];

    const isRestrictedPlayer =
        rule.players.includes(
            player.position
        );

    if (!isRestrictedPlayer) {
        return true;
    }

    const count = currentRoster.filter(p =>
        rule.players.includes(
            p.position
        )
    ).length;

    if (count >= rule.max) {

        showError(
            `${team}: Nur ${rule.max} Spieler aus dieser Gruppe erlaubt.`
        );

        return false;
    }

    return true;
}            
    return currentRoster.filter(player => {

        return player.max < 16;

    }).length;
    function countSpecialPlayers() {

    return currentRoster.filter(player => {

        return player.max < 16;

    }).length;

}

}

        row.innerHTML = `
            <div>
                <strong>${player.position}</strong><br>
                ${formatMoney(player.cost)} Gold
            </div>

            <div>
                ${count}/${player.max}
                <button type="button">+</button>
            </div>
        `;

        const addButton =
            row.querySelector("button");

        addButton.addEventListener("click", () => {

            addPlayer(player);

        });

        positionList.appendChild(row);

    });

    renderRoster();
}

function addPlayer(player) {
// Maximale Teamgröße

if (currentRoster.length >= maxPlayers) {

    showError(
        `Ein Team darf maximal ${maxPlayers} Spieler haben.`
    );

    return;
}
    const count =
        countPosition(player.position);

   // Positionslimit

if (count >= player.max) {

    showError(
        `Maximum erreicht: ${player.max} × ${player.position}`
    );

    return;
}
// Gruppen-Restriktionen

if (!checkGroupRestriction(player)) {
    return;
}
// Maximal 4 Nicht-Linemen

if (player.max < 16) {

    if (
        countSpecialPlayers() >=
        maxSpecialPlayers
    ) {

        showError(
            `Maximal ${maxSpecialPlayers} Nicht-Linemen erlaubt.`
        );

        return;
    }

}

    if (
        calculateTeamValue() + player.cost >
        budget
    ) {

        showError(
            `Zu wenig Budget für ${player.position}`
        );

        return;
    }

    currentRoster.push({
    ...player,
    number: currentRoster.length + 1,
    name: ""
});

    loadTeam();
}

function removePlayer(index) {

    currentRoster.splice(index, 1);

    loadTeam();
}

function addReRoll() {

    if (
        calculateTeamValue() + rrCost >
        budget
    ) {

        showError(
            "Nicht genügend Budget für einen weiteren Re‑Roll."
        );

        return;
    }

    rerolls++;

    renderRoster();
}

function removeReRoll() {

    if (rerolls > 0) {

        rerolls--;

        renderRoster();
    }
}

function toggleApothecary() {

    if (
        !apothecary &&
        calculateTeamValue() + apothecaryCost >
        budget
    ) {

        showError(
            "Nicht genügend Budget für einen Apotheker."
        );

        return;
    }

    apothecary = !apothecary;

    renderRoster();
}

function countPosition(position) {

    return currentRoster.filter(
        player => player.position === position
    ).length;
}
function countSpecialPlayers() {

    return currentRoster.filter(player => {

        return player.max < 16;

    }).length;

}
function checkGroupRestriction(player) {

    const team = teamSelect.value;

    if (!groupRestrictions[team]) {
        return true;
    }

    const rule = groupRestrictions[team];

    const isRestrictedPlayer =
        rule.players.includes(
            player.position
        );

    if (!isRestrictedPlayer) {
        return true;
    }

    const count = currentRoster.filter(p =>
        rule.players.includes(
            p.position
        )
    ).length;

    if (count >= rule.max) {

        showError(
            `${team}: Nur ${rule.max} Spieler aus dieser Gruppe erlaubt.`
        );

        return false;
    }

    return true;
}
function calculateTeamValue() {

    let value = 0;

    currentRoster.forEach(player => {

        value += player.cost;

    });

    value += rerolls * rrCost;

    if (apothecary) {

        value += apothecaryCost;
    }

    return value;
}

function renderRoster() {

    rosterBody.innerHTML = "";

    currentRoster.forEach((player, index) => {

        const row =
            document.createElement("tr");

        const skills =
            player.skills &&
            player.skills.length > 0
                ? player.skills.join(", ")
                : "-";

        row.innerHTML = `
            <td>
    <input
        type="number"
        min="1"
        max="99"
        class="playerNumber"
        data-index="${index}"
        value="${player.number}">
</td>
            <td>
        <input
            type="text"
            class="playerName"
            data-index="${index}"
            value="${player.name || ''}"
            placeholder="Spielername">
    </td>
            <td>
                <strong>${player.position}</strong><br>
                <small>${skills}</small>
            </td>
            <td>${player.ma}</td>
            <td>${player.st}</td>
            <td>${player.ag}</td>
            <td>${player.pa}</td>
            <td>${player.av}</td>
            <td>
                <button type="button"
                        data-index="${index}">
                    ✖
                </button>
            </td>
        `;

        row.querySelector("button")
            .addEventListener(
                "click",
                () => removePlayer(index)
            );

        rosterBody.appendChild(row);
        
    const nameInput =
    row.querySelector(".playerName");
nameInput.addEventListener(
    "input",
    function () {

        currentRoster[index].name =
            this.value;

    }
);
const numberInput =
    row.querySelector(
        ".playerNumber"
    );

numberInput.addEventListener(
    "change",
    function () {

        currentRoster[index].number =
            parseInt(
                this.value
            ) || 0;

    }
);

nameInput.addEventListener(
    "input",
    function () {

        currentRoster[index].name =
            this.value;

    }
);


    });

    const teamValue =
        calculateTeamValue();

    document.getElementById(
        "teamValue"
    ).textContent =
        formatMoney(teamValue);

    document.getElementById(
        "remaining"
    ).textContent =
        formatMoney(
            budget - teamValue
        );

    rrCount.textContent = rerolls;

    apoButton.textContent =
        apothecary
            ? "Apotheker gekauft"
            : "Nicht gekauft";

    apoButton.classList.toggle(
        "active",
        apothecary
    );
}

function showError(message) {

    const error =
        document.getElementById(
            "errorMessage"
        );

    error.textContent = message;

    error.classList.remove("hidden");

    clearTimeout(
        window.errorTimeout
    );

    window.errorTimeout =
        setTimeout(() => {

            error.classList.add("hidden");

        }, 4000);
}

function formatMoney(value) {

    return value.toLocaleString(
        "de-DE"
    );
}
function validateRoster() {

    if (
        currentRoster.length <
        minPlayers
    ) {

        showError(
            `Ein Team benötigt mindestens ${minPlayers} Spieler.`
        );

        return false;
    }

    return true;

}
function validateRoster() {

    let errors = [];

    if (
        currentRoster.length <
        minPlayers
    ) {

        errors.push(
            `Mindestens ${minPlayers} Spieler erforderlich`
        );

    }

    if (
        currentRoster.length >
        maxPlayers
    ) {

        errors.push(
            `Maximal ${maxPlayers} Spieler erlaubt`
        );

    }

    if (
        countSpecialPlayers() >
        maxSpecialPlayers
    ) {

        errors.push(
            `Maximal ${maxSpecialPlayers} Nicht-Linemen erlaubt`
        );

    }

    if (
        calculateTeamValue() >
        budget
    ) {

        errors.push(
            "Budget überschritten"
        );

    }

    currentRoster.forEach(player => {

        if (
            !player.name ||
            player.name.trim() === ""
        ) {

            errors.push(
                `${player.position} hat keinen Spielernamen`
            );

        }

    });

    if (errors.length === 0) {

        alert(
            "✅ Roster ist gültig"
        );

    } else {

        alert(
            "❌ Roster ungültig\n\n" +
            errors.join("\n")
        );

    }

}
