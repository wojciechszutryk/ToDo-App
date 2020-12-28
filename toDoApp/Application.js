class Application{
    constructor() {
        this.ul = document.querySelector('.wrapper ul');
        this.li = [...document.querySelectorAll('.wrapper ul li')];
        this.tasksHistory = new TasksHistory();
        this.tasksNumber = document.querySelector('h2 span');
        this.input = document.querySelector('.wrapper input');
        this.addBtn = document.querySelector('.wrapper button');
        this.addBtn.addEventListener('click', this.newTaskRender.bind(this,event))
    }
    newTaskRender(){
        event.preventDefault();
        const createdTask = this.tasksHistory.addTask(this.input.value);
        this.tasksNumber.textContent = this.tasksHistory.getUnfinishedTasksNumber();
        this.ul.appendChild(createdTask);
        const that = this;
        createdTask.querySelector('button').addEventListener('click', function (){
            that.removeTask(this);
        })
        this.input.value = '';
    }
    removeTask(elemToRemove){
        const index = Math.floor(elemToRemove.parentNode.id);
        this.tasksHistory.finishTask(document.querySelector(`ul li:nth-child(${index+1})`).textContent);
        elemToRemove.parentNode.remove();
        this.tasksNumber.textContent--;
        for( let i = index+1; i < this.ul.childElementCount+1; i++){
            document.querySelector(`ul li:nth-child(${i})`).id -= 1;
        }
    }
}