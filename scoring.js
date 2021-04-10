const calculatePassingScore = () => {}
    //1 point for every 25 yards passing, 
    //6 points for every passing touchdown
    //-3 points for every interception,
const calculateRushingScore = () => {}
    //1 point for every 10 yards rushing, 
    //6 points for every rushing touchdown,
    //-3 points for every rushing fumble,
const calculateReceivingScore = () => {}
    //1 point for every reception, 
    //1 point for every 10 yards receiving, 
    //6 points for every receiving touchdown, 
    //-3 points for every receiving fumble,
const calculateReturnScore = () => {}
    //1 point for every 15 kick return yards, 
    //6 points for every kick return touchdown, 
    //-3 points for every kick return fumble, 
    //1 point for every 15 punt return yards, 
    //6 points for every punt return touchdown, 
    //-3 points for every punt return fumble
const calculateScore = (player) => {
    switch(player.position) {
//QB calcuate passing score
//   calculate rushing score
//   add rushing and passing scores together and return total
        case 'QB':
            return calculatePassingScore() + calculateRushingScore        
//RB calculate rushing score
//   calculate receiving score
//   calculate return score
//   add rushing, receiving, and return scores and return total
        case 'RB':
            return calculateRushingScore() + calculateReceivingScore() + calculateReturnScore 
//WR calculate rushing score
//   calculate receiving score
//   calculate return score
//   add rushing, receiving, and return scores and return total
        case 'WR':
            return calculateRushingScore() + calculateReceivingScore() + calculateReturnScore
//TE calculate receiving score
//   return total receiving score
        case 'TE':
            return calculateReceivingScore
        default:
            return 0    
    }
}

module.exports = calculateScore
