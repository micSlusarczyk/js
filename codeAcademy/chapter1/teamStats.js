const team = {
    _players: [
        { firstName: "John", lastName: "Terry", age: 45 },
        { firstName: "James", lastName: "Bond", age: 85 },
        { firstName: "Micheal", lastName: "Jordan", age: 55 },
    ],
    _games: [
        { opponent: "Rain", teamPoints: 45, opponentPoint: 23 },
        { opponent: "Snow", teamPoints: 65, opponentPoint: 78 },
        { opponent: "Wind", teamPoints: 66, opponentPoint: 66 },
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
        let player = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge,
        };
        this.players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        let game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints,
        };
        this.games.push(game);
    },
};
team.addPlayer("Bugs", "Bunny", 76);
team.addGame("Titans", 100, 98);
console.log(team.players);
console.log(team.games);
