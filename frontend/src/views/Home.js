import Reviews from '../components/Reviews';

const React = require('react')
const Def = require('./default')


function Home() {
  return (
    <>
    <h1>WELCOME TO BOOTCAMP REVIEWS</h1>
    <h2>{Reviews}</h2>
    </>
  );
}

export default Home;