function Experience({ data, onChange, onSelect }) {
  return (
    <section className="section experience">
      <form className="section__form">
        <div className="section__form-radio">
          <input
            onClick={(e) => onSelect(e)}
            type="radio"
            name="experience"
            id="experienced"
            value="experienced"
          />
          <label htmlFor="experience">Experienced</label>
          <input
            onClick={(e) => onSelect(e)}
            type="radio"
            name="experience"
            id="fresher"
            value="fresher"
          />
          <label htmlFor="fresher">Fresher</label>
        </div>
        <label htmlFor="company">Company Name</label>
        <input
          value={data.company}
          onChange={(e) => onChange(e)}
          type="text"
          id="company"
          name="company"
          disabled={data.experience === "fresher"}
        />
        <label htmlFor="position">Position</label>
        <input
          value={data.position}
          onChange={(e) => onChange(e)}
          type="text"
          id="position"
          name="position"
          disabled={data.experience === "fresher"}
        />

        <div className="section__form-date">
          <label htmlFor="join">From:</label>
          <input
            value={data.join}
            onChange={(e) => onChange(e)}
            type="date"
            id="join"
            name="join"
            disabled={data.experience === "fresher"}
          />
          <label htmlFor="leave">To:</label>
          <input
            value={data.leave}
            onChange={(e) => onChange(e)}
            type="date"
            id="leave"
            name="leave"
            disabled={data.experience === "fresher"}
          />
        </div>
      </form>
    </section>
  );
}

export default Experience;
