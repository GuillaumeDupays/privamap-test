<template>
    <div>
        <select v-model="$store.state.selected">
            <option 
                v-for="element in elements" 
                :key="element.id"
                :data="element"
            >
                {{ element.name }}
            </option>
        </select><br>
        {{ $store.state.selected }}
        <br><br>
        <element-details 
            :btnTest='btn.tested' 
            @changeBtn="changeBtn($event)">
        </element-details>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import ElementDetails from './ElementDetails'

export default {
    components: {
        ElementDetails
    },
     data() {
        return {
            btn: {
            tested: 'fff'
            }
        }
    },
    computed: {
        ...mapState('elements', ['elements']),
    },
    created() {
        this.$store.dispatch( 'elements/chargerElements')
    },
    methods: {
        changeBtn (tested) {
            this.btn.tested = tested;
        }
    }
}
</script>

<style>

</style>