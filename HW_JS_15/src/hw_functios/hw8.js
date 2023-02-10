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
    }

    dismiss (){
        this.dismissed = true; 
    }
    recover (){
        this.dismissed = false; 
    }
}
export {Student}