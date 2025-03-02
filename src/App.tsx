import teams from './assets/CollegeBasketballTeams.json'
import './App.css'


const data = teams;

function Headers(){
  return(
  <>
  <header className="app-header">
        <h1>Welcome to NCAA Basketball College Info</h1>
        <p>
          Here you can find detailed information about all the colleges in NCAA Basketball, including their
          teams, rankings, history, and more.
        </p>
      </header>

  </>
  )
}

function College({school, name, city, state} : {school: string, name: string, city: string, state: string}){
  return(
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{school}</h5>
        <p className="card-mascot">Mascot: {name}</p>
        <p className="card-location">Location: {city}, {state}</p>
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div className="cards-container">
      {data.teams.map((team, index) => (
        <College key={index} school={team.school} name={team.name} city={team.city} state={team.state} />
      ))}
    </div>
  );
}


function App() {


  return (
    <>
      <Headers />
      <Cards />
    </>
  )
}

export default App
