<template>
    <div class="container">
        <h2>Contact</h2>
        <form action="" method="GET">
            <div class="mb-3">
                <label for="name" class="form-lable">Name</label>
                <input type="text" name="name" class="form-control" id="name" placeholder="Insert name">
            </div>
            <div class="mb-3">
                <label for="email" class="form-lable">Email</label>
                <input type="mail" name="email" class="form-control" id="email" placeholder="Insert email">
            </div>
            <div class="mb-3">
                <label for="message" class="form-lable">Message</label>
                <input type="text" name="message" class="form-control" id="message" placeholder="Insert message">
            </div>
            <button class="btn btn-primary">Send</button>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>