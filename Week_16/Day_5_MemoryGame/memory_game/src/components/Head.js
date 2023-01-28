import './Head.css'

const Head = (props) => {
    const {score, best} = props;

    return (
        <nav>
          <div>
            <p>Superheroes Memory Game</p>
            <p className='scores'>
              <span>Score: {score}</span>
              <span>Top score: {best}</span>
            </p>
          </div>
          <hr/>
          <div>
            <p>Get points by clicking on an image, but don't click on any more than once.</p>
          </div>
        </nav>
    )
};

export default Head;