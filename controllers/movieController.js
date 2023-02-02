const fs = require('fs');
const movieList = JSON.parse(
  fs.readFileSync(`./dev-data/movie_data02.json`, 'utf-8')
);

exports.front_page = (req, res) => {
  //   res.send('This is my movie list built with express');
  res.render('index', { movies: movieList.results });
};

exports.detail_page = (req, res) => {
  const movie = movieList.results.filter(
    (el) => el.id.toString() === req.params.id
  );

  res.render('show_page', { movie: movie[0] });
};

exports.search_page = (req, res) => {
  const keyword = req.query.keyword;
  const movies = movieList.results.filter((el) => {
    return el.title.toLowerCase().includes(keyword.toLowerCase());
  });
  res.render('index', { movies: movies, keyword: keyword });
};
