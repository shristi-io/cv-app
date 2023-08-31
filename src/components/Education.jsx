function Education({ data, onChange }) {
  return (
    <section className="section education">
      <form className="section__form">
        <label htmlFor="school">School</label>
        <input
          value={data.school}
          onChange={(e) => onChange(e)}
          type="text"
          id="school"
          name="school"
        />
        <label htmlFor="college">College</label>
        <input
          value={data.college}
          onChange={(e) => onChange(e)}
          type="text"
          id="college"
          name="college"
        />
        <label htmlFor="university">University</label>
        <input
          value={data.university}
          onChange={(e) => onChange(e)}
          type="text"
          id="university"
          name="university"
        />
      </form>
    </section>
  );
}

export default Education;
