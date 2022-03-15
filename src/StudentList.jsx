import Score from "./Score";

const StudentList = (props) => {
  return ( 
    <>
      {props.studentsArray.map(student => 
      <>
        <h2 className="name">Name: {student.name}</h2>
        <h3 className="bio">Bio: {student.bio}</h3>

        {student.scores.map(score =>
          <Score score={score} />
          )}
      </>
      )}
    </>
   );
}
 
export default StudentList;