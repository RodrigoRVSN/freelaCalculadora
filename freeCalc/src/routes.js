const express = require('express');
const routes = express.Router();

const views = __dirname + "/views/"

const Profile = {
    data: {
        name: "Rodrigo",
        avatar: "https://github.com/rodrigorvsn.png",
        "monthly-budget": 3000,
        "days-per-week": 5,
        "hours-per-day": 6,
        "vacation-per-year": 5,
        "value-hour": 60
    },
    controllers: {
        index(req, res) {
            return res.render(views + "profile", { profile: Profile.data })
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
            Profile.data = {
                ...Profile.data,
                ...req.body,
                "value-hour": valueHour
            }
            return res.redirect('/profile');
        }
    }
}

const Job = {
    data: [
        {
            id: 1,
            name: "Pizzaria Gostosura",
            "daily-hours": 2,
            "total-hours": 1,
            created_at: Date.now()
        },
        {
            id: 2,
            name: "Pizzaria Da Gaby",
            "daily-hours": 3,
            "total-hours": 42,
            created_at: Date.now()
        }
    ],
    controllers: {
        index(req, res) {
            // calculo de tempo restante e ajustes
            const updatedJobs = Job.data.map((job) => {
                const remaining = Job.services.remainingDays(job);
                const status = remaining <= 0 ? 'done' : 'progress';

                return {
                    ...job,
                    remaining,
                    status,
                    budget: Job.services.calculateBudget(job, Profile.data["value-hour"])
                }
            })
            return res.render(views + "index", { jobs: updatedJobs })

        },
        create(req, res) {
            return res.render(views + "job");
        },
        save(req, res) {
            //req.body = name, hours-per-day and total-hours
            const lastId = Job.data[Job.data.length - 1]?.id || 0;

            Job.data.push({
                id: lastId + 1,
                name: req.body.name,
                "daily-hours": req.body["daily-hours"],
                "total-hours": req.body["total-hours"],
                created_at: Date.now() //nova data

            }) //empura o body

            return res.redirect('/')
        },
        show(req, res) {
            const jobId = req.params.id;
            const job = Job.data.find(job => Number(job.id) === Number(jobId));

            if (!job) {
                return res.send('Job não encontrado!');
            }
            job.budget = Job.services.calculateBudget(job, Profile.data["value-hour"]);
            return res.render(views + "job-edit", { job })
        },
        update(req, res) {
            const jobId = req.params.id;
            const job = Job.data.find(job => Number(job.id) === Number(jobId));

            if (!job) {
                return res.send('Job não encontrado!');
            }

            const updatedJob = {
                ...job,
                name: req.body.name,
                "total-hours": req.body["total-hours"],
                "daily-hours": req.body["daily-hours"],

            }
            Job.data = Job.data.map(job => {
                if (Number(job.id) === Number(jobId)) {
                    job = updatedJob;
                }
                return job;
            })
            res.redirect('/job/' + jobId);
        },
        delete(req, res) {
            const jobId = req.params.id;
            //filter que retira o false e mantém o verdadeiro no vetor data do job
            Job.data = Job.data.filter(job => Number(job.id) !== Number(jobId));

            return res.redirect('/');
        }

    },
    services: {
        remainingDays(job) {
            // dias que faltam
            const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed();
            // dia criado
            const createdDate = new Date(job.created_at);
            // dia criado + dias restantes = dia para ser finalizado
            const dueDay = createdDate.getDate() + Number(remainingDays);
            // dia para ser feito em milisegundos 
            const dueDateInMs = createdDate.setDate(dueDay);
            // tempo que falta entre o dia para ser feito e o dia de hoje
            const timeDiffInMs = dueDateInMs - Date.now();
            // transformar os milisegundos em dias
            const dayInMs = 1000 * 60 * 60 * 24;
            // tempo que falta em milisegundos / tempo em milisegundos de um dia
            const dayDiff = Math.floor(timeDiffInMs / dayInMs);

            //restam x dias
            return dayDiff;
        },
        calculateBudget: (job, valueHour) => valueHour * job["total-hours"]


    }

}


routes.get('/', Job.controllers.index);
routes.get('/job', Job.controllers.create);
routes.post('/job', Job.controllers.save);
routes.get('/job/:id', Job.controllers.show);
routes.post('/job/:id', Job.controllers.update);
routes.post('/job/delete/:id', Job.controllers.delete);
routes.get('/profile', Profile.controllers.index);
routes.post('/profile', Profile.controllers.update);

module.exports = routes;