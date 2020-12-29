class Search{
    static searchIncludeTask(list, phrase){
        const tasksIncludesPhrase = [];
        for(let i = 0; i < list.length; i++){
            if (list[i].description.includes(phrase)) tasksIncludesPhrase.push(list[i].description);
        }
        return tasksIncludesPhrase;
    }
    static searchSameTask(list, phrase){
        for(let i = list.length-1; i >= 0; i--){
            if (list[i].description.toLowerCase() === phrase.toLowerCase()) return i;
        }
        return null;
    }
}