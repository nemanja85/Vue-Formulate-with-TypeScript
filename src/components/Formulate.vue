<template>
<div>
<FormulateForm v-model="formValues" @submit="handleSubmit">
<FormulateInput type="text" name="name" label="Name" validation="required" />
<FormulateInput type="email" name="email" label="Email" validation="required|email" />
<FormulateInput type="text" name="username" label="Username" validation="required" />
<FormulateInput type="password" name="password" label="Password" validation="required" />
<FormulateInput
:options="{Javascript: 'JavaScript', Vuejs: 'VueJs', TypeScript: 'TypeScript'}"
type="select" 
name="favoriteLanguage" 
label="Favorite Language"
placeholder="Select favorite language"
 />
<FormulateInput type="checkbox" name="acceptTerms" label="Accept Terms" validation="required" />
<FormulateInput type="submit" label="Sign Up" />
</FormulateForm>
<h3>Values</h3>
{{formValues}}
</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data: () => ({
        formValues: {}
    }),
    methods: {
        handleSubmit() {
            console.log(this.formValues)
        }
    }
})
</script>