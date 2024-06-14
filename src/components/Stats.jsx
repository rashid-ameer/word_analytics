function Stats({ stats }) {
  return (
    <section className="stats">
      <Stat
        number={stats.noOfWords}
        label="Words"
      />
      <Stat
        number={stats.numberOfCharacters}
        label="Characters"
      />
      <Stat
        number={stats.instagramCharactersLeft}
        label="Instagram"
      />
      <Stat
        number={stats.facebookCharactersLeft}
        label="Facebook"
      />
    </section>
  );
}
export default Stats;

function Stat({ label, number }) {
  return (
    <section className="stat">
      <p className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}>{number}</p>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
