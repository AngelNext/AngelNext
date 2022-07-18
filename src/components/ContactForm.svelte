<script>
	import { send } from '@emailjs/browser';

	let name = '';
	let message = '';
</script>

<form
	on:submit|preventDefault="{async () => {
		const { status } = await send('service_wcz9a3a', 'template_g5xmzig', { name, message }, 'St1F4K17gzpFEXa4q');
		if (status !== 200) return alert('Message failed to send.');
		alert('Message sent!');
		name = '';
		message = '';
	}}"
>
	<input placeholder="Email" bind:value="{name}" />
	<textarea placeholder="Message" bind:value="{message}"></textarea>
	<button>
		<p class="pr-2">Send</p>
		<svg width="20" height="20" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
			<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#FFFFFF" stroke="none">
				<path
					d="M605 4526 c-110 -27 -202 -105 -252 -211 l-28 -60 0 -585 0 -585 27
		-57 c47 -101 137 -178 243 -207 22 -6 436 -63 920 -126 484 -64 893 -119 909
		-123 19 -5 -251 -43 -815 -116 -464 -59 -886 -114 -937 -122 -157 -23 -261
		-95 -320 -222 l-27 -57 0 -595 0 -595 27 -57 c73 -156 239 -247 399 -218 43 8
		567 229 1708 722 905 390 1756 758 1891 815 135 58 265 120 290 138 100 70
		155 180 154 305 -2 109 -31 179 -108 256 l-61 60 -1900 814 c-1045 447 -1925
		819 -1955 826 -66 16 -99 16 -165 0z"></path>
			</g>
		</svg>
	</button>
</form>

<style>
	form {
		background-color: #4f9aff;
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
