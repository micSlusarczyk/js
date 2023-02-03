class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
        this._substituteTeacher = [
            "Jamal Crawford",
            "Lou Williams",
            "J. R. Smith",
            "James Harden",
            "Jason Terry",
            "Manu Ginobli",
        ];
    }
    get name() {
        return this._name;
    }
    get level() {
        return this._level;
    }
    get numberOfStudents() {
        return this._numberOfStudents;
    }
    get quickFacts() {
        return console.log(
            `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
        );
    }
    static pickSubstituteTeacher(substituteTeacher) {
        randomNumber = Math.floor(Math.random() * substituteTeacher.length);
        return substituteTeacher[randomNumber];
    }
    set numberOfStudents(value) {
        typeof value === "number"
            ? (this._numberOfStudents = value)
            : console.log(
                  "Invalid input: numberOfStudents must be set to a Number"
              );
    }
}
class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, "primary", numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
        return this._pickupPolicy;
    }
}
class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeam) {
        super(name, "high", numberOfStudents);
        this._sportsTeam = [
            "Baseball",
            "Basketball",
            "Volleyball",
            "Track and Field",
        ];
    }
    get sportsTeam() {
        return console.log(this._sportsTeam);
    }
}
const lorraineHansbury = new PrimarySchool(
    "Lorraine Hansbury",
    514,
    "Students must be picked up by parent, guardian, or a family member over the age of 13."
);
lorraineHansbury.quickFacts;
lorraineHansbury.pickSubstituteTeacher;
const alSmith = new HighSchool("Al E. Smith", 415, this._sportsTeam);
alSmith.sportsTeam;
