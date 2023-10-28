function Tile({ className, value, onClick, playerTurn }) {
    let hoverClass = null;
    if (value == null && playerTurn != null) {
      hoverClass = `${playerTurn.toLowerCase()}-hover`;
    }

    
    console.log(value)
    return (
      <div onClick={onClick} className={`tile ${className} ${hoverClass} ${value === "X"? "red":"white"}`}>
        {value}
      </div>
    );
  }
  
  export default Tile;