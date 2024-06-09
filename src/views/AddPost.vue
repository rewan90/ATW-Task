<template>
    <div class="wrapper">

  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card mb-3">
          <div class="card-header">
            <h1 class="card-title p-2">Add Post</h1>
          </div>
          <div class="card-body">
            <form @submit.prevent="addPost">
              <div class="form-group">
                <input
                  v-model="post.title"
                  type="text"
                  class="form-control post-title"
                  placeholder="Title"
                  required
                />
              </div>
              <div class="form-group">
                <textarea
                  v-model="post.content"
                  class="form-control post-content"
                  placeholder="Body"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary add-btn">Add</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card mt-3 " v-if="newPost">
          <h3 class="card-header justify-content-center text-center ">Titel: {{ newPost.title }}</h3>
          <div class="card-body">
            <h6 class="card-text">Content: {{ newPost.content }}</h6>
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
      post: {
        title: '',
        content: ''
      },
      newPost: null
    }
  },
  methods: {
    async addPost() {
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', this.post)
        this.newPost = response.data
        this.resetPostData()
        this.$emit('postAdded')
      } catch (error) {
        console.error(error)
      }
    },
    resetPostData() {
      this.post.title = ''
      this.post.content = ''
    }
  }
}
</script>

<style scoped>
.form-control {
  background-color: white !important;
}
.add-post-card {
  border-radius: 10px;
  padding: 20px;
}

.post-title {
  font-size: 20px;
  margin-bottom: 10px;
}

.post-content {
  font-size: 16px;
  height: 100px;
}

.add-btn {
  background-color: #52057b;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 5px;
  font-size: 16px;
}

.post-container {
  background-color: #07010aa9;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
}

</style>
