class TasksHistory{
    constructor() {
        this.tasksHistory = [];
    }
    getTasksHistory = () => this.tasksHistory;
    getUnfinishedTasksNumber = () => this.tasksHistory.filter((task) => !task.finished ).length;
    addTask(description){
        if(description) {
            this.tasksHistory.push({description: description, finished: 0});
            return new Create(description, this.getUnfinishedTasksNumber()-1).createLi();
        }
    }
    finishTask(description) {

    }
}