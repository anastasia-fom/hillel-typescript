var School = /** @class */ (function () {
    function School() {
        this._areas = [];
        this._lecturers = [];
    }
    Object.defineProperty(School.prototype, "areas", {
        get: function () {
            return this._areas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(School.prototype, "lecturers", {
        get: function () {
            return this._lecturers;
        },
        enumerable: false,
        configurable: true
    });
    School.prototype.addArea = function (area) {
        this._areas.push(area);
    };
    School.prototype.removeAre = function (area) {
        this._areas = this._areas.filter(function (searchArea) { return searchArea !== area; });
    };
    School.prototype.addLecturer = function (name, surname, position, company, experience, courses, contacts) {
        this._lecturers.push({ name: name, surname: surname, position: position, company: company, experience: experience, courses: courses, contacts: contacts });
    };
    School.prototype.removeLecturer = function (deleteSurname) {
        this._lecturers.filter(function (lecturer) { return lecturer.surname !== deleteSurname; });
    };
    return School;
}());
var Area = /** @class */ (function () {
    function Area(name) {
        this._levels = [];
        this._name = name;
    }
    Object.defineProperty(Area.prototype, "levels", {
        get: function () {
            return this._levels;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Area.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Area.prototype.addLevel = function (level) {
        this._levels.push(level);
    };
    Area.prototype.removeLevel = function (level) {
        this._levels.filter(function (levels) { return levels !== level; });
    };
    return Area;
}());
var Level = /** @class */ (function () {
    function Level(name, description) {
        this._groups = [];
        this._name = name;
        this._description = description;
    }
    Object.defineProperty(Level.prototype, "Groups", {
        get: function () {
            return this._groups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "Name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Level.prototype.addGroup = function (group) {
        this._groups.push(group);
    };
    Level.prototype.removeGroup = function (group) {
        this._groups.filter(function (groups) { return groups !== group; });
    };
    return Level;
}());
var Group = /** @class */ (function () {
    function Group(directionName, levelName) {
        this._students = [];
        this.directionName = directionName;
        this.levelName = levelName;
    }
    Group.prototype.showPerformance = function () {
        var sortedStudents = this._students.sort(function (a, b) { return b.getPerformanceRating() - a.getPerformanceRating(); });
        return sortedStudents;
    };
    Group.prototype.getArea = function () {
        return this._area;
    };
    Group.prototype.getStatus = function () {
        return this._status;
    };
    Group.prototype.addStudent = function (student) {
        this._students.push(student);
    };
    Group.prototype.removeStudent = function (student) {
        this._students.filter(function (student) { return student !== student; });
    };
    Object.defineProperty(Group.prototype, "status", {
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    return Group;
}());
var Student = /** @class */ (function () {
    function Student(firstName, lastName, birthYear) {
        this._grades = [];
        this._visits = [];
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthYear = birthYear;
    }
    Student.prototype.setGrade = function (workName, mark) {
        this._grades[workName] = mark;
    };
    Student.prototype.setVisit = function (lesson, present) {
        this._visits[lesson] = present;
    };
    Object.defineProperty(Student.prototype, "fullName", {
        get: function () {
            return "".concat(this._lastName, " ").concat(this._firstName);
        },
        set: function (value) {
            var _a;
            _a = value.split(' '), this._lastName = _a[0], this._firstName = _a[1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "age", {
        get: function () {
            return new Date().getFullYear() - this._birthYear;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.getPerformanceRating = function () {
        var gradeValues = Object.values(this._grades);
        if (!gradeValues.length)
            return 0;
        var averageGrade = gradeValues.reduce(function (sum, grade) { return sum + grade; }, 0) / gradeValues.length;
        var attendancePercentage = (this._visits.filter(function (present) { return present; }).length / this._visits.length) * 100;
        return (averageGrade + attendancePercentage) / 2;
    };
    return Student;
}());
