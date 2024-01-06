import ButtonLink from "./ButtonLink";
import useSchoolmateComponentHook from "../hooks/useSchoolmateComponentHook.jsx";

const SchoolmateComponent = () => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    phone,
    setPhone,
    currentCity,
    setCurrentCity,
    profession,
    setProfession,
    comments,
    setComments,
    dob,
    setDob,
    saveOrUpdateSchoolmate,
    title,
  } = useSchoolmateComponentHook();

  return (
    <div className="container mt-5">
      <ButtonLink text="Go Back" toAction="/" />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">{title}</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">First Name: </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Name"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              {/* <div className="form-group mb-2">
                <label className="form-label">Last Name: </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Phone: </label>
                <input
                  className="form-control"
                  type="phone"
                  placeholder="Phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div> */}
              <div className="form-group mb-2">
                <label className="form-label">Current City: </label>
                <input
                  className="form-control"
                  type="currentCity"
                  placeholder="Current City"
                  name="currentCity"
                  value={currentCity}
                  onChange={(e) => setCurrentCity(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Profession: </label>
                <input
                  className="form-control"
                  type="profession"
                  placeholder="Profession"
                  name="profession"
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Comments: </label>
                <input
                  className="form-control"
                  type="comments"
                  placeholder="Comments"
                  name="comments"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">DOB: </label>
                <input
                  className="form-control"
                  type="dob"
                  placeholder="DOB"
                  name="dob"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>

              <button
                className="btn btn-outline-success"
                onClick={saveOrUpdateSchoolmate}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolmateComponent;
