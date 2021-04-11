const Database = require('../db/config');


module.exports = {
    async get() {

        var { name } = await require('../server');
        var { avatar } = await require('../server');
        const db = await Database();

        // pega todos com o * do profile
        const data = await db.get(`SELECT * FROM profile`);

        await db.close();

        // retorna as informações como data
        return {
            name: name,
            avatar: avatar,
            "monthly-budget": data.monthly_budget,
            "days-per-week": data.days_per_week,
            "hours-per-day": data.hours_per_day,
            "vacation-per-year": data.vacation_per_year,
            "value-hour": data.value_hour
        };
    },


    async update(newData) {

        // precisa abrir
        const db = await Database();

        //comandos SQL que atualizam valores pegos com UPDATE
        db.run(`UPDATE profile SET
        name = "${newData.name}",
        avatar= "${newData.avatar}",
        monthly_budget= ${newData["monthly-budget"]},
        days_per_week= ${newData["days-per-week"]},
        hours_per_day= ${newData["hours-per-day"]},
        vacation_per_year= ${newData["vacation-per-year"]},
        value_hour= ${newData["value-hour"]}
        `);

        // precisa fechar
        await db.close();

    }
}
