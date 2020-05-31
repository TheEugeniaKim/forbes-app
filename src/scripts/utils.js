export const searchPhotos = (searchTerm) => {
  let API_CLIENTID = "xehbc6il9cwCbakmIJVQSx6D-7E0DPlx95C7jkpwILk"
  const API_URL = `https://api.unsplash.com/search/photos?page=1&per_page=10&client_id=${API_CLIENTID}`;

  const body = fetch(url)
  .then(response => response.json())
  
  return body 
}