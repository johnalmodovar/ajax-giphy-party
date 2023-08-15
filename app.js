"use strict";

/** async function to grab our gif from api database */

async function grabGif() {
  const gifName = $(".search-id").val();
  console.log("gifName", gifName)

  const response = await fetch(
    `api.giphy.com/v1/gifs/search`,
    {
      method: "POST",
      body: JSON.stringify({gifName}),
      headers: { "Content-Type": "application/json" }
    });
}