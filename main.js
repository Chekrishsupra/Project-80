function get_para_1() {
inputs = [];
for(var i=1; i<=6; i++) {
    inputs.push(document.getElementById("1." + i).value);
}
document.getElementById("show_paragraph_1").innerHTML = inputs.join(". "); }

function get_para_2() {
    inputs = [];
    for(var c=1; c<=6; c++) {
        inputs.push(document.getElementById("2." + c).value);
    }
    document.getElementById("show_paragraph_2").innerHTML = inputs.join(". "); }