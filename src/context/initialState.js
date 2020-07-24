import uuid4 from "uuid";
export const initialState = [
  {
    _id: uuid4(),
    firstName: "Benmar John",
    lastName: "Mendoza",
    middleName: "Bonto",
    birthday: "Thu Mar 14 1993 00:00:00 GMT+0700 (Indochina Time)",
    gender: "Male",
    course: [],
  },
  {
    _id: uuid4(),
    firstName: "Allen Phillip",
    lastName: "Bonagua",
    middleName: "Millendez",
    birthday: "Thu Jan 11 1992 00:00:00 GMT+0700 (Indochina Time)",
    gender: "Male",
    course: [],
  },
  {
    _id: uuid4(),
    firstName: "Darren James",
    lastName: "Dalino",
    middleName: "Yulo",
    birthday: "Thu Apr 30 1993 00:00:00 GMT+0700 (Indochina Time)",
    gender: "Male",
    course: [
      {
        value: 1,
        label: "BS IN STATISTICS",
      },
    ],
  },
  {
    _id: uuid4(),
    firstName: "Timothy John",
    lastName: "Dalino",
    middleName: "Yulo",
    birthday: "Thu Jul 21 1989 00:00:00 GMT+0700 (Indochina Time)",
    gender: "Male",
    course: [
      {
        value: 1,
        label: "BS IN STATISTICS",
      },
    ],
  },
  {
    _id: uuid4(),
    firstName: "Deborah Joyce",
    lastName: "Mahinay",
    middleName: "Dalino",
    birthday: "Thu Jan 21 1991 00:00:00 GMT+0700 (Indochina Time)",
    gender: "Female",
    course: [
      {
        value: 3,
        label: "BS IN MATHEMATICS",
      },
      {
        value: 4,
        label: "BS IN MANAGEMENT",
      },
      {
        value: 5,
        label: "BS IN JOURNALISM",
      },
      {
        value: 6,
        label: "BS IN GEOLOGY",
      },
      {
        value: 7,
        label: "BS IN GEOGRAPHY",
      },
    ],
  },
  {
    _id: uuid4(),
    firstName: "Jane",
    lastName: "Doe",
    middleName: "",
    birthday: "Thu Nov 19 1994 00:00:00 GMT+0700 (Indochina Time)",
    gender: "Female",
    course: [
      {
        value: 3,
        label: "BS IN MATHEMATICS",
      },
      {
        value: 4,
        label: "BS IN MANAGEMENT",
      },
      {
        value: 5,
        label: "BS IN JOURNALISM",
      },
      {
        value: 6,
        label: "BS IN GEOLOGY",
      },
      {
        value: 7,
        label: "BS IN GEOGRAPHY",
      },
    ],
  },
  {
    _id: uuid4(),
    firstName: "Ryan",
    lastName: "Mahinay",
    middleName: "",
    birthday: "Thu Oct 06 1991 00:00:00 GMT+0700 (Indochina Time)",
    gender: "Male",
    course: [
      {
        value: 8,
        label: "BS IN FORESTRY",
      },
      {
        value: 9,
        label: "BS IN FISHERIES",
      },
      {
        value: 10,
        label: "BS IN TOURISM",
      },
      {
        value: 11,
        label: "BS IN ZOOLOGY",
      },
      {
        value: 12,
        label: "BS IN PHYSICS",
      },
    ],
  },
  {
    _id: uuid4(),
    firstName: "Rehum",
    lastName: "Reginaldo",
    middleName: "Senaris",
    birthday: "Thu Oct 06 1991 00:00:00 GMT+0700 (Indochina Time)",
    gender: "Male",
    course: [
      {
        value: 1,
        label: "BS IN STATISTICS",
      },
      {
        value: 8,
        label: "BS IN FORESTRY",
      },
      {
        value: 11,
        label: "BS IN ZOOLOGY",
      },
      {
        value: 4,
        label: "BS IN MANAGEMENT",
      },
      {
        value: 12,
        label: "BS IN PHYSICS",
      },
    ],
  },
  {
    _id: uuid4(),
    firstName: "Nathaneil Demnick",
    lastName: "Pulido",
    middleName: "",
    birthday: "Thu Aug 08 1992 00:00:00 GMT+0700 (Indochina Time)",
    gender: "Male",
    course: [
      {
        value: 1,
        label: "BS IN STATISTICS",
      },
      {
        value: 2,
        label: "BS IN MARKETING",
      },
      {
        value: 3,
        label: "BS IN MATHEMATICS",
      },
      {
        value: 4,
        label: "BS IN MANAGEMENT",
      },
      {
        value: 5,
        label: "BS IN JOURNALISM",
      },
      {
        value: 6,
        label: "BS IN GEOLOGY",
      },
      {
        value: 7,
        label: "BS IN GEOGRAPHY",
      },
      {
        value: 8,
        label: "BS IN FORESTRY",
      },
      {
        value: 9,
        label: "BS IN FISHERIES",
      },
      {
        value: 10,
        label: "BS IN TOURISM",
      },
      {
        value: 11,
        label: "BS IN ZOOLOGY",
      },
      {
        value: 12,
        label: "BS IN PHYSICS",
      },
      {
        value: 13,
        label: "BS IN PHARMACY",
      },
      {
        value: 14,
        label: "BS IN NUTRITION",
      },
      {
        value: 15,
        label: "BS IN NURSING",
      },
    ],
  },
  {
    _id: uuid4(),
    firstName: "Erish Jasper",
    lastName: "Genuino",
    middleName: "",
    birthday: "Thu Feb 14 1992 00:00:00 GMT+0700 (Indochina Time)",
    gender: "Male",
    course: [
      {
        value: 1,
        label: "BS IN STATISTICS",
      },
      {
        value: 2,
        label: "BS IN MARKETING",
      },
      {
        value: 3,
        label: "BS IN MATHEMATICS",
      },
      {
        value: 4,
        label: "BS IN MANAGEMENT",
      },
      {
        value: 5,
        label: "BS IN JOURNALISM",
      },
      {
        value: 6,
        label: "BS IN GEOLOGY",
      },
      {
        value: 7,
        label: "BS IN GEOGRAPHY",
      },
      {
        value: 8,
        label: "BS IN FORESTRY",
      },
      {
        value: 9,
        label: "BS IN FISHERIES",
      },
      {
        value: 10,
        label: "BS IN TOURISM",
      },
      {
        value: 11,
        label: "BS IN ZOOLOGY",
      },
      {
        value: 12,
        label: "BS IN PHYSICS",
      },
      {
        value: 13,
        label: "BS IN PHARMACY",
      },
      {
        value: 14,
        label: "BS IN NUTRITION",
      },
      {
        value: 15,
        label: "BS IN NURSING",
      },
    ],
  },
];

export function getData() {
  return initialState.map((i) => i);
}
