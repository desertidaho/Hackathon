export default class Post {
    constructor(data) {
        this._id = data._id
        this.title = data.title
        this.description = data.description
        this.image = data.image
        this.comments = data.comments
        this.postHot = data.postHot || 0
        this.postCool = data.postCool || 0
        this.commentHot = data.commentHot || 0
        this.commentCool = data.commentCool || 0
    }

    getPostsTemplate() {
        return `
        <div class="card">
            <img class="card-img-top" src="${this.image}" alt="Card image cap">
            <div class="card-body">
                <h3 class="card-title">${this.title}</h3>
                <h5 class="card-text">${this.description}</h5>
                <button class="mb-3 btn btn-lg btn-light shadow" onclick="app.controllers.postController.viewActivePost('${this._id}')">View Peeve</button><br>
                <button class="btn btn btn-danger shadow" onclick="app.controllers.postController.postHot('${this._id}')">Hot</button><div id="hot-counter"># hot: ${this.postHot}</div><br>
                <button class="btn btn btn-primary shadow" onclick="app.controllers.postController.postCool('${this._id}')">Cool</button><div id="cool-counter"># cool: ${this.postCool}</div>
                </div>
        </div>
        `
    }

    getActivePostTemplate() {
        return `
        <div class="card comment" >
            <img class="card-img-top" src="${this.image}" alt="Card image cap">
                <div class="card-body">
<<<<<<< HEAD
                    <h5 class="card-title">${this.title}</h5>
                    <p class="card-text">${this.description}</p>
                    <form class="form-inline" onsubmit="app.controllers.postController.createComment(event)">
                         <input type="text" class="form-control mb-2 mr-sm-2" id="comment-input" name="description" placeholder="Enter comment here...">
                         <button type="submit" class="btn btn-primary mb-2">Submit</button>
                    </form>
                </div>
                <div>
                <li>${this.comments}</li>
=======
                    <h1 class="card-title">${this.title}</h1>
                    <h4 class="card-text">${this.description}</h4>
                    <button class="btn btn-danger shadow" onclick="app.controllers.postController.hot('${this._id}')">Hot</button>
                    <button class="btn btn-primary shadow" onclick="app.controllers.postController.cool('${this._id}')">Cool</button>
>>>>>>> b2a376de1a39ec3bbe769fef35cd64b5129f0ba4
                </div>
        </div>
        `
    }


}