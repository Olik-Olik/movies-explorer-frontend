import React, {useEffect, useState, Component, Suspense, lazy, }  from "react";
import componentDidMount from 'react';
import  '../../MoviesPage/Card/Card.css';
import './MoviesCardList.css'
import '../Card/MovieCard';
import MovieCard from "../Card/MovieCard";
import apiMovies from "../../../utils/MoviesApi";
import Preloader from "../../Preloader";

function MoviesCardList(props){
        const [cards, setCards] = useState([]);
  //      const [loaded, setLoaded] = useState(false);
   /* const [isRenderRow, setIsRenderRow] =useState(0);
    const moviesRow1280 = 12;
    const moviesRowMore1280=4;
    const moviesRow768 = 8;
    const moviesRowMore768 = 2;
    const moviesRow320 = 4;
    const moviesRowMore320 = 2;
    const moviesNothing = 0;
*/
    const [isLoading, setLoading] = useState(false);

   /* let currentWindowDimensions = null;
    const [windowDimensions, setWindowDimensions] = componentDidMount(window.innerWidth); /!* ряды карт*!/
*/
/*    function updateWindowDimensions(){
        currentWindowDimensions(()=> setWindowDimensions(window.innerWidth))
    }*/

    const MovieCard = lazy(() => import('../Card/MovieCard')); /* для прелоадера */


    useEffect(() => {
                        apiMovies.getAllAboutMovies()
                            .then((res) => {
                                    console.log(res);
                                    setCards(res)
                                console.log('Киношки загрузились корректно!')
                            })
                            .catch((err) => console.log('Киношки не загрузились!: ' + err.toString()))
 }, []);


/*componentDidMount(() => {
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);
});*/

    return(
    <section className="moviesCard_list">

        <Suspense fallback={<Preloader/>}>
      {cards &&
        cards.map(card => (
            <MovieCard
             /*   cardData={card}*/
            cardData={card}
            id={card.movieId}
            name={card.name}
            duration={card.duration}

            isSave ={props.isSave}
            setIsSave={props.setIsSave}
            isDelete={props.isDelete}
            addMovies={props.addMovies}
            />
        ))}

        </Suspense>
    </section>
)

}
export default MoviesCardList;

/*

constructor(props) {
    super(props);
    this.state = { width: 0};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
}

componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
}
componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
}
updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
}
class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {height: props.height};
  }
  componentWillMount(){
    this.setState({height: window.innerHeight + 'px'});
  }

  render() {
    // render your component...
  }
}
AppComponent.propTypes = {
 height:React.PropTypes.string
};

AppComponent.defaultProps = {
 height:'500px'
};

*/

