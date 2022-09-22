function TableRow(params) {
    
    const myList=[
        {name:"Mehmet",id:1},
        {name:"Ali",id:2},
        {name:"Muhammet",id:3},
        {name:"Ayşe",id:4},
        {name:"Fatih",id:5},
    ];
    return <div>
        <table>
            <thead>
                <th>ID</th>
                <th>Name</th>
            </thead>
            <tbody>
                {myList.map((e)=>{return <li key = {e.id}>{e.name}</li>})}
            </tbody>
        </table>
    </div>
}
export default TableRow;