# userAuth
# MERN Stack


- **M** = MongoDB (We'll use Mongoose to make it easier for Node.js to work with MongoDB, and we'll use MongoDB Atlas = MongoDB database, but cloud).
- **E** = Express (makes it easier to work with Node.js. We'll use `cors` middleware to access other servers outside our server).
- **R** = React (for the frontend. We'll use `bootstrap` for styling, `react-router-dom` for React routes, `react-datepicker` for React Datepicker component, and `axios` to connect to the backend).
- **N** = Node.js (for the server. We'll use `dotenv` to load environment variables from an .env file into `process.env`, and `nodemon` to make the app auto-restart when you edit/save files).

Exercise Tracker App:

- Exercises collection
- Users collection
- every Exercise has one User

To just get it running after you `git clone`, set up [MongoDB Atlas](https://github.com/hchiam/learning-mern-stack#mongodb-atlas), and then follow these CLI steps:

```bash
cd mern-exercise-tracker
npm install
cd backend
npm install
touch .env

# inside /mern-exercise-tracker: (separate CLI tab)
cd ..
cd mern-exercise-tracker
npm start

# inside /backend folder: (separate CLI tab)
cd mern-exercise-tracker/backend
nodemon server.js
# or: nodemon -x 'npm run lint; node server.js'
```

To develop it yourself from scratch, follow CLI steps below, and copy the code from this repo to fill in the files you create.

<details>
<summary><span style="font-size:x-large">MongoDB</span></summary>

### Terms

- Database = Database (in Tabular/Relational DBs)
- Collection = Table (in Tabular/Relational DBs)
- Document = Row (in Tabular/Relational DBs)
- Index = Index (in Tabular/Relational DBs)
- $lookup = Join (in Tabular/Relational DBs)
- Reference = Foreign Key (in Tabular/Relational DBs)

### MongoDB Documents

BSON (looks like JSON). "Documents" can be nested. Data can be placed "right next" to each other.

### MongoDB Atlas

<https://youtu.be/7CqJlxBYj-M?t=293>

Cluster = place to store data (in the cloud).

Hit the "Connect" button to see the security and connection steps.

Set up your `.env` file and paste in the URI that you get from following the instructions in the video above. It should look something like this:

```text
PORT=5000
ATLAS_URI=mongodb+srv://<dbUser>:<password>@cluster0-m5jph.gcp.mongodb.net/test?retryWrites=true&w=majority
```

You need to remember to paste in the `<dbUser>` and `<password>`. Do **NOT** share it publicly, and do **NOT** include the `.env` file in commits.

### MongoDB ObjectId

ObjectId is guaranteed unique across collections: timestamp + random value + count.

</details>

<details>
<summary><span style="font-size:x-large">Project Setup</span></summary>

```bash
node -v
npx create-react-app mern-exercise-tracker
```

</details>

<details>
<summary><span style="font-size:x-large">Backend Setup</span></summary>

```bash
cd mern-exercise-tracker
mkdir backend # in bigger projects: might have backend folder not inside frontend folder
cd backend
npm init
npm install express cors mongoose dotenv
npm install -g nodemon # you might have to do sudo
touch server.js # inside /backend
nodemon server.js
```

Leave `nodemon` running in that CLI tab. Open another CLI tab to run in parallel so you can create more files.

```bash
touch .env
mkdir models # inside /backend
touch models/exercise.model.js
touch models/user.model.js
mkdir routes # inside /backend
touch routes/exercises.js
touch routes/users.js
```

</details>

<details>
<summary><span style="font-size:x-large"><a href="https://github.com/hchiam/learning-eslint-google">ESLint</a> Setup (Optional)</span></summary>

```bash
cd mern-exercise-tracker/backend
npm install --save-dev eslint eslint-config-google # I like to use eslint
./node_modules/.bin/eslint --init
# To check syntax and find problems
# CommonJS (require/exports)
# React
# No TypeScript
# Browser, Node
# JavaScript config file
# Yes, install eslint-plugin-react@latest
nodemon -x 'npm run lint; node server.js' # inside /backend
```

</details>

<details>
<summary><span style="font-size:x-large">React</span></summary>

After `npx create-react-app userAuth` was run, you have the folders `/public` and `/src`:

- **`/public/index.html`** is the page. The auto-generated line `<div id="root"></div>` is where React will attach the React app.
- **`/src/index.js`** is the main JavaScript file. The auto-generated line `import App from './App';` is where it imports the React app, and `ReactDOM.render(<App />, document.getElementById('root'));` is where it actually tries to attach the React app to the `div` with `id="root"` in `/public/index.html`.
- **`/src/App.js`** is the React app.

### React Router DOM

`react-router-dom` makes it easier to route URLs to different React components.

Put everything that you want to use to Router on inside it:

```js
<Router>
  ...
</Router>
```

And put routes inside it:

```js
<Router>
  <div className="container">
    <Navbar />
    <br/>
    <Route path="/" exact component={ExercisesList} />
    <Route path="/edit/:id" component={EditExercise} />
    <Route path="/create" component={CreateExercise} />
    <Route path="/user" component={CreateUser} />
  </div>
</Router>
```

Each `Route` maps a URL `path` to a `component`. (Create these components later: `ExercisesList`, `EditExercise`, `CreateExercise`, `CreateUser`.)

The `<Link>` element from `react-router-dom` lets you link to other routes, like an `<a>` tag that links to a different URL).

### react-datepicker

`react-datepicker` gives you a date picker component for React.

### State = "Variables" in React

Example:

```js
export default class CreateExercise extends Component {
  constructor(props) {
    super(props); // always do this!

    this.onChangeUsername = this.onChangeUsername.bind(this);

    // initialize state ("variables" in React)
    this.state = {
      // set state corresponding to our MongoDB document:
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: [],
    };
  }

  onChangeUsername(e) { // event to be called by username text box function
    // use this.setState({...}); instead of this.state.username = "new username";
    this.setState({
      username: e.target.value, // update just the username in this.state
    });
  }

  ...

};
```

</details>

<details>
<summary><span style="font-size:x-large">Frontend Setup</span></summary>

In a separate CLI tab, run this to start the frontend:

```bash
cd mern-exercise-tracker # not in backend folder
npm start # should auto-open http://localhost:3000
```

^ Every time you save, the page should auto-update.

In yet another separate CLI tab, run more setup commands:

```bash
cd mern-exercise-tracker # not in backend folder
npm install bootstrap react-router-dom react-datepicker
mkdir src/components
touch src/components/navbar.component.js
touch src/components/exercises-list.component.js
touch src/components/edit-exercise.component.js
touch src/components/create-exercise.component.js
touch src/components/create-user.component.js
```

</details>

<details>
<summary><span style="font-size:x-large">Setup Connection Between Frontend and Backend</span></summary>

We'll use `axios` to do that.

```bash
# in /mern-exercise-tracker
npm install axios
```

Then in JS:

```js
import axios from 'axios';
...
// add an exercise to backend!
const backendEndpoint = 'http://localhost:5000/user';
axios.post(backendEndpoint, exercise) // exercise is in the JSON format expected
  .then((res) => console.log(res.data));
```

and:

```js
const backendEndpoint = 'http://localhost:5000/user';
axios.get(backendEndpoint) // get list of users from backend!
  .then((res) => {
    if (res.data.length > 0) {
      this.setState({
        users: res.data.map((user) => user.username),
        username: res.data[0],
      });
    }
  })
  .catch((err) => {
    console.log(err);
  });
```

</details>
