class Search{
    static searchIncludeTask(list, phrase){
        const tasksIncludesPhrase = [];
        for(let i = 0; i < list.length; i++){
            if (list[i].description.includes(phrase)) tasksIncludesPhrase.push(list[i].description);
        }
        return tasksIncludesPhrase;
    }
    static searchSameTask(list, phrase){
        for(let i = 0; i < list.length; i++){
            if (list[i].description === phrase) return i;
        }
        return null;
    }
}