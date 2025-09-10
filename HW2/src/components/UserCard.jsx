import "./UserCard.css";

export default function UserCard({ name, email }) {
  return (
    <div className="user-card">
      <h2 className="user-name">{name}</h2>
      <p className="user-email">{email}</p>
    </div>
  );
}