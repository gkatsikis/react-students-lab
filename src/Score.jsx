

const Score = (props) => {
  return ( 
    <>
    <div>
    <p className='score'>Scores: {props.score.score}</p>
    <p className='score'>Date: {props.score.date}</p>
    </div>
    </>
   );
}
 
export default Score;