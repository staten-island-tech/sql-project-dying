<script setup>
import { supabase } from '../supabase'
import { onMounted, ref, toRefs } from 'vue'
import Avatar from './Avatar.vue'

const props = defineProps(['session'])
const { session } = toRefs(props)

const loading = ref(true)
const username = ref('')
const website = ref('')
const avatar_url = ref('')
const addChar = ref('')

onMounted(() => {
  getProfile()
})

async function getProfile() {
  try {
    loading.value = true
    const { user } = session.value

    let { data, error, status } = await supabase
      .from('profiles')
      .select(`username, website, avatar_url, addChar`)
      .eq('id', user.id)
      .single()

    if (error && status !== 406) throw error

    if (data) {
      username.value = data.username
      website.value = data.website
      avatar_url.value = data.avatar_url
      addChar.value = data.addChar
    }
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

async function updateProfile() {
  try {
    loading.value = true
    const { user } = session.value

    const updates = {
      id: user.id,
      username: username.value,
      website: website.value,
      addChar: addChar.value,
      avatar_url: avatar_url.value,
      updated_at: new Date()
    }

    let { error } = await supabase.from('profiles').upsert(updates)

    if (error) throw error
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

async function signOut() {
  try {
    loading.value = true
    let { error } = await supabase.auth.signOut()
    if (error) throw error
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form class="form-widget" @submit.prevent="updateProfile">
    <Avatar v-model:path="avatar_url" @upload="updateProfile" size="10" />
    <div>
      <label for="email">Email: </label>
      <input id="email" type="text" :value="session.user.email" disabled />
    </div>
    <div>
      <label for="username">Name: </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="website">Website: </label>
      <input id="website" type="url" v-model="website" />
    </div>
    <div>
      <label for="addChar">Add Characters: </label>
      <input id="addChar" type="text" v-model="addChar" />
    </div>

    <div>
      <input
        class="button thirdary block"
        @click=""
        :value="loading ? 'Loading ...' : 'Choose Characters'"
        :disabled="loading"
      />
    </div>

    <div>
      <input
        type="submit"
        class="button primary block"
        :value="loading ? 'Loading ...' : 'Update'"
        :disabled="loading"
      />
    </div>

    <div>
      <button class="button block" @click="signOut" :disabled="loading">Sign Out</button>
    </div>
  </form>
</template>
