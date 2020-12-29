class Application{
    constructor() {
        this.ul = document.querySelector('.wrapper ul');
        this.li = [...document.querySelectorAll('.wrapper ul li')];
        this.tasksHistory = new TasksHistory();
        this.tasksNumber = document.querySelector('h2 span');
        this.inputAdd = document.querySelector('.wrapper input');
        this.addBtn = document.querySelector('.wrapper button');
        this.addBtn.addEventListener('click', this.newTaskRender.bind(this,event))
    }
    newTaskRender(){
        event.preventDefault();
        if (this.inputAdd.value) {
            for (let li of [...document.querySelectorAll('.wrapper ul li')]){
                if( li.textContent === this.inputAdd.value){
                    li.style.backgroundColor = '#333'
                    alert('this task already exist. Try other description.');
                    setTimeout(()=>{li.style.backgroundColor = '#000'}, 1000);
                    this.inputAdd.value = '';
                    return;
                }
            }
            const createdTask = this.tasksHistory.addTask(this.inputAdd.value);
            this.tasksNumber.textContent++;
            this.ul.appendChild(createdTask);
            const that = this;
            createdTask.querySelector('button').addEventListener('click', function () {
                that.removeTask(this);
            })
            this.inputAdd.value = '';
        }
        else alert('task con not be empty')
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