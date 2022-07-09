<script>
	import { send } from '@emailjs/browser';
	import sendIcon from '../assets/send.svg';

	let name = '';
	let message = '';
</script>

<form
	on:submit|preventDefault="{async () => {
		const res = await send('service_wcz9a3a', 'template_g5xmzig', { name, message }, 'St1F4K17gzpFEXa4q');
		if (res.status !== 200) return alert('Message failed to send.');
		alert('Message sent!');
		name = '';
		message = '';
	}}"
>
	<input placeholder="From" bind:value="{name}" />
	<textarea placeholder="Message" bind:value="{message}"></textarea>
	<button type="submit">
		<p class="pr-2">Send</p>
		<img src="{sendIcon}" alt="Send icon" width="20" height="20" />
	</button>
</form>

<style>
	form {
		background-color: #1d4ed8;
		width: 83.333333%;
		border-radius: 1.5rem;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	input,
	textarea,
	button {
		background-color: #111827;
		padding: 1rem;
		border-radius: 1.5rem;
		outline: 2px solid transparent;
		outline-offset: 2px;
	}

	input {
		font-weight: 500;
	}

	button {
		align-items: center;
		display: flex;
		padding: 0.75rem 1rem;
		width: 6rem;
		gap: 8px;
		font-weight: 700;
	}
</style>
