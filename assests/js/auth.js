function auth () {
    let name = document.getElementById('name')
    name.addEventListener('change', e => {
        console.log(e.target.value === String)
    })
}

auth()