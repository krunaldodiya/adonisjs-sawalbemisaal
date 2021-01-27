import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.group(() => {
    Route.get('/rankings', 'QuizRankingsController.getRankings')
  }).middleware('auth')

  Route.group(() => {
    Route.get('/languages', 'LanguagesController.languages')
    Route.post('/register', 'UsersController.register')
    Route.post('/login', 'UsersController.login')
    Route.post('/avatar', 'UsersController.avatar')
  })
}).prefix('api')
