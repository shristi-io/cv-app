import { useState } from "react";
import { Data } from "./data";
import Education from "./Education";
import Experience from "./Experience";
import General from "./General";
import Navbar from "./Navbar";
import Display from "./display";

function Resume() {
  const [data, setData] = useState(Data);

  function onChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  function onSelect(element) {
    element.target.checked = true;
    setData({
      ...data,
      experience: element.target.value,
    });
  }

  function submitData() {
    setData({
      ...data,
      submitted: true,
      dob: data.dob.split("-").reverse().join("-"),
      join: data.join?.split("-").reverse().join("-"),
      leave: data.leave?.split("-").reverse().join("-"),
    });
  }

  function editData() {
    setData({
      ...data,
      submitted: false,
    });
  }

  return (
    <>
      <div className="container">
        <Navbar data={data} editData={editData} />
        <div className="main">
          {data.submitted ? (
            <Display data={data} />
          ) : (
            <>
              <General data={data} onChange={onChange} />
              <Education data={data} onChange={onChange} />
              <Experience data={data} onChange={onChange} onSelect={onSelect} />
              <div className="submit__btn">
                <button onClick={submitData}>Submit</button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Resume;
