const flashCards = [
{
  "ID": 1,
  "Question": "What status code indicates that there has been an error on the client side?",
  "Answer": 400,
  "Difficulty": "Easy"
}, {
  "ID": 2,
  "Question": "What status code indicates that there has been an error on the server side?",
  "Answer": 500,
  "Difficulty": "Easy"
}, {
  "ID": 3,
  "Question": "What status code indicates the fetch was successful but the data may have moved?",
  "Answer": 300,
  "Difficulty": "Easy"
}, {
  "ID": 4,
  "Question": "What status code means that the fetch call was successful?",
  "Answer": 200,
  "Difficulty": "Easy"
}, {
  "ID": 5,
  "Question": "A ___ object represents the eventual completion (or failure) of an async operation.",
  "Answer": "Promise",
  "Difficulty": "Medium"
}, {
  "ID": 6,
  "Question": "What function directly follows our fetch URL line?",
  "Answer": ".then()",
  "Difficulty": "Easy"
}, {
  "ID": 7,
  "Question": "What should always be the last function on a fetch call?",
  "Answer": ".catch()",
  "Difficulty": "Easy"
}, {
  "ID": 8,
  "Question": "What method should our fetch call always live in?",
  "Answer": "componentDidMount()",
  "Difficulty": "Easy"
}, {
  "ID": 9,
  "Question": "A ___ is a computer that hosts data so that one can remotely access this data.",
  "Answer": "Server",
  "Difficulty": "Easy"
}, {
  "ID": 10,
  "Question": "A hyper text transfer protocol is also know as?",
  "Answer": "http://",
  "Difficulty": "Easy"
}, {
  "ID": 11,
  "Question": "The URL Google.com is an exaple of a ____.",
  "Answer": "Domain",
  "Difficulty": "Medium"
}, {
  "ID": 12,
  "Question": "A network ____ is any information that lives on a server.",
  "Answer": "Resource",
  "Difficulty": "Medium"
}, {
  "ID": 13,
  "Question": "A client/ initiates a request for data with a URL.",
  "Answer": "Browser",
  "Difficulty": "Medium"
}, {
  "ID": 14,
  "Question": "Data _____ are forwarded through the networks of the internet from router to router.",
  "Answer": "Packets",
  "Difficulty": "Medium"
}, {
  "ID": 15,
  "Question": "Every network resource has a unique location identifier called a ___.",
  "Answer": "URL",
  "Difficulty": "Medium"
}, {
  "ID": 16,
  "Question": "We use ___ on methods in a component so that our *this* doesnt lose its context.",
  "Answer": "Bind",
  "Difficulty": "Medium"
}, {
  "ID": 17,
  "Question": "This.____ should always be placed directly below the super() in your constructor.",
  "Answer": "this.State",
  "Difficulty": "Medium"
}, {
  "ID": 18,
  "Question": "An ___ is a set of data in JSON format with specified endpoints.",
  "Answer": "API",
  "Difficulty": "Medium"
}, {
  "ID": 19,
  "Question": "ComponentDidMount() is an example of a _____ Method.",
  "Answer": "Lifecycle",
  "Difficulty": "Medium"
}, {
  "ID": 20,
  "Question": "The state of a Parent component cant be passed to a Child component as a ____.",
  "Answer": "Prop",
  "Difficulty": "Medium"
}, {
  "ID": 21,
  "Question": "___ is a lightweight format for storing and transporting data in JavaScript.",
  "Answer": "JSON",
  "Difficulty": "Medium"
}, {
  "ID": 22,
  "Question": "JavScript is called _____-_____ because is it by default synchronous.",
  "Answer": "single-threaded",
  "Difficulty": "Hard"
}, {
  "ID": 23,
  "Question": "Https:// is often called a resource or _____.",
  "Answer": "Protocol",
  "Difficulty": "Hard"
}, {
  "ID": 24,
  "Question": "When we receive a response from a server, what should be the first method we use on our data object?",
  "Answer": "Json()",
  "Difficulty": "Hard"
}, {
  "ID": 25,
  "Question": "We use a _____ to view our application",
  "Answer": "localhost",
  "Difficulty": "Medium"
}, {
  "ID": 26,
  "Question": "A computer network is a digital telecommunications network which allows _____ to share resources.",
  "Answer": "Nodes",
  "Difficulty": "Hard"
}, {
  "ID": 27,
  "Question": "A ____ is an internetworking device that forwards packets between networks",
  "Answer": "Router",
  "Difficulty": "Hard"
}, {
  "ID": 28,
  "Question": "Routers perform the traffic directing functions on the _____.",
  "Answer": "Internet",
  "Difficulty": "Hard"
}, {
  "ID": 29,
  "Question": "There are client/server networks and ______ networks.",
  "Answer": "peer-to-peer",
  "Difficulty": "Hard"
}, {
  "ID": 30,
  "Question": "A routing ______ specifies how routers communicate with each other.",
  "Answer": "Protocol",
  "Difficulty": "Hard"
}
]


module.exports ={
  flashCards
}