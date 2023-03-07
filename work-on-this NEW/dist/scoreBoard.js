renderScoreBoard(getPlayersFromStorage());
function renderScoreBoard(players) {
    try {
        if (!players || !Array.isArray(players))
            throw new Error("players is not an array");
        players.sort(function (a, b) { return parseFloat(b.score) - parseFloat(a.score); });
        var page = players.map(function (player) {
            return "<div class=\"line\" >\n                <i class=\"fa-solid fa-arrow-right\"></i>\n                <img class=\"small_logo\" src='" + player.file + "'/>\n               \n                <div class=\"line__player_name\">" + player.name + "</div>\n                \n                <div class=\"line__player_score\">" + player.score + " </div>\n               \n                </div>";
        }).join(" ");
        var html = document.querySelector(".scoreBoard");
        if (html !== null) {
            html.innerHTML = page;
        }
    }
    catch (error) {
        console.error(error);
    }
}
function getPlayersFromStorage() {
    try {
        var emptyPlayers = [];
        var playersString = localStorage.getItem("players");
        if (!playersString)
            return emptyPlayers;
        var players = JSON.parse(playersString);
        return (players);
    }
    catch (error) {
        console.error(error);
        return (undefined);
    }
}
function getUIDFromStorage() {
    try {
        var emptyUID = "";
        var uidFromStorage = localStorage.getItem("uid");
        if (!uidFromStorage)
            return emptyUID;
        return (uidFromStorage);
    }
    catch (error) {
        console.error(error);
        return (undefined);
    }
}
