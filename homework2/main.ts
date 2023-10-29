class School {
    _areas: string[] = [];
    _lecturers: {name: string, surname: string, position: string, company: string, experience:number, courses:number, contacts:number}[] = [];

    get areas() {
        return this._areas;
    }

    get lecturers() {
        return this._lecturers;
    }

    addArea (area: string) {
        this._areas.push(area);
    }

    removeAre(area: string) {
        this._areas = this._areas.filter((searchArea)=> searchArea !== area);
    }

    addLecturer(name: string, surname: string, position: string, company: string, experience: number, courses: number, contacts: number) {
        this._lecturers.push({name: name, surname: surname, position: position, company: company, experience:experience, courses:courses, contacts:contacts})
    }

    removeLecturer(deleteSurname: string) {
        this._lecturers.filter((lecturer) => lecturer.surname !== deleteSurname);
    }
}

class Area {
    _levels: string[] = [];
    _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get levels () {
        return this._levels;
    }

    get name () : string {
        return this._name;
    }

    addLevel (level: string) {
        this._levels.push(level);
    }

    removeLevel (level: string) {
        this._levels.filter((levels) => levels !== level)
    }
}


class Level {
    _groups: number[] = [];
    _name: string;
    _description: string;

    constructor(name: string, description: string) {
        this._name = name;
        this._description = description;
    }

    get Groups (): number[] {
        return this._groups;
    }

    get Name (): string {
        return this._name;
    }

    addGroup(group: number) {
        this._groups.push(group);
    }

    removeGroup(group: number) {
        this._groups.filter((groups) => groups !== group)
    }
}


class Group {
    _area: string;
    _status: boolean;
    _students: Student[] = [];
    directionName: string;
    levelName: string;

    constructor(directionName: string, levelName: string) {
        this.directionName = directionName;
        this.levelName = levelName;
    }

    showPerformance(): Student[] {
        const sortedStudents: Student[] = this._students.sort((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
        return sortedStudents;
    }

    getArea(): string {
        return this._area;
    }

    getStatus() : boolean {
        return this._status;
    }

    addStudent(student: Student) {
        this._students.push(student);
    }

    removeStudent(student: Student){
        this._students.filter((student) => student !== student);
    }

    set status(value) {
        this._status = value;
    }
}


class Student {
    _firstName: string;
    _lastName: string;
    _birthYear: number;
    _grades: {[workName: string] : number } [] = [];
    _visits: { [lesson: string] : boolean} [] = [];

    constructor(firstName: string, lastName: string, birthYear: number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthYear = birthYear;
    }

    setGrade (workName: string, mark: number) {
        this._grades[workName] = mark;
    }

    setVisit (lesson: string, present: boolean) {
        this._visits[lesson] = present;
    }

    get fullName(): string {
        return `${this._lastName} ${this._firstName}`;
    }

    set fullName(value: string) {
        [this._lastName, this._firstName] = value.split(' ');
    }

    get age(): number {
        return new Date().getFullYear() - this._birthYear;
    }

    getPerformanceRating(): number {
        const gradeValues = Object.values(this._grades);

        if (!gradeValues.length) return 0;

        const averageGrade = gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
        const attendancePercentage = (this._visits.filter(present => present).length / this._visits.length) * 100;


        return (averageGrade + attendancePercentage) / 2;
    }
}