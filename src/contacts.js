const contacts = [
  {
    id: 1,
    name: "Zuckerberg",
    imgURL:
      "data:image/jpeg;base64,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",
    phone: "+123 456 789",
    email: "m@zucci.com"
  },
  {
    id: 2,
    name: "Jack Bauer",
    imgURL:
      "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
    phone: "+987 654 321",
    email: "jack@nowhere.com"
  },
  {
    id: 3,
    name: "Chuck Norris",
    imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    phone: "+918 372 574",
    email: "gmail@chucknorris.com"
  }
];

export default contacts;
