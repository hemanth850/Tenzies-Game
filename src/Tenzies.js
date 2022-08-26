import React from 'react'
import ReactDOM from 'react-dom'
import Dice from './Dice'

function Tenzies (){
    
    const [diceNum , setDice] = React.useState(allNewDice())
    const [rolls , setRoll] =React.useState(0)
    const [tenzies , setTen] =React.useState(false)

    React.useEffect(() => {
            const allHeld = diceNum.every(dice => dice.isHeld)
            const firstValue = diceNum[0].value;
            const allSameValue = diceNum.every(dice => dice.value === firstValue)
            if (allHeld && allSameValue){
                setTen(true)
                console.log("Won")
            }
            },[diceNum])
   
    function allNewDice () {
        const result=[]
        for (let i=0 ; i<10 ; i++) {
            
            result.push ( { value:Math.ceil(Math.random() * 6) , isHeld : false ,  id:i} ) 
            
        }
        return result
        
    }
    
    
    
    function rollDice(){
        let i = -1;
        

        setDice(prev => prev.map (dice => {
            i=i+1;
            return dice.isHeld ? dice : { value:Math.ceil(Math.random() * 6) , isHeld : false , id: i}
        }))
        setRoll((prev) => prev+1)
    }

    function resetDice () {
        setDice(allNewDice())
        setTen(false)
    }

    function holdDie (id){
        
        setDice(prev => prev.map(dice => {
            return dice.id === id ? { ...dice ,isHeld : !dice.isHeld}: dice
        }))
    }

    const allDice = diceNum.map((dice) => {
        return (
            <Dice key={dice.id} value ={dice.value} isHeld={dice.isHeld} holdDie ={() => holdDie(dice.id)} />
        )
    })

    
    
    return (
    <div className='tenzies-main'>
        <div className='container'>
            <div className='container-inner'>
                <h1>TENZIES GAME</h1>
                <p className='tenzies-para'>Roll the dice until all the die values are same , you can click on a die to lock the value . Once all the dice are all locked and same the game ends</p>
                <div className='dice-contain' >
                    {allDice}
                </div>
                <button className='roll-button' onClick={tenzies ? resetDice : rollDice}>{tenzies ? "RESET" : "ROLL"}</button>
            </div>
        </div>
        {tenzies && <h1 className='tenzies-result'>Congratulations </h1>}
        {tenzies && <h3>Total Rolls:{rolls}</h3>}
    </div>
    )

}
export default Tenzies