db = new Mongo().getDB('game-on');

db.events.remove({});
db.profiles.remove({});
db.threads.remove({});


db.events.insert([
  {
    sport: 'Basketball',
    location: 'Southwest Courts',
    people_going: 0,
    date: "2018-10-15",
    time: '12:20',
  },
  {
    sport: 'Soccer',
    location: 'Mullins Center Fields',
    people_going: 0,
    date: "2019-1-05",
    time: '5:30',
  },
  {
    sport: 'Volleyball',
    location: 'Boyden Gym',
    people_going: 0,
    date: "2019-05-23",
    time: '8:15',
  }
]);

db.profiles.insert([
    {
      name: "Doris Chan",
      created: new Date("2016-08-15"),
      interest: "Badminton",
      time: "7PM",
    }
  ]);
