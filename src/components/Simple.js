import React, { useState } from 'react'
import styled from 'styled-components'
import TinderCard from 'react-tinder-card'

const Container = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

const Header = styled.Text`
    color: #000;
    font-size: 30px;
    margin-bottom: 30px;
`

const CardContainer = styled.View`
    width: 90%;
    max-width: 260px;
    height: 300px;
`

const Card = styled.View`
    position: absolute;
    background-color: #fff;
    width: 100%;
    max-width: 260px;
    height: 300px;
    shadow-color: black;
    shadow-opacity: 0.2;
    shadow-radius: 20px;
    border-radius: 20px;
    resize-mode: cover;
`

const CardImage = styled.ImageBackground`
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 20px;
`

const CardTitle = styled.Text`
    position: absolute;
    bottom: 0;
    margin: 10px;
    color: #fff;
`

const InfoText = styled.Text`
    height: 28px;
    justify-content: center;
    display: flex;
    z-index: -100;
`

const db = [
  {
    name: '01',
    img: require('./img/01.jpeg')
  },
  {
    name: '02',
    img: require('./img/02.jpeg')
  },
  {
    name: '03',
    img: require('./img/03.jpeg')
  },
  {
    name: '04',
    img: require('./img/04.jpeg')
  },
  {
    name: '05',
    img: require('./img/05.jpeg')
  },
  {
    name: '06',
    img: require('./img/06.jpeg')
  },
  {
    name: '07',
    img: require('./img/07.jpeg')
  }
]

function Simple () {
  const characters = db
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <Container>
      <CardContainer>
        {characters.map((character) =>
          <TinderCard key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <Card>
              <CardImage source={character.img}>
                <CardTitle>{character.name}</CardTitle>
              </CardImage>
            </Card>
          </TinderCard>
        )}
      </CardContainer>
      {lastDirection ? <InfoText>You swiped {lastDirection}</InfoText> : <InfoText />}
    </Container>
  )
}

export default Simple
