<template>
	<div class="page">
		<div class="block">
			<h3>List all</h3>
			<table class="block-table">
				<tr>
					<th>Key</th>
					<th>Value</th>
					<th>Actions</th>
				</tr>
				<tr
					class="block-table__item"
					v-for="(string, idx) in strings"
					:key="idx"
					:data-id="string._id"
				>
					<td>
						<template v-if="isEditting === string._id">
							<input type="text" v-model="editKey" />
						</template>
						<template v-else>
							{{ string.key }}
						</template>
					</td>
					<td>
						<template v-if="isEditting === string._id">
							<input type="text" v-model="editValue" />
						</template>
						<template v-else>
							{{ string.key }}
						</template>
					</td>
					<td>
						<button
							v-if="isEditting !== string._id"
							@click="isEditting = string._id"
						>
							edit
						</button>
						<button v-else @click="saveEdit">Save</button>
						<button @click="deleteString(string)">delete</button>
					</td>
				</tr>
			</table>
		</div>
		<div class="block">
			<h3>Add new</h3>
			<div class="inline-form">
				<div class="input-field">
					<input type="text" v-model="newKey" placeholder="key" />
				</div>
				<div class="input-field">
					<input type="text" v-model="newValue" placeholder="value" />
				</div>
				<button
					:disabled="!newKey || !newValue"
					class="button"
					@click="postString"
				>
					Add
				</button>
			</div>
			<div class="error" v-if="error">
				{{ error.message }}
			</div>
		</div>
	</div>
</template>

<script>
const toStringCase = (str) =>
	str &&
	str
		.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
		.map((x) => x.toLowerCase())
		.join(".");

export default {
	name: "home",
	components: {},
	data: () => ({
		strings: [],
		newKey: null,
		newValue: null,
		error: null,
		isEditting: null
	}),
	created() {
		this.getStrings();
	},
	methods: {
		getStrings() {
			this.axios.get("http://localhost:3000/words").then((response) => {
				this.strings = response.data;
			});
		},
		deleteString(value) {
			if (confirm("Are you sure you want to delete " + value.key))
				this.axios
					.delete("http://localhost:3000/word/" + value._id, {
						wordId: value._id
					})
					.then(() => {
						this.getStrings();
					})
					.catch((error) => {
						this.error = error;
					});
		},
		postString() {
			if (this.newKey && this.newValue) {
				this.axios
					.post("http://localhost:3000/words", {
						key: toStringCase(this.newKey),
						value: this.newValue
					})
					.then(() => {
						this.newKey = null;
						this.newValue = null;
						this.getStrings();
					})
					.catch((error) => {
						this.error = error;
					});
			}
		}
	}
};
</script>
