class Application{
    constructor() {
        this.tasks = new Tasks(document.querySelector('.wrapper ul'));
        this.input = document.querySelector('.wrapper input');
        this.addBtn = document.querySelector('.wrapper button');
        this.addBtn.addEventListener('click', function (e){
            e.preventDefault();
            this.tasks.addTask(this.input.value);
            this.input.value = '';
        }.bind(this));
    }
}