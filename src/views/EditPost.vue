<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <h1 class="card-header">Edit Post</h1>
          <div class="card-body">
            <form @submit.prevent="editPost">
              <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="title" v-model="post.title" required />
              </div>
              <div class="form-group">
                <label for="body">Body</label>
                <textarea
                  class="form-control"
                  id="body"
                  rows="5"
                  v-model="post.body"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-lg btn-custom mt-3">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import axios from 'axios'
import { ref } from 'vue'

const props = defineProps({
  id: Number
})

const post = ref({
  id: props.id,
  title: '',
  body: ''
})
//If the props.id value is undefined, the API call will not be made, and the error will be avoided.
if (props.id) {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${props.id}`)
    .then((response) => {
      post.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
}
 //Edits a post by making a PUT request to the API and updating the post object. 

const editPost = async () => {
  try {
    if (props.id) {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${props.id}`,
        post.value
      )
      if (response.status === 200) {
        alert('Post updated successfully')
        // Fetch the updated post from the API
        const updatedPost = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${props.id}`
        )
        // Update the post object with the updated data
        post.value = updatedPost.data
      } else {
        alert('Error updating post')
      }
    }
  } catch (error) {
    console.log(error)
  }
}
</script>

<style scoped>
.form-control {
  background-color: white !important;
}
</style>
