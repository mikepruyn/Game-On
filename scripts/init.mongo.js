db = new Mongo().getDB('game-on');

db.events.remove({});
db.profiles.remove({});
db.threads.remove({});


db.events.insert([
  {
    id: 0,
    sport: 'Basketball',
    location: 'Southwest Courts',
    people_going: 0,
    date: "2016-08-15",
    time: '12:20',
    user_going: false
  } 
]);

db.profiles.insert([
    {
      id: 1,
      
      name: "Doris Chan",
      created: new Date("2016-08-15"),
      interest: "Badminton",
      time: "7PM",
      title: "Error in console when clicking Add"
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