class Application{
    constructor() {
        let that = this;
        this.currentLiList = []
        this.ul = document.querySelector('.wrapper ul');
        this.tasksHistory = new TasksHistory();
        this.tasksNumber = document.querySelector('h2 span');
        this.inputAdd = document.querySelector('.wrapper input');
        this.addBtn = document.querySelector('.wrapper button');
        this.inputSearch = document.querySelector('#history + label input');
        this.histopryPopUp = document.querySelector('.historyPopUp');
        this.histopryPopUpClose = document.querySelector('.closePopUp');
        this.addBtn.addEventListener('click', this.newTaskRender.bind(this));
        this.inputSearch.addEventListener('input', this.searchRender.bind(that));
        document.querySelector('#history').addEventListener('click', this.showHistory.bind(that));
        this.histopryPopUpClose.addEventListener('click', this.showHistory.bind(that));
    }
    updateCurrentLiList(){
        this.currentLiList = [...this.ul.childNodes];
    }
    newTaskRender(event){
        event.preventDefault();
        this.inputSearch.value = '';
        for(let currentLiItem of this.currentLiList){
            this.ul.appendChild(currentLiItem);
        }
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
            this.tasksNumber.textContent = this.currentLiList.length+1;
            this.ul.appendChild(createdTask);
            const that = this;
            createdTask.querySelector('button').addEventListener('click', function () {
                that.removeTask(this);
            })
            this.inputAdd.value = '';
            this.updateCurrentLiList()
            this.closeHistory();
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
        this.updateCurrentLiList()
    }
    searchRender(e){
        for(let currentLiItem of this.currentLiList){
            this.ul.appendChild(currentLiItem);
        }
        const phrase = e.target.value;
        let counter = 0;
        const li = [...document.querySelectorAll('.wrapper ul li')];
        this.ul.textContent = '';
        for(let i of li){
            if(i.textContent.toLowerCase().includes(phrase)) {
                this.ul.appendChild(i);
                counter++;
            }
        }
        this.tasksNumber.textContent = counter;
    }
    closeHistory(){
        this.histopryPopUp.classList.remove('active');
        this.histopryPopUpClose.classList.remove('active');
        document.querySelector('.wrapper').classList.remove('active');
    }
    showHistory(){
        this.histopryPopUp.classList.toggle('active');
        this.histopryPopUpClose.classList.toggle('active');
        document.querySelector('.wrapper').classList.toggle('active');
        document.querySelector('.historyPopUp ul').innerHTML = this.tasksHistory.drawHistory();
    }
}