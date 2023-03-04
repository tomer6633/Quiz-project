renderScoreBoard(getPlayersFromStorage());
function renderScoreBoard(players) {
    try {
        if (!players || !Array.isArray(players))
            throw new Error("players is not an array");
        var page = players.map(function (player) {
            return "<div class=\"line\" >\n                <img class=\"small_logo\" src='" + player.file + "'/>\n                <div>" + player.name + " </div>\n                <div>" + player.score + " </div>\n                </div>";
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
