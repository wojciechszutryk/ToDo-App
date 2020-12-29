class Create{
    constructor(description, id) {
        this.description = description;
        this.id = id;
    }
    createLi = () => {
        const li = document.createElement('li');
        li.id = this.id;
        li.textContent = this.description;
        li.innerHTML += '<button><i class="fas fa-trash-alt"></i></button>';
        return li;
    }
}