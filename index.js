const token = `d0fb1cf3e88c4d9d2cd34c63bc78e26406fc71c8`

let stuff = fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
