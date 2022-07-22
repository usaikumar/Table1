import React from 'react'
import Tabledata from './Tabledata.json'
 function Table(){

    const DisplayData=Tabledata.map(
        (info, pos)=>{
            console.log(info);
            // (info.object.keys(TimeSeries(5min)).map(key))
            return(
                <tr className='helo' key={pos}>
                    {/* <td>{info.Time}</td> */}
                    <td>{info.open}</td>
                    <td>{info.high}</td>
                    <td>{info.low}</td>
                    <td>{info.close}</td>
                    <td>{info.volume}</td>
                    


                </tr>
            )
        }
    )
 
    return(
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                    {/* <th>Date Time</th> */}
                    <th>Open</th>
                    <th>high</th>
                    <th>Low</th>
                    <th>Close</th>
                    <th>Volume</th>
                    </tr>
                </thead>
                <tbody>
                 
                    
                    {DisplayData}
                    
                </tbody>
            </table>
             
        </div>
    )
 }
 
 export default Table;