function disIn(element) {
    value=element.textContent
    // fro=document.getElementById('r1')
    // fro.innerText="hello"
    result.value+=value
}

function clearResult() {
    result.value=""

}


function deLast() {
result.value=result.value.slice(0,-1)
}

  function calculate() {
            var result = document.getElementById("result");
            try {
                result.value = eval(result.value);
            } catch (error) {
                result.value = "Error";
            }
        }