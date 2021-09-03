function NumeroMegaSenaDisplay(props) {
  return (
    <div style={{
      height: "50px",
      width: "50px",
      borderRadius:"100px",
      backgroundColor:"#222",
      color: "#FFF",
      justifyContent:"center",      
      alignItems:"center",
      display: "flex",
      fontSize: "1rem",
      margin: "20px"
    }}>
      <h1> {props.numero} </h1>
    </div>
  )
}

export default NumeroMegaSenaDisplay;