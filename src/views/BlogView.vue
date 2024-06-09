<template>
  <div class="container">
    <h1 class="mb-4 d-flex justify-content-between align-items-center">
      Blog Posts
      <div class="d-flex justify-content-between align-items-center">
        <RouterLink to="/add" class="btn btn-primary rounded-pill btn-lg me-3 btn-custom me-2">Add</RouterLink>
        <RouterLink to="/comments" class="btn btn-secondary rounded-pill ">Comments</RouterLink>
      </div>
    </h1>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div v-for="post in posts" :key="post.id" class="col card-coustm">
        <div class="card h-100">
          <div class="card-body">
            <h4 class="card-title">{{ post.title }}</h4>
            <hr>
            <p class="card-text">{{ post.body }}</p>
            <div class="d-flex justify-content-end">
              <RouterLink
                :to="`/edit/${post.id}`"
                class="btn btn-primary rounded-pill btn-custom pr-2  me-2"
                >Edit</RouterLink
              >
              <button class="btn btn-danger rounded-pill" @click="deletePost(post.id)">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    this.fetchPosts()
  },
  methods: {
    // Fetches posts from  API and
    async fetchPosts() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        this.posts = response.data
      } catch (error) {
        console.error(error)
      }
    },
    // Deletes a post with the specified ID.
    async deletePost(id) {
      if (!id) {
        console.error('Invalid ID provided for deleting post')
        return
      }
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        console.log(`Post with ID ${id} has been deleted.`)
        this.posts = this.posts.filter((post) => post.id !== id)
      } catch (error) {
        console.error(`Error deleting post with ID ${id}:`, error)
      }
    }
  }
}
</script>

<style scoped>
.card {
  height: 100%;
  background-color: #39393a !important;
  border: 3px solid #52057b;
  border-radius: 0px 32px;
}

.card-body {
  min-height: 120px;
  color: white;
}
</style>
