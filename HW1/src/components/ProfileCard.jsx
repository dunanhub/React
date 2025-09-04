function ProfileCard() {
  return (
    <div className="profile-card">
      <img 
        src="https://avatars.githubusercontent.com/u/104020748?v=4" 
        alt="Profile" 
        className="profile-image"
      />
      <h2>Bekzat Ubniyev</h2>
      <h3>Email: ubniyev.b@gmail.com</h3>
      <p>Full-Stack Developer | Software Engineering Student @ AlmaU</p>
      <p>
        Опыт работы с Django, FastAPI, PostgreSQL, Vue, React, 
        Nuxt, Tailwind и Flutter. Увлекаюсь созданием 
        образовательных платформ, редакторов документов и 
        мобильных приложений.
      </p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/bekzat-ubniyev-b8ba75355">LinkedIn</a>
        <a href="https://github.com/dunanhub">GitHub</a>
        <a href="https://www.instagram.com/d.unan_/">Instagram</a>
      </div>
    </div>
  );
}

export default ProfileCard;