function MyListRendering(params) {
    
    const myList=["Muhammet","Ali","Ayşe","Fakı","Kamil"]

  return (
    <div className="App">
      {myList.map((e)=>{return <div>{e}</div>})}
    </div>
  );
}
export default MyListRendering;