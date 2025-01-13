import React from 'react'
import './Table.css'

const Table = () => {
  return (
    <div>
       <div className='table'>
        <table className='gh'>

          <tr >
            <td >FAQ</td>
            <td>Help Center</td>
            <td>Account</td>
            <td>Media Center</td>
          </tr>
          <tr >
            <td>Investor Relations</td>
            <td>Jobs</td>
            <td>Terms of use</td>
            <td>Contact Us</td>
          </tr>
          <tr >
            <td>Privacy</td>
            <td>Cookie Preferences</td>
            <td>Corporate Information</td>
            
          </tr>


        </table>
      </div>
    </div>
  )
}

export default Table
