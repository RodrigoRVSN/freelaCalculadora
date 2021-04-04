module.exports = {
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