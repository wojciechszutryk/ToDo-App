class Tasks{
    constructor(ul) {
        this.tasks = [];
        this.ul = ul;
    }
    getTasks = () => this.tasks;
    getTasksNumber = () => this.tasks.length;
    addTask(description){
        if(description) {
            const newTask = new Create(description, this.getTasksNumber()).createLi();
            this.tasks.push(newTask);
            this.ul.appendChild(newTask);
            const that = this;
            newTask.querySelector('button').addEventListener('click', function (){
                that.removeTask(this);
            })
        }
    }
    removeTask(elemToRemove) {
        const index = Math.floor(elemToRemove.parentNode.id);
        elemToRemove.parentNode.remove();
        this.tasks.splice(index,1);
        for( let i = index+1; i < this.getTasksNumber()+1; i++){
            this.tasks.id--;
            document.querySelector(`ul li:nth-child(${i})`).id -= 1;
        }
    }
}