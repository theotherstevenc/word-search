import { useState } from 'react'
import { fetchSynonyms } from './api/fetchSynonyms';
import './App.css'

type Synonym = {
  word: string;
  score: number;
}

function App() {

  const [word, setWord] = useState("")
  const [wordRhyme, setWordRhyme] = useState("")
  const [wordThes, setWordThes] = useState("")
  const [synonyms, setSynonyms] = useState<Synonym[]>([])
  const [sideBarValues, setSideBarValues] = useState<string[]>([""])

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    fetchSynonyms(word).then(setSynonyms)
    setSideBarValues(prev => [...prev, word])
    setWord(word)
  }

  const handleProgressClick = (word : string) => {
    fetchSynonyms(word).then(setSynonyms)
    setSideBarValues(prev => [...prev, word])
    setWord(word)
  }

  const handleClearEntries = () : void => {
    setSynonyms([])
    setSideBarValues([])
    setWord('')
  }
  
  return (
    <div className="App">

      <form onSubmit={handleFormSubmit}>
        <input type="search" value={word} onChange={(e) => setWord(e.target.value)}></input>
        <button>submit</button>
        <button onClick={handleClearEntries}>clear</button>
      </form>

      <div className='result-container'>
      
        <ul className='results'>
          {synonyms.map((synonym) => (
            <li key={synonym.word} onClick={ () => { handleProgressClick(synonym.word) } }>
              {synonym.word}
            </li>
          ))}
        </ul>
        
        <ul className={sideBarValues[0] === '' && sideBarValues.length === 1 ? 'crumbs removeBorder' : 'crumbs'}>

          {sideBarValues.map((sideBarValue, index) => {
            return (
              <li key={index} onClick={ () => { handleProgressClick(sideBarValue) } }>
                {sideBarValue}
              </li>
            )
          })}


        </ul>

      </div>

    </div>
  )
}

export default App
