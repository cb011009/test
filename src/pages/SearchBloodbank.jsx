import React,{useState} from 'react'
import SearchTable from './components/SearchTable'
import BloodTypeDropDown from './components/BloodTypeDropDown';


export default function SearchBloodbank() {
   
  return (
    <>
     <p>Select a blood type to see all blood banks at which it is available:</p>
     <BloodTypeDropDown/>
     <SearchTable/>
    </>
  )
}
