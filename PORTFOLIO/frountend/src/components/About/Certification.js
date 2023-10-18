import React from 'react'
import Header from '../Header/Header.js'
import Sidebar from '../Sidebar/Sidebar.js'
import './About.css';

const Certification = () => {
  return (
    <>
      <Header/>
      <div className='page_flex'>
        <Sidebar/>
        <div className='Q_table'>
        <div className='C_table'>
        <h2>Carreer Certificates.</h2>
        <table>
  <tr>
    <th>Sr. no.</th>
    <th>Courses</th>
    <th>Institutes</th>
    <th>Years</th>
    <th>Grades</th>
  </tr>
  <tr>
    <td><b>1.</b></td>
    <td>Database</td>
    <td>Skill Up</td>
    <td>2022</td>
    <td></td>
  </tr>
  <tr>
    <td><b>2.</b></td>
    <td>Web development</td>
    <td>IIHT Vashi (Navi Mumbai)</td>
    <td>2023</td>
    <td>A</td>
  </tr>
</table>
<h2>Activities:-</h2>
  .We have participant diff-diff technical activities like- UI designer,
  mysql training, linux and xml etc.
        </div>
        
      </div>
      </div>
    </>
  )
}

export default Certification
