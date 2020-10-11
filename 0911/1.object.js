//Object(객체)
// - 구조 : {key : value}

// const name = 'Songmin';
// const age = '28';

// console.log(`안녕하세요 ${name}이고 나이는 ${age}입니다.`);

// const name = 'Alice'';
// const age = '21';

// console.log(`안녕하세요 ${name}이고 나이는 ${age}입니다.`);

//1.객체 정의
const person = {
    name : 'Songmin',
    age : 28,
    hobby : ['요리','영화보기','헬스'],
    speak : function(){
        console.log(`안녕하세요 ${this.name}이고 나이는 ${person.age}입니다.`);
    }
}
//2. 객체의 속성과 메소드 접근
console.log(person.name);
console.log(person.age);
console.log(person.hobby[0]);
console.log(person.hobby[1]);
console.log(person.hobby[2]);
console.log(person.hobby);
person.speak();