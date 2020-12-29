class TasksHistory{
    constructor() {
        //this.tasksHistory = [{description: 'wojtyek',finished: 0}, {description: 'wojtek',finished: 0}, {description: 'Wojtek',finished: 0},{description: 'wOJTEK',finished: 0}];
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
        console.log(description)
        const indexOfTask = Search.searchSameTask(this.tasksHistory, description);
        console.log(indexOfTask)
        if (indexOfTask){
            this.tasksHistory[indexOfTask].finished = 1;
        }
    }
}