let contacts = [
  {
    id: 1,
    first_name: "Griselda",
    last_name: "Livard",
    email: "glivard0@squarespace.com",
    gender: "Agender",
  },
  {
    id: 2,
    first_name: "Stacee",
    last_name: "D'Andrea",
    email: "sdandrea1@tinypic.com",
    gender: "Bigender",
  },
  {
    id: 3,
    first_name: "Clair",
    last_name: "Eye",
    email: "ceye2@archive.org",
    gender: "Female",
  },
  {
    id: 4,
    first_name: "Marianne",
    last_name: "Hatto",
    email: "mhatto3@goodreads.com",
    gender: "Male",
  },
  {
    id: 5,
    first_name: "Hester",
    last_name: "Kinset",
    email: "hkinset4@ovh.net",
    gender: "Bigender",
  },
  {
    id: 6,
    first_name: "Alexandr",
    last_name: "Lempertz",
    email: "alempertz5@goo.gl",
    gender: "Bigender",
  },
  {
    id: 7,
    first_name: "Charity",
    last_name: "Larmuth",
    email: "clarmuth6@foxnews.com",
    gender: "Polygender",
  },
  {
    id: 8,
    first_name: "Lamont",
    last_name: "Splevings",
    email: "lsplevings7@imgur.com",
    gender: "Polygender",
  },
  {
    id: 9,
    first_name: "Ashil",
    last_name: "Witnall",
    email: "awitnall8@hexun.com",
    gender: "Non-binary",
  },
  {
    id: 10,
    first_name: "Leta",
    last_name: "Butterwick",
    email: "lbutterwick9@instagram.com",
    gender: "Genderqueer",
  },
];

//contacts.map(()=>{})
let new_Id = contacts.forEach((contact) => {
  return contact.first_name;
});
console.log(new_Id);
