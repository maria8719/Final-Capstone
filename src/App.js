import React, {useEffect, useState} from 'react';
import {formatStudentData} from './utils'
import Tags from './Tags';
import TagInput from './TagInput';
import './App.css';

const URL = "https://api.hatchways.io/assessment/students";

function App() {

  const [studentData, setStudentData] = useState([]); 
  const [filteredStudentData, setFilteredStudentData] = useState([]);
  const [nameSearchInput, setNameSearchInput] = useState("");
  const [tagSearchInput, setTagSearchInput] = useState("");
  const [open, setOpen] = useState([]);
  let filteredByTag=[];
  let filteredByName =[];

  
  const getStudents = (URL) => {
     fetch(URL)
      .then(response => response.json())
      .then(data => formatStudentData(data.students))
      .then(formatted => setStudentData(formatted))
      .then(formatted => setFilteredStudentData(studentData))
      .catch(error => alert('Something went wrong!'));
  }

 //Add a tag
 const addTag = (str, student) =>{
  // add tags to student
  if (!student.tags.length) {
     student.tags.push(str);
  } else if (!student.tags.includes(str)) {
     student.tags.push(str);
  } else {
    return; // no duplicates
  }
  // find student in studentData and replace with updated student (with tags)
  const index = studentData.findIndex((stu) => stu.id === student.id);
  const newStudentData = [...studentData];
  newStudentData[index] = student;
  setStudentData(newStudentData);
};


// Delete a tag
  const deleteTag = (tag, student) => {
        const res = [...filteredStudentData];
        res.map((stu) => {
           if (stu.id === student.id) {
              const filteredTags = stu.tags.filter(
                 (t) => t.toLowerCase() !== tag.toLowerCase()
              );
              stu.tags = filteredTags;
              return; // exit loop; only will match one student
           }
        });
        setFilteredStudentData(res);
  }
 
 // filter students by name
  const searchByName = (inputName) => {
     if(nameSearchInput !== "" && tagSearchInput !==""){

      if (inputName.length) {
          studentData.forEach(stud=> {
            if (stud.fullName.toLowerCase().includes(inputName.toLowerCase())) {
              filteredByName.push(stud);
            }
          });
      }
      filteredByName = filteredByName.concat(filteredByTag);

      if (inputName.length === 0) {
        setFilteredStudentData(studentData);
        return; 
      }
    
     setFilteredStudentData(filteredByName);
    
  }
  else{
      if(inputName.length){
        studentData.forEach(student => {
         if(student.fullName.toLowerCase().includes(inputName.toLowerCase())){
           filteredByName.push(student);
      }
    });
}
         if (inputName.length === 0) {
         setFilteredStudentData(studentData);
         return; 
        }

setFilteredStudentData(filteredByName);

  }
}
// Filter student by tag
const searchByTag = (inputTag) =>{
   let nameContent =[];
   let newNameContent = [];

   if(nameSearchInput !== "" && tagSearchInput !== ""){
    filteredByName.forEach(std => {
      if(std.tags.length() !== 0){
        nameContent.push(std); }

    }); //forEach end
    
    if(inputTag.length){

      nameContent.forEach(student =>{
        student.tags.forEach(tag => {
          if(tag.toLowerCase().includes(inputTag.toLowerCase()))
         { 
          newNameContent.push(student);
         }

        });// inner foreach
      });//outer foreach
    }//first inner if 
    setFilteredStudentData(newNameContent);
  }

  if (inputTag.length) {
      
    studentData.map(student => {
          return student.tags.forEach(tag => {
             if (tag.toLowerCase().includes(inputTag.toLowerCase()))
             {
                if (filteredByTag.includes(student))
                {
                   return filteredByTag;
                }
                
                else
                {
                  filteredByTag.push(student);
                }
             }
          });
    });
    
    setFilteredStudentData(filteredByTag);
 }


    if(inputTag.length === 0){

      setFilteredStudentData(studentData);
      return;
    }
  }
   
  //Function to show students grades
  const toggleOpen = (id) => {
    if (open.includes(id)) {
      setOpen(open.filter(sid => sid !== id))
    } else {
     let newOpen = [...open]
     newOpen.push(id)
     setOpen(newOpen)
    }
  }

  useEffect(() => {
    getStudents(URL);
  }, []); 

  return (
     <>
     <header>
     <input
    className="nameSearch"
    placeholder={`Search by name`}
    value={nameSearchInput}
    onChange={(e) => {
    setNameSearchInput(e.target.value);
    searchByName(e.target.value); 
    }}
    />
     <input
      className="nameSearch"
      placeholder={`Search by tag`}
      value={tagSearchInput}
      onChange={(e) => {
      setTagSearchInput(e.target.value);
      searchByTag(e.target.value); 
    }}
     />
     </header>
    <main>
    <ul>
     {
       filteredStudentData && 
        filteredStudentData.map((student, index) => {
          return (
            <div  className="studentContainer">
               <img 
                  src = {student.pic} 
                  alt = {student.fullName}
                  loading="lazy"
               />
               <div className='studentInfo'>
               <div>
                <button  className="expand-button" onClick={() => toggleOpen(student.id)}>{open.includes(student.id) ? '-' : '+'}</button>              
              </div>
            <h1 className='studentName'>{student.fullName}</h1>
            <div >
               <div>Email: {student.email}</div>
               <div>Company: {student.company}</div>
               <div>Skill: {student.skill}</div>
               <div>Average: {student.average}%</div>
                {open.includes(student.id) ? (
              <ul className="grades-list">
                {student.grades.map((grade, index) => <p className= "showGrades" key={grade.id}>Test {index + 1}:&nbsp;&nbsp;&nbsp;{grade}% </p>)}
              
              </ul>) : null} 
            </div><br />
             <Tags student = {student} deleteTag = {deleteTag} />
             <TagInput student = {student} addTag = {addTag} />
             <br /> <br />
              <hr />
             </div>
        </div>
          )
        })
     }
     </ul>
    </main>
     </>
  );
}

export default App;