import { editTemplate } from "./editTemplate.js";

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

async function submitHandler(id, e) {
    e.preventDefault();
    try {
        let formData = new FormData(e.target);
        _form.errorMessages = [];

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
            let templateResult = editTemplate(_form);
            
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

        let loginResult = await _gamesService.update(game, id);
        _router.redirect(`/details/${id}`);
    } catch (err) {
        alert(err);
    }

}

async function getView(context) {
let id = context.params.id;

let game = await _gamesService.get(id);

    _form = {
        submitHandler,
        errorMessages: [],
        game,
    
       
    }

    let templateResult = editTemplate(_form);
    _renderHandler(templateResult);
}

export default {
    getView,
    initialize
}