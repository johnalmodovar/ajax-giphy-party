"use strict";

const GIPHY_API_KEY = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';

/** appends gif to DOM in html */

function appendGif(gifURL) {
  const $gifImage = $(`<img src="${gifURL}"></img>`);
  $(".gif-area").append($gifImage);
}

/** async function to grab our gif from api database */

async function grabGif(evt) {
  evt.preventDefault();

  const gifName = $(".search-id").val();

  const params = new URLSearchParams({ q: gifName, api_key: GIPHY_API_KEY });

  const response = await fetch(
    `http://api.giphy.com/v1/gifs/search?${params}`
  );

  const data = await response.json();

  let gifURL =  data.data[0].images.original.url;

  appendGif(gifURL);
}

$('form').on('submit', grabGif);