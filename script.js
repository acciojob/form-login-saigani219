function getFormvalue() {
    //Write your code here
	let firstName = document.getElementsByTagName("input")[0].value;
	let lastName = document.getElementsByTagName("input")[1].value;
	alert(firstName + " " + lastName);
}
