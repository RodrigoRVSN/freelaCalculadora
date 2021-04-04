const Profile = require('../model/Profile');

module.exports = {
    index(req, res) {
        return res.render("profile", { profile: Profile.get() })
    },

    update(req, res) {
        // req.body pega os dados
        const data = req.body;
        // definir quantas semanas tem 1 ano 
        const weeksPerYear = 52;
        // remover férias para semanas em 1 mês
        const weeksPerMonth = (weeksPerYear - data["vacation-per-year"]) / 12;
        const weekTotalHours = data["hours-per-day"] * data["days-per-week"];
        // quantas horas por semana trabalhando
        // total de horas trabalhadas no mês
        const monthlyTotalHours = weekTotalHours * weeksPerMonth;
        // Valor da minha hora
        const valueHour = data["monthly-budget"] / monthlyTotalHours;
        
        Profile.update({
            ...Profile.get(),
            ...req.body,
            "value-hour": valueHour
        })

        return res.redirect('/profile');
    }
}