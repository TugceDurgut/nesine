import BulletinConsumer from '../Context';
import React, { Children } from 'react'
import styled from 'styled-components'

const Table = styled.table`
table, td, th {
    border: 2px solid #f2f2f2;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    overflow-x: auto;
  }

  th, td {
    text-align: left;
    padding: 8px;
    min-width: 20px;

  }
  td[0]{
      color:green;
  }
  thead {
      background-color: #f2f2f2;
    }
 `

function defaultRow() {
    const text = '';

}



function Bullitens() {
    const headerType1 = [ '1', 'x'];
    const headerType2 = ['Alt', 'Üst'];
    const headerType3 = ['1-X', '1-2', 'x-2'];
    function handleClick(value) {
        const item = value.target.getAttribute('data-item');
        console.log(item)
    }
      
    return (

        <BulletinConsumer>
            {value => {
                console.log(value)
                return (
                 
                        <Table>
                            
                            <table>
                                <thead>
                                    <tr>
                                        {/* {headerType.map((type, id) => {
                                            return (
                                                <th key={id}>{type}</th>
                                            )
                                        })
                                        } */}
                                        <td style={{color:"red", fontWeight: "600"}}>Event Count:</td>
                                        <td>Yorumlar</td>
                                        <td></td>
                                        <td>1</td>
                                        <td>x</td>
                                        <td>2</td>
                                        <td>Alt</td>
                                        <td>Üst</td>
                                        <td>H1</td>
                                        <td>1</td>
                                        <td>x</td>
                                        <td>2</td>
                                        <td>H2</td>
                                        <td>1-X</td>
                                        <td>1-2</td>
                                        <td>X-2</td>
                                        <td>Var</td>
                                        <td>Yok</td>
                                        <td>+99</td>
                                    </tr>
                                </thead>
                                {
                                    Object.values(value)?.map((item, index) => {
                                        // console.log(item.OCG['1']?.OC)
                                       
                                        return (
                                            // <div key={index}>

                                                <tbody key={index}>
                                                    <tr>
                                                        <td style={{color:"red", fontWeight: "600"}}>{index} {item.D} {item.DAY} {item.LN}</td>
                                                        <td>Yorumlar</td>
                                                        <td></td>
                                                        <td>1</td>
                                                        <td>x</td>
                                                        <td>2</td>
                                                        <td>Alt</td>
                                                        <td>Üst</td>
                                                        <td>H1</td>
                                                        <td>1</td>
                                                        <td>x</td>
                                                        <td>2</td>
                                                        <td>H2</td>
                                                        <td>1-X</td>
                                                        <td>1-2</td>
                                                        <td>X-2</td>
                                                        <td>Var</td>
                                                        <td>Yok</td>
                                                        <td>+99</td>
                                                    </tr>
                                                    <tr onClick={handleClick}>
                                                        <td>{item.C} {item.T} {item.N}</td>
                                                        <td>Yorumalar</td>
                                                        <td>4</td>
                                                        {Object.values(item.OCG['1']?.OC)?.map((item, index) => {
                                                            return (

                                                                <td data-title={headerType1} key={index}>{item.O}</td>

                                                            )
                                                        })}
                                                        <td></td>
                                                        {Object.values(item.OCG['5']?.OC)?.map((item, index) => {
                                                            return (

                                                                <td data-title={headerType2} key={index}>{item.O}</td>

                                                            )
                                                        })}
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        {Object.values(item.OCG['2']?.OC)?.map((item, index) => {
                                                            return (

                                                                <td data-title={headerType3} key={index}>{item.O}</td>

                                                            )
                                                        })}
                                                        <td></td>
                                                        <td></td>
                                                        <td>3</td>
                                                    </tr>
                                                </tbody>
                                            // </div>
                                        )
                                    })}
                            </table>
                        </Table>
               
                )
            }}
        </BulletinConsumer>
    )
}

export default Bullitens;