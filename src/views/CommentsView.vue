<template>
          <div class="wrapper">

    <div class="comments-container">
        <div class="comments-header">
            <h2 class="mb-4">Comments</h2>
        </div>
        <div class="comments-list">
            <div v-for="comment in comments" :key="comment.id" class="card comment-card">
                <div class="card-body">
                    <h4 class="card-title">User Name:{{ comment.name }}</h4>
                    <hr>
                    <p class="card-text"> Comment :{{ comment.body }}</p>
                    <hr>
                    <p class="card-text"> Email: {{ comment.email }}</p>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import axios from 'axios'

export default {
    // Returns an object containing the initial data for the component.
    data() {
        return {
            comments: []
        }
    },
     // Mounts the component and fetches comments.
     // This function is called when the component is mounted to the DOM.
     // It calls the `fetchComments` method to retrieve comments from the server.
    mounted() {
        this.fetchComments()
    },
    methods: {
        //Fetches comments from the API endpoint.
        fetchComments() {
            axios
                .get('https://jsonplaceholder.typicode.com/comments')
                .then((response) => {
                    this.comments = response.data
                })
                .catch((error) => {
                    console.error(error)
                })
        }
    }
}
</script>

<style scoped>
.comments-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
}

.comments-header {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
}

.comments-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
    width: 100%;
}

.comment-card {
    border: none;
    border-radius: 0.25rem;
    background-color: #f8f9fa;
}

.comment-card .card-body {
    padding: 1rem;
}

.comment-card .card-title {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
}

.comment-card .card-text {
    font-size: 1rem;
    margin-bottom: 0.25rem;
}

@media (max-width: 768px) {
    .comments-list {
        grid-template-columns: 1fr;
    }
}
</style>

