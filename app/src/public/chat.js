const socket = io();


/* Time */

var messageTime = document.querySelectorAll('.message .time');

for (var i = 0; i < messageTime.length; i++) {
	messageTime[i].innerHTML = getHours()
}

/* Message */

var input = document.getElementById('input_message');

input.addEventListener("keypress", (event) => {
	if(event.key === "Enter"){
		newMessage(event, "sent")
	}
})

document
	.getElementById('send')
	.addEventListener("click", () => {
		newMessage( { target: { value: input.value } }, "sent")
		input.value = '';
	});

var conversation = document.querySelector('.conversation-container');


function getHours(){
	const date = new Date()
	const hour = `${date.getHours()}:${date.getMinutes()}`

	return hour
}


function newMessage(e, flow) {
	var value = e.target.value;

	if (value) {
		var message = buildMessage(value, flow);
		conversation.appendChild(message);
		animateMessage(message);
	}

	e.target.value = '';
	conversation.scrollTop = conversation.scrollHeight;
}

function buildMessage(text, flow) {
	var element = document.createElement('div');

	element.classList.add('message', flow);

	element.innerHTML = text +
		'<span class="metadata">' +
			'<span class="time">' + getHours() + '</span>' +
			'<span class="tick tick-animation">' +
				'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck" x="2047" y="2061"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#92a58c"/></svg>' +
				'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg>' +
			'</span>' +
		'</span>';

	return element;
}

function animateMessage(message) {
	setTimeout(function() {
		var tick = message.querySelector('.tick');
		tick.classList.remove('tick-animation');
	}, 500);
}