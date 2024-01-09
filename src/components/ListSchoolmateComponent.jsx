import ButtonLink from "./ButtonLink";
import useListSchoolmateComponentHook from "../hooks/useListSchoolmateComponentHook.jsx";

const ListSchoolmateComponent = () => {
  const { schoolmates, updateSchoolmate, deleteSchoolmateById } =
    useListSchoolmateComponentHook();

  return (
    <div className="container">
      <h2 className="text-center my-3">List of Schoolmates</h2>
      <ButtonLink text="Add Schoolmate" toAction="/add-schoolmate" />
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            {/* <th scope="col">LastName</th>
            <th scope="col">Phone</th> */}
            <th scope="col">Location</th>
            <th scope="col">Profession</th>
            <th scope="col">Comments</th>
            <th scope="col">DateOfBirth</th>
          </tr>
        </thead>
        <tbody>
          {schoolmates.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.firstName}</td>
                {/* <td>{item.lastName}</td>
                <td>{item.phone}</td> */}
                <td>{item.currentCity}</td>
                <td>{item.profession}</td>
                <td>{item.comments}</td>
                <td>{item.dob}</td>
                <td>
                 {/* <button
                    className="btn btn-outline-danger"
                    onClick={() => deleteSchoolmateById(item.id)}
                  >
                    Delete
                  </button> */}
                </td>
                {/* <td>
                  <button
                    className="btn btn-outline-info"
                    onClick={() => updateSchoolmate(item.id)}
                  >
                    Update
                  </button>
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListSchoolmateComponent;
