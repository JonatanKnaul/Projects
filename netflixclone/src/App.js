import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/movieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header'


export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setfeaturedData] = useState(null);
  const [blackHeader, setblackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      //Pegando a lista completa
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Buscar filme em destaque
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
      
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieinfo(chosen.id, 'tv')
      
      setfeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setblackHeader(true); 
      } else {
        setblackHeader(false);
      }
    } 
    
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div className="page">
      
      <Header black={blackHeader}/>

      {featuredData && 
        <FeaturedMovie item={featuredData} />
      }

      
      
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}  
      </section>

      <footer>
        Feito para fins de estudo por Jonatan Knaul <br/>
        Direitos de imagem para Netflix <br/>
        Dados buscados do site TheMovieDB.org <br/> 
      </footer>    

      {movieList.length <= 0 &&     
        <div className="loading">
           <img src="https://hackernoon.com/images/0*3IFEy-hfoIpgFjBl.gif" alt="Carregando" />
        </div>
      }

    </div>
  );
}

//Header
      //Destaque
      //Listas
      //Rodape