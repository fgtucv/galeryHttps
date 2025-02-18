export const getImeges = async (keyWords, item, page) => {
    try {
        const getData = await fetch(`https://pixabay.com/api/?key=48523978-236760f943e457ffe618a45b5&q=${keyWords}&image_type=photo&safesearch=true&orientation=horizontal&page=${page}&per_page=${item}`).then((data) => {
            return data.json();
        });

        return getData;
    } catch (error) {
        return error;
    }
};