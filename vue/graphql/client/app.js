async function fetchData() {
    const response = await fetch('http://localhost:9000', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
         query: 'query { greeting }'
        })
    });

    const { data } = await response.json();

    return data.greeting;
}

fetchData().then((data) => {
    let i = 0;
    
    document.getElementById('greeting').textContent = data;
})

