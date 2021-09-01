import { html } from '../../node_modules/lit-html/lit-html.js'

export let bonusTemplate = () => html`

<!-- Bonus ( for Guests and Users )
<div class="details-comments">
    <h2>Comments:</h2>
    <ul>
        <!-- list all comments for current game (If any) -->
        <li class="comment">
            <p>Content: I rate this one quite highly.</p>
        </li>
        <li class="comment">
            <p>Content: The best game.</p>
        </li>
    </ul>
    <!-- Display paragraph: If there are no games in the database -->
    <p class="no-comment">No comments.</p>
</div> -->`







// <!-- Bonus -->
// <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
// <article class="create-comment">
//     <label>Add new comment:</label>
//     <form class="form">
//         <textarea name="comment" placeholder="Comment......"></textarea>
//         <input class="btn submit" type="submit" value="Add Comment">
//     </form>
// </article>;