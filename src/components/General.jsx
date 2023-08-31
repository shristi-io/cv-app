function General({ data, onChange }) {
  return (
    <section className="section general">
      <form className="section__form">
        <label htmlFor="first__name">First Name</label>
        <input
          value={data.firstName}
          onChange={(e) => onChange(e)}
          id="first__name"
          type="text"
          name="firstName"
        />
        <label htmlFor="last__name">Last Name</label>
        <input
          value={data.lastName}
          onChange={(e) => onChange(e)}
          id="last__name"
          type="text"
          name="lastName"
        />
        <label htmlFor="email">Email</label>
        <input
          value={data.email}
          onChange={(e) => onChange(e)}
          id="email"
          type="email"
          name="email"
        />
        <label htmlFor="mobile">Mobile No.</label>
        <input
          value={data.mobile}
          onChange={(e) => onChange(e)}
          id="mobile"
          type="number"
          name="mobile"
        />
        <label htmlFor="dob">Date of birth</label>
        <input
          value={data.dob}
          onChange={(e) => onChange(e)}
          type="date"
          id="dob"
          name="dob"
        />
        <label htmlFor="address">Address</label>
        <input
          value={data.address}
          onChange={(e) => onChange(e)}
          type="text"
          id="address"
          name="address"
        />
        <label htmlFor="website">Website</label>
        <input
          value={data.website}
          onChange={(e) => onChange(e)}
          type="url"
          id="website"
          name="website"
        />
        <label htmlFor="image">Image URL</label>
        <input
          value={data.image}
          onChange={(e) => onChange(e)}
          type="url"
          name="image"
          id="image"
        />
      </form>
    </section>
  );
}

export default General;
