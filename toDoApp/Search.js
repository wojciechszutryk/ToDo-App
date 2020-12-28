class Search{
    static searchInclude(list, phrase){
        return list.filter((elem) => elem.includes(phrase));
    }
    static searchSame(list, phrase){
        return !!list.includes(phrase);
    }
}