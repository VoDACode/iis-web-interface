$.get("/api/v1/list", (result) => {
    let list = JSON.parse(result);
    console.log(list);
    for (const resultKey in list) {
        $('#list tr:last')
            .after(`<tr><th scope="row">${list[resultKey]["SITE.ID"]}</th>
        <td>${list[resultKey]["SITE.NAME"]}</td>
        <td>${list[resultKey]["bindings"]}</td>
        <td id="state_${list[resultKey]["SITE.NAME"]}">${list[resultKey]["state"]}</td>
        <td><button type="button" class="btn btn-secondary" onclick="start('${list[resultKey]["SITE.NAME"]}')">Start</button></td>
        <td><button type="button" class="btn btn-danger" onclick="stop('${list[resultKey]["SITE.NAME"]}')">Stop</button></td></tr>`);
    }

})

stop = (name) => {
    $.post(`/api/v1/stop?n=${name}`).then(() => {
        $(`#state_${name}`).text("Stopped");
    })
}

start = (name) => {
    $.post(`/api/v1/start?n=${name}`).then(() =>{
        $(`#state_${name}`).text("Started");
    })
}
