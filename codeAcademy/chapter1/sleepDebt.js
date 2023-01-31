const getSleepHours = (day) => {
    switch (day) {
        case "monday":
            return 8;
            break;
        case "tuesday":
            return 7;
            break;
        case "wednesday":
            return 6;
            break;
        case "thursday":
            return 5;
            break;
        case "friday":
            return 4;
            break;
        case "saturday":
            return 3;
            break;
        case "sunday":
            return 2;
            break;
        default:
            return "Error";
            break;
    }
};
const getActualSleepHours = () => 8 + 7 + 8 + 7 + 8 + 7 + 7.5;
const getIdealSleepHours = (idealHours) => idealHours * 7;

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(7.5);
    if (actualSleepHours === idealSleepHours) {
        console.log("Perfect amount of sleep");
    } else if (actualSleepHours > idealSleepHours) {
        console.log("Got more sleep than");
    } else {
        console.log("Get some rest");
    }
};
calculateSleepDebt();
