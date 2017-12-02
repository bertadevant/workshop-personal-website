var theater = theaterJS()

theater
  .on('type:start, erase:start', function () {
    theater.getCurrentActor().$element.classList.add('hero-text--typing')
  })
  .on('type:end, erase:end', function () {
    theater.getCurrentActor().$element.classList.remove('hero-text--typing')
  })
  .on('type:start, erase:start', function () {
    if (theater.getCurrentActor().name === 'hero-text') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  })

theater
  .addActor('hero-text-content', { speed: .9, accuracy: 1 })
  .addScene('hero-text-content: Hey!', 600, -4,'I am Waldorf!', 600, -29,'I am an expert tasting amazing food', 600)
  .addScene(theater.replay.bind(theater))
