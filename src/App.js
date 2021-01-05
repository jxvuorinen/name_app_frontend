import React, { useEffect, useState } from 'react'
import Names from './components/Names'
import Footer from './components/Footer'
import nameService from './services/nameService'
import Find from './components/Find'
import { Container, Divider } from '@material-ui/core/'

const App = () => {
  const [names, setNames] = useState();
  const [sortType, setSortType] = useState('amount');
  const [parameter, setParameter] = useState('');

  useEffect(() => {
    console.log('effect')
    nameService.getAll()
      .then(data => {
        setNames(data.names)
      }).catch(error => {
        console.log(error)
      })
  }, [])

  const handleClickAlphabetical = (event) => {
    event.preventDefault()
    setSortType('alphabetical')
  }

  const handleClickAmount = (event) => {
    event.preventDefault()
    setSortType('amount')
  }

  const handleParameterChange = (event) => {
    event.preventDefault()
    setParameter(event.target.value.toUpperCase())
  }

  const namesToShow = parameter === ''
    ? names
    : names.filter(n => n.name.toUpperCase().includes(parameter))

  return (
    <div>
      <Container>
        <h1>Welcome to Solita name-app</h1>
        <Find onChange={handleParameterChange} />
        <br />
        <Divider light />
        <br />
        <Names names={namesToShow}
          sortType={sortType}
          handleClickAlphabetical={handleClickAlphabetical}
          handleClickAmount={handleClickAmount} />
        <Divider />
        <Footer />
      </Container>
    </div >
  );
}

export default App;
