import { createTemplate } from "./createTemplate.js";

// dependences for our page
let _router = undefined;
let _renderHandler = undefined;
let _gamesService = undefined;
let _form = undefined;


function initialize(router, renderHandler, gamesService) {
    _router = router;
    _renderHandler = renderHandler;
    _gamesService = gamesService;
}

async function submitHandler(e) {
    e.preventDefault();
    try {
        let formData = new FormData(e.target);
        _form.errorMessages = [];
        //title
        let title = formData.get('title');
        if (title.trim() === '') {
            _form.errorMessages.push('Title is required');
        }
        //category
        let category = formData.get('category');
        if (category.trim() === '') {
            _form.errorMessages.push('Description is required');
        }
        //maxLevel
        let maxLevel = formData.get('maxLevel');
        if (maxLevel.trim() === '') {
            _form.errorMessages.push('Max Level is required');
        }
        //imageUrl
        let imageUrl = formData.get('imageUrl');
        if (imageUrl.trim() === '') {
            _form.errorMessages.push('Image Url is required');
        }
        //summary
        let summary = formData.get('summary');
        if (summary.trim() === '') {
            _form.errorMessages.push('Summary is required');
        }

        if (_form.errorMessages.length > 0) {
            let templateResult = createTemplate(_form);

            alert(_form.errorMessages.join('\n'));

            return _renderHandler(templateResult);
        }

        let game = {
            title,
            category,
            maxLevel,
            imageUrl,
            summary
        }

        let loginResult = await _gamesService.create(game);
        _router.redirect('/home');
    } catch (err) {
        alert(err);
    }

}

async function getView(context) {
    _form = {
        submitHandler,
        errorMessages: []
    }
    let templateResult = createTemplate(_form);
    _renderHandler(templateResult);
}

export default {
    getView,
    initialize
}