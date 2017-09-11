
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movie').del()
    .then(function () {
      // Inserts seed entries
      return knex('movie').insert([
        { 
          // id: 1,
          title: 'Schizopolis', 
          director: 'Steven Soderbergh', 
          year: '1976', 
          rating: 4,
        },
        
        { 
          // id: 2,
          title: 'Nashville', 
          director: 'Robert Altman', 
          year: '1976', 
          rating: 5,
        },
        
        { 
          // id: 3,
          title: 'idiocracy', 
          director: 'Mike Judge', 
          year: '2006', 
          rating: 5,
        },
        
        { 
          // id: 4,
          title: 'Love ACtually', 
          director: 'Richard Curtis', 
          year: '2003', 
          rating: 1,
        },
        
        { 
          // id: 5,
          title: 'Holy Mountain', 
          director: 'Alejandro Jodolowsky', 
          year: '1973', 
          rating: 4,
        },

      ]);
    });
};
