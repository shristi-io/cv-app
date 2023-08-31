import editIcon from "../assets/edit.svg";

function Navbar({ data, editData }) {
  return (
    <nav className="navbar">
      <h1>Create Resume</h1>
      {!data.submitted ? (
        <div></div>
      ) : (
        <button onClick={editData} className="edit__btn">
          <img src={editIcon} alt="henlo" />
        </button>
      )}
    </nav>
  );
}

export default Navbar;
