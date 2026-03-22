type GenericArray<T> = Array<T>;

const number: GenericArray<number> = [12, 3, 45];

type GenericTuple<X, Y> = [X, Y];

const onno : GenericTuple<string, number> = ['onno', 34];


//
// Generics With Interface
interface Developer<T, X = null> {
  name: string;
  computer: {
    brand: string;
    model: string;
    releaseYear: number;
  };
  smartWatch: T;
  bike?: X;
}

interface EmilabWatch {
  brand: string;
  model: string;
  display: string;
}
const poorDeveloper: Developer<EmilabWatch> = {
  name: "Sazid",
  computer: {
    brand: "Ryzen",
    model: "2xx-1x",
    releaseYear: 2025,
  },
  smartWatch: {
    brand: "HUAWEI",
    model: "A-007",
    display: "OLED",
  },
};

interface AppleWatch {
  brand: string;
  model: string;
  display: string;
  heartTrack: boolean;
  sleepTrack: boolean;
}
interface YmamahBike {
  model: string;
  engineCapacity: string;
}
const richDeveloper: Developer<AppleWatch, YmamahBike> = {
  name: "Pazid",
  computer: {
    brand: "MAC",
    model: "2YY-1",
    releaseYear: 2026,
  },
  smartWatch: {
    brand: "Apple",
    model: "A-007",
    display: "AMOLED",
    heartTrack: true,
    sleepTrack: true,
  },
  bike: {
    model: "Ymamah",
    engineCapacity: "100cc",
  },
};
//generics with function 

function addTwoNumbers<T extends number>(num1: T, num2: T): number {
  return num1 + num2;
}

const createArrayWithGenerics = <T>(param:T) : T[] =>{
    return [param]
}

const respond = createArrayWithGenerics<string>("Bangladesh"); // ["Bangladesh"]


const createTupleWithGeneric = <X, Y>(param1: X, param2: Y): [X, Y] => {
  return [param1, param2];
};

const res4 = createTupleWithGeneric<string, number>("Bangladesh", 1);


// constrains IN tYPESCRIPT
type Student = {
  id: number;
  name: string;
  email: string;
};
const addCourseToStudent = <T extends Student>(student: T) => {
  // this means T must should maintain the types of Student (we are setting rules)
  const course = "Next Level Web Dev";
  return {
    ...student,
    course,
  };
};

const student1 = addCourseToStudent({
  id: 123,
  name: "Sazid",
  email: "sazid@gmail.com",
  devType: "NLWD",
});
const student2 = addCourseToStudent({
  id: 123,
  name: "Sazid",
  email: "sazid@gmail.com",
  finished: "BLWD",
});

//   Record Types
//  if we want adding a key value pairs adds a dynamic type we will Use Record Type
// The Record type is a utility type used to create objects with specific keys and value types. It's great when you want to dynamically define key-value pairs.
type MyObj = {
  a: string;
  b: string;
};

const objs: MyObj = {
  a: "aa",
  b: "bb",
  // c: "cc", // this will not allow to add c since type of c is not defined
};

//   record comes with the solution like that if we add any value the type will be defied dynamically
type MyObj2 = Record<string, string>;
//   Record<keys type, values type >;
const MyObj2: MyObj2 = {
  a: "aa",
  b: "bb",
  c: "cc",
};