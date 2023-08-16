"use strict";

const GIPHY_API_KEY = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';

/** async function to grab our gif from api database */

async function grabGif(evt) {
  evt.preventDefault();

  const gifName = $(".search-id").val();

  const params = new URLSearchParams({ q: gifName, api_key: GIPHY_API_KEY });

  const response = await fetch(
    `http://api.giphy.com/v1/gifs/search?${params}`
  );

  const data = await response.json();

  console.log('resonse=', response, 'data=', data);
}

$('form').on('submit', grabGif);