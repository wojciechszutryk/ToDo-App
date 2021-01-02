class TasksHistory{
    constructor() {
        this.tasksHistory = [];
    }
    getTasksHistory = () => this.tasksHistory;
    getUnfinishedTasksNumber = () => this.tasksHistory.filter((task) => !task.finished ).length;
    addTask(description){
        if(description) {
            this.tasksHistory.push({description: description, finished: 0, startDate: new Date().toLocaleString()});
            return new Create(description, this.getUnfinishedTasksNumber()-1).createLi();
        }
    }
    finishTask(description) {
        const indexOfTask = Search.searchSameTask(this.tasksHistory, description);
        if (this.tasksHistory[indexOfTask].finished === 0){
            this.tasksHistory[indexOfTask].finished = new Date().toLocaleString();
        }
    }
    drawHistory(){
        let innerUlHtml = `<li><span class="spanDescription">description</span><span class="spanStarted">Start Date</span><span class="finished">Finish Date</span></li>`;
        for(let elem of this.tasksHistory){
            innerUlHtml += `<li><span class="spanDescription">${elem.description}</span><span class="spanStarted">${elem.startDate}</span><span class="finished">${elem.finished ? elem.finished : 'unfinished'}</span></li>`
        }
        console.log(innerUlHtml);
        return innerUlHtml;
    }
}