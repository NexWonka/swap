<script>
	
</script>

<!-- Modals -->
<input type="checkbox" id="my-modal-3" class="modal-toggle" />
<label for="my-modal-3" class="modal cursor-pointer">
	<label class="modal-box relative" for="">
		<input type="text" placeholder="Search Tokens" class="input w-full" />
		<a
			href='/'
			class="btn btn-ghost w-full gap-5 justify-start"
		>
			<img class="w-5" src="/Binance_Logo.png" alt="" />
			<p>BNB</p>
		</a>
		<a
			href='/'
			class="btn btn-ghost w-full gap-5 justify-start"
		>
			<img class="w-4" src="/eth.svg" alt="" />
			<p>ETH</p>
		</a>
	</label>
</label>
<!-- Modals -->

<!-- Navbar -->
<div class="navbar bg-transparent fixed top-0">
	<div class="navbar-start">
		<div class="dropdown">
			<label tabindex="0" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</label>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li><a href="/">Swap</a></li>
			</ul>
		</div>
		<a href="/" class="btn btn-ghost normal-case text-xl">Sea Mermaid Swap</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal p-0">
			<li><a href="/">Swap</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		<button
			class="btn btn-primary truncate p-3 w-40 bg-base-300 rounded-xl cursor-pointer"
			id="connect">Connect Wallet</button
		>
	</div>
</div>
<!-- Navbar -->

<!-- Body -->
<div id="container" class="flex gap-5 items-center justify-center min-h-screen bg-bottom bg-cover">
	<img class="w-1/3 md:w-1/4 absolute bottom-0 -left-20 md:left-10 backdrop-blur-md md:backdrop-blur-0" src="mermaid.svg" alt="">
	<div class="flex flex-col gap-2 p-3 bg-primary rounded-xl w-2/3 md:w-1/4 shadow-md">
		<div class="flex flex-row justify-between items-center">
			<button class="btn btn-ghost">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
					/>
				</svg>
			</button>
			<h1 class="font-bold">Swap</h1>
			<button class="btn btn-ghost">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
					/>
				</svg>
			</button>
		</div>
		<div class="divider" />
		<div class="form-control w-full">
			<label class="label">
				<label for="my-modal-3" class="btn btn-ghost gap-2 shadow-md">
					<p class="label-text capitalize">Choose Token</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
					</svg>
				</label>
				<span class="label-text-alt">Balance: 10 BNB</span>
			</label>
			<input type="number" placeholder="0.0" class="input w-full" />
			<label class="label">
				<span class="label-text-alt" />
				<button class="btn btn-ghost gap-2">
					<span class="label-text-alt">Max</span>
				</button>
			</label>
		</div>
		<div class="mx-auto">
			<button class="btn btn-ghost rounded-full">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
				</svg>
			</button>
		</div>
		<div class="form-control w-full mb-5">
			<label class="label">
				<label for="my-modal-3" class="btn btn-ghost gap-2 shadow-md">
					<p class="label-text capitalize">Choose Token</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
					</svg>
				</label>
				<span class="label-text-alt">Balance: 20 WBNB</span>
			</label>
			<input type="number" placeholder="0.0" class="input w-full" />
		</div>
		<button class="btn btn-disabled shadow-md"> SWAP </button>
	</div>
</div>

<!-- Body -->
<style>
	/* Remove Increment Arrow In Input */

	/* Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
	}

	#container{
		background-image: url('bg.svg');
	}
</style>
