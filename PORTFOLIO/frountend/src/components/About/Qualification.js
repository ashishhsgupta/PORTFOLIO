import React from 'react'
import Header from '../Header/Header.js'
import Sidebar from '../Sidebar/Sidebar.js'
import './About.css';


const Qualification = () => {
  return (
    <>
    <Header/>
      <div className='page_flex'>
        <Sidebar/>
        <div className='Q_table'>
        <div className=''>
        <h2>Academic Qualification:</h2>
        <table>
  <tr>
    <th>Sr. no.</th>
    <th>Qualifications</th>
    <th>Institutes</th>
    <th>Years</th>
    <th>Marks</th>
  </tr>
  <tr>
    <td><b>1.</b></td>
    <td>SSC</td>
    <td>Allahabad UP Board</td>
    <td>2013</td>
    <td>77%</td>
  </tr>
  <tr>
    <td><b>2.</b></td>
    <td>HSC</td>
    <td>Allahabad UP Board</td>
    <td>2015</td>
    <td>64%</td>
  </tr>
  <tr>
    <td><b>3.</b></td>
    <td>Graduation</td>
    <td>kanpur University</td>
    <td>2019</td>
    <td>55%</td>
  </tr>
  <tr>
    <td><b>4.</b></td>
    <td>M.C.A.(Pursuing)</td>
    <td>Manipal university Jaipur(RJ)</td>
    <td>2022</td>
    <td>SPG: 9.4%</td>
  </tr>
  <tr>
    <td><b>5.</b></td>
    <td>Frountend(REACT)</td>
    <td>IIHT Vashi(Navi Mum.)</td>
    <td>2023</td>
    <td>A+</td>
  </tr>
</table>
       
        </div>
      </div>
      </div>
    </>
  )
}

export default Qualification
