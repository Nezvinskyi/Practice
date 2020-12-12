// "Увольте" сотрудника если он неактивен И(!) его зп больше 100
const workers = [
    {name:'Alex', salary: 100, isActive: true },
    {name:'Rita', salary: 80, isActive: false },
    {name:'John', salary: 100, isActive: true },
    {name:'Derek', salary: 200, isActive: false }
]

const removeWorkers = function (workers) {
  for (const worker of workers) {
    if (worker.salary > 100 && worker.isActive === false) {
      return workers.splice(workers.indexOf(worker), 1);
    }
  }
}
console.log(removeWorkers(workers));
