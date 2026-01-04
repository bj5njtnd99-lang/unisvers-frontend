export default function Card({ titre, texte, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <h3>{titre}</h3>
      <p>{texte}</p>
    </div>
  );
}
