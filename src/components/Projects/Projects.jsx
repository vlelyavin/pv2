import "./Projects.css";

export const Projects = () => {
  return (
    <section className="section">
      <div className="section__info">
        <div className="title">Projects</div>
        <p className="text">websites, apps</p>
        <a href="https://github.com/vlelyavin" className="section__button hovereffect">
          Explore
        </a>
      </div>
      <div className="section__container console">
        <div className="projects__app__header">
          <div className="projects__app__header__title">E:\main\pr.exe</div>
          <div className="projects__app__header__buttons">
            <div className="projects__app__header__button minimize"></div>
            <div className="projects__app__header__button expand"></div>
            <div className="projects__app__header__button close"></div>
          </div>
        </div>
        <textarea className="projects__app__textarea" defaultValue="console.log(`Hello mom`);" />
      </div>
    </section>
  );
};
