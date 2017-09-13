
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movie').del()
    .then(function () {
      // Inserts seed entries
      return knex('movie').insert([
        { 
          title: 'Schizopolis', 
          director: 'Steven Soderbergh', 
          year: '1976', 
          rating: 4,
          url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc4NDQ5NjQ2MF5BMl5BanBnXkFtZTcwNzU3NDAwMQ@@._V1_.jpg'
        },
        
        { 
          title: 'Nashville', 
          director: 'Robert Altman', 
          year: '1976', 
          rating: 5,
          url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMDY0MzE3YWQtZTAzMS00ZmRlLWE3NzYtMjk0NDlkMmE4N2U2XkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_.jpg'
        },
        
        { 
          title: 'idiocracy', 
          director: 'Mike Judge', 
          year: '2006', 
          rating: 5,
          url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMWQ4MzI2ZDQtYjk3MS00ODdjLTkwN2QtOTBjYzIwM2RmNzgyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_SX676_AL_.jpg'
          
        },
        
        { 
          title: 'Love Actually', 
          director: 'Richard Curtis', 
          year: '2003', 
          rating: 1,
          url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg'
        },
        
        { 
          title: 'Holy Mountain', 
          director: 'Alejandro Jodolowsky', 
          year: '1973', 
          rating: 4,
          url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BN2IzM2I5NTQtMTIyMy00YWM2LWI1OGMtNjI0MWIyNDZkZGFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'
        },

      ]);
    });
};
