var Player = /** @class */ (function () {
    function Player(name, date, picture) {
        this.name = name;
        this.date = date;
        this.picture = picture;
        this.uid = uid();
    }
    return Player;
}());
