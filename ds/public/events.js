window.onload = function () {

    // const form_submit_container = document.getElementsByTagName("form")[0];
    // const form_input_item = form_submit_container.getElementsByTagName("input")[0];
    // const form_submit_item = form_submit_container.getElementsByTagName("button")[0];
    const target = document.getElementsByClassName("main-target")[0].getElementsByTagName("span")[0];
    let points = 0;

    var flag = true;
    var timeleft = 10;
    var downloadTimer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "Finished";
            alert("Temps écoulé !")
            alert(flag);
            flag = false;

        } else {
            document.getElementById("countdown").innerHTML = timeleft + " sec";
        }
        timeleft -= 1;
    }, 1000);

    if(flag == true){
        target.addEventListener('mouseover', (event) => {
            submit_item_mouse_over();
        });
    }


    /**
     *
     * @return {void}
     */
    function submit_item_mouse_over() {

        // if(getComputedStyle(form_submit_item).order == 2){
        //     form_input_item.style.order = "2";
        //     form_submit_item.style.order = "1";
        // }
        // else{
        //     form_input_item.style.order = "1";
        //     form_submit_item.style.order = "2";
        // }

        let size = Math.floor(Math.random() * 5) + 1;
        let top = Math.floor(Math.random() * 90) + 5;
        let left = Math.floor(Math.random() * 90);
        target.style.fontSize = size+"em";
        target.style.top = top+"%";
        target.style.left = left+"%";

        points = points+1;
        let points_div = document.getElementsByClassName("main-score")[0].getElementsByTagName("h1")[0];
        points_div.innerText = points+" pts";


    };
}