async function loadJson(url) {
  let response = await fetch(url)

  if (response.status == 200) {
    return response.json()
  } else {
    throw new HttpError(response)
  }
}

loadJson('no-such-user.json').catch(console.log)
