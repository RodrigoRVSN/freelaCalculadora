let data = {
    name: "Rodrigo",
    avatar: "https://github.com/rodrigorvsn.png",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 6,
    "vacation-per-year": 5,
    "value-hour": 60,
};

module.exports = {
    get() {
        return data;
    },
    update(newData) {
        data = newData;
    }
}
