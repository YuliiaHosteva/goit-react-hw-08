import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.container}>
      <p className={css.greeting}>Welcome to Home Page</p>
      <p className={css.text}>
      Conveniently manage your contacts. Log in to access all the features.
      </p>
    </div>
  );
};

export default Home;