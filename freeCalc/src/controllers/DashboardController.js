const Job = require('../model/Job');
const JobUtils = require('../utils/jobUtils');
const Profile = require('../model/Profile');

module.exports = {
    index(req, res) {
        const jobs = Job.get();
        const profile = Profile.get();

        let statusCount = {
            progress: 0,
            done: 0,
            total: jobs.length
        }

        //total de horas por dia do job em progress
        let jobTotalHours = 0;

        // verifica os dados do job com map
        const updatedJobs = jobs.map((job) => {
            // calculo de tempo restante e ajustes
            const remaining = JobUtils.remainingDays(job);
            const status = remaining <= 0 ? 'done' : 'progress';

            // soma quantidade de status = DONE ou PROGRESS por ser let
            jobTotalHours = status == 'progress' ? jobTotalHours + Number(job['daily-hours']) : jobTotalHours;
            statusCount[status] += 1;
            return {
                ...job,
                remaining,
                status,
                budget: JobUtils.calculateBudget(job, profile["value-hour"])
            }
        });

        // qtd horas que quero trabalhar - horas/dia do job em progress
        const freeHours = profile["hours-per-day"] - jobTotalHours;
        return res.render("index", { jobs: updatedJobs, profile: profile, statusCount: statusCount, freeHours: freeHours })

    }
}
