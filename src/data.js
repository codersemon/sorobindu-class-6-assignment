// donator database
const donator = [
  {
    id: 1,
    name: "Rahman Ahmed",
    age: 26,
    address: "Mirpur",
    cell: "01895412365",
    blood_group: "A+",
    last_donate: 120,
    donation_history: [
      {
        name: "Kamal Uddin",
        date: "15 May, 2023",
      },
      {
        name: "Mohammad Ali",
        date: "20 Feb, 2023",
      },
      {
        name: "Abdul Karim",
        date: "15 Nov, 2022",
      },
    ],
  },
  {
    id: 2,
    name: "Farida Khan",
    age: 32,
    address: "Badda",
    cell: "01954248798",
    blood_group: "B+",
    last_donate: 160,
    donation_history: [
      {
        name: "Ashfaq Hussain",
        date: "2 Feb, 2021",
      },
      {
        name: "Nazma Begum",
        date: "1 Jan, 2020",
      },
    ],
  },
  {
    id: 3,
    name: "Ali Hasan",
    age: 28,
    address: "Dhanmondi",
    cell: "01712548695",
    blood_group: "O+",
    last_donate: 90,
    donation_history: [
      {
        name: "Mustafa Rahman",
        date: "10 Mar, 2023",
      },
      {
        name: "Salma Begum",
        date: "5 Jan, 2023",
      },
    ],
  },
  {
    id: 4,
    name: "Ayesha Begum",
    age: 35,
    address: "Gulshan",
    cell: "01687459632",
    blood_group: "AB+",
    last_donate: 210,
    donation_history: [
      {
        name: "Iqbal Hossain",
        date: "12 Dec, 2022",
      },
      {
        name: "Sabina Akter",
        date: "8 Nov, 2022",
      },
    ],
  },
  {
    id: 5,
    name: "Shahid Islam",
    age: 29,
    address: "Uttara",
    cell: "01963258741",
    blood_group: "A-",
    last_donate: 180,
    donation_history: [
      {
        name: "Abdullah Ahmed",
        date: "20 Sep, 2022",
      },
      {
        name: "Yasmin Khan",
        date: "15 Aug, 2022",
      },
    ],
  },
  {
    id: 6,
    name: "Naima Akter",
    age: 31,
    address: "Mohammadpur",
    cell: "01785412587",
    blood_group: "B-",
    last_donate: 150,
    donation_history: [
      {
        name: "Rashed Islam",
        date: "5 May, 2022",
      },
      {
        name: "Amina Begum",
        date: "1 Apr, 2022",
      },
    ],
  },
  {
    id: 7,
    name: "Ashfaq Khan",
    age: 33,
    address: "Mirpur",
    cell: "01874159632",
    blood_group: "O-",
    last_donate: 240,
    donation_history: [
      {
        name: "Tahmina Akter",
        date: "10 Dec, 2021",
      },
      {
        name: "Rafiqul Islam",
        date: "5 Nov, 2021",
      },
    ],
  },
  {
    id: 8,
    name: "Nazma Begum",
    age: 27,
    address: "Motijheel",
    cell: "01632547895",
    blood_group: "AB-",
    last_donate: 130,
    donation_history: [
      {
        name: "Abdul Karim",
        date: "15 Sep, 2021",
      },
      {
        name: "Fatima Khan",
        date: "10 Aug, 2021",
      },
    ],
  },
  {
    id: 9,
    name: "Kamal Uddin",
    age: 30,
    address: "Gazipur",
    cell: "01758963214",
    blood_group: "A+",
    last_donate: 200,
    donation_history: [
      {
        name: "Sultana Begum",
        date: "2 May, 2021",
      },
      {
        name: "Fahim Ahmed",
        date: "25 Apr, 2021",
      },
    ],
  },
  {
    id: 10,
    name: "Nasreen Ahmed",
    age: 25,
    address: "Savar",
    cell: "01954789632",
    blood_group: "B+",
    last_donate: 170,
    donation_history: [
      {
        name: "Akram Khan",
        date: "10 Jan, 2021",
      },
      {
        name: "Monira Islam",
        date: "5 Dec, 2020",
      },
    ],
  },
  {
    id: 11,
    name: "Abdul Rahman",
    age: 26,
    address: "Mohammadpur",
    cell: "01895412365",
    blood_group: "A+",
    last_donate: 50,
    donation_history: [
      {
        name: "Kamal Uddin",
        date: "15 May, 2023",
      },
      {
        name: "Mohammad Ali",
        date: "20 Feb, 2023",
      },
      {
        name: "Abdul Karim",
        date: "15 Nov, 2022",
      },
    ],
  },
  {
    id: 12,
    name: "Fatima Khan",
    age: 32,
    address: "Badda",
    cell: "01954258798",
    blood_group: "B+",
    last_donate: 100,
    donation_history: [
      {
        name: "Ashfaq Hussain",
        date: "2 Feb, 2021",
      },
      {
        name: "Nazma Begum",
        date: "1 Jan, 2020",
      },
    ],
  },
  {
    id: 13,
    name: "Kamal Hasan",
    age: 28,
    address: "Dhanmondi",
    cell: "01712548695",
    blood_group: "O+",
    last_donate: 90,
    donation_history: [
      {
        name: "Mustafa Rahman",
        date: "10 Mar, 2023",
      },
      {
        name: "Salma Begum",
        date: "5 Jan, 2023",
      },
    ],
  },
  {
    id: 14,
    name: "Aisha Begum",
    age: 35,
    address: "Gulshan",
    cell: "01687459632",
    blood_group: "AB+",
    last_donate: 210,
    donation_history: [
      {
        name: "Iqbal Hossain",
        date: "12 Dec, 2022",
      },
      {
        name: "Sabina Akter",
        date: "8 Nov, 2022",
      },
    ],
  },
  {
    id: 15,
    name: "Shahidur Rahman",
    age: 29,
    address: "Uttara",
    cell: "01963258741",
    blood_group: "A-",
    last_donate: 95,
    donation_history: [
      {
        name: "Abdullah Ahmed",
        date: "20 Sep, 2022",
      },
      {
        name: "Yasmin Khan",
        date: "15 Aug, 2022",
      },
    ],
  },
  {
    id: 16,
    name: "Naima Akter",
    age: 31,
    address: "Mohammadpur",
    cell: "01785412587",
    blood_group: "B-",
    last_donate: 150,
    donation_history: [
      {
        name: "Rashed Islam",
        date: "5 May, 2022",
      },
      {
        name: "Amina Begum",
        date: "1 Apr, 2022",
      },
    ],
  },
  {
    id: 17,
    name: "Ashfaq Hussain",
    age: 33,
    address: "Banani",
    cell: "01874159632",
    blood_group: "O-",
    last_donate: 100,
    donation_history: [
      {
        name: "Tahmina Akter",
        date: "10 Dec, 2021",
      },
      {
        name: "Rafiqul Islam",
        date: "5 Nov, 2021",
      },
    ],
  },
  {
    id: 18,
    name: "Nazma Begum",
    age: 27,
    address: "Motijheel",
    cell: "01632547895",
    blood_group: "AB-",
    last_donate: 130,
    donation_history: [
      {
        name: "Abdul Karim",
        date: "15 Sep, 2021",
      },
      {
        name: "Fatima Khan",
        date: "10 Aug, 2021",
      },
    ],
  },
  {
    id: 19,
    name: "Tamal Uddin",
    age: 30,
    address: "Gazipur",
    cell: "01758963214",
    blood_group: "A+",
    last_donate: 95,
    donation_history: [
      {
        name: "Sultana Begum",
        date: "2 May, 2021",
      },
      {
        name: "Fahim Ahmed",
        date: "25 Apr, 2021",
      },
    ],
  },
  {
    id: 20,
    name: "Nasreen Ahmed",
    age: 25,
    address: "Savar",
    cell: "01954789632",
    blood_group: "B+",
    last_donate: 170,
    donation_history: [
      {
        name: "Akram Khan",
        date: "10 Jan, 2021",
      },
      {
        name: "Monira Islam",
        date: "5 Dec, 2020",
      },
    ],
  },
];
