`import reactLogo from './assets/react.svg'`
<img src={reactLogo} className="logo react" alt="React logo" />

`const [word, setWord] = useState<string>()`
delclares the type with the <generics>

`const [word, setWord] = useState("")`
inferes the type


`(e: React.FormEvent)`
this type enables intellisense
EX: `e.preventDefault ...`


https://youtu.be/-Rtlnsgbc0k?t=1504





  const handleSynonymClick = (newWord: string) => {
    fetchSynonyms(newWord).then(setSynonyms)
    setWord(newWord)
    setBreadcrumbs(prev => [...prev, newWord])
  }

  const handleClearResults = () : void => {
    setWord('')
    setBreadcrumbs([])
  }

  const handleHistoryClick = (breadCrumb : string) => {
    fetchSynonyms(breadCrumb).then(setSynonyms)
    setWord(breadCrumb)
  }