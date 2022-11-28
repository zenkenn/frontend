import bugModel from '..Models/bugModel'

export function retrieveBugs(){
    let data = [];

    data.push(new bugModel({
        _id:124214124,
        name:"Crash on load",
        details:"open application and it will crash",
        steps:"open and it will crash",
        version:"V2.0",
        assigned:"Kenny",
        creator:"Kenneth Riveron",
        priority:1,
        time:"23.38",
    }))
    data.push(new bugModel({
        _id:124214124,
        name:"Wont display page",
        details:"open and nothing shows up",
        steps:"open and nothing shows up",
        version:"V2.0",
        assigned:"Kenny",
        creator:"Kenneth Riveron",
        priority:2,
        time:"23.38",
    }))

    let sorted = data.sort((a,b)=>{return a.priority - b.priority})
    return sorted;
}