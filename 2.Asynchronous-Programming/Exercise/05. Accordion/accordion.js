function solution() {
    fetch(`http://localhost:3030/jsonstore/advanced/articles/list`)
        .then(body => body.json())
        .then(res => {
            res.forEach(e => {
                let meinSection = document.getElementById('main');
                let divAcordionElement = ce('div', null, 'accordion');
                let divHeadElement = ce('div', null, 'head');

                let spanElement = ce('span', `${e.title}`);
                let showBtn = ce('button', 'More', 'button');

                showBtn.setAttribute('id', e._id)
                showBtn.addEventListener('click', showMoreLess);

                let divExtraInfoElement = ce('div', null, 'extra');

                let pContentElement = ce('p');

                divExtraInfoElement.append(pContentElement);
                divHeadElement.append(spanElement);
                divHeadElement.append(showBtn);
                divAcordionElement.append(divHeadElement);
                divAcordionElement.append(divExtraInfoElement)
                meinSection.append(divAcordionElement);

                function showMoreLess(e) {
                    let curentElementId = e.target.getAttribute('id');
                    fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${curentElementId}`)
                        .then(body => body.json())
                        .then(res => {
                            if (showBtn.textContent === 'More') {
                                showBtn.textContent = 'Less'
                                divExtraInfoElement.style.display = 'block'
                                pContentElement.textContent = res.content



                            } else if (showBtn.textContent === 'Less') {
                                showBtn.textContent = 'More'
                                divExtraInfoElement.style.display = 'none'

                            }
                        })
                }
            })

        })

    function ce(type, content, className) {
        const result = document.createElement(type);
        result.textContent = content;
        if (className) {
            result.className = className;
        }
        return result
    }
}
solution();