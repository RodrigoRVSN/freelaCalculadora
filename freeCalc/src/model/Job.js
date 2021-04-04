let data = [
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
];

module.exports = {
    get(){
       return data; 
    },
    update(newJob){
        data = newJob;
    },
    delete(id){
        //filter que retira o false e mantém o verdadeiro no vetor data do job
        data = data.filter(job => Number(job.id) !== Number(id));
    }
}
