function Display({ data }) {
  const today = new Date();

  const todayDate = `${today.getDate()}-${String(today.getMonth()).padStart(
    2,
    "0"
  )}-${today.getFullYear()}`;

  return (
    <>
      <section className="section general">
        <h2>General</h2>
        <ul className="display__list">
          <li>
            <figure className="display__list-figure">
              <img
                className="display__list-profile"
                src={data.image}
                title={`${data.firstName} ${data.lastName}`}
                alt={`${data.firstName} ${data.lastName}`}
              />
              <figcaption className="offscreen">{`${data.firstName} ${data.lastName}`}</figcaption>
            </figure>
          </li>
          <li>
            <span className="display__list-title">Name:</span>{" "}
            {`${data.firstName} ${data.lastName}`}
          </li>
          <li>
            <span className="display__list-title">Date of birth:</span>{" "}
            {data.dob}
          </li>
          <li>
            <span className="display__list-title">Address:</span> {data.address}
          </li>
          <li>
            <span className="display__list-title">Mobile No.</span>{" "}
            {data.mobile}
          </li>
          <li>
            <span className="display__list-title">Email:</span> {data.email}
          </li>
          {data.website ? (
            <li>
              <span className="display__list-title">Website:</span>{" "}
              <a target="_blank" href={data.website}>
                {data.website}
              </a>
            </li>
          ) : (
            ""
          )}
        </ul>
      </section>
      <section className="section education">
        <h2>Education</h2>
        <ul className="display__list">
          <li>
            <span className="display__list-title">School:</span> {data.school}
          </li>
          <li>
            <span className="display__list-title">College:</span> {data.college}
          </li>
          {data.university === "" ? (
            ""
          ) : (
            <li>
              <span className="display__list-title">University:</span>{" "}
              {data.university}
            </li>
          )}
        </ul>
      </section>
      <section className="section experience">
        <h2>Experience</h2>
        <ul className="display__list">
          {data.experience === "fresher" ? (
            <h2>Fresher</h2>
          ) : (
            <>
              <li>
                <span className="display__list-title">Company:</span>{" "}
                {data.company}
              </li>
              <li>
                <span className="display__list-title">Position:</span>{" "}
                {data.position}
              </li>
              <li>
                <span className="display__list-title">From:</span> {data.join}
              </li>
              {data.leave === "" ? (
                ""
              ) : (
                <li>
                  <span className="display__list-title">To:</span> {data.leave}
                </li>
              )}
            </>
          )}
        </ul>
      </section>
    </>
  );
}

export default Display;
