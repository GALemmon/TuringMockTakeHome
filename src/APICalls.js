export const fetchArticles = () => {
  return fetch(
    'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=04LhGaLVibGrIxGtQuvjdJHAM6zmiMCO'
  )
}