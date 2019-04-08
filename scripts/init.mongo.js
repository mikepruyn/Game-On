db = new Mongo().getDB('game-on');

db.events.remove({});
db.profiles.remove({});
db.threads.remove({});


db.events.insert([
  {
    sport: 'Basketball',
    location: 'Southwest Courts',
    people_going: 0,
    date: "2016-08-15",
    time: '12:20',
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

db.threads.insert([
    {
    title: "Thread One Title",
    body: "Desription of the thread topic",
    replies: [
        "Test reply 1",
        "Test reply 2"
    ]
    },
    {
        title: "Thread Two Title",
        body: "Yet another description of thread topic",
        replies: [
          "And another reply for this thread"
        ]
      }
    ]);