class Student {

    constructor (university, course, fullName , marks){
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
        this.dismissed = false;
    }

    getInfo(){
        return `Студент ${this.course}го курсу, ${this.university}, ${this.fullName}`
    }

    get currentMarks(){
        if(this.dismissed){
            return null;
        }
        return this.marks;
    }

    set addMark (mark){
        if(this.dismissed){
            return null;
        }
        this.marks.push(mark);
        return this.marks
    }

    getAverageMark(){
        return this.marks.reduce((sum , val) => (sum + val)) /this.marks.length;
        // let sum = 0;
        // for (let mark of this.marks){
        //     sum += mark;
        // }
        // return sum / this.marks.length;
    }

    dismiss (){
        this.dismissed = true; 
    }
    recover (){
        this.dismissed = false; 
    }
}


class BudgetStudent extends Student{
    constructor(university, course, fullName , marks){
        super(university, course, fullName , marks)
        setInterval(() => this.getScholarship(),30000);
    }

    getScholarship(){
        if(this.dismissed){
            console.log(null)
            return null
        }

        if(this.getAverageMark() >= 4){
            console.log(`Ви отримали 1400 грн.стипендії`);
        }else{
            console.log("Ви не отримали стипендію"); 
        }
        
    }
}

let student1 = new BudgetStudent ('Cursor' , '1' , 'Tupis Rostyslav Romanovich' , [5, 5, 4, 5]);

console.log(student1.getInfo());
console.log(student1.currentMarks);
student1.addMark = 5;
console.log(student1.currentMarks);
console.log(student1.getAverageMark());
student1.dismiss();
console.log(student1.currentMarks);
student1.recover();
console.log(student1.currentMarks);








