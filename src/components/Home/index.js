import LogoTitle from '../../assets/images/Me.Logo.jpg';

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hello, <br /> I'm
        </h1>
        <img src={LogoTitle} alt="developer" />
      </div>
    </div>
  );
};
export default Home;
