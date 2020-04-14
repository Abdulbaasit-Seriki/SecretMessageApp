
document.querySelector("form").addEventListener("submit", event => {
	event.preventDefault();

	document.querySelector(".message-form").classList.add("hide");
	document.querySelector(".enc-form").classList.remove("hide");

	const input = document.querySelector(".message");
	const encryptedInput = document.querySelector(".enc-message");

	// Convert the value of the input to Base64 Encoding
	const encryptedMessage = btoa(input.value);

	// Construct the URL by appending the encrypted message to the link of the current page
	encryptedInput.value = `${window.location}#${encryptedMessage}`;
	// Automatically selects the URL in the input
	encryptedInput.select();
});

const { hash } = window.location;
const decryptedMessage = atob(hash.slice(1));

if (decryptedMessage) {
	document.querySelector(".message-form").classList.add("hide");
	document.querySelector(".dec-form").classList.remove("hide");

	document.querySelector(".dec-form h1").innerHTML = decryptedMessage;
}